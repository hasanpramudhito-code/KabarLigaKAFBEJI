# Kabar Liga — panduan untuk agent

Situs media (gaya panditfootball.com) untuk **Liga Futsal KAF Beji**. Bahasa konten: Indonesia.

- Live: https://kabarligakafbeji.vercel.app/
- Repo: https://github.com/hasanpramudhito-code/KabarLigaKAFBEJI (branch `main`)
- Deploy: Vercel otomatis deploy setiap push ke `main` (~1 menit). Tidak ada build step.
- Situs statis tanpa framework: `index.html` (tampilan + router hash `#/...`), `artikel.js` (semua tulisan).

## Menambah artikel / editorial

Semua tulisan ada di **`artikel.js`** dalam array `ARTIKEL`. Editorial = artikel biasa dengan `"kategori": "Editorial"`. Tidak ada file lain yang perlu diubah.

1. Tambahkan objek baru **tepat di bawah** `const ARTIKEL = [`:

```js
  {
    "id": "md4-andalusia-vs-alquds",
    "kategori": "Berita",
    "judul": "Judul Artikel",
    "ringkas": "1-2 kalimat. Tampil di daftar, slider, dan preview WhatsApp.",
    "penulis": "Redaksi",
    "tanggal": "2026-10-25",
    "gambar": "Andalusia.jpeg",
    "tag": ["Andalusia", "Al Quds", "Matchday 4"],
    "isi": [
      "Paragraf pertama. Nama pemain ditebalkan: <b>Ust Wakhid</b>.",
      "Paragraf kedua. Boleh <em>miring</em>."
    ],
    "kutipan": ["Isi kutipan.", "Nama, Jabatan"]
  },
```

2. Validasi (wajib, karena satu koma salah membuat seluruh situs kosong):

```sh
node -e "eval(require('fs').readFileSync('artikel.js','utf8')+';global.A=ARTIKEL');const K=['Berita','Analisis','Editorial','Cerita','Sharing'],fs=require('fs'),ids=new Set();for(const a of A){if(ids.has(a.id))throw 'id ganda: '+a.id;ids.add(a.id);if(!K.includes(a.kategori))throw 'kategori salah: '+a.id;if(!/^\d{4}-\d\d-\d\d$/.test(a.tanggal))throw 'tanggal salah: '+a.id;if(!fs.existsSync(a.gambar))throw 'gambar tidak ada: '+a.gambar}console.log('OK',A.length,'artikel')"
```

3. Commit dan push (situs otomatis terupdate):

```sh
git pull --rebase origin main
git add -A && git commit -m "Artikel: <judul singkat>" && git push origin main
```

4. Cek live: `https://kabarligakafbeji.vercel.app/#/baca/<id>`.

### Aturan field

| Field | Aturan |
|---|---|
| `id` | Unik, huruf kecil, angka, tanda `-`. Tanpa spasi. Jadi alamat artikel dan link share. Jangan ubah id artikel yang sudah terbit (link lama rusak). |
| `kategori` | Persis salah satu: `Berita`, `Analisis`, `Editorial`, `Cerita`, `Sharing`. Daftar ada di `KATEGORI` di `index.html`. |
| `tanggal` | `YYYY-MM-DD`. Urutan tampil (slider, terbaru) mengikuti tanggal, bukan posisi di file. Pakai tanggal pertandingan untuk berita hasil laga. |
| `gambar` | Nama file di root repo, persis (spasi dan huruf besar berpengaruh). Juga dipakai sebagai thumbnail WhatsApp, jadi **JPG di bawah 300 KB**. |
| `tag` | Nama tim, `Matchday N`, topik. Dipakai untuk halaman tag dan "Baca Juga". |
| `isi` | Array paragraf. HTML yang boleh: `<b>`, `<em>`. Tanda kutip ganda di dalam teks ditulis `\"`. |
| `kutipan` | Opsional, `[teks, sumber]`. Tampil setelah paragraf kedua. Hapus barisnya jika tidak ada. |

### Kategori: kapan dipakai

