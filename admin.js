// Logika dashboard redaksi (admin.html): rapikan isian form, sisipkan artikel ke artikel.js.
// Self-check: node -e "require('./admin.js').cek()"
const KATEGORI = ['Berita', 'Analisis', 'Editorial', 'Cerita', 'Sharing']; // sama dengan KATEGORI di index.html

const teks = s => String(s ?? '').replace(/<[^>]*>/g, '').trim();
const html = s => String(s ?? '').replace(/<(?!\/?(b|em)>)[^>]*>/gi, '').trim(); // isi hanya boleh <b>, <em>
const baca = src => new Function(src + ';return ARTIKEL')();

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
function sisipkan(src, a) {
  if (baca(src).some(x => x.id === a.id)) throw `id "${a.id}" sudah dipakai, ganti id`;
  const m = src.match(/const ARTIKEL = \[\r?\n/);
  if (!m) throw 'Penanda "const ARTIKEL = [" tidak ada di artikel.js';
  const baru = src.replace(m[0], () => m[0] + '  ' + JSON.stringify(a, null, 2).replace(/\n/g, '\n  ') + ',\n');
  if (baca(baru)[0]?.id !== a.id) throw 'Hasil artikel.js tidak valid';
  return baru;
}

if (typeof module !== 'undefined') module.exports.cek = () => {
  const assert = require('assert');
  const src = require('fs').readFileSync(require('path').join(__dirname, 'artikel.js'), 'utf8');
  const a = rapikan({ id: 'tes-1', kategori: 'Editorial', judul: '<i>Judul</i> "kutip"', ringkas: 'r', tanggal: '2026-11-08',
    gambar: 'x.jpg', tag: ['A'], isi: ['<b>Ust Wakhid</b> <script>x</script>$& $1'], kutipan: ['k'] });
  assert.deepStrictEqual([a.judul, a.isi[0], a.kutipan], ['Judul "kutip"', '<b>Ust Wakhid</b> x$& $1', ['k', '']]);
  assert.deepStrictEqual(baca(sisipkan(src, a))[0], a);
  assert.throws(() => sisipkan(src, { ...a, id: baca(src)[0].id }));
  assert.throws(() => rapikan({ ...a, id: 'Ada Spasi' }));
  console.log('cek OK');
};
