const questions = [
  {
    text: "Rahasia Bank menurut UU Perbankan terutama berkaitan dengan...",
    options: [
      "Seluruh informasi mengenai nasabah dan debitur di bank",
      "Informasi mengenai keterangan nasabah penyimpan dan simpanannya",
      "Seluruh transaksi keuangan yang pernah dilakukan di bank",
      "Informasi internal bank yang tidak boleh diketahui publik"
    ],
    correctIndex: 1
  },
  {
    text: "Yang WAJIB dirahasiakan dalam konteks Rahasia Bank adalah...",
    options: [
      "Data mengenai saldo rekening tertentu milik nasabah penyimpan yang tercatat pada bank",
      "Informasi berupa mutasi rekening serta catatan transaksi keuangan nasabah penyimpan",
      "Seluruh data dan informasi mengenai keuangan serta hal lain dari nasabah penyimpan",
      "Seluruh data dan informasi mengenai seluruh nasabah, baik penyimpan maupun debitur"
    ],
    correctIndex: 2
  },
  {
    text: "Contoh data yang termasuk Rahasia Bank adalah...",
    options: [
      "Nama bank dan lokasi cabang",
      "Nama nasabah beserta saldo dan mutasi rekeningnya",
      "Laporan keuangan publik yang diumumkan oleh bank",
      "Kebijakan suku bunga yang diumumkan secara resmi"
    ],
    correctIndex: 1
  },
  {
    text: "Pihak yang termasuk Pihak Terafiliasi yang wajib menjaga Rahasia Bank antara lain...",
    options: [
      "Komisaris dan direksi bank yang secara langsung terlibat dalam pengambilan keputusan",
      "Pegawai bank, pihak pemberi jasa kepada bank, serta pihak yang mengendalikan atau dikendalikan oleh bank",
      "Pihak profesional yang memberikan jasa audit dan konsultasi kepada bank secara terbatas",
      "Seluruh pihak yang memiliki hubungan hukum dengan bank tanpa pengecualian"
    ],
    correctIndex: 1
  },
  {
    text: "Dalam perkara perdata antara bank dan nasabah, pemberian informasi keuangan nasabah kepada pengadilan...",
    options: [
      "Tidak boleh dilakukan karena melanggar Rahasia Bank",
      "Hanya boleh dilakukan jika nasabah memberikan kuasa lisan",
      "Boleh dilakukan oleh direksi tanpa perlu izin tertulis OJK",
      "Harus meminta izin tertulis dari OJK terlebih dahulu"
    ],
    correctIndex: 2
  },
  {
    text: "Dalam perkara pidana, bank dapat memberikan keterangan mengenai nasabah jika...",
    options: [
      "Ada permintaan tertulis dari OJK tanpa melibatkan aparat penegak hukum",
      "Ada izin tertulis dari Dewan Komisioner OJK untuk membuka Rahasia Bank",
      "Nasabah bersedia menandatangani surat pernyataan membuka rahasianya",
      "Permintaan disampaikan secara lisan oleh penyidik"
    ],
    correctIndex: 1
  },
  {
    text: "Sanksi bagi pegawai bank yang sengaja memberikan keterangan yang termasuk Rahasia Bank tanpa kewenangan adalah...",
    options: [
      "Teguran tertulis dari manajemen dan pemutusan hubungan kerja",
      "Pidana penjara dan denda dalam jumlah tertentu sesuai UU Perbankan",
      "Larangan bekerja di sektor keuangan selama 1 tahun",
      "Tidak ada sanksi pidana, hanya administratif OJK"
    ],
    correctIndex: 1
  },
  {
    text: "Tukar-menukar informasi antar bank terkait Rahasia Bank dapat dilakukan...",
    options: [
      "Hanya dengan persetujuan tertulis nasabah",
      "Tanpa persetujuan nasabah",
      "Hanya jika diminta oleh aparat penegak hukum",
      "Hanya jika berkaitan dengan transaksi internasional"
    ],
    correctIndex: 1
  },
  {
    text: "Informasi keuangan nasabah untuk kepentingan perpajakan dapat diminta oleh otoritas pajak...",
    options: [
      "Tanpa dasar hukum khusus karena diatur dalam Rahasia Bank",
      "Hanya jika nasabah telah dinyatakan pailit",
      "Berdasarkan ketentuan khusus akses informasi keuangan untuk perpajakan",
      "Jika diminta oleh pegawai pajak secara lisan kepada cabang bank"
    ],
    correctIndex: 2
  },
  {
    text: "Dalam konteks pencegahan dan pemberantasan tindak pidana pencucian uang, yang berhak meminta keterangan nasabah kepada bank adalah...",
    options: [
      "Penyidik, penuntut umum, atau hakim",
      "Hanya PPATK tanpa koordinasi dengan penegak hukum",
      "Setiap lembaga pemerintah yang membutuhkan data",
      "Hanya OJK dan Bank Indonesia"
    ],
    correctIndex: 0
  },
  {
    text: "Seorang jaksa penuntut umum meminta data rekening tersangka korupsi kepada bank. Agar bank dapat memberikan data, surat permintaan harus ditandatangani oleh...",
    options: [
      "Kepala Kejaksaan Negeri setempat",
      "Jaksa penuntut umum yang menangani perkara",
      "Jaksa Agung atau Kepala Kejaksaan Tinggi",
      "Ketua Pengadilan Negeri yang memeriksa perkara"
    ],
    correctIndex: 2
  },
  {
    text: "Penyidik BNN Pusat meminta data rekening seorang tersangka narkotika. Bank dapat memberikan data tersebut jika...",
    options: [
      "Surat permintaan ditandatangani Kepala BNN",
      "Ada persetujuan lisan dari kepala cabang bank",
      "Nasabah menandatangani surat kuasa kepada BNN",
      "OJK menerbitkan izin pembukaan Rahasia Bank"
    ],
    correctIndex: 0
  },
  {
    text: "Seorang pegawai bank diminta temannya yang polisi untuk mengirimkan mutasi rekening nasabah lewat WhatsApp tanpa surat resmi. Tindakan yang benar adalah...",
    options: [
      "Memenuhi permintaan karena teman tersebut adalah aparat penegak hukum",
      "Memberikan informasi sebagian saja untuk membantu penyidikan",
      "Menolak dan menjelaskan bahwa harus melalui prosedur resmi pembukaan Rahasia Bank",
      "Memberikan data jika nasabah tersebut dikenal dekat oleh pegawai"
    ],
    correctIndex: 2
  },
  {
    text: "KPK meminta data nasabah yang masih berstatus saksi dalam perkara korupsi. Bank sebaiknya...",
    options: [
      "Langsung memberikan data karena permintaan datang dari KPK",
      "Menolak karena kewenangan KPK terkait nasabah yang sudah tersangka",
      "Memberikan hanya saldo tanpa mutasi",
      "Meminta persetujuan nasabah terlebih dahulu"
    ],
    correctIndex: 1
  },
  {
    text: "Penyidik pajak meminta informasi rekening nasabah untuk pemeriksaan pajak berdasarkan peraturan akses informasi keuangan. Bank...",
    options: [
      "Wajib memberikan informasi sesuai permintaan pejabat pajak yang berwenang",
      "Boleh menolak karena bertentangan dengan Rahasia Bank",
      "Hanya memberikan data jika nilai saldo di atas Rp1 miliar",
      "Hanya memberikan data jika nasabah setuju secara tertulis"
    ],
    correctIndex: 0
  },
  {
    text: "Subjek hukum adalah...",
    options: [
      "Setiap perjanjian yang dibuat secara tertulis",
      "Pihak-pihak yang dapat menerima hak dan dibebani kewajiban",
      "Setiap badan hukum yang mencari keuntungan",
      "Setiap orang yang berusia di atas 21 tahun"
    ],
    correctIndex: 1
  },
  {
    text: "Seseorang dianggap cakap hukum untuk membuat perjanjian jika...",
    options: [
      "Telah berusia dewasa menurut ketentuan",
      "Telah memiliki pekerjaan tetap dan penghasilan diatas UMR",
      "Telah memiliki NPWP dan KTP elektronik",
      "Telah menikah dan memiliki anak"
    ],
    correctIndex: 0
  },
  {
    text: "Orang yang ditaruh di bawah pengampuan menurut KUHPerdata adalah...",
    options: [
      "Anak yang masih di bawah 18 tahun",
      "Orang dewasa yang boros",
      "Orang dewasa yang tidak memiliki pekerjaan",
      "Orang yang belum memiliki KTP"
    ],
    correctIndex: 1
  },
  {
    text: "Perbedaan utama antara perwalian dan pengampuan adalah...",
    options: [
      "Perwalian untuk anak di bawah umur, pengampuan untuk orang boros",
      "Perwalian untuk orang boros, pengampuan untuk anak dibawah umur",
      "Perwalian diangkat oleh notaris, pengampuan oleh lurah",
      "Perwalian bersifat sementara, pengampuan selalu seumur hidup"
    ],
    correctIndex: 0
  },
  {
    text: "Badan sebagai subjek hukum minimal harus memiliki...",
    options: [
      "NPWP dan izin usaha",
      "Organisasi teratur",
      "Akta notaris dan rekening bank",
      "Modal disetor dan laporan keuangan tahunan"
    ],
    correctIndex: 1
  },
  {
    text: "Perseroan Terbatas (PT) memperoleh status badan hukum ketika...",
    options: [
      "Akta pendirian ditandatangani di hadapan notaris",
      "Perusahaan sudah berdiri diatas dari 60 tahun",
      "Telah didaftarkan dan memperoleh bukti pengesahan dari Kementerian",
      "Memiliki modal dasar dan modal disetor sesuai ketentuan"
    ],
    correctIndex: 2
  },
  {
    text: "Organ utama dalam PT yang berwenang mengubah anggaran dasar dan mengangkat direksi adalah...",
    options: [
      "Direksi",
      "Dewan Komisaris",
      "RUPS",
      "Komite Audit"
    ],
    correctIndex: 2
  },
  {
    text: "Direksi PT pada prinsipnya bertanggung jawab untuk...",
    options: [
      "Mengawasi kebijakan perseroan dan memberi nasihat",
      "Mengurus perseroan di dalam maupun luar pengadilan",
      "Menetapkan perubahan anggaran dasar tanpa persetujuan RUPS",
      "Mewakili kepentingan pemegang saham minoritas"
    ],
    correctIndex: 1
  },
  {
    text: "Dewan Komisaris dalam PT memiliki fungsi utama untuk...",
    options: [
      "Mengurus kegiatan operasional harian perseroan",
      "Memberi nasihat kepada Direksi",
      "Menandatangani seluruh kontrak perseroan",
      "Memberitahukan jika ada perubahan anggota direksi"
    ],
    correctIndex: 1
  },
  {
    text: "Pengalihan atau penjaminan kekayaan PT lebih dari 50% kekayaan bersih memerlukan...",
    options: [
      "Persetujuan tertulis dari Direksi saja",
      "Persetujuan Dewan Komisaris saja",
      "Persetujuan RUPS",
      "Persetujuan notaris dan Kementerian"
    ],
    correctIndex: 2
  },
  {
    text: "PT X mengalihkan 60% aset bersihnya sebagai jaminan kredit tanpa persetujuan RUPS. Secara hukum...",
    options: [
      "Tindakan sah karena direksi berwenang penuh mengurus perseroan",
      "Tindakan harus mendapatkan persetujuan RUPS",
      "Cukup mendapat persetujuan Dewan Komisaris",
      "Cukup diberitahukan kepada Kementerian Hukum dan HAM"
    ],
    correctIndex: 1
  },
  {
    text: "Koperasi memperoleh status badan hukum setelah...",
    options: [
      "Diumumkan dalam rapat anggota",
      "Akta pendirian disahkan oleh Kementerian dan diumumkan",
      "Memiliki jumlah anggota minimal sesuai ketentuan",
      "Memiliki SHU positif selama 1 tahun"
    ],
    correctIndex: 1
  },
  {
    text: "Organ tertinggi dalam koperasi yang memegang kekuasaan adalah...",
    options: [
      "Pengurus",
      "Pengawas",
      "Rapat Anggota",
      "Kementerian Koperasi"
    ],
    correctIndex: 2
  },
  {
    text: "Yayasan sebagai badan hukum didirikan dengan cara...",
    options: [
      "Perjanjian para pihak dengan membagi saham",
      "Memisahkan kekayaan untuk tujuan sosial",
      "Mendaftarkan nama yayasan ke kelurahan",
      "Membuat anggaran dasar yang disahkan pengadilan"
    ],
    correctIndex: 1
  },
  {
    text: "Perubahan anggaran dasar Yayasan mengenai nama dan kegiatan yayasan memerlukan...",
    options: [
      "Persetujuan lisan dari pembina yayasan",
      "Persetujuan Kementerian Hukum dan HAM",
      "Persetujuan notaris pembuat akta",
      "Hanya perlu diberitahukan kepada Kementerian tanpa persetujuan"
    ],
    correctIndex: 1
  },
  {
    text: "Persekutuan perdata adalah...",
    options: [
      "Persekutuan yang selalu berbadan hukum",
      "Perjanjian dua orang atau lebih untuk memasukkan sesuatu dengan maksud membagi keuntungan",
      "Perjanjian antara badan hukum dengan pemerintah",
      "Bentuk usaha yang hanya dapat dimiliki notaris"
    ],
    correctIndex: 1
  },
  {
    text: "Ciri utama dari Firma sebagai badan usaha yang bukan badan hukum adalah...",
    options: [
      "Tanggung jawab pesero terbatas pada modal setor",
      "Perusahaan dijalankan dengan nama bersama",
      "Harus memiliki minimal satu pesero komanditer",
      "Selalu berbentuk perseroan terbatas"
    ],
    correctIndex: 1
  },
  {
    text: "Dalam CV, pesero komplementer bertanggung jawab...",
    options: [
      "Terbatas hanya pada modal yang disetorkan",
      "Tanggung renteng dan tidak terbatas atas utang perseroan",
      "Tidak bertanggung jawab terhadap utang perseroan",
      "Hanya pada kerugian operasional tertentu"
    ],
    correctIndex: 1
  },
  {
    text: "Pesero komanditer dalam CV akan berubah menjadi bertanggung jawab tidak terbatas jika...",
    options: [
      "Mengundurkan diri dari CV",
      "Ikut menjalankan pengurusan perseroan",
      "Menambah modal setor",
      "Tidak menghadiri rapat pesero"
    ],
    correctIndex: 1
  },
  {
    text: "Syarat sahnya perjanjian menurut Pasal 1320 KUHPerdata yang termasuk syarat subjektif adalah...",
    options: [
      "Suatu hal tertentu dan sebab yang halal",
      "Kesepakatan para pihak dan kecakapan para pihak",
      "Kesepakatan para pihak dan suatu hal tertentu",
      "Kecakapan para pihak dan sebab yang halal"
    ],
    correctIndex: 1
  },
  {
    text: "Syarat sahnya perjanjian yang termasuk syarat objektif adalah...",
    options: [
      "Kesepakatan dan kecakapan",
      "Kesepakatan dan sebab yang halal",
      "Suatu hal tertentu dan sebab yang halal",
      "Kecakapan dan suatu hal tertentu"
    ],
    correctIndex: 2
  },
  {
    text: "Jika syarat subjektif tidak terpenuhi dalam suatu perjanjian, akibat hukumnya adalah...",
    options: [
      "Perjanjian batal demi hukum sejak awal",
      "Perjanjian dapat dimintakan pembatalan",
      "Perjanjian tetap sah tetapi tidak dapat dilaksanakan",
      "Perjanjian otomatis menjadi perjanjian lisan"
    ],
    correctIndex: 1
  },
  {
    text: "Jika syarat objektif tidak terpenuhi, misalnya objek perjanjian tidak halal, maka...",
    options: [
      "Perjanjian dapat diperbaiki melalui adendum",
      "Perjanjian dapat dimintakan pembatalan oleh salah satu pihak",
      "Perjanjian batal demi hukum dan dianggap tidak pernah ada",
      "Perjanjian tetap mengikat sepanjang disetujui para pihak"
    ],
    correctIndex: 2
  },
  {
    text: "Unsur yang dapat menyebabkan pembatalan perjanjian karena cacat kehendak adalah...",
    options: [
      "Kurangnya saksi dan meterai",
      "Paksaan, kekhilafan, atau penipuan",
      "Tidak adanya notaris dalam pembuatan perjanjian",
      "Tidak adanya pembayaran uang muka"
    ],
    correctIndex: 1
  },
  {
    text: "Samudra menandatangani perjanjian kredit karena diancam oleh fance. Dalam hal ini perjanjian...",
    options: [
      "Tetap sah karena ada tanda tangan debitur",
      "Dapat dimintakan pembatalan karena mengandung paksaan",
      "Batal demi hukum karena tidak ada objek perjanjian",
      "Tidak bisa diganggu gugat karena sudah berjalan"
    ],
    correctIndex: 1
  },
  {
    text: "Diah menandatangani perjanjian jual beli atas barang yang ia kira asli, ternyata palsu. Ini merupakan contoh...",
    options: [
      "Paksaan",
      "Penipuan",
      "Kekhilafan",
      "Perbuatan melawan hukum"
    ],
    correctIndex: 2
  },
  {
    text: "Jenis rekening perorangan adalah...",
    options: [
      "Rekening yang dimiliki badan hukum untuk kepentingan usaha",
      "Rekening yang dimiliki oleh satu orang atas namanya sendiri",
      "Rekening yang dimiliki dua orang atau lebih",
      "Rekening yang dimiliki oleh instansi pemerintah"
    ],
    correctIndex: 1
  },
  {
    text: "Rekening gabungan (joint account) dapat dimiliki oleh...",
    options: [
      "Hanya sesama perorangan",
      "Hanya sesama badan hukum",
      "Perorangan dengan badan hukum",
      "Hanya perorangan dan instansi pemerintah"
    ],
    correctIndex: 2
  },
  {
    text: "Rekening atas nama badan mencakup antara lain...",
    options: [
      "Instansi pemerintah dan koperasi",
      "Hanya PT dan yayasan",
      "Hanya badan hukum yang mencari laba",
      "Hanya badan hukum berbentuk PT"
    ],
    correctIndex: 0
  },
  {
    text: "Syarat umum pembukaan rekening untuk perorangan WNI antara lain...",
    options: [
      "KTP dan Dokumen perizinan",
      "Hanya perlu KTP asli tanpa formulir",
      "Hanya memerlukan surat keterangan kerja",
      "Cukup nomor telepon aktif dan email"
    ],
    correctIndex: 0
  },
  {
    text: "Perorangan asing yang ingin membuka rekening di bank harus menyerahkan...",
    options: [
      "Hanya paspor negara asal",
      "Paspor dan KITAS/KITAP",
      "Surat keterangan domisili dari RT/RW",
      "Fotokopi visa turis"
    ],
    correctIndex: 1
  },
  {
    text: "Perusahaan asing yang membuka rekening di Indonesia pada prinsipnya harus menyerahkan...",
    options: [
      "Akta pendirian perusahaan dan izin dari bank koresponden",
      "Deed of Establishment yang dilegalisasi",
      "Surat domisili dari kedutaan besar",
      "Deed of Establishment yang belum dilegalisasi"
    ],
    correctIndex: 1
  },
  {
    text: "Rekening dapat ditutup atas permintaan nasabah sendiri dengan cara...",
    options: [
      "Menelpon call center dan meminta saldo dipindahkan",
      "Mengisi formulir penutupan rekening dan menunjukkan identitas",
      "Mengirim pesan singkat ke cabang tanpa tanda tangan",
      "Membiarkan saldo menjadi nol selama 3 bulan"
    ],
    correctIndex: 1
  },
  {
    text: "Dalam penutupan rekening giro atas permintaan sendiri, pemilik rekening wajib...",
    options: [
      "Menyerahkan kartu ATM saja",
      "Mengembalikan bilyet giro yang belum digunakan",
      "Menyerahkan buku tabungan dan KTP",
      "Mendaftarkan ulang spesimen tanda tangan"
    ],
    correctIndex: 1
  },
  {
    text: "Nasabah ingin menutup rekening giro, tetapi masih ada cek yang beredar. Tindakan yang benar adalah...",
    options: [
      "Tetap menutup rekening tanpa syarat",
      "Menyediakan dana cukup di rekening khusus",
      "Memblokir seluruh cek yang beredar tanpa pemberitahuan",
      "Meminta nasabah menarik kembali semua cek yang beredar baru menutup rekening"
    ],
    correctIndex: 1
  },
  {
    text: "Penutupan rekening karena nasabah meninggal dunia mensyaratkan bank untuk terlebih dahulu...",
    options: [
      "Menutup otomatis seluruh rekening tanpa konfirmasi ahli waris",
      "Menentukan sendiri siapa ahli waris berdasarkan data KTP",
      "Memastikan siapa ahli waris berdasarkan Dokumen Keahliwarisan yang sah",
      "Mengalihkan saldo ke rekening pemerintah"
    ],
    correctIndex: 2
  },
  {
    text: "Yang dimaksud Harta Peninggalan nasabah di bank antara lain...",
    options: [
      "Hanya saldo tabungan dan giro",
      "Saldo tabungan/giro/deposito, efek di kustodian, dan barang di Safe Deposit Box",
      "Hanya agunan kredit yang belum lunas",
      "Hanya usaha yang dimiliki nasabah di luar bank"
    ],
    correctIndex: 1
  },
  {
    text: "Penyerahan Harta Peninggalan kepada ahli waris pada prinsipnya dilakukan...",
    options: [
      "Kepada salah satu ahli waris saja sebagai wakil keluarga tanpa kuasa",
      "Kepada seluruh ahli waris secara bersama sesuai Dokumen Keahliwarisan",
      "Kepada ahli waris tertua saja",
      "Kepada ahli waris yang alamatnya sama dengan pewaris"
    ],
    correctIndex: 1
  },
  {
    text: "Jika salah satu ahli waris berhalangan hadir saat penyerahan Harta Peninggalan, maka...",
    options: [
      "Bank menunda penyerahan sampai semua hadir",
      "Ahli waris yang berhalangan membuat surat kuasa kepada ahli waris lain",
      "Bank membagikan bagian ahli waris yang berhalangan kepada ahli waris lain",
      "Bank langsung menyetor ke kas negara"
    ],
    correctIndex: 1
  },
  {
    text: "Dokumen pendukung umum yang diminta bank selain Dokumen Keahliwarisan antara lain...",
    options: [
      "Akta Kelahiran ahli waris dan kartu keluarga saja",
      "Akta Kematian, Akta Perkawinan/Buku Nikah, Akta Kelahiran ahli waris, identitas ahli waris, dan KK (jika ada)",
      "Surat keterangan domisili RT/RW",
      "Surat pernyataan bermeterai tanpa dokumen resmi"
    ],
    correctIndex: 1
  },
  {
    text: "Pengecualian Dokumen Keahliwarisan dapat diberlakukan jika...",
    options: [
      "Nilai Harta Peninggalan di bawah Rp5 juta",
      "Ahli waris hanya satu orang",
      "Nasabah meninggal di luar negeri",
      "Saldo rekening hanya berbentuk deposito"
    ],
    correctIndex: 0
  },
  {
    text: "Saldo tabungan pewaris adalah Rp3 juta, ahli waris adalah istri dan dua anak, tidak ada sengketa. Untuk pencairan...",
    options: [
      "Harus ada putusan pengadilan tentang pembagian waris",
      "Cukup dokumen pendukung tanpa Dokumen Keahliwarisan",
      "Tetap harus Akta Waris dari notaris",
      "Harus ada surat keterangan camat sebagai Akta Waris"
    ],
    correctIndex: 1
  },
  {
    text: "Pewaris WNI keturunan Tionghoa dengan Harta Peninggalan ≤ Rp100 juta dan tidak ada sengketa. Salah satu Dokumen Keahliwarisan yang dapat dipakai adalah...",
    options: [
      "Surat pernyataan ahli waris di bawah tangan tanpa legalisasi",
      "Akta Keterangan Waris dari notaris atau Akta dari Pengadilan Negeri/Pengadilan Agama (tergantung agama)",
      "Putusan Pengadilan Negeri yang selalu wajib",
      "Surat Keterangan Waris dari RT/RW"
    ],
    correctIndex: 1
  },
  {
    text: "Pewaris WNI pribumi beragama Islam, Harta Peninggalan ≤ Rp100 juta, tidak ada sengketa. Dokumen Keahliwarisan yang dapat digunakan antara lain...",
    options: [
      "Akta waris dari notaris negara asal",
      "Surat pernyataan ahli waris yang diketahui lurah/kepala desa dan camat, atau Akta Pengadilan Agama",
      "Hanya legal opinion dari konsultan hukum",
      "Akta kelahiran semua ahli waris saja"
    ],
    correctIndex: 1
  },
  {
    text: "Pewaris WNI keturunan Tionghoa dengan Harta Peninggalan > Rp100 juta dan tidak ada sengketa. Dokumen Keahliwarisan yang tepat adalah...",
    options: [
      "Surat pernyataan ahli waris yang diketahui RT/RW",
      "Akta Pembagian Waris dari Pengadilan Agama",
      "Akta Keterangan Waris dari notaris atau Akta Pertolongan Pembagian Waris dari Pengadilan Agama (bagi yang beragama Islam)",
      "Cukup Akta Kematian dari catatan sipil"
    ],
    correctIndex: 2
  },
  {
    text: "Pewaris WNI pribumi tidak beragama Islam, Harta Peninggalan > Rp100 juta dan tidak ada sengketa. Dokumen Keahliwarisan yang digunakan adalah...",
    options: [
      "Akta Keterangan Waris dari Balai Harta Peninggalan atau Akta Keterangan Waris di bawah tangan yang dilegalisasi Ketua Pengadilan Negeri",
      "Surat pernyataan ahli waris tanpa legalisasi",
      "Putusan Pengadilan Agama",
      "Legal opinion dari kantor hukum"
    ],
    correctIndex: 0
  },
  {
    text: "Jika terdapat sengketa di antara para ahli waris, maka Dokumen Keahliwarisan yang digunakan pada prinsipnya adalah...",
    options: [
      "Surat pernyataan ahli waris yang disepakati sebagian besar ahli waris",
      "Surat Keterangan Waris dari lurah",
      "Putusan Pengadilan",
      "Akta waris dari notaris tanpa putusan pengadilan"
    ],
    correctIndex: 2
  },
  {
    text: "Untuk pewaris Warga Negara Asing dengan Harta Peninggalan ≤ Rp100 juta dan tidak ada sengketa, Dokumen Keahliwarisan yang mungkin digunakan adalah...",
    options: [
      "Legal opinion dari Konsultan Hukum di negara asal pewaris atau Akta Keterangan Waris yang dilegalisasi pejabat setempat",
      "Surat pernyataan ahli waris lisan di depan bank",
      "Surat rekomendasi dari kedutaan besar",
      "KTP sementara yang diterbitkan bank"
    ],
    correctIndex: 0
  },
  {
    text: "Semua ahli waris sepakat menunjuk satu orang untuk menerima Harta Peninggalan di bank. Prosedur yang benar adalah...",
    options: [
      "Bank hanya berhubungan dengan ahli waris tertunjuk tanpa kuasa tertulis",
      "Seluruh ahli waris memberikan surat kuasa tertulis kepada yang ditunjuk",
      "Bank menerbitkan rekening baru atas nama bank",
      "Bank menolak penunjukan dan tetap membagi kepada masing-masing"
    ],
    correctIndex: 1
  },
  {
    text: "Jenis rekening yang dimiliki bersama oleh badan hukum dan perorangan adalah...",
    options: [
      "Hanya rekening badan hukum",
      "Hanya joint account perorangan",
      "Joint account antara badan hukum dan perorangan",
      "Tidak diperbolehkan oleh ketentuan"
    ],
    correctIndex: 2
  },
  {
    text: "Rekening tabungan dibuka atas nama 'Amir Bdn Toko Asia'. Rekening ini termasuk...",
    options: [
      "Rekening badan hukum berbentuk PT",
      "Rekening perorangan dengan mencantumkan nama dagang",
      "Rekening joint antara Amir dan Toko Asia",
      "Rekening badan yang terdaftar di Kementerian"
    ],
    correctIndex: 1
  },
  {
    text: "Salah satu alasan utama bank membutuhkan Dokumen Keahliwarisan adalah...",
    options: [
      "Untuk menentukan saldo rekening terakhir nasabah",
      "Untuk menentukan siapa pemegang hak atas Harta Peninggalan nasabah secara sah",
      "Untuk melaporkan pajak penghasilan ahli waris",
      "Untuk menutup semua rekening nasabah segera"
    ],
    correctIndex: 1
  },
  {
    text: "Saldo rekening pewaris Rp40 juta, tidak ada sengketa. Dokumen Keahliwarisan yang diminta bank untuk WNI pribumi beragama Islam biasanya...",
    options: [
      "Selalu putusan pengadilan agama tanpa kecuali",
      "Bisa Akta Pertolongan Pembagian Waris/akta pengadilan atau surat pernyataan ahli waris yang diketahui lurah/kepala desa dan camat sesuai matriks keahliwarisan",
      "Cukup Kartu Keluarga dan Akta Kematian",
      "Surat pernyataan ahli waris tanpa saksi"
    ],
    correctIndex: 1
  },
  {
    text: "Dalam konteks pembukaan rekening, syarat usia 17 tahun biasanya dikaitkan dengan...",
    options: [
      "Kewajiban memiliki kartu keluarga",
      "Kewajiban memiliki KTP dan kecakapan hukum",
      "Kewajiban menjadi wajib pajak",
      "Kewajiban membuka rekening bank"
    ],
    correctIndex: 1
  },
  {
    text: "Seorang siswa berusia 16 tahun ingin membuka rekening atas namanya sendiri. Bank sebaiknya...",
    options: [
      "Menolak karena belum dewasa dan tidak boleh punya rekening",
      "Meminta pendampingan orang tua/wali",
      "Tetap membuka tanpa syarat karena usia tidak penting",
      "Mewajibkan siswa membuat akta pengampuan"
    ],
    correctIndex: 1
  },
  {
    text: "Dalam PT, perubahan susunan direksi harus...",
    options: [
      "Diberitahukan kepada Kementerian",
      "Dilaporkan ke kantor pajak setempat",
      "Disetujui BI dan OJK",
      "Didaftarkan ke pengadilan negeri"
    ],
    correctIndex: 0
  },
  {
    text: "Pembubaran PT yang diikuti likuidasi mengakibatkan...",
    options: [
      "Status badan hukum hilang seketika sejak keputusan RUPS",
      "Perseroan tetap berstatus badan hukum sampai likuidasi selesai dan dipertanggungjawabkan",
      "Perseroan tidak boleh lagi melakukan perbuatan hukum apapun termasuk untuk likuidasi",
      "Kewajiban kepada kreditor otomatis hapus"
    ],
    correctIndex: 1
  },
  {
    text: "Pada setiap surat keluar perseroan sejak dibubarkan dan dalam proses likuidasi wajib dicantumkan...",
    options: [
      "Nama likuidator di belakang nama perseroan",
      "Tanggal pembubaran perseroan",
      "Kata 'dalam likuidasi' di belakang nama perseroan",
      "Nomor putusan pengadilan"
    ],
    correctIndex: 2
  },
  {
    text: "Setelah RUPS memutuskan pembubaran PT, likuidator belum mengumumkan pembubaran di surat kabar maupun Berita Negara. Akibatnya...",
    options: [
      "Pembubaran tetap mengikat pihak ketiga",
      "Pembubaran belum berlaku bagi pihak ketiga sampai pengumuman dilakukan",
      "Perseroan langsung kehilangan status badan hukum",
      "Likuidator dapat dipidana tanpa proses lanjut"
    ],
    correctIndex: 1
  },
  {
    text: "Kewajiban bank dalam menjaga Rahasia Bank juga berlaku terhadap pihak yang memberikan jasa kepada bank seperti...",
    options: [
      "Hanya akuntan publik",
      "Akuntan publik",
      "Hanya konsultan hukum yang ditunjuk",
      "Hanya vendor teknologi informasi"
    ],
    correctIndex: 1
  },
  {
    text: "Konsultan hukum eksternal diminta bank untuk menangani perkara perdata terkait nasabah. Konsultan hukum tersebut...",
    options: [
      "Bebas mengungkapkan data nasabah kepada pihak lain sepanjang untuk kepentingan perkara",
      "Terikat kewajiban menjaga Rahasia Bank sebagai pihak pemberi jasa kepada bank",
      "Hanya terikat oleh kode etik profesi, bukan Rahasia Bank",
      "Tidak boleh mengetahui data nasabah sama sekali"
    ],
    correctIndex: 1
  },
  {
    text: "Seorang pegawai bank menolak memberikan informasi saldo rekening kepada suami dari nasabah penyimpan tanpa surat kuasa. Sikap pegawai tersebut...",
    options: [
      "Salah, karena suami berhak tahu saldo istrinya",
      "Benar, karena Rahasia Bank melekat pada nasabah penyimpan, bukan pada keluarga",
      "Salah, karena keluarga inti termasuk pengecualian",
      "Benar hanya jika saldo di atas Rp1 miliar"
    ],
    correctIndex: 1
  },
  {
    text: "Nasabah memberikan kuasa tertulis kepada saudaranya untuk memperoleh informasi rekening. Bank...",
    options: [
      "Tetap tidak boleh memberikan informasi karena Rahasia Bank",
      "Boleh memberikan informasi sesuai ruang lingkup kuasa tertulis",
      "Hanya boleh memberikan informasi saldo tanpa mutasi",
      "Harus meminta persetujuan OJK terlebih dahulu"
    ],
    correctIndex: 1
  },
  {
    text: "Dua nasabah memiliki joint account 'A dan B'. A datang sendiri dan meminta penutupan rekening tanpa tanda tangan B. Kebijakan yang aman adalah...",
    options: [
      "Menutup rekening karena salah satu pemilik sudah setuju",
      "Meminta persetujuan dan/atau tanda tangan sesuai kesepakatan jenis joint account (misal 'dan' atau 'atau')",
      "Menolak karena joint account tidak boleh ditutup",
      "Mengizinkan penutupan jika saldo nol"
    ],
    correctIndex: 1
  },
  {
    text: "Dalam konteks Rahasia Bank, informasi yang boleh dibuka tanpa izin OJK antara lain adalah...",
    options: [
      "Kepada ahli waris nasabah penyimpan yang telah meninggal dunia",
      "Kepada teman dekat nasabah jika dapat dipercaya",
      "Kepada sesama pegawai bank yang ingin tahu",
      "Kepada media massa yang meminta konfirmasi"
    ],
    correctIndex: 0
  },
  {
    text: "Nasabah menggugat bank secara perdata terkait dana di rekeningnya. Dalam persidangan, direksi bank...",
    options: [
      "Tetap wajib merahasiakan keadaan keuangan nasabah dan tidak boleh memberi keterangan",
      "Boleh memberikan keterangan mengenai keadaan keuangan nasabah terkait perkara tersebut",
      "Hanya boleh memberi keterangan jika nasabah mencabut gugatan",
      "Harus meminta izin tertulis nasabah penyimpan lagi"
    ],
    correctIndex: 1
  },
  {
    text: "Dua nasabah bersengketa di pengadilan dan memerlukan data rekening salah satu pihak. Direksi bank hanya dapat memberikan keterangan...",
    options: [
      "Jika ada permintaan dari ketua pengadilan negeri",
      "Jika diminta oleh pengacara salah satu pihak",
      "Jika diminta lisan oleh hakim",
      "Jika diminta oleh jaksa penuntut umum"
    ],
    correctIndex: 0
  },
  {
    text: "Pembukaan rekening oleh badan hukum umumnya mensyaratkan adanya...",
    options: [
      "Akta pendirian",
      "Surat pernyataan berdiri di atas materai",
      "Surat keterangan domisili dari RT/RW",
      "Surat rekomendasi dari notaris"
    ],
    correctIndex: 0
  },
  {
    text: "Sebuah yayasan ingin membuka rekening. Dokumen yang paling relevan adalah...",
    options: [
      "Akta pendirian yayasan yang telah disahkan sebagai badan hukum",
      "Surat keterangan pendirian yayasan yang diketahui oleh tokoh masyarakat setempat",
      "Surat rekomendasi kelembagaan yang menerangkan kegiatan yayasan dari institusi terkait",
      "Dokumen internal yayasan yang mengatur struktur dan kegiatan tanpa akta pendirian"
    ],
    correctIndex: 0
  },
  {
  text: "Pemberian kuasa dalam konteks perbankan pada prinsipnya adalah...",
  options: [
    "Pelimpahan kewenangan dari bank kepada nasabah",
    "Pelimpahan wewenang dari seseorang kepada pihak lain untuk bertindak atas namanya",
    "Perjanjian sepihak yang berlaku otomatis",
    "Hubungan hukum antara bank dan regulator"
  ],
  correctIndex: 1
},
  {
  text: "Kuasa untuk melakukan penarikan dana rekening pada umumnya harus...",
  options: [
    "Disampaikan secara lisan kepada teller",
    "Dibuat secara tertulis dan ditandatangani pemberi kuasa",
    "Cukup melalui pesan elektronik",
    "Disampaikan oleh saksi keluarga"
  ],
  correctIndex: 1
},
  {
  text: "Kuasa yang diberikan untuk kepentingan penerima kuasa sendiri disebut...",
  options: [
    "Kuasa umum",
    "Kuasa khusus",
    "Kuasa mutlak",
    "Kuasa sementara"
  ],
  correctIndex: 2
},
  {
  text: "Bank pada prinsipnya tidak menerima kuasa mutlak karena...",
  options: [
    "Bertentangan dengan kebiasaan perbankan",
    "Berpotensi meniadakan hak pemberi kuasa",
    "Tidak dikenal dalam hukum perdata",
    "Tidak memiliki kekuatan pembuktian"
  ],
  correctIndex: 1
},
  {
  text: "Kuasa yang hanya berlaku untuk satu tindakan hukum tertentu disebut...",
  options: [
    "Kuasa umum",
    "Kuasa khusus",
    "Kuasa mutlak",
    "Kuasa bebas"
  ],
  correctIndex: 1
},
  {
  text: "Kuasa yang diberikan untuk mengurus segala kepentingan pemberi kuasa disebut...",
  options: [
    "Kuasa sementara",
    "Kuasa khusus",
    "Kuasa umum",
    "Kuasa mutlak"
  ],
  correctIndex: 2
},
  {
  text: "Cek kosong adalah cek yang...",
  options: [
    "Tidak ditandatangani penarik",
    "Dananya tidak tersedia atau tidak cukup saat diajukan",
    "Belum diisi tanggal penarikan",
    "Sudah kedaluwarsa masa berlakunya"
  ],
  correctIndex: 1
},
  {
  text: "Bilyet giro kosong terjadi apabila...",
  options: [
    "Tidak mencantumkan nama penerima",
    "Saldo rekening tidak mencukupi saat pemindahbukuan",
    "Tidak dibubuhi cap perusahaan",
    "Tidak disertai surat kuasa"
  ],
  correctIndex: 1
},
  {
  text: "Perbedaan utama antara cek dan bilyet giro adalah...",
  options: [
    "Cek dapat diuangkan tunai, bilyet giro melalui pemindahbukuan",
    "Cek hanya untuk badan hukum",
    "Bilyet giro selalu atas unjuk",
    "Cek tidak memerlukan tanda tangan"
  ],
  correctIndex: 0
},
  {
  text: "Bank dapat menolak pembayaran cek apabila...",
  options: [
    "Tanggal penarikan belum lewat",
    "Dana tidak tersedia atau cek diblokir",
    "Nama penerima ditulis lengkap",
    "Cek masih dalam masa berlaku"
  ],
  correctIndex: 1
},
  {
  text: "Penarikan cek kosong oleh nasabah dapat mengakibatkan...",
  options: [
    "Penutupan otomatis semua rekening",
    "Sanksi administratif sesuai ketentuan yang berlaku",
    "Pembatalan seluruh transaksi sebelumnya",
    "Penghapusan kewajiban nasabah"
  ],
  correctIndex: 1
},
  {
  text: "Pencantuman nasabah dalam daftar hitam penarik cek kosong bertujuan untuk...",
  options: [
    "Menghukum nasabah secara pidana",
    "Memberi efek jera dan menjaga sistem pembayaran",
    "Menghapus seluruh kewajiban bank",
    "Mengalihkan tanggung jawab kepada penerima cek"
  ],
  correctIndex: 1
},
  {
  text: "Penarikan bilyet giro kosong pada prinsipnya merupakan...",
  options: [
    "Pelanggaran administratif di bidang sistem pembayaran",
    "Perbuatan pidana otomatis",
    "Wanprestasi yang selalu batal demi hukum",
    "Perbuatan melawan hukum tanpa pengecualian"
  ],
  correctIndex: 0
},
  {
  text: "Nasabah yang menarik cek kosong berulang kali dapat dikenakan...",
  options: [
    "Penutupan rekening giro dan sanksi sesuai ketentuan",
    "Pembekuan seluruh rekening tabungan",
    "Pencabutan kewarganegaraan",
    "Larangan membuka rekening di luar negeri"
  ],
  correctIndex: 0
},
  {
  text: "Bank wajib melaporkan penarikan cek atau bilyet giro kosong kepada...",
  options: [
    "Otoritas sistem pembayaran sesuai ketentuan",
    "Kepolisian setempat",
    "Pengadilan negeri",
    "Kantor pajak"
  ],
  correctIndex: 0
},
  {
  text: "Dalam praktik perbankan, tujuan utama pengaturan cek dan bilyet giro kosong adalah...",
  options: [
    "Melindungi kepentingan bank semata",
    "Menjaga kepercayaan dan kelancaran lalu lintas pembayaran",
    "Membatasi hak nasabah dalam bertransaksi",
    "Menghapus risiko hukum sepenuhnya"
  ],
  correctIndex: 1
},
];

