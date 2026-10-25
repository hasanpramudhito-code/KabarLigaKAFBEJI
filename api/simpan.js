// Dashboard redaksi (/admin.html) menyimpan artikel lewat sini: commit artikel.js (+ gambar) ke GitHub, Vercel deploy otomatis.
// Env Vercel wajib: ADMIN_PASSWORD, GITHUB_TOKEN (fine-grained token, hanya repo ini, izin Contents: Read and write).
// ponytail: satu password bersama, tanpa batas percobaan login. Upgrade bila redaksi banyak: akun per penulis / rate limit.
const vm = require('vm');
const crypto = require('crypto');

const REPO = 'hasanpramudhito-code/KabarLigaKAFBEJI';
const KATEGORI = ['Berita', 'Analisis', 'Editorial', 'Cerita', 'Sharing']; // sama dengan KATEGORI di index.html

const hash = s => crypto.createHash('sha256').update(String(s ?? '')).digest();
const cocok = p => crypto.timingSafeEqual(hash(p), hash(process.env.ADMIN_PASSWORD));
const teks = s => String(s ?? '').replace(/<[^>]*>/g, '').trim();
const html = s => String(s ?? '').replace(/<(?!\/?(b|em)>)[^>]*>/gi, '').trim(); // isi hanya boleh <b>, <em>

async function gh(path, method = 'GET', body) {
  const r = await fetch(`https://api.github.com/repos/${REPO}/contents/${encodeURIComponent(path)}`, {
    method,
    headers: { Authorization: `Bearer ${process.env.GITHUB_TOKEN}`, Accept: 'application/vnd.github+json', 'User-Agent': 'kabar-liga' },
    body: body && JSON.stringify({ branch: 'main', ...body }),
  });
  if (!r.ok) throw new Error(`GitHub ${r.status}: ${(await r.text()).slice(0, 200)}`);
  return r.json();
}

function rapikan(x) {
  const a = {
    id: teks(x.id), kategori: teks(x.kategori), judul: teks(x.judul), ringkas: teks(x.ringkas),
    penulis: teks(x.penulis) || 'Redaksi', tanggal: teks(x.tanggal), gambar: teks(x.gambar),
    tag: [].concat(x.tag || []).map(teks).filter(Boolean), isi: [].concat(x.isi || []).map(html).filter(Boolean),
  };
  const k = [].concat(x.kutipan || []).map(teks);
  if (k[0]) a.kutipan = [k[0], k[1] || ''];
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(a.id)) throw 'id hanya boleh huruf kecil, angka, dan tanda -';
  if (!KATEGORI.includes(a.kategori)) throw 'kategori salah';
  if (!/^\d{4}-\d\d-\d\d$/.test(a.tanggal)) throw 'tanggal salah';
  if (!a.judul || !a.ringkas || !a.isi.length) throw 'judul, ringkasan, dan isi wajib diisi';
  return a;
}

// Sisipkan artikel di bawah "const ARTIKEL = [", lalu pastikan file tetap bisa dijalankan.
const baca = src => { const ctx = {}; vm.runInNewContext(src + ';this.A = ARTIKEL;', ctx); return ctx.A; };

function sisipkan(src, a) {
  if (baca(src).some(x => x.id === a.id)) throw `id "${a.id}" sudah dipakai, ganti id`;
  const m = src.match(/const ARTIKEL = \[\r?\n/);
  if (!m) throw new Error('Penanda "const ARTIKEL = [" tidak ada di artikel.js');
  const baru = src.replace(m[0], () => m[0] + '  ' + JSON.stringify(a, null, 2).replace(/\n/g, '\n  ') + ',\n');
  if (baca(baru)[0]?.id !== a.id) throw new Error('Hasil artikel.js tidak valid');
  return baru;
}

module.exports = async (req, res) => {
  try {
    if (req.method !== 'POST') return res.status(405).json({ error: 'POST saja' });
    if (!process.env.GITHUB_TOKEN || !process.env.ADMIN_PASSWORD) throw new Error('Env ADMIN_PASSWORD / GITHUB_TOKEN belum diisi di Vercel');
    const b = req.body || {};
    if (!cocok(b.password)) return res.status(401).json({ error: 'Password salah' });

    const root = await gh('');
    const gambarRepo = root.filter(f => /\.(jpe?g|png|webp)$/i.test(f.name));
    if (b.aksi === 'daftar') return res.json({ gambar: gambarRepo.map(f => f.name) });

    const a = rapikan(b.artikel || {});
    let foto;
    if (b.unggah) {
      foto = Buffer.from(String(b.unggah), 'base64');
      if (foto[0] !== 0xff || foto[1] !== 0xd8) throw 'gambar unggahan harus JPG';
      if (foto.length > 300 * 1024) throw 'gambar lebih dari 300 KB';
      a.gambar = `${a.id}.jpg`;
    } else if (!gambarRepo.some(f => f.name === a.gambar)) throw `gambar "${a.gambar}" tidak ada di repo`;

    const file = await gh('artikel.js');
    const baru = sisipkan(Buffer.from(file.content, 'base64').toString('utf8'), a); // validasi dulu sebelum commit apa pun
    if (foto) await gh(a.gambar, 'PUT', { message: `Gambar: ${a.judul}`, content: foto.toString('base64'),
      sha: gambarRepo.find(f => f.name === a.gambar)?.sha }); // timpa sisa unggahan gagal dengan id sama
    await gh('artikel.js', 'PUT', { message: `Artikel: ${a.judul}`, content: Buffer.from(baru).toString('base64'), sha: file.sha });
    res.json({ ok: true, id: a.id });
  } catch (e) {
    res.status(typeof e === 'string' ? 400 : 500).json({ error: String(e.message || e) });
  }
};

// Self-check: node -e "require('./api/simpan.js').cek()"
module.exports.cek = () => {
  const assert = require('assert');
  const src = require('fs').readFileSync(require('path').join(__dirname, '..', 'artikel.js'), 'utf8');
  const a = rapikan({ id: 'tes-1', kategori: 'Editorial', judul: '<i>Judul</i> "kutip"', ringkas: 'r', tanggal: '2026-11-08',
    gambar: 'x.jpg', tag: ['A'], isi: ['<b>Ust Wakhid</b> <script>x</script>$& $1'], kutipan: ['k'] });
  assert.deepStrictEqual([a.judul, a.isi[0], a.kutipan], ['Judul "kutip"', '<b>Ust Wakhid</b> x$& $1', ['k', '']]);
  assert.deepStrictEqual(JSON.parse(JSON.stringify(baca(sisipkan(src, a))[0])), a);
  assert.throws(() => sisipkan(src, { ...a, id: baca(src)[0].id }));
  assert.throws(() => rapikan({ ...a, id: 'Ada Spasi' }));
  console.log('cek OK');
};
