const questions = [
  {
    q: "Rahasia Bank menurut UU Perbankan terutama berkaitan dengan...",
    o: [
      "Seluruh informasi mengenai nasabah dan debitur di bank",
      "Informasi mengenai keterangan nasabah penyimpan dan simpanannya",
      "Seluruh transaksi keuangan yang pernah dilakukan di bank",
      "Informasi internal bank yang tidak boleh diketahui publik"
    ],
    a: 1
  },
  {
    q: "Yang WAJIB dirahasiakan dalam konteks Rahasia Bank adalah...",
    o: [
      "Data mengenai saldo rekening tertentu milik nasabah penyimpan yang tercatat pada bank",
      "Informasi berupa mutasi rekening serta catatan transaksi keuangan nasabah penyimpan",
      "Seluruh data dan informasi mengenai keuangan serta hal lain dari nasabah penyimpan",
      "Seluruh data dan informasi mengenai seluruh nasabah, baik penyimpan maupun debitur"
    ],
    a: 2
  },
  {
    q: "Contoh data yang termasuk Rahasia Bank adalah...",
    o: [
      "Nama bank dan lokasi cabang",
      "Nama nasabah beserta saldo dan mutasi rekeningnya",
      "Laporan keuangan publik yang diumumkan oleh bank",
      "Kebijakan suku bunga yang diumumkan secara resmi"
    ],
    a: 1
  },
  {
    q: "Pihak yang termasuk Pihak Terafiliasi yang wajib menjaga Rahasia Bank antara lain...",
    o: [
      "Komisaris dan direksi bank yang secara langsung terlibat dalam pengambilan keputusan",
      "Pegawai bank, pihak pemberi jasa kepada bank, serta pihak yang mengendalikan atau dikendalikan oleh bank",
      "Pihak profesional yang memberikan jasa audit dan konsultasi kepada bank secara terbatas",
      "Seluruh pihak yang memiliki hubungan hukum dengan bank tanpa pengecualian"
    ],
    a: 1
  },
  {
    q: "Dalam perkara perdata antara bank dan nasabah, pemberian informasi keuangan nasabah kepada pengadilan...",
    o: [
      "Tidak boleh dilakukan karena melanggar Rahasia Bank",
      "Hanya boleh dilakukan jika nasabah memberikan kuasa lisan",
      "Boleh dilakukan oleh direksi tanpa perlu izin tertulis OJK",
      "Harus meminta izin tertulis dari OJK terlebih dahulu"
    ],
    a: 2
  },
  {
    q: "Dalam perkara pidana, bank dapat memberikan keterangan mengenai nasabah jika...",
    o: [
      "Ada permintaan tertulis dari OJK tanpa melibatkan aparat penegak hukum",
      "Ada izin tertulis dari Dewan Komisioner OJK untuk membuka Rahasia Bank",
      "Nasabah bersedia menandatangani surat pernyataan membuka rahasianya",
      "Permintaan disampaikan secara lisan oleh penyidik"
    ],
    a: 1
  },
  {
    q: "Sanksi bagi pegawai bank yang sengaja memberikan keterangan yang termasuk Rahasia Bank tanpa kewenangan adalah...",
    o: [
      "Teguran tertulis dari manajemen dan pemutusan hubungan kerja",
      "Pidana penjara dan denda dalam jumlah tertentu sesuai UU Perbankan",
      "Larangan bekerja di sektor keuangan selama 1 tahun",
      "Tidak ada sanksi pidana, hanya administratif OJK"
    ],
    a: 1
  },
  {
    q: "Tukar-menukar informasi antar bank terkait Rahasia Bank dapat dilakukan...",
    o: [
      "Hanya dengan persetujuan tertulis nasabah",
      "Tanpa persetujuan nasabah",
      "Hanya jika diminta oleh aparat penegak hukum",
      "Hanya jika berkaitan dengan transaksi internasional"
    ],
    a: 1
  },
  {
    q: "Informasi keuangan nasabah untuk kepentingan perpajakan dapat diminta oleh otoritas pajak...",
    o: [
      "Tanpa dasar hukum khusus karena diatur dalam Rahasia Bank",
      "Hanya jika nasabah telah dinyatakan pailit",
      "Berdasarkan ketentuan khusus akses informasi keuangan untuk perpajakan",
      "Jika diminta oleh pegawai pajak secara lisan kepada cabang bank"
    ],
    a: 2
  },
  {
    q: "Dalam konteks pencegahan dan pemberantasan tindak pidana pencucian uang, yang berhak meminta keterangan nasabah kepada bank adalah...",
    o: [
      "Penyidik, penuntut umum, atau hakim",
      "Hanya PPATK tanpa koordinasi dengan penegak hukum",
      "Setiap lembaga pemerintah yang membutuhkan data",
      "Hanya OJK dan Bank Indonesia"
    ],
    a: 0
  },
  {
    q: "Seorang jaksa penuntut umum meminta data rekening tersangka korupsi kepada bank. Agar bank dapat memberikan data, surat permintaan harus ditandatangani oleh...",
    o: [
      "Kepala Kejaksaan Negeri setempat",
      "Jaksa penuntut umum yang menangani perkara",
      "Jaksa Agung atau Kepala Kejaksaan Tinggi",
      "Ketua Pengadilan Negeri yang memeriksa perkara"
    ],
    a: 2
  },
  {
    q: "Penyidik BNN Pusat meminta data rekening seorang tersangka narkotika. Bank dapat memberikan data tersebut jika...",
    o: [
      "Surat permintaan ditandatangani Kepala BNN",
      "Ada persetujuan lisan dari kepala cabang bank",
      "Nasabah menandatangani surat kuasa kepada BNN",
      "OJK menerbitkan izin pembukaan Rahasia Bank"
    ],
    a: 0
  },
  {
    q: "Seorang pegawai bank diminta temannya yang polisi untuk mengirimkan mutasi rekening nasabah lewat WhatsApp tanpa surat resmi. Tindakan yang benar adalah...",
    o: [
      "Memenuhi permintaan karena teman tersebut adalah aparat penegak hukum",
      "Memberikan informasi sebagian saja untuk membantu penyidikan",
      "Menolak dan menjelaskan bahwa harus melalui prosedur resmi pembukaan Rahasia Bank",
      "Memberikan data jika nasabah tersebut dikenal dekat oleh pegawai"
    ],
    a: 2
  },
  {
    q: "KPK meminta data nasabah yang masih berstatus saksi dalam perkara korupsi. Bank sebaiknya...",
    o: [
      "Langsung memberikan data karena permintaan datang dari KPK",
      "Menolak karena kewenangan KPK terkait nasabah yang sudah tersangka",
      "Memberikan hanya saldo tanpa mutasi",
      "Meminta persetujuan nasabah terlebih dahulu"
    ],
    a: 1
  },
  {
    q: "Penyidik pajak meminta informasi rekening nasabah untuk pemeriksaan pajak berdasarkan peraturan akses informasi keuangan. Bank...",
    o: [
      "Wajib memberikan informasi sesuai permintaan pejabat pajak yang berwenang",
      "Boleh menolak karena bertentangan dengan Rahasia Bank",
      "Hanya memberikan data jika nilai saldo di atas Rp1 miliar",
      "Hanya memberikan data jika nasabah setuju secara tertulis"
    ],
    a: 0
  },
  {
    q: "Subjek hukum adalah...",
    o: [
      "Setiap perjanjian yang dibuat secara tertulis",
      "Pihak-pihak yang dapat menerima hak dan dibebani kewajiban",
      "Setiap badan hukum yang mencari keuntungan",
      "Setiap orang yang berusia di atas 21 tahun"
    ],
    a: 1
  },
  {
    q: "Seseorang dianggap cakap hukum untuk membuat perjanjian jika...",
    o: [
      "Telah berusia dewasa menurut ketentuan",
      "Telah memiliki pekerjaan tetap dan penghasilan diatas UMR",
      "Telah memiliki NPWP dan KTP elektronik",
      "Telah menikah dan memiliki anak"
    ],
    a: 0
  },
  {
    q: "Orang yang ditaruh di bawah pengampuan menurut KUHPerdata adalah...",
    o: [
      "Anak yang masih di bawah 18 tahun",
      "Orang dewasa yang boros",
      "Orang dewasa yang tidak memiliki pekerjaan",
      "Orang yang belum memiliki KTP"
    ],
    a: 1
  },
  {
    q: "Perbedaan utama antara perwalian dan pengampuan adalah...",
    o: [
      "Perwalian untuk anak di bawah umur, pengampuan untuk orang boros",
      "Perwalian untuk orang boros, pengampuan untuk anak dibawah umur",
      "Perwalian diangkat oleh notaris, pengampuan oleh lurah",
      "Perwalian bersifat sementara, pengampuan selalu seumur hidup"
    ],
    a: 0
  },
  {
    q: "Badan sebagai subjek hukum minimal harus memiliki...",
    o: [
      "NPWP dan izin usaha",
      "Organisasi teratur",
      "Akta notaris dan rekening bank",
      "Modal disetor dan laporan keuangan tahunan"
    ],
    a: 1
  },
  {
    q: "Perseroan Terbatas (PT) memperoleh status badan hukum ketika...",
    o: [
      "Akta pendirian ditandatangani di hadapan notaris",
      "Perusahaan sudah berdiri diatas dari 60 tahun",
      "Telah didaftarkan dan memperoleh bukti pengesahan dari Kementerian",
      "Memiliki modal dasar dan modal disetor sesuai ketentuan"
    ],
    a: 2
  },
  {
    q: "Organ utama dalam PT yang berwenang mengubah anggaran dasar dan mengangkat direksi adalah...",
    o: [
      "Direksi",
      "Dewan Komisaris",
      "RUPS",
      "Komite Audit"
    ],
    a: 2
  },
  {
    q: "Direksi PT pada prinsipnya bertanggung jawab untuk...",
    o: [
      "Mengawasi kebijakan perseroan dan memberi nasihat",
      "Mengurus perseroan di dalam maupun luar pengadilan",
      "Menetapkan perubahan anggaran dasar tanpa persetujuan RUPS",
      "Mewakili kepentingan pemegang saham minoritas"
    ],
    a: 1
  },
  {
    q: "Dewan Komisaris dalam PT memiliki fungsi utama untuk...",
    o: [
      "Mengurus kegiatan operasional harian perseroan",
      "Memberi nasihat kepada Direksi",
      "Menandatangani seluruh kontrak perseroan",
      "Memberitahukan jika ada perubahan anggota direksi"
    ],
    a: 1
  },
  {
    q: "Pengalihan atau penjaminan kekayaan PT lebih dari 50% kekayaan bersih memerlukan...",
    o: [
      "Persetujuan tertulis dari Direksi saja",
      "Persetujuan Dewan Komisaris saja",
      "Persetujuan RUPS",
      "Persetujuan notaris dan Kementerian"
    ],
    a: 2
  },
  {
    q: "PT X mengalihkan 60% aset bersihnya sebagai jaminan kredit tanpa persetujuan RUPS. Secara hukum...",
    o: [
      "Tindakan sah karena direksi berwenang penuh mengurus perseroan",
      "Tindakan harus mendapatkan persetujuan RUPS",
      "Cukup mendapat persetujuan Dewan Komisaris",
      "Cukup diberitahukan kepada Kementerian Hukum dan HAM"
    ],
    a: 1
  },
  {
    q: "Koperasi memperoleh status badan hukum setelah...",
    o: [
      "Diumumkan dalam rapat anggota",
      "Akta pendirian disahkan oleh Kementerian dan diumumkan",
      "Memiliki jumlah anggota minimal sesuai ketentuan",
      "Memiliki SHU positif selama 1 tahun"
    ],
    a: 1
  },
  {
    q: "Organ tertinggi dalam koperasi yang memegang kekuasaan adalah...",
    o: [
      "Pengurus",
      "Pengawas",
      "Rapat Anggota",
      "Kementerian Koperasi"
    ],
    a: 2
  },
  {
    q: "Yayasan sebagai badan hukum didirikan dengan cara...",
    o: [
      "Perjanjian para pihak dengan membagi saham",
      "Memisahkan kekayaan untuk tujuan sosial",
      "Mendaftarkan nama yayasan ke kelurahan",
      "Membuat anggaran dasar yang disahkan pengadilan"
    ],
    a: 1
  },
  {
    q: "Perubahan anggaran dasar Yayasan mengenai nama dan kegiatan yayasan memerlukan...",
    o: [
      "Persetujuan lisan dari pembina yayasan",
      "Persetujuan Kementerian Hukum dan HAM",
      "Persetujuan notaris pembuat akta",
      "Hanya perlu diberitahukan kepada Kementerian tanpa persetujuan"
    ],
    a: 1
  },
  {
    q: "Persekutuan perdata adalah...",
    o: [
      "Persekutuan yang selalu berbadan hukum",
      "Perjanjian dua orang atau lebih untuk memasukkan sesuatu dengan maksud membagi keuntungan",
      "Perjanjian antara badan hukum dengan pemerintah",
      "Bentuk usaha yang hanya dapat dimiliki notaris"
    ],
    a: 1
  },
  {
    q: "Ciri utama dari Firma sebagai badan usaha yang bukan badan hukum adalah...",
    o: [
      "Tanggung jawab pesero terbatas pada modal setor",
      "Perusahaan dijalankan dengan nama bersama",
      "Harus memiliki minimal satu pesero komanditer",
      "Selalu berbentuk perseroan terbatas"
    ],
    a: 1
  },
  {
    q: "Dalam CV, pesero komplementer bertanggung jawab...",
    o: [
      "Terbatas hanya pada modal yang disetorkan",
      "Tanggung renteng dan tidak terbatas atas utang perseroan",
      "Tidak bertanggung jawab terhadap utang perseroan",
      "Hanya pada kerugian operasional tertentu"
    ],
    a: 1
  },
  {
    q: "Pesero komanditer dalam CV akan berubah menjadi bertanggung jawab tidak terbatas jika...",
    o: [
      "Mengundurkan diri dari CV",
      "Ikut menjalankan pengurusan perseroan",
      "Menambah modal setor",
      "Tidak menghadiri rapat pesero"
    ],
    a: 1
  },
  {
    q: "Syarat sahnya perjanjian menurut Pasal 1320 KUHPerdata yang termasuk syarat subjektif adalah...",
    o: [
      "Suatu hal tertentu dan sebab yang halal",
      "Kesepakatan para pihak dan kecakapan para pihak",
      "Kesepakatan para pihak dan suatu hal tertentu",
      "Kecakapan para pihak dan sebab yang halal"
    ],
    a: 1
  },
  {
    q: "Syarat sahnya perjanjian yang termasuk syarat objektif adalah...",
    o: [
      "Kesepakatan dan kecakapan",
      "Kesepakatan dan sebab yang halal",
      "Suatu hal tertentu dan sebab yang halal",
      "Kecakapan dan suatu hal tertentu"
    ],
    a: 2
  },
  {
    q: "Jika syarat subjektif tidak terpenuhi dalam suatu perjanjian, akibat hukumnya adalah...",
    o: [
      "Perjanjian batal demi hukum sejak awal",
      "Perjanjian dapat dimintakan pembatalan",
      "Perjanjian tetap sah tetapi tidak dapat dilaksanakan",
      "Perjanjian otomatis menjadi perjanjian lisan"
    ],
    a: 1
  },
  {
    q: "Jika syarat objektif tidak terpenuhi, misalnya objek perjanjian tidak halal, maka...",
    o: [
      "Perjanjian dapat diperbaiki melalui adendum",
      "Perjanjian dapat dimintakan pembatalan oleh salah satu pihak",
      "Perjanjian batal demi hukum dan dianggap tidak pernah ada",
      "Perjanjian tetap mengikat sepanjang disetujui para pihak"
    ],
    a: 2
  },
  {
    q: "Unsur yang dapat menyebabkan pembatalan perjanjian karena cacat kehendak adalah...",
    o: [
      "Kurangnya saksi dan meterai",
      "Paksaan, kekhilafan, atau penipuan",
      "Tidak adanya notaris dalam pembuatan perjanjian",
      "Tidak adanya pembayaran uang muka"
    ],
    a: 1
  },
  {
    q: "Samudra menandatangani perjanjian kredit karena diancam oleh fance. Dalam hal ini perjanjian...",
    o: [
      "Tetap sah karena ada tanda tangan debitur",
      "Dapat dimintakan pembatalan karena mengandung paksaan",
      "Batal demi hukum karena tidak ada objek perjanjian",
      "Tidak bisa diganggu gugat karena sudah berjalan"
    ],
    a: 1
  },
  {
    q: "Diah menandatangani perjanjian jual beli atas barang yang ia kira asli, ternyata palsu. Ini merupakan contoh...",
    o: [
      "Paksaan",
      "Penipuan",
      "Kekhilafan",
      "Perbuatan melawan hukum"
    ],
    a: 2
  },
  {
    q: "Jenis rekening perorangan adalah...",
    o: [
      "Rekening yang dimiliki badan hukum untuk kepentingan usaha",
      "Rekening yang dimiliki oleh satu orang atas namanya sendiri",
      "Rekening yang dimiliki dua orang atau lebih",
      "Rekening yang dimiliki oleh instansi pemerintah"
    ],
    a: 1
  },
  {
    q: "Rekening gabungan (joint account) dapat dimiliki oleh...",
    o: [
      "Hanya sesama perorangan",
      "Hanya sesama badan hukum",
      "Perorangan dengan badan hukum",
      "Hanya perorangan dan instansi pemerintah"
    ],
    a: 2
  },
  {
    q: "Rekening atas nama badan mencakup antara lain...",
    o: [
      "Instansi pemerintah dan koperasi",
      "Hanya PT dan yayasan",
      "Hanya badan hukum yang mencari laba",
      "Hanya badan hukum berbentuk PT"
    ],
    a: 0
  },
  {
    q: "Syarat umum pembukaan rekening untuk perorangan WNI antara lain...",
    o: [
      "KTP dan Dokumen perizinan",
      "Hanya perlu KTP asli tanpa formulir",
      "Hanya memerlukan surat keterangan kerja",
      "Cukup nomor telepon aktif dan email"
    ],
    a: 0
  },
  {
    q: "Perorangan asing yang ingin membuka rekening di bank harus menyerahkan...",
    o: [
      "Hanya paspor negara asal",
      "Paspor dan KITAS/KITAP",
      "Surat keterangan domisili dari RT/RW",
      "Fotokopi visa turis"
    ],
    a: 1
  },
  {
    q: "Perusahaan asing yang membuka rekening di Indonesia pada prinsipnya harus menyerahkan...",
    o: [
      "Akta pendirian perusahaan dan izin dari bank koresponden",
      "Deed of Establishment yang dilegalisasi",
      "Surat domisili dari kedutaan besar",
      "Deed of Establishment yang belum dilegalisasi"
    ],
    a: 1
  },
  {
    q: "Rekening dapat ditutup atas permintaan nasabah sendiri dengan cara...",
    o: [
      "Menelpon call center dan meminta saldo dipindahkan",
      "Mengisi formulir penutupan rekening dan menunjukkan identitas",
      "Mengirim pesan singkat ke cabang tanpa tanda tangan",
      "Membiarkan saldo menjadi nol selama 3 bulan"
    ],
    a: 1
  },
  {
    q: "Dalam penutupan rekening giro atas permintaan sendiri, pemilik rekening wajib...",
    o: [
      "Menyerahkan kartu ATM saja",
      "Mengembalikan bilyet giro yang belum digunakan",
      "Menyerahkan buku tabungan dan KTP",
      "Mendaftarkan ulang spesimen tanda tangan"
    ],
    a: 1
  },
  {
    q: "Nasabah ingin menutup rekening giro, tetapi masih ada cek yang beredar. Tindakan yang benar adalah...",
    o: [
      "Tetap menutup rekening tanpa syarat",
      "Menyediakan dana cukup di rekening khusus",
      "Memblokir seluruh cek yang beredar tanpa pemberitahuan",
      "Meminta nasabah menarik kembali semua cek yang beredar baru menutup rekening"
    ],
    a: 1
  },
  {
    q: "Penutupan rekening karena nasabah meninggal dunia mensyaratkan bank untuk terlebih dahulu...",
    o: [
      "Menutup otomatis seluruh rekening tanpa konfirmasi ahli waris",
      "Menentukan sendiri siapa ahli waris berdasarkan data KTP",
      "Memastikan siapa ahli waris berdasarkan Dokumen Keahliwarisan yang sah",
      "Mengalihkan saldo ke rekening pemerintah"
    ],
    a: 2
  },
  {
    q: "Yang dimaksud Harta Peninggalan nasabah di bank antara lain...",
    o: [
      "Hanya saldo tabungan dan giro",
      "Saldo tabungan/giro/deposito, efek di kustodian, dan barang di Safe Deposit Box",
      "Hanya agunan kredit yang belum lunas",
      "Hanya usaha yang dimiliki nasabah di luar bank"
    ],
    a: 1
  },
  {
    q: "Penyerahan Harta Peninggalan kepada ahli waris pada prinsipnya dilakukan...",
    o: [
      "Kepada salah satu ahli waris saja sebagai wakil keluarga tanpa kuasa",
      "Kepada seluruh ahli waris secara bersama sesuai Dokumen Keahliwarisan",
      "Kepada ahli waris tertua saja",
      "Kepada ahli waris yang alamatnya sama dengan pewaris"
    ],
    a: 1
  },
  {
    q: "Jika salah satu ahli waris berhalangan hadir saat penyerahan Harta Peninggalan, maka...",
    o: [
      "Bank menunda penyerahan sampai semua hadir",
      "Ahli waris yang berhalangan membuat surat kuasa kepada ahli waris lain",
      "Bank membagikan bagian ahli waris yang berhalangan kepada ahli waris lain",
      "Bank langsung menyetor ke kas negara"
    ],
    a: 1
  },
  {
    q: "Dokumen pendukung umum yang diminta bank selain Dokumen Keahliwarisan antara lain...",
    o: [
      "Akta Kelahiran ahli waris dan kartu keluarga saja",
      "Akta Kematian, Akta Perkawinan/Buku Nikah, Akta Kelahiran ahli waris, identitas ahli waris, dan KK (jika ada)",
      "Surat keterangan domisili RT/RW",
      "Surat pernyataan bermeterai tanpa dokumen resmi"
    ],
    a: 1
  },
  {
    q: "Pengecualian Dokumen Keahliwarisan dapat diberlakukan jika...",
    o: [
      "Nilai Harta Peninggalan di bawah Rp5 juta",
      "Ahli waris hanya satu orang",
      "Nasabah meninggal di luar negeri",
      "Saldo rekening hanya berbentuk deposito"
    ],
    a: 0
  },
  {
    q: "Saldo tabungan pewaris adalah Rp3 juta, ahli waris adalah istri dan dua anak, tidak ada sengketa. Untuk pencairan...",
    o: [
      "Harus ada putusan pengadilan tentang pembagian waris",
      "Cukup dokumen pendukung tanpa Dokumen Keahliwarisan",
      "Tetap harus Akta Waris dari notaris",
      "Harus ada surat keterangan camat sebagai Akta Waris"
    ],
    a: 1
  },
  {
    q: "Pewaris WNI keturunan Tionghoa dengan Harta Peninggalan ≤ Rp100 juta dan tidak ada sengketa. Salah satu Dokumen Keahliwarisan yang dapat dipakai adalah...",
    o: [
      "Surat pernyataan ahli waris di bawah tangan tanpa legalisasi",
      "Akta Keterangan Waris dari notaris atau Akta dari Pengadilan Negeri/Pengadilan Agama (tergantung agama)",
      "Putusan Pengadilan Negeri yang selalu wajib",
      "Surat Keterangan Waris dari RT/RW"
    ],
    a: 1
  },
  {
    q: "Pewaris WNI pribumi beragama Islam, Harta Peninggalan ≤ Rp100 juta, tidak ada sengketa. Dokumen Keahliwarisan yang dapat digunakan antara lain...",
    o: [
      "Akta waris dari notaris negara asal",
      "Surat pernyataan ahli waris yang diketahui lurah/kepala desa dan camat, atau Akta Pengadilan Agama",
      "Hanya legal opinion dari konsultan hukum",
      "Akta kelahiran semua ahli waris saja"
    ],
    a: 1
  },
  {
    q: "Pewaris WNI keturunan Tionghoa dengan Harta Peninggalan > Rp100 juta dan tidak ada sengketa. Dokumen Keahliwarisan yang tepat adalah...",
    o: [
      "Surat pernyataan ahli waris yang diketahui RT/RW",
      "Akta Pembagian Waris dari Pengadilan Agama",
      "Akta Keterangan Waris dari notaris atau Akta Pertolongan Pembagian Waris dari Pengadilan Agama (bagi yang beragama Islam)",
      "Cukup Akta Kematian dari catatan sipil"
    ],
    a: 2
  },
  {
    q: "Pewaris WNI pribumi tidak beragama Islam, Harta Peninggalan > Rp100 juta dan tidak ada sengketa. Dokumen Keahliwarisan yang digunakan adalah...",
    o: [
      "Akta Keterangan Waris dari Balai Harta Peninggalan atau Akta Keterangan Waris di bawah tangan yang dilegalisasi Ketua Pengadilan Negeri",
      "Surat pernyataan ahli waris tanpa legalisasi",
      "Putusan Pengadilan Agama",
      "Legal opinion dari kantor hukum"
    ],
    a: 0
  },
  {
    q: "Jika terdapat sengketa di antara para ahli waris, maka Dokumen Keahliwarisan yang digunakan pada prinsipnya adalah...",
    o: [
      "Surat pernyataan ahli waris yang disepakati sebagian besar ahli waris",
      "Surat Keterangan Waris dari lurah",
      "Putusan Pengadilan",
      "Akta waris dari notaris tanpa putusan pengadilan"
    ],
    a: 2
  },
  {
    q: "Untuk pewaris Warga Negara Asing dengan Harta Peninggalan ≤ Rp100 juta dan tidak ada sengketa, Dokumen Keahliwarisan yang mungkin digunakan adalah...",
    o: [
      "Legal opinion dari Konsultan Hukum di negara asal pewaris atau Akta Keterangan Waris yang dilegalisasi pejabat setempat",
      "Surat pernyataan ahli waris lisan di depan bank",
      "Surat rekomendasi dari kedutaan besar",
      "KTP sementara yang diterbitkan bank"
    ],
    a: 0
  },
  {
    q: "Semua ahli waris sepakat menunjuk satu orang untuk menerima Harta Peninggalan di bank. Prosedur yang benar adalah...",
    o: [
      "Bank hanya berhubungan dengan ahli waris tertunjuk tanpa kuasa tertulis",
      "Seluruh ahli waris memberikan surat kuasa tertulis kepada yang ditunjuk",
      "Bank menerbitkan rekening baru atas nama bank",
      "Bank menolak penunjukan dan tetap membagi kepada masing-masing"
    ],
    a: 1
  },
  {
    q: "Jenis rekening yang dimiliki bersama oleh badan hukum dan perorangan adalah...",
    o: [
      "Hanya rekening badan hukum",
      "Hanya joint account perorangan",
      "Joint account antara badan hukum dan perorangan",
      "Tidak diperbolehkan oleh ketentuan"
    ],
    a: 2
  },
  {
    q: "Rekening tabungan dibuka atas nama 'Amir Bdn Toko Asia'. Rekening ini termasuk...",
    o: [
      "Rekening badan hukum berbentuk PT",
      "Rekening perorangan dengan mencantumkan nama dagang",
      "Rekening joint antara Amir dan Toko Asia",
      "Rekening badan yang terdaftar di Kementerian"
    ],
    a: 1
  },
  {
    q: "Salah satu alasan utama bank membutuhkan Dokumen Keahliwarisan adalah...",
    o: [
      "Untuk menentukan saldo rekening terakhir nasabah",
      "Untuk menentukan siapa pemegang hak atas Harta Peninggalan nasabah secara sah",
      "Untuk melaporkan pajak penghasilan ahli waris",
      "Untuk menutup semua rekening nasabah segera"
    ],
    a: 1
  },
  {
    q: "Saldo rekening pewaris Rp40 juta, tidak ada sengketa. Dokumen Keahliwarisan yang diminta bank untuk WNI pribumi beragama Islam biasanya...",
    o: [
      "Selalu putusan pengadilan agama tanpa kecuali",
      "Bisa Akta Pertolongan Pembagian Waris/akta pengadilan atau surat pernyataan ahli waris yang diketahui lurah/kepala desa dan camat sesuai matriks keahliwarisan",
      "Cukup Kartu Keluarga dan Akta Kematian",
      "Surat pernyataan ahli waris tanpa saksi"
    ],
    a: 1
  },
  {
    q: "Dalam konteks pembukaan rekening, syarat usia 17 tahun biasanya dikaitkan dengan...",
    o: [
      "Kewajiban memiliki kartu keluarga",
      "Kewajiban memiliki KTP dan kecakapan hukum",
      "Kewajiban menjadi wajib pajak",
      "Kewajiban membuka rekening bank"
    ],
    a: 1
  },
  {
    q: "Seorang siswa berusia 16 tahun ingin membuka rekening atas namanya sendiri. Bank sebaiknya...",
    o: [
      "Menolak karena belum dewasa dan tidak boleh punya rekening",
      "Meminta pendampingan orang tua/wali",
      "Tetap membuka tanpa syarat karena usia tidak penting",
      "Mewajibkan siswa membuat akta pengampuan"
    ],
    a: 1
  },
  {
    q: "Dalam PT, perubahan susunan direksi harus...",
    o: [
      "Diberitahukan kepada Kementerian",
      "Dilaporkan ke kantor pajak setempat",
      "Disetujui BI dan OJK",
      "Didaftarkan ke pengadilan negeri"
    ],
    a: 0
  },
  {
    q: "Pembubaran PT yang diikuti likuidasi mengakibatkan...",
    o: [
      "Status badan hukum hilang seketika sejak keputusan RUPS",
      "Perseroan tetap berstatus badan hukum sampai likuidasi selesai dan dipertanggungjawabkan",
      "Perseroan tidak boleh lagi melakukan perbuatan hukum apapun termasuk untuk likuidasi",
      "Kewajiban kepada kreditor otomatis hapus"
    ],
    a: 1
  },
  {
    q: "Pada setiap surat keluar perseroan sejak dibubarkan dan dalam proses likuidasi wajib dicantumkan...",
    o: [
      "Nama likuidator di belakang nama perseroan",
      "Tanggal pembubaran perseroan",
      "Kata 'dalam likuidasi' di belakang nama perseroan",
      "Nomor putusan pengadilan"
    ],
    a: 2
  },
  {
    q: "Setelah RUPS memutuskan pembubaran PT, likuidator belum mengumumkan pembubaran di surat kabar maupun Berita Negara. Akibatnya...",
    o: [
      "Pembubaran tetap mengikat pihak ketiga",
      "Pembubaran belum berlaku bagi pihak ketiga sampai pengumuman dilakukan",
      "Perseroan langsung kehilangan status badan hukum",
      "Likuidator dapat dipidana tanpa proses lanjut"
    ],
    a: 1
  },
  {
    q: "Kewajiban bank dalam menjaga Rahasia Bank juga berlaku terhadap pihak yang memberikan jasa kepada bank seperti...",
    o: [
      "Hanya akuntan publik",
      "Akuntan publik",
      "Hanya konsultan hukum yang ditunjuk",
      "Hanya vendor teknologi informasi"
    ],
    a: 1
  },
  {
    q: "Konsultan hukum eksternal diminta bank untuk menangani perkara perdata terkait nasabah. Konsultan hukum tersebut...",
    o: [
      "Bebas mengungkapkan data nasabah kepada pihak lain sepanjang untuk kepentingan perkara",
      "Terikat kewajiban menjaga Rahasia Bank sebagai pihak pemberi jasa kepada bank",
      "Hanya terikat oleh kode etik profesi, bukan Rahasia Bank",
      "Tidak boleh mengetahui data nasabah sama sekali"
    ],
    a: 1
  },
  {
    q: "Seorang pegawai bank menolak memberikan informasi saldo rekening kepada suami dari nasabah penyimpan tanpa surat kuasa. Sikap pegawai tersebut...",
    o: [
      "Salah, karena suami berhak tahu saldo istrinya",
      "Benar, karena Rahasia Bank melekat pada nasabah penyimpan, bukan pada keluarga",
      "Salah, karena keluarga inti termasuk pengecualian",
      "Benar hanya jika saldo di atas Rp1 miliar"
    ],
    a: 1
  },
  {
    q: "Nasabah memberikan kuasa tertulis kepada saudaranya untuk memperoleh informasi rekening. Bank...",
    o: [
      "Tetap tidak boleh memberikan informasi karena Rahasia Bank",
      "Boleh memberikan informasi sesuai ruang lingkup kuasa tertulis",
      "Hanya boleh memberikan informasi saldo tanpa mutasi",
      "Harus meminta persetujuan OJK terlebih dahulu"
    ],
    a: 1
  },
  {
    q: "Dua nasabah memiliki joint account 'A dan B'. A datang sendiri dan meminta penutupan rekening tanpa tanda tangan B. Kebijakan yang aman adalah...",
    o: [
      "Menutup rekening karena salah satu pemilik sudah setuju",
      "Meminta persetujuan dan/atau tanda tangan sesuai kesepakatan jenis joint account (misal 'dan' atau 'atau')",
      "Menolak karena joint account tidak boleh ditutup",
      "Mengizinkan penutupan jika saldo nol"
    ],
    a: 1
  },
  {
    q: "Dalam konteks Rahasia Bank, informasi yang boleh dibuka tanpa izin OJK antara lain adalah...",
    o: [
      "Kepada ahli waris nasabah penyimpan yang telah meninggal dunia",
      "Kepada teman dekat nasabah jika dapat dipercaya",
      "Kepada sesama pegawai bank yang ingin tahu",
      "Kepada media massa yang meminta konfirmasi"
    ],
    a: 0
  },
  {
    q: "Nasabah menggugat bank secara perdata terkait dana di rekeningnya. Dalam persidangan, direksi bank...",
    o: [
      "Tetap wajib merahasiakan keadaan keuangan nasabah dan tidak boleh memberi keterangan",
      "Boleh memberikan keterangan mengenai keadaan keuangan nasabah terkait perkara tersebut",
      "Hanya boleh memberi keterangan jika nasabah mencabut gugatan",
      "Harus meminta izin tertulis nasabah penyimpan lagi"
    ],
    a: 1
  },
  {
    q: "Dua nasabah bersengketa di pengadilan dan memerlukan data rekening salah satu pihak. Direksi bank hanya dapat memberikan keterangan...",
    o: [
      "Jika ada permintaan dari ketua pengadilan negeri",
      "Jika diminta oleh pengacara salah satu pihak",
      "Jika diminta lisan oleh hakim",
      "Jika diminta oleh jaksa penuntut umum"
    ],
    a: 0
  },
  {
    q: "Pembukaan rekening oleh badan hukum umumnya mensyaratkan adanya...",
    o: [
      "Akta pendirian",
      "Surat pernyataan berdiri di atas materai",
      "Surat keterangan domisili dari RT/RW",
      "Surat rekomendasi dari notaris"
    ],
    a: 0
  },
  {
    q: "Sebuah yayasan ingin membuka rekening. Dokumen yang paling relevan adalah...",
    o: [
      "Akta pendirian yayasan yang telah disahkan sebagai badan hukum",
      "Surat keterangan pendirian yayasan yang diketahui oleh tokoh masyarakat setempat",
      "Surat rekomendasi kelembagaan yang menerangkan kegiatan yayasan dari institusi terkait",
      "Dokumen internal yayasan yang mengatur struktur dan kegiatan tanpa akta pendirian"
    ],
    a: 0
  },
  {
  q: "Pemberian kuasa dalam konteks perbankan pada prinsipnya adalah...",
  o: [
    "Pelimpahan kewenangan dari bank kepada nasabah",
    "Pelimpahan wewenang dari seseorang kepada pihak lain untuk bertindak atas namanya",
    "Perjanjian sepihak yang berlaku otomatis",
    "Hubungan hukum antara bank dan regulator"
  ],
  a: 1
},
  {
  q: "Kuasa untuk melakukan penarikan dana rekening pada umumnya harus...",
  o: [
    "Disampaikan secara lisan kepada teller",
    "Dibuat secara tertulis dan ditandatangani pemberi kuasa",
    "Cukup melalui pesan elektronik",
    "Disampaikan oleh saksi keluarga"
  ],
  a: 1
},
  {
  q: "Kuasa yang diberikan untuk kepentingan penerima kuasa sendiri disebut...",
  o: [
    "Kuasa umum",
    "Kuasa khusus",
    "Kuasa mutlak",
    "Kuasa sementara"
  ],
  a: 2
},
  {
  q: "Bank pada prinsipnya tidak menerima kuasa mutlak karena...",
  o: [
    "Bertentangan dengan kebiasaan perbankan",
    "Berpotensi meniadakan hak pemberi kuasa",
    "Tidak dikenal dalam hukum perdata",
    "Tidak memiliki kekuatan pembuktian"
  ],
  a: 1
},
  {
  q: "Kuasa yang hanya berlaku untuk satu tindakan hukum tertentu disebut...",
  o: [
    "Kuasa umum",
    "Kuasa khusus",
    "Kuasa mutlak",
    "Kuasa bebas"
  ],
  a: 1
},
  {
  q: "Kuasa yang diberikan untuk mengurus segala kepentingan pemberi kuasa disebut...",
  o: [
    "Kuasa sementara",
    "Kuasa khusus",
    "Kuasa umum",
    "Kuasa mutlak"
  ],
  a: 2
},
  {
  q: "Cek kosong adalah cek yang...",
  o: [
    "Tidak ditandatangani penarik",
    "Dananya tidak tersedia atau tidak cukup saat diajukan",
    "Belum diisi tanggal penarikan",
    "Sudah kedaluwarsa masa berlakunya"
  ],
  a: 1
},
  {
  q: "Bilyet giro kosong terjadi apabila...",
  o: [
    "Tidak mencantumkan nama penerima",
    "Saldo rekening tidak mencukupi saat pemindahbukuan",
    "Tidak dibubuhi cap perusahaan",
    "Tidak disertai surat kuasa"
  ],
  a: 1
},
  {
  q: "Perbedaan utama antara cek dan bilyet giro adalah...",
  o: [
    "Cek dapat diuangkan tunai, bilyet giro melalui pemindahbukuan",
    "Cek hanya untuk badan hukum",
    "Bilyet giro selalu atas unjuk",
    "Cek tidak memerlukan tanda tangan"
  ],
  a: 0
},
  {
  q: "Bank dapat menolak pembayaran cek apabila...",
  o: [
    "Tanggal penarikan belum lewat",
    "Dana tidak tersedia atau cek diblokir",
    "Nama penerima ditulis lengkap",
    "Cek masih dalam masa berlaku"
  ],
  a: 1
},
  {
  q: "Penarikan cek kosong oleh nasabah dapat mengakibatkan...",
  o: [
    "Penutupan otomatis semua rekening",
    "Sanksi administratif sesuai ketentuan yang berlaku",
    "Pembatalan seluruh transaksi sebelumnya",
    "Penghapusan kewajiban nasabah"
  ],
  a: 1
},
  {
  q: "Pencantuman nasabah dalam daftar hitam penarik cek kosong bertujuan untuk...",
  o: [
    "Menghukum nasabah secara pidana",
    "Memberi efek jera dan menjaga sistem pembayaran",
    "Menghapus seluruh kewajiban bank",
    "Mengalihkan tanggung jawab kepada penerima cek"
  ],
  a: 1
},
  {
  q: "Penarikan bilyet giro kosong pada prinsipnya merupakan...",
  o: [
    "Pelanggaran administratif di bidang sistem pembayaran",
    "Perbuatan pidana otomatis",
    "Wanprestasi yang selalu batal demi hukum",
    "Perbuatan melawan hukum tanpa pengecualian"
  ],
  a: 0
},
  {
  q: "Nasabah yang menarik cek kosong berulang kali dapat dikenakan...",
  o: [
    "Penutupan rekening giro dan sanksi sesuai ketentuan",
    "Pembekuan seluruh rekening tabungan",
    "Pencabutan kewarganegaraan",
    "Larangan membuka rekening di luar negeri"
  ],
  a: 0
},
  {
  q: "Bank wajib melaporkan penarikan cek atau bilyet giro kosong kepada...",
  o: [
    "Otoritas sistem pembayaran sesuai ketentuan",
    "Kepolisian setempat",
    "Pengadilan negeri",
    "Kantor pajak"
  ],
  a: 0
},
  {
  q: "Dalam praktik perbankan, tujuan utama pengaturan cek dan bilyet giro kosong adalah...",
  o: [
    "Melindungi kepentingan bank semata",
    "Menjaga kepercayaan dan kelancaran lalu lintas pembayaran",
    "Membatasi hak nasabah dalam bertransaksi",
    "Menghapus risiko hukum sepenuhnya"
  ],
  a: 1
},
]

export default questions;