const labels = ["A", "B", "C", "D"];
let currentIndex = 0;
let userAnswers = new Array(questions.length).fill(null);
let score = 0;
let finished = false;

const questionNumberEl = document.getElementById("questionNumber");
const questionTextEl = document.getElementById("questionText");
const optionListEl = document.getElementById("optionList");
const progressTextEl = document.getElementById("progressText");
const progressBarEl = document.getElementById("progressBar");
const scoreDisplayEl = document.getElementById("scoreDisplay");
const resultBoxEl = document.getElementById("resultBox");
const retryBtn = document.getElementById("retryBtn");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const clearBtn = document.getElementById("clearBtn");
const finishBtn = document.getElementById("finishBtn");

function renderQuestion() {
    const q = questions[currentIndex];
    questionNumberEl.textContent = `Soal ${currentIndex + 1}`;
    questionTextEl.textContent = q.text;

    optionListEl.innerHTML = "";
    q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";

    if (userAnswers[currentIndex] !== null) {
        if (idx === q.correctIndex) btn.classList.add("correct");
        if (idx === userAnswers[currentIndex] && idx !== q.correctIndex) {
        btn.classList.add("wrong");
        }
    }


    btn.addEventListener("click", () => handleAnswer(idx));

    const labelSpan = document.createElement("span");
    labelSpan.className = "option-label";
    labelSpan.textContent = labels[idx];

    const textSpan = document.createElement("span");
    textSpan.className = "option-text";
    textSpan.textContent = opt;

    btn.appendChild(labelSpan);
    btn.appendChild(textSpan);
    optionListEl.appendChild(btn);
    });

    progressTextEl.textContent = `Soal ${currentIndex + 1} / ${questions.length}`;
    progressBarEl.style.width = ((currentIndex + 1) / questions.length) * 100 + "%";

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === questions.length - 1;
}

