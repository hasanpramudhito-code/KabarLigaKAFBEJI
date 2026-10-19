// Ambil klasemen & top skor terbaru dari skorly.online, simpan ke skorly-data.js (dibaca situs.html).
// Jalankan: node update-skorly.js   (Node 18+, tanpa install apa pun)
const fs = require('fs');
const path = require('path');

const URL = 'https://skorly.online/kaf-beji/export';
const OUT = path.join(__dirname, 'skorly-data.js');

// Satu baris CSV -> array kolom (mendukung "teks, berkoma")
const kolom = baris => [...baris.matchAll(/("([^"]*)"|[^,]*)(,|$)/g)].slice(0, -1).map(m => m[2] ?? m[1]);

function parse(csv) {
  const bagian = {};
  let nama = null;
  for (const baris of csv.replace(/^﻿/, '').split(/\r?\n/)) {
    const judul = baris.match(/^=== (.+) ===$/);
    if (judul) { nama = judul[1]; bagian[nama] = []; continue; }
    if (nama && baris.trim()) bagian[nama].push(kolom(baris));
  }
  const ambil = kunci => (bagian[Object.keys(bagian).find(k => k.includes(kunci))] || []).slice(1); // buang header
  const klasemen = ambil('KLASEMEN').map(([, tim, main, m, s, k, gm, gk, sg, poin]) =>
    ({ tim, main: +main, m: +m, s: +s, k: +k, gm: +gm, gk: +gk, sg: +sg, poin: +poin }));
  const topSkor = ambil('TOP SKOR').filter(r => !/^own/i.test(r[1])).map(([, nama, tim, gol]) => ({ nama, tim, gol: +gol }));
  if (klasemen.length < 2 || klasemen.some(r => Number.isNaN(r.poin))) throw new Error('Format CSV skorly berubah, klasemen tidak terbaca.');
  return { klasemen, topSkor };
}

async function main() {
  const res = await fetch(URL, { headers: { 'User-Agent': 'Mozilla/5.0 KabarLiga' } });
  if (!res.ok) throw new Error(`skorly membalas HTTP ${res.status}`);
  const data = { ...parse(await res.text()), diperbarui: new Date().toISOString(), sumber: 'https://skorly.online/kaf-beji' };
  const lama = fs.existsSync(OUT) ? fs.readFileSync(OUT, 'utf8') : '';
  const isi = d => JSON.stringify([d.klasemen, d.topSkor]);
  try {
    if (isi(JSON.parse(lama.slice(lama.indexOf('{'), lama.lastIndexOf('}') + 1))) === isi(data)) return console.log('Tidak ada perubahan dari skorly.');
  } catch {} // file lama rusak/tidak ada: tulis ulang
  fs.writeFileSync(OUT, `// Dibuat otomatis oleh update-skorly.js. Jangan diedit manual.\nwindow.SKORLY =${JSON.stringify(data, null, 2)};\n`);
  console.log(`OK: ${data.klasemen.length} tim, ${data.topSkor.length} pencetak gol -> ${OUT}`);
}

if (require.main === module) main().catch(e => { console.error('GAGAL:', e.message); process.exit(1); }); // file lama tetap utuh bila gagal

// Self-check: node -e "require('./update-skorly.js').cek()"
module.exports.cek = () => {
  const r = parse('﻿x\n=== KLASEMEN ===\nh\n1,A FC,6,3,1,2,8,8,0,10\n2,B,6,2,3,1,5,6,-1,9\n\n=== DAFTAR TOP SKOR ===\nh\n1,Ust Wakhid,A FC,8\n2,Own goal,B,2\n\n=== LAIN ===\n1,"x, y",z');
  require('assert').deepStrictEqual(r.klasemen[1], { tim: 'B', main: 6, m: 2, s: 3, k: 1, gm: 5, gk: 6, sg: -1, poin: 9 });
  require('assert').deepStrictEqual(r.topSkor, [{ nama: 'Ust Wakhid', tim: 'A FC', gol: 8 }]);
  console.log('cek OK');
};
