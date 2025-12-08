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
      "Hanya saldo rekening nasabah penyimpan",
      "Hanya mutasi rekening dan data transaksi nasabah",
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
    text: "Pihak yang termasuk 'Pihak Terafiliasi' yang wajib menjaga Rahasia Bank antara lain...",
    options: [
      "Hanya komisaris dan direksi bank",
      "Pegawai bank, pihak pemberi jasa kepada bank, serta pihak yang mengendalikan atau dikendalikan bank",
      "Hanya akuntan publik yang mengaudit bank",
      "Seluruh nasabah bank tanpa kecuali"
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
      "Tanpa persetujuan nasabah, sepanjang untuk kepentingan tukar-menukar informasi antar bank",
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
    text: "Dalam konteks pencegahan dan pemberantasan tindak pidana pencucian uang, yang berhak meminta data nasabah kepada bank adalah...",
    options: [
      "Penyidik, penuntut umum, atau hakim sesuai ketentuan UU TPPU",
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
      "Jaksa Agung atau Kepala Kejaksaan Tinggi sesuai ketentuan",
      "Ketua Pengadilan Negeri yang memeriksa perkara"
    ],
    correctIndex: 2
  },
  {
    text: "Penyidik BNN Pusat meminta data rekening seorang tersangka narkotika. Bank dapat memberikan data tersebut jika...",
    options: [
      "Surat permintaan ditandatangani Kepala BNN atau pejabat yang berwenang",
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
      "Menolak karena kewenangan KPK terkait nasabah yang sudah tersangka/terdakwa",
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
      "Telah berusia dewasa menurut ketentuan dan tidak berada di bawah pengampuan",
      "Telah memiliki pekerjaan tetap dan penghasilan",
      "Telah memiliki NPWP dan KTP elektronik",
      "Telah menikah dan memiliki anak"
    ],
    correctIndex: 0
  },
  {
    text: "Orang yang ditaruh di bawah pengampuan (curatele) menurut KUHPerdata adalah...",
    options: [
      "Anak yang masih di bawah 18 tahun",
      "Orang dewasa yang dungu, sakit otak, mata gelap, atau boros",
      "Orang dewasa yang tidak memiliki pekerjaan",
      "Orang yang belum memiliki KTP"
    ],
    correctIndex: 1
  },
  {
    text: "Perbedaan utama antara perwalian dan pengampuan adalah...",
    options: [
      "Perwalian untuk anak di bawah umur, pengampuan untuk orang dewasa tertentu",
      "Perwalian untuk debitur, pengampuan untuk kreditur",
      "Perwalian diangkat oleh notaris, pengampuan oleh lurah",
      "Perwalian bersifat sementara, pengampuan selalu seumur hidup"
    ],
    correctIndex: 0
  },
  {
    text: "Badan sebagai subjek hukum minimal harus memiliki...",
    options: [
      "NPWP dan izin usaha",
      "Kekayaan terpisah, tujuan tertentu, kepentingan bersama, dan organisasi teratur",
      "Akta notaris dan rekening bank",
      "Modal disetor dan laporan keuangan tahunan"
    ],
    correctIndex: 1
  },
  {
    text: "Perseroan Terbatas (PT) memperoleh status badan hukum ketika...",
    options: [
      "Akta pendirian ditandatangani di hadapan notaris",
      "Perusahaan mulai beroperasi dan memiliki pelanggan",
      "Telah didaftarkan dan memperoleh bukti pendaftaran/pengesahan dari Kementerian",
      "Memiliki modal dasar dan modal disetor sesuai ketentuan"
    ],
    correctIndex: 2
  },
  {
    text: "Organ utama dalam PT yang berwenang mengubah anggaran dasar dan mengangkat direksi adalah...",
    options: [
      "Direksi",
      "Dewan Komisaris",
      "Rapat Umum Pemegang Saham (RUPS)",
      "Komite Audit"
    ],
    correctIndex: 2
  },
  {
    text: "Direksi PT pada prinsipnya bertanggung jawab untuk...",
    options: [
      "Mengawasi kebijakan perseroan dan memberi nasihat",
      "Mengurus dan mewakili perseroan di dalam dan di luar pengadilan",
      "Menetapkan perubahan anggaran dasar tanpa persetujuan RUPS",
      "Mewakili kepentingan pemegang saham minoritas"
    ],
    correctIndex: 1
  },
  {
    text: "Dewan Komisaris dalam PT memiliki fungsi utama untuk...",
    options: [
      "Mengurus kegiatan operasional harian perseroan",
      "Mengawasi kebijakan pengurusan dan memberi nasihat kepada Direksi",
      "Menandatangani seluruh kontrak perseroan",
      "Mewakili perseroan di pengadilan"
    ],
    correctIndex: 1
  },
  {
    text: "Pengalihan atau penjaminan kekayaan PT lebih dari 50% kekayaan bersih memerlukan...",
    options: [
      "Persetujuan tertulis dari Direksi saja",
      "Persetujuan Dewan Komisaris saja",
      "Keputusan RUPS dengan kuorum dan persyaratan suara tertentu",
      "Persetujuan notaris dan Kementerian"
    ],
    correctIndex: 2
  },
  {
    text: "PT X mengalihkan 60% aset bersihnya sebagai jaminan kredit tanpa persetujuan RUPS. Secara hukum...",
    options: [
      "Tindakan sah karena direksi berwenang penuh mengurus perseroan",
      "Tindakan harus mendapatkan persetujuan RUPS, jika tidak dapat dipersoalkan",
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
      "Memisahkan kekayaan untuk tujuan sosial, keagamaan, atau kemanusiaan melalui akta notaris",
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
    text: "Persekutuan perdata (maatschap) adalah...",
    options: [
      "Persekutuan yang selalu berbadan hukum",
      "Perjanjian dua orang atau lebih untuk memasukkan sesuatu dengan maksud membagi keuntungan",
      "Perjanjian antara badan hukum dengan pemerintah",
      "Bentuk usaha yang hanya dapat dimiliki notaris"
    ],
    correctIndex: 1
  },
  {
    text: "Firma sebagai bentuk badan bukan badan hukum memiliki ciri...",
    options: [
      "Tanggung jawab pesero terbatas pada modal setor",
      "Perusahaan dijalankan dengan nama bersama dan pesero bertanggung jawab tanggung renteng",
      "Harus memiliki minimal satu pesero komanditer",
      "Selalu berbentuk perseroan terbatas"
    ],
    correctIndex: 1
  },
  {
    text: "Dalam CV, pesero komplementer (aktif) bertanggung jawab...",
    options: [
      "Terbatas hanya pada modal yang disetorkan",
      "Tanggung renteng dan tidak terbatas atas utang perseroan",
      "Tidak bertanggung jawab terhadap utang perseroan",
      "Hanya pada kerugian operasional tertentu"
    ],
    correctIndex: 1
  },
  {
    text: "Pesero komanditer (pasif) dalam CV akan berubah menjadi bertanggung jawab tidak terbatas jika...",
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
      "Perjanjian dapat dimintakan pembatalan (voidable)",
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
    text: "A menandatangani perjanjian kredit karena diancam oleh B. Dalam hal ini perjanjian...",
    options: [
      "Tetap sah karena ada tanda tangan debitur",
      "Dapat dimintakan pembatalan karena mengandung paksaan",
      "Batal demi hukum karena tidak ada objek perjanjian",
      "Tidak bisa diganggu gugat karena sudah berjalan"
    ],
    correctIndex: 1
  },
  {
    text: "C menandatangani perjanjian jual beli atas barang yang ia kira asli, ternyata palsu. Ini merupakan contoh...",
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
      "Perorangan dengan perorangan, perorangan dengan badan, atau badan dengan badan",
      "Hanya perorangan dan instansi pemerintah"
    ],
    correctIndex: 2
  },
  {
    text: "Rekening atas nama badan mencakup antara lain...",
    options: [
      "Instansi pemerintah, PT, koperasi, yayasan, dan CV",
      "Hanya PT dan yayasan",
      "Hanya badan hukum yang mencari laba",
      "Hanya badan hukum berbentuk PT"
    ],
    correctIndex: 0
  },
  {
    text: "Syarat umum pembukaan rekening untuk perorangan WNI antara lain...",
    options: [
      "KTP/identitas, NPWP (jika ada), dan mengisi formulir pembukaan rekening",
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
      "Paspor dan KITAS/KITAP atau dokumen pengganti",
      "Surat keterangan domisili dari RT/RW",
      "Fotokopi visa turis"
    ],
    correctIndex: 1
  },
  {
    text: "Perusahaan asing yang membuka rekening di Indonesia pada prinsipnya harus menyerahkan...",
    options: [
      "Akta pendirian perusahaan dan izin dari bank koresponden",
      "Deed of Establishment yang dilegalisasi dan izin usaha/NIB kantor perwakilan di Indonesia",
      "Surat domisili dari kedutaan besar",
      "Surat rekomendasi dari BI"
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
      "Mengembalikan blanko cek/bilyet giro yang belum digunakan dan membuat pernyataan tertentu",
      "Menyerahkan buku tabungan dan KTP",
      "Mendaftarkan ulang spesimen tanda tangan"
    ],
    correctIndex: 1
  },
  {
    text: "Nasabah ingin menutup rekening giro, tetapi masih ada cek yang beredar. Tindakan yang benar adalah...",
    options: [
      "Tetap menutup rekening tanpa syarat",
      "Menyediakan dana cukup di rekening khusus dan membuat pernyataan terkait cek yang masih beredar",
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
      "Ahli waris yang berhalangan membuat surat kuasa kepada ahli waris lain atau pihak yang ditunjuk",
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
      "Nilai Harta Peninggalan di bawah Rp5 juta, ahli waris adalah istri/suami dan/atau anak, dan tidak ada sengketa",
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
      "Putusan Pengadilan (Negeri atau Agama sesuai kewenangannya)",
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
      "Kewajiban memiliki KTP elektronik dan kecakapan untuk bertindak hukum",
      "Kewajiban menjadi wajib pajak",
      "Kewajiban membuka rekening bank"
    ],
    correctIndex: 1
  },
  {
    text: "Seorang siswa berusia 16 tahun ingin membuka rekening atas namanya sendiri. Bank sebaiknya...",
    options: [
      "Menolak karena belum dewasa dan tidak boleh punya rekening",
      "Meminta pendampingan orang tua/wali sesuai kebijakan produk dan kecakapan hukum",
      "Tetap membuka tanpa syarat karena usia tidak penting",
      "Mewajibkan siswa membuat akta pengampuan"
    ],
    correctIndex: 1
  },
  {
    text: "Dalam PT, perubahan susunan direksi harus...",
    options: [
      "Diberitahukan kepada Kementerian dalam jangka waktu tertentu untuk dicatat dalam daftar perseroan",
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
      "Akuntan publik, penilai, konsultan hukum, dan konsultan lainnya",
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
      "Jika ada permintaan dari ketua pengadilan negeri/tinggi atau MA sesuai ketentuan",
      "Jika diminta oleh pengacara salah satu pihak",
      "Jika diminta lisan oleh hakim",
      "Jika diminta oleh jaksa penuntut umum"
    ],
    correctIndex: 0
  },
  {
    text: "Pembukaan rekening oleh badan hukum umumnya mensyaratkan adanya...",
    options: [
      "Akta pendirian dan anggaran dasar berikut perubahan, identitas pengurus, dan dokumen perizinan usaha",
      "Surat pernyataan berdiri di atas materai",
      "Surat keterangan domisili dari RT/RW",
      "Surat rekomendasi dari notaris"
    ],
    correctIndex: 0
  },
  {
    text: "Sebuah yayasan ingin membuka rekening. Dokumen yang paling relevan adalah...",
    options: [
      "Akta pendirian yayasan yang telah disahkan sebagai badan hukum dan identitas pengurus",
      "Surat keterangan tokoh masyarakat",
      "Surat rekomendasi dari sekolah terdekat",
      "Peraturan internal yayasan tanpa akta"
    ],
    correctIndex: 0
  },
  {
    text: "Dalam praktek, mengapa bank memerlukan fotokopi dokumen asli (Akta Kematian, Akta Nikah, dll.) yang dicocokkan dengan aslinya?",
    options: [
      "Untuk keperluan arsip internal saja",
      "Untuk memastikan keabsahan dokumen dan mengurangi risiko sengketa",
      "Karena diwajibkan oleh notaris",
      "Untuk memudahkan penghitungan pajak"
    ],
    correctIndex: 1
  },
  {
    text: "Nasabah sudah melunasi kredit dan agunan berupa sertifikat tanah tersimpan di bank. Setelah nasabah meninggal, agunan tersebut termasuk...",
    options: [
      "Bukan bagian Harta Peninggalan karena agunan",
      "Tetap menjadi milik bank sepenuhnya",
      "Bagian dari Harta Peninggalan yang harus diserahkan kepada ahli waris sesuai Dokumen Keahliwarisan",
      "Objek pajak bank"
    ],
    correctIndex: 2
  },
  {
    text: "Salah satu ahli waris tidak setuju dengan pembagian Harta Peninggalan dan mengajukan gugatan. Bank sebaiknya...",
    options: [
      "Tetap mencairkan kepada ahli waris lain yang setuju",
      "Menahan pencairan sampai ada putusan pengadilan",
      "Mencairkan sebagian sesuai yang tidak disengketakan",
      "Menolak semua permohonan pencairan selamanya"
    ],
    correctIndex: 1
  },
  {
    text: "Dokumen Keahliwarisan yang diserahkan ahli waris tidak sesuai dengan matriks ketentuan yang berlaku di bank. Tindakan yang tepat adalah...",
    options: [
      "Tetap menerima demi pelayanan nasabah",
      "Meminta ahli waris melengkapi/mengganti dengan dokumen yang sesuai ketentuan",
      "Mengurangi jumlah pencairan Harta Peninggalan",
      "Mencairkan ke rekening penampungan bank"
    ],
    correctIndex: 1
  },
  {
    text: "Penyetoran dana ke rekening pewaris setelah pewaris meninggal dunia. Dana tersebut...",
    options: [
      "Tidak termasuk Harta Peninggalan karena masuk setelah meninggal",
      "Tidak bisa diambil ahli waris",
      "Tetap menjadi bagian Harta Peninggalan yang akan diserahkan kepada ahli waris",
      "Menjadi milik bank"
    ],
    correctIndex: 2
  },
  {
    text: "Ahli waris membawa putusan pengadilan yang menyatakan dirinya satu-satunya ahli waris. Namun ada keluarga lain yang mengklaim sebagai ahli waris tanpa dokumen. Bank sebaiknya...",
    options: [
      "Mengikuti klaim keluarga tanpa dokumen",
      "Mengabaikan putusan pengadilan",
      "Berpegang pada putusan pengadilan sebagai Dokumen Keahliwarisan yang sah",
      "Mencari jalan tengah dengan membagi dua"
    ],
    correctIndex: 2
  },
  {
    text: "Dokumen Keahliwarisan untuk daerah tertentu ditentukan oleh peraturan daerah setempat. Cabang bank harus...",
    options: [
      "Mengabaikan peraturan daerah dan memakai standar pusat",
      "Meminta nasabah menunjukkan peraturan daerah setempat sebagai dasar",
      "Mengikuti kebiasaan yang berkembang saja",
      "Menunda pencairan tanpa penjelasan"
    ],
    correctIndex: 1
  },
  {
    text: "Seorang nasabah meminta bank menghapus jejak transaksi tertentu dari mutasi rekening. Permintaan ini...",
    options: [
      "Dapat dipenuhi jika transaksi kecil",
      "Dapat dipenuhi jika disetujui atasan",
      "Tidak dapat dipenuhi karena bank wajib menjaga keutuhan catatan dan Rahasia Bank",
      "Boleh dipenuhi jika sudah lewat 1 tahun"
    ],
    correctIndex: 2
  },
  {
    text: "Pegawai bank menceritakan saldo rekening nasabah terkenal kepada temannya di luar kantor. Perbuatan ini...",
    options: [
      "Tidak masalah jika tidak tercatat",
      "Melanggar Rahasia Bank dan dapat dikenakan sanksi pidana",
      "Diperbolehkan jika tidak menyebutkan nama bank",
      "Diperbolehkan jika nasabah bukan nasabah penyimpan"
    ],
    correctIndex: 1
  },
  {
    text: "Fungsi utama ketentuan Rahasia Bank bagi perbankan adalah...",
    options: [
      "Menghambat akses informasi bagi pemerintah",
      "Melindungi kepercayaan nasabah terhadap bank dan menjaga stabilitas sistem perbankan",
      "Menghindari kewajiban pajak bank",
      "Mengurangi beban administrasi bank"
    ],
    correctIndex: 1
  },
  {
    text: "Dalam rangka kerjasama internasional, otoritas negara lain meminta data nasabah sesuai perjanjian resiprokal. Bank dapat memberikan data jika...",
    options: [
      "Ada perjanjian kerja sama antarnegara yang sah dan mekanisme permintaan melalui otoritas yang berwenang",
      "Permintaan disampaikan langsung ke cabang",
      "Nasabah setuju secara lisan",
      "Bank memperoleh keuntungan finansial dari kerja sama tersebut"
    ],
    correctIndex: 0
  },
  {
    text: "Dalam konteks pencegahan pendanaan terorisme, ketentuan rahasia bank...",
    options: [
      "Tetap berlaku penuh tanpa pengecualian",
      "Tidak berlaku terhadap permintaan penyidik, penuntut umum, atau hakim yang berwenang",
      "Hanya berlaku untuk rekening di atas Rp1 miliar",
      "Hanya berlaku untuk rekening badan hukum"
    ],
    correctIndex: 1
  },
  {
    text: "Penyidik tindak pendanaan terorisme meminta data rekening tersangka. Surat permintaan harus...",
    options: [
      "Ditandatangani oleh ketua RT setempat",
      "Ditandatangani oleh pejabat instansi penyidik yang berwenang sesuai UU",
      "Tidak perlu ditandatangani, cukup email",
      "Hanya ditandatangani oleh penyidik secara pribadi"
    ],
    correctIndex: 1
  },
  {
    text: "Pegawai bank ragu apakah suatu pihak berhak meminta pembukaan Rahasia Bank. Langkah paling tepat adalah...",
    options: [
      "Langsung menolak tanpa klarifikasi",
      "Memberikan data agar tidak menghambat proses hukum",
      "Meminta konfirmasi ke unit hukum/kompliance bank dan mengecek dasar hukumnya",
      "Menanyakan langsung kepada nasabah"
    ],
    correctIndex: 2
  },
  {
    text: "Ahli waris datang dengan Dokumen Keahliwarisan lengkap, tetapi tanda bukti deposito berjangka hilang. Bank sebaiknya...",
    options: [
      "Menolak pencairan karena bukti simpanan wajib ada",
      "Meminta surat pernyataan kehilangan dan melakukan verifikasi internal sebelum pencairan",
      "Mencairkan tanpa prosedur lain",
      "Meminta ahli waris mencari sampai ketemu"
    ],
    correctIndex: 1
  },
  {
    text: "Nasabah penyimpan sekaligus debitur. Dalam konteks Rahasia Bank, bank wajib merahasiakan...",
    options: [
      "Hanya data kreditnya sebagai debitur",
      "Hanya data simpanannya sebagai penyimpan",
      "Informasi nasabah dalam kedudukannya sebagai nasabah penyimpan",
      "Seluruh data kredit boleh dibuka tanpa batas"
    ],
    correctIndex: 2
  }
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