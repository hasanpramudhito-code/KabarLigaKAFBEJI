// Semua tulisan Kabar Liga. Tulisan baru: tambahkan objek di ATAS daftar (urutan bebas, diurutkan per tanggal).
// kategori: Berita | Analisis | Editorial | Cerita | Sharing. isi = array paragraf (boleh <b>, <em>). kutipan opsional: [teks, sumber].
const ARTIKEL = [
  {
    "id": "panitia-benahi-sistem-wasit",
    "kategori": "Berita",
    "judul": "Wasit Tetap, Dua Asisten, dan Hak Challenge: Panitia Benahi Sistem Kewasitan",
    "ringkas": "Panitia Liga Futsal KAF Beji membentuk tim wasit tetap, menambah asisten wasit, dan memberi tiap tim satu kali challenge per pertandingan.",
    "penulis": "Redaksi",
    "tanggal": "2026-10-21",
    "gambar": "Logo liga.jpeg",
    "tag": [
      "Wasit",
      "Panitia",
      "Liga Futsal KAF Beji"
    ],
    "isi": [
      "Panitia Liga Futsal KAF Beji berbenah. Ketua liga, <b>Handala</b>, menyampaikan bahwa berdasarkan evaluasi panitia, liga berikhtiar membenahi sistem kewasitan.",
      "Ada tiga langkah yang diambil. Pertama, membentuk <b>tim wasit tetap</b>. Kedua, menambah satu asisten wasit, sehingga setiap laga kini dipimpin dengan <b>dua asisten wasit</b>.",
      "Ketiga, dan yang paling baru: setiap tim mendapat <b>satu kali challenge</b> per pertandingan untuk meminta wasit meninjau ulang keputusannya. Hak ini hanya bisa dipakai untuk keputusan penting, seperti pelanggaran di kotak penalti dan sah tidaknya gol.",
      "Di sisi lain, ketua federasi <b>Nurul Iman</b> meminta pemain dan peserta liga tidak terlalu membebani wasit dengan tuntutan harus selalu benar. Ia mengajak semua pihak kembali mengingat tujuan awal liga ini: mempererat ukhuwah, bukan malah saling bermusuhan.",
      "Senada, <b>Dede Jalaludin</b>, sesepuh lapangan sintetis tempat liga digelar, meminta semua pihak lebih lapang dada. Wasit profesional pun banyak salahnya, dan pemain tetap mengikuti keputusan wasit."
    ],
    "kutipan": [
      "Semuanya harus lebih lapang dada saja. Kalau ada kesalahan wasit ya dimaafkan saja, toh wasit pro juga banyak kesalahannya. Pemain enggak bisa ngapain, ikuti saja keputusan wasit.",
      "Dede Jalaludin, sesepuh lapangan"
    ]
  },
  {
    "id": "md3-rekap-klasemen-terbalik",
    "kategori": "Berita",
    "judul": "Matchday 3: Klasemen Jungkir Balik, Andalusia Kini di Puncak",
    "ringkas": "Enam laga, enam pemenang. Andalusia memimpin dengan 10 poin, Al Madinah melesat ke posisi dua, dan selisih tim teratas dengan terbawah hanya tiga poin.",
    "penulis": "Redaksi",
    "tanggal": "2026-10-11",
    "gambar": "Logo liga.jpeg",
    "tag": ["Matchday 3", "Klasemen", "Andalusia", "Al Madinah", "Ar Rayyah"],
    "isi": [
      "Minggu, 11 Oktober 2026, menjadi hari paling liar sejauh ini di Liga Futsal KAF Beji. Enam pertandingan digelar dan tak satu pun berakhir imbang. Hasilnya, peta klasemen berubah total.",
      "Laga pembuka mempertemukan <b>PPF Hamas</b> dengan <b>Al Quds</b>. Al Quds langsung menggebrak lewat gol <b>Ust Fauzan</b> di menit pertama. <b>Ust Aldo</b> sempat menyamakan kedudukan di menit ketiga, tapi semenit kemudian <b>Andri</b> memastikan kemenangan 2-1 untuk Al Quds.",
      "<b>Al Madinah</b> lalu mengejutkan <b>Mataram Islam</b>. Gol cepat <b>Ibe</b> di menit pertama cukup untuk mengamankan kemenangan 1-0. Al Madinah kembali menang 1-0 di laga keduanya, kali ini atas Al Quds lewat gol <b>Erwinsyah</b> di menit keenam. Dua laga, dua kemenangan, dua <em>clean sheet</em>.",
      "Panggung terbesar milik <b>Ar Rayyah</b>. Tim yang di awal musim krisis pemain itu menang dua kali dengan skor identik 4-1. <b>Andalusia</b> sempat unggul lewat <b>Firman</b>, sebelum <b>Ust Wakhid</b> mencetak empat gol. Di laga berikutnya Ar Rayyah menghajar PPF Hamas: gol bunuh diri membuka keunggulan, Ust Wakhid menambah dua, <b>Suleiman</b> memperkecil untuk PPF Hamas, dan <b>Ma'ruf</b> menutup pesta.",
      "Laga penutup jadi penentu puncak. Andalusia bangkit dari kekalahan telak dan menekuk Mataram Islam 1-0 berkat gol <b>Ardi</b> di menit ke-13. Kekalahan kedua dalam sehari membuat Mataram Islam terlempar dari puncak.",
      "Klasemen kini: <b>Andalusia 10</b>, <b>Al Madinah 9</b>, <b>Mataram Islam 8</b>, <b>Al Quds 8</b>, <b>Ar Rayyah 7</b>, <b>PPF Hamas 7</b>. Hanya tiga poin memisahkan posisi pertama dan terakhir. Matchday 4 digelar Minggu, 25 Oktober 2026."
    ]
  },
  {
    "id": "wakhid-enam-gol-sehari",
    "kategori": "Analisis",
    "judul": "Enam Gol dalam Sehari: Ust Wakhid dan Kebangkitan Ar Rayyah",
    "ringkas": "Quattrick ke gawang Andalusia dan brace ke gawang PPF Hamas membawa Ust Wakhid ke puncak top skor dengan 8 gol.",
    "penulis": "Redaksi",
    "tanggal": "2026-10-11",
    "gambar": "ArRayah.jpeg",
    "tag": ["Ar Rayyah", "Top Skor", "Matchday 3"],
    "isi": [
      "Di awal musim, Ar Rayyah adalah cerita tentang kekurangan: pemain yang absen, kiper pinjaman, dan kekalahan demi kekalahan. Pada 11 Oktober, cerita itu berganti judul.",
      "<b>Ust Wakhid</b> mencetak empat gol ke gawang Andalusia, lalu dua lagi ke gawang PPF Hamas. Enam gol dalam satu hari membuatnya memimpin daftar top skor dengan <b>8 gol</b>, melewati <b>Dede</b> dari Mataram Islam (7 gol) dan <b>Ust Aldo</b> dari PPF Hamas (6 gol).",
      "Dua kemenangan 4-1 juga mengubah wajah Ar Rayyah di klasemen. Dengan 14 gol, mereka kini menjadi tim paling produktif di liga, meski masih di posisi lima dengan 7 poin.",
      "Pertanyaannya kini sederhana: bisakah lini belakang Ar Rayyah menyamai ketajaman lini depannya? Jawabannya akan terlihat di Matchday 4, saat mereka menghadapi Mataram Islam dan Al Quds."
    ]
  },
  {
    "id": "al-madinah-dua-clean-sheet",
    "kategori": "Berita",
    "judul": "Dua Laga, Dua Clean Sheet: Al Madinah Akhirnya Menang",
    "ringkas": "Gol Ibe dan Erwinsyah membawa Al Madinah meraih dua kemenangan pertama musim ini sekaligus naik ke posisi dua.",
    "penulis": "Redaksi",
    "tanggal": "2026-10-11",
    "gambar": "Al Madinah.jpeg",
    "tag": ["Al Madinah", "Mataram Islam", "Al Quds", "Matchday 3"],
    "isi": [
      "Setelah empat laga tanpa kemenangan, Al Madinah akhirnya merasakan tiga poin. Bahkan dua kali dalam satu hari.",
      "Melawan pemuncak klasemen, <b>Mataram Islam</b>, Al Madinah mencetak gol di menit pertama lewat <b>Ibe</b>. Setelah itu mereka bertahan rapat hingga peluit akhir. Skor 1-0.",
      "Resep yang sama diulang saat menghadapi <b>Al Quds</b>. <b>Erwinsyah</b> mencetak gol di menit keenam, dan gawang Al Madinah kembali tak kebobolan.",
      "Dua kemenangan itu mengangkat Al Madinah dari papan bawah ke posisi dua dengan 9 poin, hanya satu poin di belakang Andalusia. Tim yang selama ini identik dengan kata \"bersabar\" kini justru jadi penantang gelar."
    ]
  },
  {
    "id": "mataram-gagal-kabur",
    "kategori": "Editorial",
    "judul": "\"I di Mataram Islam Itu Imbang\": Ketika Dua Gol Keunggulan Tak Cukup",
    "ringkas": "Dede Jalaludin kembali mencetak dua gol, tapi Mataram Islam lengah dan Al Quds menyamakan kedudukan.",
    "penulis": "Redaksi",
    "tanggal": "2026-09-20",
    "gambar": "Squad Mataram Islam.jpeg",
    "tag": [
      "Mataram Islam",
      "Al Quds",
      "Matchday 2"
    ],
    "isi": [
      "Mataram Islam melanjutkan kampanye menuju puncak dengan menghadapi Al Quds. Kali ini Al Quds sudah diperkuat <b>Fiza Wira</b>, Predator Ruang Penalti, dan pemain baru mereka, <b>Desrizal Syarif</b>.",
      "<b>Dede Jalaludin</b> lagi dan lagi membawa Mataram Islam unggul. Dua gol berhasil disarangkan Dede untuk memimpin pertandingan.",
      "Unggul dua gol membuat Mataram Islam lengah, hingga lumbung padinya dibakar VOC. Al Quds mampu menyamakan kedudukan melalui <b>Fauzan Askarul Haq</b> dan <b>AndriNov</b>.",
      "Mataram Islam tertahan. Puncak belum aman. Dan sayup-sayup terdengar dari pinggir jalan: <em>\"I di Mataram Islam itu artinya Imbang.\"</em>"
    ]
  },
  {
    "id": "ppf-hantam-andalusia",
    "kategori": "Berita",
    "judul": "Gagal Kuasai Puncak, Andalusia Dihantam PPF Hamas",
    "ringkas": "Brace Aldo Indarmawan dan gol Salman Abu Suhnun memupus ambisi Andalusia merebut puncak.",
    "penulis": "Redaksi",
    "tanggal": "2026-09-20",
    "gambar": "Andalusia.jpeg",
    "tag": [
      "Andalusia",
      "PPF Hamas",
      "Matchday 2"
    ],
    "isi": [
      "Laga penutup Matchday 2 menyajikan duel krusial. Andalusia berambisi merebut puncak klasemen setelah Mataram Islam tertahan imbang oleh Al Quds. Namun PPF Hamas tak tinggal diam.",
      "<b>Aldo Indarmawan</b> mengejutkan Andalusia, membobol gawang <b>Arfah</b> untuk membawa PPF Hamas unggul lebih dulu. Tekanan Andalusia membuahkan hasil: gol bunuh diri pemain PPF Hamas menyamakan skor 1-1 hingga turun minum.",
      "Babak kedua, PPF Hamas kembali mengambil keunggulan. Umpan manis <b>Sulaiman Alcantara</b> diselesaikan dengan dingin oleh <b>Salman Abu Suhnun</b>. Aldo kemudian mencetak gol keduanya untuk memastikan kemenangan.",
      "Skor 3-1 untuk PPF Hamas. Andalusia dan PPF Hamas bersaing di papan atas, Al Quds mengintai, sementara Al Madinah dan Ar Rayyah masih bersabar."
    ]
  },
  {
    "id": "dede-hattrick-ppf",
    "kategori": "Analisis",
    "judul": "Sekali Keep, Langsung Tendang: Cara Dede Jalaludin Membongkar PPF Hamas",
    "ringkas": "Tanpa banyak gocek, Dede memborong hat-trick. Afik dan Pamungkas sukses mematikan Aldo dan Sulaiman.",
    "penulis": "Redaksi",
    "tanggal": "2026-09-20",
    "gambar": "Squad Mataram Islam.jpeg",
    "tag": [
      "PPF Hamas",
      "Mataram Islam",
      "Matchday 2"
    ],
    "isi": [
      "Pertandingan ini mempertemukan dua tim yang berebut puncak klasemen. Mataram Islam tampil dengan kekuatan terbaiknya, dikomandoi <b>Dede Jalaludin</b>. Di lain pihak, PPF Hamas tidak diperkuat oleh <b>Dedi Sumartono</b>, jimat andalan tim.",
      "Dede Jalaludin tampil gemilang dengan memborong <b>hat-trick</b>. Penampilan tak kalah cemerlang juga diberikan oleh <b>Afik</b> dan <b>Pamungkas</b> yang sabar mengawal Aldo Indarmawan dan tidak terpancing pergerakan Sulaiman Alcantara, sang penerjemah ruang.",
      "Strategi Dede kali ini benar-benar berbeda. Tak banyak gocek, tak banyak basa-basi. Sekali keep, langsung tendang. Hasilnya: tiga gol tanpa balasan.",
      "<em>M di Mataram Islam itu Menang.</em>"
    ],
    "kutipan": [
      "Biasanya gocek-gocek, ini sekali keep langsung tendang.",
      "Nurul Iman, Anchor PPF Hamas"
    ]
  },
  {
    "id": "andalusia-klinis",
    "kategori": "Berita",
    "judul": "Andalusia Klinis, Al Madinah Masih Mencari Kemenangan",
    "ringkas": "Dua gol Habib dan satu dari Fairuz Zaman membawa Andalusia menang 3-0 meski tanpa Firman.",
    "penulis": "Redaksi",
    "tanggal": "2026-09-20",
    "gambar": "Al Madinah.jpeg",
    "tag": [
      "Al Madinah",
      "Andalusia",
      "Matchday 2"
    ],
    "isi": [
      "Al Madinah mencoba mencari kemenangan pertamanya kala bertemu Andalusia. Jalan berliku harus ditempuh Ibe dkk: tiga pemain absen, yakni 1 pemain, 1 jimat tim, dan 1 presiden klub.",
      "Andalusia juga tampil tanpa topskornya, <b>Firman</b>. Absennya Arie Agung memaksa <b>Walid Abdurrahman</b> mengambil posisi di bawah mistar Al Madinah.",
      "Namun Andalusia tampil lebih klinis. Dua gol <b>Habib</b> dan sebuah gol <b>Fairuz Zaman</b> membawa Andalusia unggul 3-0.",
      "Semua upaya Al Madinah belum membuahkan hasil, tak lepas dari penampilan solid <b>Arfah</b> di bawah mistar Andalusia."
    ]
  },
  {
    "id": "quds-kemenangan-perdana",
    "kategori": "Berita",
    "judul": "Ar Rayyah Terpuruk, Al Quds Raih Kemenangan Perdana",
    "ringkas": "Gol Denta dibalas AndriNov, lalu gol bunuh diri memupus asa Ar Rayyah.",
    "penulis": "Redaksi",
    "tanggal": "2026-09-20",
    "gambar": "ArRayah.jpeg",
    "tag": [
      "Ar Rayyah",
      "Al Quds",
      "Matchday 2"
    ],
    "isi": [
      "Matchday 2 dibuka dengan pertemuan Ar Rayyah menghadapi Al Quds. Pertandingan sarat gengsi karena keduanya sama-sama berusaha menghindari posisi juru kunci.",
      "Ar Rayyah yang sudah menambah pemain baru tidak lagi mengalami krisis pemain seperti Matchday 1. Asa kemenangan pertama sempat membuncah ketika <b>Denta</b> membobol gawang Al Quds yang dikawal <b>Gianluigi Syahrul</b>.",
      "Kegembiraan itu tak berselang lama. Al Quds menyamakan kedudukan melalui <b>AndriNov</b>, lalu asa Ar Rayyah pupus setelah salah seorang pemainnya melakukan gol bunuh diri. Skor 2-1 bertahan hingga akhir."
    ]
  },
  {
    "id": "madinah-rayyah-imbang",
    "kategori": "Sharing",
    "judul": "Al Madinah & Ar Rayyah Masih Harus Bersabar",
    "ringkas": "Radiansyah dibalas Endang Abu Sahl. Pandu dan Walid jadi tembok di bawah mistar.",
    "penulis": "Redaksi",
    "tanggal": "2026-09-20",
    "gambar": "Al Madinah.jpeg",
    "tag": [
      "Al Madinah",
      "Ar Rayyah",
      "Matchday 2"
    ],
    "isi": [
      "Dua tim yang sama-sama masih berburu kemenangan perdana akhirnya saling berhadapan dengan satu misi: mengamankan tiga poin pertama.",
      "Ar Rayyah unggul terlebih dahulu lewat sepakan <b>Radiansyah</b>. Keunggulan itu tak bertahan lama setelah <b>Endang Abu Sahl</b> menyamakan kedudukan untuk Al Madinah.",
      "Ketangguhan <b>Pandu</b> di bawah mistar Ar Rayyah serta penampilan solid <b>Walid Abdurrahman</b> di kiper Al Madinah membuat tak ada gol tambahan.",
      "Krisis pemain melanda Al Madinah. Tanpa rotasi yang cukup, pemain terlihat sangat kelelahan di menit-menit akhir."
    ]
  },
  {
    "id": "md1-pembuka",
    "kategori": "Berita",
    "judul": "Laga Pembuka Tanpa Pemenang: Mataram Islam dan Andalusia Berbagi Poin",
    "ringkas": "Gol Eko Noer Hartono dibalas Firman di penghujung laga.",
    "penulis": "Redaksi",
    "tanggal": "2026-09-06",
    "gambar": "Squad Mataram Islam.jpeg",
    "tag": [
      "Mataram Islam",
      "Andalusia",
      "Matchday 1"
    ],
    "isi": [
      "Liga dibuka dengan pertandingan antara Mataram Islam menghadapi Andalusia. Laga berlangsung alot, kedua tim tampak mengincar kemenangan pada laga pertama.",
      "Andalusia yang ditinggal penjaga gawang Angga dan pemain lincah Habib tampak kehilangan kekuatan. Penampilan mewah <b>Arfah</b> di bawah mistar serta <b>Taufan</b> yang beberapa kali mengancam membuat Andalusia tetap berbahaya.",
      "Lini serang Mataram Islam dikomandoi Dede Jalaludin. Puncaknya ketika Arfah gagal mengantisipasi tendangan terarah <b>Eko Noer Hartono</b>.",
      "Tertinggal satu gol, Andalusia bangkit. Di penghujung laga <b>Firman</b> menyambar bola liar dan mengoyak gawang Abdul Hafiz. Skor imbang bertahan hingga akhir."
    ]
  },
  {
    "id": "md1-pesta-gol",
    "kategori": "Cerita",
    "judul": "Pesta Delapan Gol: PPF Hamas Taklukkan Ar Rayyah yang Krisis Pemain",
    "ringkas": "Hanya 4 dari 8 pemain hadir, Ar Rayyah tetap mencetak 3 gol sebelum kalah 3-5.",
    "penulis": "Redaksi",
    "tanggal": "2026-09-06",
    "gambar": "ArRayah.jpeg",
    "tag": [
      "Ar Rayyah",
      "PPF Hamas",
      "Matchday 1"
    ],
    "isi": [
      "Ar Rayyah mengalami krisis pemain: 4 dari 8 pemain yang didaftarkan absen. Mereka bahkan meminjam Fauzan untuk menjadi penjaga gawang.",
      "PPF Hamas yang dimotori Aldo terus menggempur gawang Ar Rayyah. <b>Aldo Indarmawan</b> menjadi bintang dengan 2 gol, <b>Salman Abu Suhnun</b> mencetak 1, ditambah 2 gol bunuh diri.",
      "Ar Rayyah tidak tinggal diam. <b>Wakhid Wahyu Prasojo</b> mencetak 2 gol dan <b>Radiansyah</b> 1 gol. Meski kalah, mereka menunjukkan bahwa mereka belum menyerah."
    ]
  },
  {
    "id": "md1-kacamata",
    "kategori": "Berita",
    "judul": "Skor Kacamata: Abu Ahsan dan Syahrul Jadi Tembok",
    "ringkas": "Al Madinah dan Al Quds saling serang tanpa gol.",
    "penulis": "Redaksi",
    "tanggal": "2026-09-06",
    "gambar": "Al Madinah.jpeg",
    "tag": [
      "Al Madinah",
      "Al Quds",
      "Matchday 1"
    ],
    "isi": [
      "Pertandingan penutup pekan pertama menampilkan Al Madinah menghadapi Al Quds. Al Madinah diperkuat Ibe, Endang dan Azzam, sementara Al Quds memainkan penyerang gaek Anam Inzaghi, didukung AndriNov, Fauzan, dan Hakim.",
      "Kedua tim saling jual beli serangan. Peluang demi peluang tercipta, namun keduanya gagal membobol gawang lawan.",
      "Skor kacamata tak lepas dari kegemilangan <b>Abu Ahsan</b> dan <b>Syahrul</b> di bawah mistar masing-masing tim."
    ]
  }
];