- **Berita**: laporan hasil pertandingan, faktual. Satu artikel rekap per matchday, plus artikel tambahan untuk laga/tim yang menonjol.
- **Analisis**: membedah taktik, statistik, performa pemain (mis. top skor, pola gol).
- **Editorial**: opini/sikap redaksi, nada lebih bebas dan reflektif, boleh berhumor ("M di Mataram Islam itu Menang").
- **Cerita**: kisah di balik laga (krisis pemain, momen lucu, human interest).
- **Sharing**: tulisan kiriman pembaca/pemain/ofisial. Cantumkan nama penulis aslinya di `penulis`.

### Gaya penulisan

- Bahasa Indonesia santai tapi rapi, seperti contoh di `artikel.js`. Paragraf pendek (2-4 kalimat).
- Judul menarik, bukan sekadar skor. Contoh: "Enam Gol dalam Sehari: Ust Wakhid dan Kebangkitan Ar Rayyah".
- Nama tim konsisten: Mataram Islam, Andalusia, PPF Hamas, Al Quds, Al Madinah, Ar Rayyah.
- Nama pemain ikuti skorly (mis. "Ust Wakhid", "Ust Aldo"), kecuali user memberi nama lengkap.
- **Jangan mengarang fakta** (skor, pencetak gol, menit, kutipan). Ambil dari skorly atau dari user. Kutipan hanya jika user memberikannya.

## Sumber data pertandingan: skorly

- Halaman liga: https://skorly.online/kaf-beji
- CSV lengkap (klasemen, top skor, semua laga + pencetak gol): https://skorly.online/kaf-beji/export
- Detail per laga (menit gol): `https://skorly.online/matches/<nomor>`; nomor laga ada di link pada halaman liga.

Untuk menulis berita matchday: ambil CSV export, lihat laga pada tanggal itu, tulis artikel dari skor dan pencetak golnya. Hitung klasemen dari CSV, jangan menebak.

## Gambar

- Simpan di root repo. Gambar artikel ideal: foto pertandingan, JPG, lebar ~1200 px, **< 300 KB** (agar thumbnail WhatsApp muncul).
- Kecilkan gambar besar di Windows dengan PowerShell `System.Drawing` (encoder JPEG quality ~80), lalu cek ukurannya.
- Logo tim yang tersedia: `Al Madinah.jpeg`, `Al Quds.jpeg`, `Andalusia.jpeg`, `ArRayah.jpeg`, `Mataram Islam.jpeg`, `PPF Hamas.jpeg`, `Logo liga.jpeg`, `Squad Mataram Islam.jpeg`.

## Bagian lain situs (jangan diubah tanpa diminta)

- **Klasemen & top skor**: `skorly-data.js`, dibuat otomatis oleh `update-skorly.js`. Jangan edit manual. GitHub Actions (`.github/workflows/update-klasemen.yml`) menjalankannya tiap Minggu 17.00/19.00/21.00 WIB. Update manual: `node update-skorly.js`, lalu commit dan push.
- **Sponsor** (Garmen Seragam): objek `SPONSOR` dan banner `.sp-top` di `index.html`; gambar `sponsor-*.png`, `og-sponsor.jpg`.
- **Link share dengan thumbnail**: `api/a.js` (Vercel function) + `vercel.json` (rewrite `/a/:id`). Link share artikel = `https://kabarligakafbeji.vercel.app/a/<id>`, sponsor = `/a/sponsor`. Artikel baru otomatis didukung, tidak perlu diubah.
- **Dashboard redaksi**: `admin.html` + `api/simpan.js` (commit artikel.js lewat GitHub API). Env Vercel: `ADMIN_PASSWORD`, `GITHUB_TOKEN`. Self-check: `node -e "require('./api/simpan.js').cek()"`.
- `_arsip/` berisi koran lama, tidak ikut repo.

## Setelah selesai, laporkan ke user

Judul artikel, link baca (`/#/baca/<id>`), dan link share WhatsApp (`/a/<id>`).
