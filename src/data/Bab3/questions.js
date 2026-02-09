const questions = [
  {
    q: "Berikut adalah yang tidak terdapat pada bagian depan kartu BCA Visa Corporate",
    o: [
      "Print logo perusahaan",
      "Magnetic stripe",
      "Nama pemegang kartu",
      "EMV Compliance Chip"
    ],
    a: 1
  },
  {
    q: "Berikut adalah ketentuan pembayaran yang ada di Kartu Kredit, kecuali",
    o: [
      "Pembayaran minimum 10 persen dari total tagihan",
      "Mencantumkan nomor customer dalam pembayaran",
      "Dibayar setelah jatuh tempo",
      "Debet rekening memiliki 4 pilihan"
    ],
    a: 2
  },
  {
    q: "Berikut adalah keunggulan Reward BCA bagi Cardholder yang benar",
    o: [
      "Menciptakan loyalty customer",
      "Dapat digunakan untuk transaksi apapun",
      "Menambah sales volume",
      "Gratis biaya sewa EDC"
    ],
    a: 1
  },
  {
    q: "Berikut ini adalah keunggulan dari BCA Everyday Card, kecuali",
    o: [
      "Bunga cicilan BCA 0,5%/bulan untuk tenor 3 bulan",
      "Cash back 5% di SPBU",
      "Reward BCA lebih besar",
      "Cash back 5% di Hipermarket"
    ],
    a: 0
  },
  {
    q: "Berikut ini adalah salah satu syarat pengajuan BCA Smartcash, kecuali",
    o: [
      "Omzet minimal Rp 30 juta per bulan",
      "Merupakan warga Negara Indonesia",
      "Memiliki usaha yang sudah berjalan 2 tahun",
      "Batas usia minimum 21 tahun dan maksimum 66 tahun"
    ],
    a: 3
  },
  {
    q: "Untuk pelunasan KKB lebih dari 1 tahun maka akan dikenakan biaya penalti sebesar",
    o: [
      "1.000.000",
      "500.000",
      "0",
      "750.000"
    ],
    a: 2
  },
  {
    q: "Berikut adalah hal - hal terkait KKB yang benar",
    o: [
      "Survei wajib dilakukan",
      "Karakter debitur Interest Sensitive",
      "Dijual di dealer",
      "Hanya untuk beli mobil"
    ],
    a: 1
  },
  {
    q: "Pada proses mobil bekas/refinancing, saat dilakukan tanda tangan kontrak, maka dilakukan juga",
    o: [
      "Foto Mobil",
      "Analisa dan Survey",
      "Pemeriksaan Dokumen",
      "Blokir BPKB"
    ],
    a: 0
  },
  {
    q: "Apabila nasabah ingin membutuhkan dana tunai untuk kebutuhan konsumtif maupun modal kerja, maka jenis KKB yang tepat adalah",
    o: [
      "Car Ownership Program",
      "Refinancing",
      "Reguler",
      "Operational Car"
    ],
    a: 1
  },
  {
    q: "Di bawah ini merupakan manfaat COP bagi perusahaan, kecuali",
    o: [
      "Proses cepat, aman dan terpercaya",
      "Biaya operasional perusahaan turun",
      "Meningkatkan loyalitas karyawan perusahaan",
      "Aset perusahaan dalam bentuk kendaraan berkurang"
    ],
    a: 0
  },

  {
    q: "Apabila nasabah memiliki kebutuhan kendaraan operasional perusahaan, maka produk KKB yang cocok adalah",
    o: [
      "Refinancing",
      "Operational Car",
      "Regular Financing",
      "COP"
    ],
    a: 1
  },
  {
    q: "Keunggulan KKB BCA yang tidak tepat adalah",
    o: [
      "Bayar angsuran melalui autodet rekening BCA",
      "Proses cepat",
      "Bebas biaya administrasi",
      "Suku bunga kompetitif"
    ],
    a: 2
  },
  {
    q: "Apabila nasabah memiliki kebutuhan dana tunai, maka produk KKB yang cocok adalah",
    o: [
      "Regular Financing",
      "COP",
      "Operational Car",
      "Refinancing"
    ],
    a: 3
  },
  {
    q: "Nasabah yang tidak dikenal oleh cabang termasuk dalam",
    o: [
      "Cluster A",
      "Cluster D",
      "Cluster C",
      "Cluster B"
    ],
    a: 2
  },
  {
    q: "Yang dimaksud dengan NMA pada analisa awal KPR BCA adalah",
    o: [
      "Nilai Maksimum Agunan",
      "Nilai Minimum Angsuran",
      "Nilai Minimum Agunan",
      "Nilai Maksimum Angsuran"
    ],
    a: 3
  },
  {
    q: "Berikut yang termasuk benefit KPR BCA yang benar adalah",
    o: [
      "Rasio angsuran sampai dengan 70%",
      "Developer kerjasama BCA",
      "Tidak bisa top up untuk refinancing",
      "Jangka waktu pinjaman sampai dengan 25 tahun"
    ],
    a: 1
  },
  {
    q: "Berikut yang tidak termasuk benefit KPR BCA adalah",
    o: [
      "Suku bunga floating yang rendah dan stabil",
      "Suku bunga kompetitif",
      "Developer tidak kerjasama BCA",
      "Tidak ada penalti"
    ],
    a: 2
  },
  {
    q: "Persyaratan umum KPR BCA yang tidak benar adalah",
    o: [
      "Professional, pengalaman minimal 2 tahun",
      "Sertifikat hak milik atas satuan rumah susun untuk apartemen",
      "Usia maks nasabah pada saat jatuh tempo kredit adalah 65 tahun untuk pengusaha",
      "Pengusaha dengan usaha sudah berjalan minimal 3 tahun"
    ],
    a: 3
  },
  {
    q: "Salah satu cara pembayaran Angsuran KPR BCA adalah berikut ini, kecuali",
    o: [
      "Angsuran Tetap + Refinancing",
      "Angsuran Tetap",
      "Angsuran Tetap + Angsuran Fleksibel",
      "Angsuran Tetap + Dana Siaga"
    ],
    a: 0
  },
  {
    q: "Nasabah yang dapat mengajukan KPR dengan plafon dibawah 250 juta adalah yang memenuhi kriteria sebagai berikut, kecuali",
    o: [
      "Nasabah mengambil developer yang tidak kerjasama dengan BCA",
      "Karyawan BCA",
      "Nasabah prioritas",
      "Nasabah solitaire"
    ],
    a: 0
  },

  {
    q: "Untuk KPPR, kondisi yang berlaku untuk melakukan renovasi rumah adalah",
    o: [
      "Bangun baru (kondisi bangunan minimal 50 persen)",
      "Pengurangan luas bangunan",
      "Tidak berlaku untuk ruko dan apartemen",
      "Tidak merombak sebagian atau seluruhnya"
    ],
    a: 2
  },
  {
    q: "Persyaratan umum KPR BCA yang benar adalah",
    o: [
      "Karyawan bekerja minimal 3 tahun",
      "Pengusaha dengan usaha sudah berjalan minimal 2 tahun",
      "WNI minimal 17 tahun",
      "Asuransi kebakaran tidak wajib untuk semua tenor"
    ],
    a: 1
  },
  {
    q: "Berikut adalah ketentuan KPR Xtra BCA, kecuali",
    o: [
      "Sistem pembayaran autodebet",
      "Wajib buka rekening giro",
      "Tenor paling lama adalah 20 tahun",
      "Plafon minimal adalah 250 juta"
    ],
    a: 2
  },
  {
    q: "Untuk KPPR, berikut adalah kondisi yang berlaku untuk renovasi rumah, kecuali",
    o: [
      "Bangun baru (kondisi bangunan minimal 20 persen)",
      "Berlaku untuk ruko dan apartemen",
      "Penambahan luas bangunan",
      "Merombak sebagian atau seluruhnya"
    ],
    a: 1
  },
  {
    q: "Apabila nasabah ingin melakukan klaim asuransi terkait pinjamannya di KSM, maka yang dapat dilakukan oleh nasabah adalah",
    o: [
      "Menghubungi Halo BCA",
      "Mendatangi CSO BCA",
      "Menghubungi Hotline CSF",
      "Mendatangi kantor asuransi"
    ],
    a: 2
  },
  {
    q: "Suatu perusahaan menggunakan KlikBCA Bisnis dan ingin mengetahui fitur non finansial yang tersedia. Manakah yang termasuk fitur non finansial di KlikBCA Bisnis?",
    o: [
      "Transfer dana antar bank",
      "Pembayaran B2B Pertamina",
      "BCA Virtual Account dan pengelolaan user",
      "OR ke luar negeri"
    ],
    a: 2
  },
  {
    q: "Berikut ini merupakan pernyataan yang benar mengenai KSM, kecuali",
    o: [
      "Nasabah dapat melakukan proses pelunasan dipercepat",
      "KSM dapat memfasilitasi pembiayaan untuk pengajuan lebih dari satu tetapi dengan merk dan tipe yang sama",
      "Nasabah tidak perlu mencari ketersediaan motor di dealer",
      "Nasabah dapat memilih warna untuk unit yang diambil"
    ],
    a: 1
  },
  {
    q: "Berikut ini merupakan keunggulan dari KSM, kecuali",
    o: [
      "Merk dan tipe motor di KSM BCA terbatas",
      "Proses pengajuan mudah",
      "Aman dan terpecaya",
      "Jaminan angsuran ringan dan tetap selama masa kredit"
    ],
    a: 0
  },
  {
    q: "Apabila melakukan pelunasan dipercepat, maka KSM akan membebaskan biaya penalti setelah angsuran ke",
    o: [
      "3",
      "6",
      "5",
      "4"
    ],
    a: 1
  },
  {
    q: "Berikut ini merupakan channel pengajuan kartu kredit, kecuali",
    o: [
      "Video banking",
      "Call center",
      "Web Online",
      "e-Branch"
    ],
    a: 1
  },

  {
    q: "Ketentuan yang benar terkait Reward BCA kecuali",
    o: [
      "Jumlah reward bisa dilihat di Merchant Reward",
      "Dapat di redeem dengan iuran tahunan",
      "Besar Reward tetap yaitu 0.2 persen",
      "Reward dalam bentuk Rupiah"
    ],
    a: 2
  },
  {
    q: "Galih ingin menghubungi HaloBCA untuk melaporkan kartu kreditnya hilang, namun tidak memiliki pulsa telepon. Ia hanya memiliki koneksi internet. Kanal mana yang paling tepat dan efisien untuk ia gunakan?",
    o: [
      "Telepon HaloBCA Reguler 1500888",
      "WhatsApp Chat HaloBCA",
      "VIRA di LINE",
      "eBranch"
    ],
    a: 1
  },
  {
    q: "Nasabah yang memiliki 1 dari 6 Produk BCA (Tabungan, Giro, Kartu Kredit, Bancassurance, KPR, KKB) termasuk dalam",
    o: [
      "Cluster C",
      "Cluster A",
      "Cluster B",
      "Cluster Semi B"
    ],
    a: 3
  },
  {
    q: "Untuk pelunasan KKB lebih dari 1 tahun maka akan dikenakan biaya penalti sebesar",
    o: [
      "0",
      "1.000.000",
      "750.000",
      "500.000"
    ],
    a: 0
  },
  {
    q: "Jangka waktu maksimal dalam pinjaman KKB adalah selama ... Tahun",
    o: [
      "10",
      "5",
      "6",
      "15"
    ],
    a: 2
  },
  {
    q: "Apabila nasabah ingin memiliki mobil impian dengan cepat dan mudah, maka jenis KKB yang tepat adalah",
    o: [
      "Operational Car",
      "Refinancing",
      "Car Ownership Program",
      "Reguler"
    ],
    a: 3
  },
  {
    q: "Seorang karyawan swasta berusia 22 tahun, belum menikah, ingin mengajukan pembiayaan sepeda motor baru melalui skema KSM Reguler. Berdasarkan ketentuan usia pemohon KSM, kondisi berikut yang paling menentukan apakah pengajuan dapat diproses adalah …",
    o: [
      "Status pekerjaan sebagai karyawan tetap",
      "Usia minimal 21 tahun untuk pemohon belum menikah",
      "Memiliki rekening BCA aktif",
      "Motor yang dipilih termasuk kategori motor umum"
    ],
    a: 1
  },
  {
    q: "Sebuah perusahaan ingin mengajukan pembiayaan motor untuk keperluan operasional kantor dengan jumlah 4 unit dan akan digunakan oleh beberapa karyawan. Skema KSM yang paling tepat digunakan dalam kasus tersebut adalah …",
    o: [
      "Retail karena pengajuan dilakukan oleh perusahaan",
      "Multiguna karena melibatkan lebih dari satu unit",
      "Fleet karena jumlah unit minimal dan tujuan operasional",
      "KSM Reguler karena motor baru"
    ],
    a: 2
  },
  {
    q: "Nasabah BCA mengajukan KSM Multiguna dengan jaminan BPKB motor. Berdasarkan ketentuan produk, batas maksimal pencairan dana yang dapat diberikan adalah …",
    o: [
      "100% dari nilai motor",
      "90% dari hasil analisa dan tipe motor",
      "85% dari harga pasar kendaraan",
      "Sesuai kesepakatan antara dealer dan nasabah"
    ],
    a: 1
  },
  {
    q: "Seorang nasabah mengajukan Kartu Kredit BCA dan secara otomatis menerima satu jenis kartu tanpa dapat memilih jaringan pembayaran internasional. Kartu yang dimaksud adalah …",
    o: [
      "BCA Card",
      "BCA Visa",
      "BCA Mastercard",
      "BCA American Express"
    ],
    a: 0
  },
  {
    q: "Seorang cardholder BCA memiliki kartu yang mewajibkan pembayaran tagihan 100% tanpa minimum payment dan tidak dikenakan bunga, hanya denda keterlambatan. Jenis kartu tersebut adalah …",
    o: [
      "BCA Visa Black",
      "BCA Mastercard World",
      "BCA American Express Platinum",
      "BCA Platinum Batik"
    ],
    a: 2
  },
  {
    q: "Nasabah mengajukan Kartu Kredit BCA melalui cabang dan telah disetujui. Tahapan yang terjadi setelah kartu dicetak sebelum dapat digunakan untuk transaksi adalah …",
    o: [
      "Pengiriman PIN ke email nasabah",
      "Aktivasi kartu dan PIN melalui BCA mobile, ATM, atau website",
      "Pembuatan rekening kartu kredit terpisah",
      "Konfirmasi ulang data oleh telemarketing"
    ],
    a: 1
  },
  {
    q: "Seorang wiraswasta ingin mengajukan KPR BCA untuk pembelian ruko yang akan digunakan sebagai tempat usaha. Ketentuan plafon kredit yang berlaku adalah …",
    o: [
      "Minimal Rp 100 juta tanpa batas maksimal",
      "Minimal Rp 250 juta dan maksimal Rp 15 miliar",
      "Minimal mengikuti harga appraisal properti",
      "Tidak memiliki batas minimal selama agunan mencukupi"
    ],
    a: 1
  },
  {
    q: "Nasabah KPR BCA memilih skema bunga di mana angsuran dibayarkan satu bulan setelah realisasi kredit. Istilah yang tepat untuk skema tersebut adalah …",
    o: [
      "Floating",
      "Fix",
      "Cap",
      "In arrear"
    ],
    a: 3
  },
  {
    q: "Seorang pemohon KPR BCA berusia 64 tahun saat pengajuan dan memiliki tenor kredit 2 tahun. Berdasarkan ketentuan usia maksimal saat kredit berakhir, kondisi ini …",
    o: [
      "Tidak dapat diproses karena melebihi batas usia",
      "Dapat diproses karena usia saat jatuh tempo masih memenuhi",
      "Hanya dapat diproses dengan penjamin tambahan",
      "Wajib menggunakan skema KPR Xtra"
    ],
    a: 1
  },
  {
    q: "Dalam analisa KPR BCA, ditemukan bahwa calon debitur memiliki kolektibilitas SLIK pada level 3. Tindakan yang paling sesuai berdasarkan ketentuan adalah …",
    o: [
      "Langsung ditolak tanpa pengecualian",
      "Tetap diproses selama agunan mencukupi",
      "Tidak diproses kecuali debitur dapat memberikan alasan logis",
      "Dialihkan ke produk kredit konsumsi lainnya"
    ],
    a: 2
  },
  {
    q: "Seorang karyawan mengajukan pembiayaan KSM melalui skema Group Customer yang direkomendasikan HRD. Jika karyawan tersebut gagal bayar, maka konsekuensi bagi perusahaan adalah …",
    o: [
      "Perusahaan wajib melunasi sisa angsuran",
      "Perusahaan bertanggung jawab sebagian",
      "Tidak ada kewajiban perusahaan menanggung angsuran",
      "Perusahaan dikenakan penalti kerja sama"
    ],
    a: 2
  },
  {
    q: "Nasabah Kartu Kredit BCA ingin mengubah transaksi retail menjadi cicilan melalui SMS. Minimum nominal transaksi yang dapat diubah menjadi cicilan adalah …",
    o: [
      "Rp 250.000",
      "Rp 300.000",
      "Rp 500.000",
      "Rp 1.000.000"
    ],
    a: 2
  },
  {
    q: "Seorang nasabah BCA ingin membeli motor listrik merek Gesits melalui pembiayaan KSM. Berdasarkan pengelompokan brand motor pada KSM, motor tersebut termasuk kategori …",
    o: [
      "Motor Umum",
      "Motor Lifestyle",
      "Motor Listrik",
      "Motor Premium"
    ],
    a: 2
  },
  {
    q: "Pemohon KSM merupakan wiraswasta berusia 62 tahun dengan tenor kredit 2 tahun. Berdasarkan ketentuan usia maksimal, pengajuan tersebut …",
    o: [
      "Tidak dapat diproses karena melebihi batas usia",
      "Dapat diproses karena usia saat akhir tenor masih memenuhi",
      "Hanya dapat diproses untuk KSM Premium",
      "Wajib menggunakan penjamin tambahan"
    ],
    a: 1
  },
  {
    q: "Dalam alur pembiayaan motor baru KSM, tahapan analisis kredit dan pengecekan PEFINDO dilakukan oleh …",
    o: [
      "PIC BCA",
      "Dealer",
      "Sentra Kredit",
      "Kepala Area"
    ],
    a: 2
  },
  {
    q: "Seorang pemohon KSM diketahui berdomisili dan memiliki KTP Provinsi Aceh. Berdasarkan ketentuan kredit KSM, kondisi tersebut …",
    o: [
      "Dapat diproses dengan syarat tambahan",
      "Tidak termasuk dalam kriteria pemohon",
      "Hanya berlaku untuk KSM Multiguna",
      "Memerlukan persetujuan kantor pusat"
    ],
    a: 1
  },
  {
    q: "Nasabah perusahaan mengajukan pembiayaan motor melalui KSM Multiguna. Dokumen yang secara spesifik diwajibkan untuk jenis pembiayaan ini adalah …",
    o: [
      "Slip gaji karyawan",
      "Foto kendaraan dan BPKB",
      "Surat ijin praktek",
      "Kartu keluarga direksi"
    ],
    a: 1
  },
  {
    q: "Perbedaan utama antara KSM dan pembiayaan motor umum dari sisi pembayaran angsuran adalah …",
    o: [
      "KSM menggunakan payment point",
      "KSM mewajibkan pembayaran tunai",
      "KSM menggunakan autodebet rekening BCA",
      "KSM menggunakan kartu kredit"
    ],
    a: 2
  },
  {
    q: "Sebuah perusahaan memiliki kerja sama PKS dengan BCA Multi Finance. Keuntungan langsung yang diperoleh karyawan dari kerja sama ini adalah …",
    o: [
      "Tenor lebih panjang dari pasar",
      "Harga motor lebih murah",
      "Pricelist khusus karyawan perusahaan",
      "DP 0% tanpa syarat"
    ],
    a: 2
  },
  {
    q: "Nasabah mengajukan Kartu Kredit BCA tambahan untuk anaknya yang berusia 18 tahun. Berdasarkan ketentuan, pengajuan tersebut …",
    o: [
      "Tidak dapat diproses karena usia minimal 21 tahun",
      "Dapat diproses karena memenuhi usia kartu tambahan",
      "Hanya berlaku untuk kartu Visa",
      "Wajib memiliki penghasilan sendiri"
    ],
    a: 1
  },
  {
    q: "Seorang WNA ingin mengajukan Kartu Kredit BCA. Dokumen identitas utama yang diwajibkan adalah …",
    o: [
      "KTP Indonesia",
      "Paspor dan KITAS",
      "SIM Internasional",
      "Kartu izin kerja"
    ],
    a: 1
  },
  {
    q: "Nasabah melakukan transaksi menggunakan Kartu Kredit BCA di EDC dan memasukkan PIN. Transaksi tersebut akan dikategorikan sebagai …",
    o: [
      "Transaksi cicilan",
      "Transaksi tunai",
      "Transaksi retail kartu kredit",
      "Transaksi debit"
    ],
    a: 2
  },
  {
    q: "Kartu Kredit BCA yang memberikan fasilitas double reward untuk transaksi di Jepang, Korea, dan Singapura adalah …",
    o: [
      "BCA Visa Black",
      "BCA JCB Card",
      "BCA UnionPay",
      "BCA Platinum Batik"
    ],
    a: 1
  },
  {
    q: "Seorang nasabah ingin menikmati fasilitas lounge bandara di Jepang menggunakan kartu kreditnya. Jenis kartu yang menyediakan fitur tersebut adalah …",
    o: [
      "BCA Everyday Card",
      "BCA JCB Card",
      "BCA Regular Card",
      "BCA Blibli Card"
    ],
    a: 1
  },
  {
    q: "Nasabah Kartu Kredit BCA ingin mengubah transaksi menjadi cicilan dengan tenor terpanjang. Tenor maksimal yang tersedia adalah …",
    o: [
      "24 bulan",
      "30 bulan",
      "36 bulan",
      "48 bulan"
    ],
    a: 2
  },
  {
    q: "Seorang nasabah ingin mengajukan KPR BCA untuk renovasi rumah tanpa mengubah bentuk bangunan lama. Jenis tujuan pembiayaan yang sesuai adalah …",
    o: [
      "Pembelian konsumsi",
      "Renovasi konsumsi",
      "Konsumsi lainnya",
      "Pendukung usaha lainnya"
    ],
    a: 1
  },
  {
    q: "Plafon minimal pengajuan KPR BCA untuk tujuan konsumsi adalah …",
    o: [
      "Rp 100 juta",
      "Rp 150 juta",
      "Rp 200 juta",
      "Rp 250 juta"
    ],
    a: 3
  },
  {
    q: "Dalam KPR BCA, sertifikat agunan untuk pembelian rumah baru dari developer kerja sama harus dilengkapi dengan …",
    o: [
      "Akta pisah harta",
      "Buy back guarantee",
      "Surat kuasa menjual",
      "Personal guarantee"
    ],
    a: 1
  },
  {
    q: "Agunan KPR BCA berupa ruko harus memenuhi ketentuan tambahan yaitu …",
    o: [
      "Tidak boleh disewakan",
      "Harus ditempati",
      "Wajib atas nama developer",
      "Boleh berupa bangunan sementara"
    ],
    a: 1
  },
  {
    q: "Dalam analisa KPR BCA, pengecekan kewajaran harga pasar agunan dilakukan dengan membandingkan appraisal dengan …",
    o: [
      "Harga developer",
      "Harga pasar CAMS",
      "NJOP daerah",
      "Harga penawaran debitur"
    ],
    a: 1
  },
  {
    q: "Jika aplikasi KPR BCA masuk melalui cabang di luar koordinasi DBKK, maka proses pencairan dan penyimpanan dokumen dilakukan oleh …",
    o: [
      "Cabang pengaju",
      "DBKK",
      "Sentra Kredit",
      "SLA"
    ],
    a: 3
  },
  {
    q: "Dokumen yang membuktikan status kepemilikan bangunan apartemen sebagai agunan KPR adalah …",
    o: [
      "HGB",
      "HM",
      "SHMSRS",
      "AJB"
    ],
    a: 2
  },
  {
    q: "Dalam KPR BCA, jaminan perorangan (personal guarantee) berfungsi sebagai …",
    o: [
      "Pengganti agunan utama",
      "Jaminan tambahan",
      "Syarat wajib kredit",
      "Pengurang suku bunga"
    ],
    a: 1
  },
  {
    q: "Masa berlaku minimal personal guarantee untuk kredit dengan tenor 5 tahun adalah …",
    o: [
      "3 tahun",
      "4 tahun",
      "5 tahun",
      "Sesuai kebijakan cabang"
    ],
    a: 2
  },
  {
    q: "Dalam alur KPR BCA, tahapan verifikasi kemampuan bayar (repayment capacity) dilakukan setelah …",
    o: [
      "Keputusan kredit",
      "Analisa agunan",
      "Pengecekan kelengkapan dokumen",
      "Pengikatan kredit"
    ],
    a: 2
  },
  {
    q: "Jika hasil SLIK menunjukkan calon debitur memiliki angsuran kredit konsumsi lain, maka analis harus …",
    o: [
      "Langsung menolak aplikasi",
      "Mengabaikan selama agunan kuat",
      "Memperhitungkan ulang repayment capacity",
      "Meminta jaminan tambahan"
    ],
    a: 2
  },
  {
    q: "Jenis KPR yang diperuntukkan bagi pembelian rumah untuk usaha indekos termasuk dalam kategori …",
    o: [
      "Konsumsi",
      "Produktif",
      "KPA",
      "KKB"
    ],
    a: 1
  },
  {
    q: "Nasabah mengajukan KPR BCA untuk tujuan pendukung usaha lainnya. Plafon maksimal yang dapat diberikan adalah …",
    o: [
      "Rp 5 miliar",
      "Rp 10 miliar",
      "Rp 15 miliar",
      "Tanpa batas maksimal"
    ],
    a: 2
  },
  {
    q: "Seorang pemohon KSM merupakan karyawan dengan usia 57 tahun dan mengajukan tenor kredit 2 tahun. Berdasarkan ketentuan usia maksimal karyawan, pengajuan tersebut …",
    o: [
      "Tidak dapat diproses karena melewati usia pensiun",
      "Dapat diproses karena usia saat akhir tenor masih memenuhi",
      "Hanya dapat diproses untuk KSM Multiguna",
      "Memerlukan persetujuan khusus dari dealer"
    ],
    a: 1
  },
  {
    q: "Dalam proses pembiayaan motor baru KSM, pihak yang bertugas melakukan survey lapangan dan input hasil survey adalah …",
    o: [
      "PIC BCA",
      "Sentra Kredit",
      "Kepala Area",
      "KUM"
    ],
    a: 3
  },
  {
    q: "Nasabah perorangan mengajukan KSM namun tercatat sebagai debitur blacklist. Berdasarkan syarat kredit, pengajuan tersebut …",
    o: [
      "Dapat diproses dengan DP lebih besar",
      "Dapat diproses dengan penjamin",
      "Tidak dapat diproses",
      "Hanya berlaku untuk motor premium"
    ],
    a: 2
  },
  {
    q: "Salah satu keunggulan utama KSM BCA dibandingkan pembiayaan motor umum adalah …",
    o: [
      "Tidak memerlukan survey",
      "Angsuran bersifat tetap",
      "DP selalu 0%",
      "Tenor lebih panjang dari pasar"
    ],
    a: 1
  },
  {
    q: "Dalam skema Retail KSM, jumlah maksimal unit motor yang dapat diajukan oleh debitur adalah …",
    o: [
      "1 unit",
      "2 unit",
      "3 unit",
      "Tidak dibatasi"
    ],
    a: 1
  },
  {
    q: "Nasabah perusahaan mengajukan KSM Fleet namun jumlah motor yang diajukan hanya 2 unit. Berdasarkan ketentuan, pengajuan tersebut …",
    o: [
      "Tetap dapat diproses sebagai Fleet",
      "Dialihkan menjadi Retail",
      "Dialihkan menjadi Multiguna",
      "Ditolak karena tidak memenuhi syarat minimal"
    ],
    a: 3
  },
  {
    q: "Dalam pengajuan Kartu Kredit BCA, channel yang tidak termasuk dalam metode pengajuan resmi adalah …",
    o: [
      "Direct Sales",
      "Branch",
      "Dealer",
      "Apply Online"
    ],
    a: 2
  },
  {
    q: "Seorang nasabah memiliki BCA Card dan BCA Visa. Berdasarkan ketentuan, status kedua kartu tersebut adalah …",
    o: [
      "Keduanya mandatory",
      "BCA Card mandatory dan BCA Visa optional",
      "BCA Visa mandatory dan BCA Card optional",
      "Keduanya optional"
    ],
    a: 1
  },
  {
    q: "Kartu Kredit BCA yang memberikan welcome bonus dalam bentuk e-voucher Tiket adalah …",
    o: [
      "BCA Blibli Card",
      "BCA Tiket Card",
      "BCA UnionPay",
      "BCA Everyday Card"
    ],
    a: 1
  },
  {
    q: "Seorang calon debitur KPR BCA mengajukan kredit untuk membeli apartemen dari developer kerja sama yang masih dalam kondisi inden. Agar pengikatan agunan tetap dapat dilakukan sebelum sertifikat atas nama debitur terbit, ketentuan yang harus dipenuhi adalah …",
    o: [
        "Menggunakan personal guarantee sebagai pengganti agunan",
        "Adanya buy back guarantee hingga sertifikat terbit dan diserahkan ke BCA",
        "Mengubah tujuan pembiayaan menjadi konsumsi lainnya",
        "Melampirkan surat kuasa menjual dari developer"
    ],
    a: 1
  },
  {
    q: "Reward BCA yang diterima cardholder dapat ditukarkan dengan …",
    o: [
      "Hanya potongan tagihan",
      "Barang di merchant bertanda Reward BCA",
      "Saldo tunai",
      "Miles penerbangan saja"
    ],
    a: 1
  },
  {
    q: "Seorang pemegang Kartu Kredit BCA ingin membayar tagihan listrik bulanan secara otomatis. Fitur yang digunakan adalah …",
    o: [
      "Cicilan BCA",
      "Reward BCA",
      "Autopay",
      "Cash advance"
    ],
    a: 2
  },
  {
    q: "Dalam KPR BCA, usia minimal calon debitur yang belum menikah adalah …",
    o: [
      "17 tahun",
      "18 tahun",
      "21 tahun",
      "23 tahun"
    ],
    a: 1
  },
  {
    q: "Seorang karyawan non-BCA mengajukan KPR BCA dan usia saat kredit berakhir adalah 66 tahun. Berdasarkan ketentuan, pengajuan tersebut …",
    o: [
      "Tidak dapat diproses",
      "Hanya dapat diproses dengan KPR Xtra",
      "Dapat diproses tanpa syarat",
      "Wajib menggunakan penjamin"
    ],
    a: 0
  },
  {
    q: "Dokumen yang digunakan sebagai bukti kepemilikan bangunan rumah dalam pengajuan KPR BCA adalah …",
    o: [
      "IMB/PBG",
      "PBB",
      "Sertifikat HGB atau HM",
      "AJB"
    ],
    a: 2
  },
  {
    q: "Dalam KPR BCA, agunan untuk tujuan konsumsi lainnya wajib berupa…",
    o: [
      "Apartemen",
      "Ruko",
      "Tanah dan bangunan permanen",
      "Bangunan sementara"
    ],
    a: 2
  },
  {
    q: "Jika sertifikat agunan KPR masih inden dan belum terbit, bentuk pengikatan yang digunakan adalah …",
    o: [
      "APHT",
      "Borgtocht",
      "PJDK",
      "SKMHT"
    ],
    a: 2
  },
  {
    q: "Dalam analisa KPR, pengecekan zoning atau peruntukan agunan dilakukan pada tahap …",
    o: [
      "Verifikasi SLIK",
      "Verifikasi jaminan",
      "Verifikasi dokumen",
      "Verifikasi repayment capacity"
    ],
    a: 1
  },
  {
    q: "Nasabah KPR memiliki sertifikat HGB yang akan jatuh tempo dalam 6 bulan. Berdasarkan ketentuan jangka waktu kredit, kondisi ini …",
    o: [
      "Masih dapat diproses tanpa batasan",
      "Tidak dapat diproses karena HGB hampir habis",
      "Hanya dapat diproses maksimal 1 tahun sebelum jatuh tempo",
      "Wajib menggunakan sertifikat HM"
    ],
    a: 2
  },
  {
    q: "Dalam alur KPR BCA, pihak yang melakukan penilaian agunan adalah …",
    o: [
      "AO cabang",
      "Developer",
      "Penilai independen atau internal",
      "Sentra Kredit"
    ],
    a: 2
  },
  {
    q: "Jika dokumen pengajuan KPR belum lengkap, maka aplikasi akan …",
    o: [
      "Tetap diproses sambil dilengkapi",
      "Langsung ditolak",
      "Tidak diproses",
      "Dialihkan ke produk lain"
    ],
    a: 2
  },
  {
    q: "Dalam skema personal guarantee KPR BCA, penjamin harus memenuhi syarat berikut, kecuali …",
    o: [
      "Cakap hukum",
      "Mampu secara ekonomi",
      "Memiliki NPWP",
      "Tidak terlibat kasus pidana/perdata"
    ],
    a: 2
  },
  {
    q: "Jika terdapat penambahan fasilitas kredit KPR, maka cabang wajib …",
    o: [
      "Mengikat ulang seluruh agunan",
      "Mengirim surat pemberitahuan kepada penjamin",
      "Meminta appraisal ulang",
      "Mengubah tenor kredit"
    ],
    a: 1
  },
  {
    q: "Agunan KPR BCA untuk pembelian rukan wajib memenuhi ketentuan bahwa rukan tersebut …",
    o: [
      "Boleh disewakan",
      "Tidak harus ditempati",
      "Harus ditempati",
      "Boleh berupa bangunan semi permanen"
    ],
    a: 2
  },
  {
    q: "Tujuan utama pengikatan agunan dalam KPR BCA adalah …",
    o: [
      "Meningkatkan plafon kredit",
      "Mengurangi risiko dan menjamin kepentingan bank",
      "Mempermudah pencairan",
      "Mengurangi bunga kredit"
    ],
    a: 1
  },
  {
    q: "Dalam struktur alur kredit KPR BCA, tahapan terakhir setelah pencairan adalah …",
    o: [
      "Layanan debitur",
      "Penyimpanan dokumen",
      "Pengikatan kredit",
      "Penyelamatan kredit bermasalah"
    ],
    a: 1
  }
]

export default questions