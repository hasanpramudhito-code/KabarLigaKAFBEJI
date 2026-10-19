// Halaman share artikel: /a/<id> berisi tag Open Graph (judul, ringkasan, gambar) untuk preview WhatsApp/Facebook,
// lalu mengarahkan pembaca lewat JavaScript (bukan meta refresh, karena WhatsApp ikut redirect itu dan kehilangan gambar).
// Gambar preview sebaiknya JPG < 300 KB; lebih besar sering diabaikan WhatsApp.
const vm = require('vm');

const esc = s => String(s).replace(/[&<>"']/g, c => `&#${c.charCodeAt(0)};`);
const teks = s => String(s).replace(/<[^>]+>/g, '');

module.exports = async (req, res) => {
  const host = `https://${req.headers.host}`;
  const id = String(req.query.id || '');
  let a;
  try {
    const ctx = {};
    vm.runInNewContext(await (await fetch(`${host}/artikel.js`)).text() + ';this.A = ARTIKEL;', ctx);
    a = ctx.A.find(x => x.id === id);
  } catch {}
  // Halaman non-artikel yang bisa dibagikan dengan preview sendiri: /a/sponsor
  if (id === 'sponsor') a = { judul: 'Garmen Seragam - Sponsor Resmi Liga Futsal KAF Beji',
    ringkas: 'Konveksi seragam kerja, rompi, dan kemeja custom. Jahitan rapi, tepat waktu, harga terjangkau.',
    gambar: 'og-sponsor.jpg', lebar: 1200, tinggi: 630, tujuan: '/#/sponsor' };
  const tujuan = a ? a.tujuan || `/#/baca/${encodeURIComponent(id)}` : '/';
  const judul = a ? teks(a.judul) : 'Kabar Liga';
  const ringkas = a ? teks(a.ringkas) : 'Berita, analisis, dan cerita Liga Futsal KAF Beji.';
  const gambar = `${host}/${encodeURI(a ? a.gambar : 'Logo liga.jpeg')}`;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=300');
  res.end(`<!DOCTYPE html><html lang="id"><head><meta charset="UTF-8">
<title>${esc(judul)} | Kabar Liga</title>
<meta name="description" content="${esc(ringkas)}">
<meta property="og:type" content="article">
<meta property="og:site_name" content="Kabar Liga">
<meta property="og:title" content="${esc(judul)}">
<meta property="og:description" content="${esc(ringkas)}">
<meta property="og:image" content="${esc(gambar)}">
<meta property="og:image:secure_url" content="${esc(gambar)}">${a && a.lebar ? `
<meta property="og:image:width" content="${a.lebar}">
<meta property="og:image:height" content="${a.tinggi}">` : ""}
<meta property="og:url" content="${esc(host + '/a/' + encodeURIComponent(id))}">
<meta name="twitter:card" content="summary_large_image">
</head><body><script>location.replace(${JSON.stringify(tujuan)})</script><a href="${esc(tujuan)}">${esc(judul)}</a></body></html>`);
};