function handleAnswer(idx) {
    if (userAnswers[currentIndex] !== null) return;

    const q = questions[currentIndex];
    userAnswers[currentIndex] = idx;

    const buttons = optionListEl.querySelectorAll(".option-btn");
    buttons.forEach((btn) => {
    btn.classList.add("answered");
    btn.style.pointerEvents = "none";
    });

    if (idx === q.correctIndex) {
    score++;
    scoreDisplayEl.textContent = score;
    buttons[idx].classList.add("correct");
    } else {
    buttons[idx].classList.add("wrong");
    buttons[q.correctIndex].classList.add("correct");
    }
}

function showResult() {
    finished = true;
    const percent = Math.round((score / questions.length) * 100);
    let wrong = "";

    questions.forEach((q, i) => {
    if (userAnswers[i] !== q.correctIndex) {
        const wrongIdx = userAnswers[i];
        wrong += `
        <div class="wrong-item">
            <div class="q">Soal ${i + 1}. ${q.text}</div>
            <div class="a">Jawaban kamu: ${wrongIdx !== null ? labels[wrongIdx] : "-"}.</div>
            <div class="c">Jawaban benar: ${labels[q.correctIndex]}. ${q.options[q.correctIndex]}</div>
        </div>
        `;
    }
    });

    resultBoxEl.style.display = "block";
    resultBoxEl.innerHTML = `
    <strong>Hasil:</strong><br>
    Benar: ${score} dari ${questions.length} soal (${percent}%)<br><br>
    ${wrong === "" ? "Jawaban kamu semua benar!" : wrong}
    `;

    retryBtn.style.display = "inline-flex";
}

retryBtn.addEventListener("click", () => {
    userAnswers.fill(null);
    score = 0;
    scoreDisplayEl.textContent = "0";
    currentIndex = 0;
    finished = false;
    resultBoxEl.style.display = "none";
    retryBtn.style.display = "none";
    renderQuestion();
});

prevBtn.addEventListener("click", () => currentIndex > 0 && (currentIndex--, renderQuestion()));
nextBtn.addEventListener("click", () => currentIndex < questions.length - 1 && (currentIndex++, renderQuestion()));
finishBtn.addEventListener("click", showResult);

renderQuestion();