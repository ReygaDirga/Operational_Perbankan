const questions = [
  {
    q: "Sebuah perusahaan mengajukan Kredit Produktif ke bank untuk menunjang kegiatan operasional hariannya. Kebutuhan utama yang dipenuhi oleh Kredit Produktif tersebut adalah",
    o: ["Penjaminan", "Persetujuan", "Penagihan", "Kesepakatan"],
    a: 0
  },
  {
    q: "Pembiayaan melalui Kredit Produktif dibagi menjadi 2 bagian yaitu",
    o: [
      "Kebutuhan Modal Kerja dan Penjaminan",
      "Kebutuhan Modal Ke rja dan investasi",
      "Kebutuhan investasi dan Penjaminan",
      "Kebutuhan Kredit Bunga Rendah dan Modal Kerja"
    ],
    a: 0
  },
  {
    q: "Dalam praktik perbankan, berikut ini adalah jenis jenis Kredit Modal Kerja, kecuali",
    o: ["Kredit Lokal", "Trust Receipt", "Time Loan", "Kredit Impor"],
    a: 3
  },
  {
    q: "Seorang analis kredit menilai bahwa ada jenis usaha yang kurang cocok menggunakan Kredit Lokal karena sifat usahanya musiman. Usaha yang tidak cocok menggunakan Kredit Lokal adalah",
    o: [
      "Usaha yang membutuhkan pembiayaan yang liquid",
      "Butuh pembiayaan untuk perputaran usaha",
      "Pedagang Seragam Sekolah di Tanah Abang",
      "Perusahaaan Trading/Pabrik/Bahan Baku"
    ],
    a: 2
  },
  {
    q: "Pembebanan Biaya Bunga Time Loan dibebankan secara",
    o: ["Harian", "Anniversary Date", "Tahunan", "Secara Periodik"],
    a: 0
  },
  {
    q: "Saat mengajukan penarikan fasilitas kredit, debitur wajib mengisi SPPFK. Informasi utama yang harus dicantumkan adalah",
    o: [
      "Konsekuensi gagal bayar",
      "Dana yang dibutuhkan",
      "Bunga yang diinginkan",
      "Bunga Revolving"
    ],
    a: 1
  },
  {
    q: "Kredit yang digunakan untuk melunasi L/C atau SKBDN guna penebusan dokumen impor yang diterbitkan oleh BCA adalah",
    o: [
      "Kredit Lokal",
      "Trust Receipt",
      "Kredit Ekspor",
      "Installment Loan"
    ],
    a: 1
  },
  {
    q: "Seorang pengusaha menarik dana modal kerja sekaligus atau bertahap dan melunasinya dengan cicilan bulanan. Jenis kredit tersebut adalah",
    o: [
      "Kredit Lokal",
      "Trust Receipt",
      "Time Loan",
      "Installment Loan"
    ],
    a: 3
  },
  {
    q: "Pernyataan yang tidak benar mengenai Grace Period",
    o: [
      "Karena pada awal periode debitur belum dapat beroperasi dengan optimal karena masih dalam tahap pembangunan pabrik jadi dibebaskan dahulu tidak diwajibkan membayar angsuran",
      "di masa grace period debitur tidak diwajibkan membayar angsuran pokok namun tetap harus membayar biaya bunga.",
      "Grace period memperpanjang jangka waktu kredit investasi",
      "Biasanya diberikan karena pada awal periode debitur belum dapat beroperasi dengan optimal karena masih dalam tahap pembangunan pabrik"
    ],
    a: 2
  },
  {
    q: "Dalam sebuah proyek, bank mengeluarkan jaminan untuk menghindari risiko wanprestasi. Fasilitas yang dimaksud adalah",
    o: ["Bid Bond", "Bank Garansi", "Performance Bond", "Andra and the Back Bond"],
    a: 1
  },
  {
    q: "Kebutuhan Penjaminan yang dikeluarkan oleh Bank untuk Perusahaan Rokok untuk janji bayar cukai adalah",
    o: ["Tax Bond", "BG Pita Cukai", "Advance Payment Bond", "Bid Bond"],
    a: 1
  },
  {
    q: "Jenis Bunga yang tidak ada di KPR BCA",
    o: ["Bunga Cap", "Bunga Floating", "Bunga Fix", "Bunga Revolving"],
    a: 3
  },
  {
    q: "Berapa DP minimal KPR BCA",
    o: ["10%", "15%", "20%", "30%"],
    a: 0
  },
  {
    q: "KPR Refinancing LTV (Loan to Value) nya berapa",
    o: [
      "90% x harga pasar T/B appraisal BCA%",
      "100% x harga pasar T/B appraisal BCA%",
      "80% x harga pasar T/B* appraisal BCA%",
      "125% x harga pasar T/B appraisal BCA%"
    ],
    a: 0
  },
  {
    q: "Seorang nasabah ingin mengetahui tenor maksimal produk KPR Xtra. Tenor maksimum KPR Xtra adalah",
    o: ["20 tahun", "10 tahun", "35 tahun", "15 tahun"],
    a: 3
  },
  {
    q: "Nilai Maksimum Angsuran KPR BCA adalah",
    o: [
      "Sejumlah Gaji Gross",
      "1/3 Gaji Gross",
      "1/4 gaji Gross",
      "10% Gaji Gross"
    ],
    a: 1
  },
  {
    q: "Perusahaan ingin memfasilitasi kepemilikan mobil karyawan. Program yang sesuai adalah",
    o: [
      "COP (Car Ownership Program)",
      "Operational Car",
      "Corporate Car Loan",
      "KKB Refinancing"
    ],
    a: 0
  },
  {
    q: "Target nasabah untuk produk KKB Operational Car adalah",
    o: [
      "Nasabah pribadi yang membutuhkan kendaraan pribadi untuk menunjang gengsinya",
      "Nasabah Organisasi yang membutuhkan kendaraan operasional untuk menunjang kegiatan usahanya",
      "Nasabah Organisasi yang membutuhkan kendaraan pribadi untuk menunjang kegiatan usahanya",
      "Nasabah yang butuh motor Tossa untuk bisnis"
    ],
    a: 1
  },
  {
    q: "Maksimal Plafon untuk KKB Mobil Bekas adalah ... dari harga mobil",
    o: ["75%", "80%", "70%", "65%"],
    a: 2
  },
  {
    q: "Maksimal usia mobil saat KKB Mobil Bekas dan Refinancing Lunas",
    o: ["10 Tahun", "14 Tahun", "12 tahun", "13 Tahun"],
    a: 1
  },
  {
    q: "Yang Bukan Fitur Kartu Kredit BCA adalah",
    o: ["Cicilan 0%", "Autopay", "BCA Reward", "AIA"],
    a: 3
  },
  {
    q: "Ketentuan bayar minimum payment Kartu Kredit BCA berapa",
    o: [
      "10% Tagihan / Rp 50 ribu mana yang lebih besar",
      "10% Tagihan / Rp 100 ribu mana yang lebih besar",
      "25% Tagihan / Rp 100 ribu mana yang lebih besar",
      "10% Tagihan / Rp 25 ribu mana yang lebih besar"
    ],
    a: 0
  },
  {
    q: "Berapa besaran Late Charge Kartu Kredit BCA",
    o: [
      "3% dari total tagihan atau maksimal 100.000",
      "3% dari total tagihan atau maksimal 150.000",
      "5% dari total tagihan atau maksimal 150.000",
      "10% dari total tagihan atau maksimal 200.000"
    ],
    a: 1
  },
  {
    q: "Biaya Overlimit Kartu Kredit BCA Everyday Card",
    o: ["30.000", "20.000", "50.000", "40.000"],
    a: 1
  },
  {
    q: "Solusi bagi Perusahaan Multinasional berukuran sedang & besar yang menginginkan efisiensi travel & entertainment adalah",
    o: [
      "BCA Mastercard Corporate",
      "BCA UnionPay Corporate",
      "BCA Corporate",
      "BCA Visa Corporate"
    ],
    a: 3
  },
  {
    q: "Limit Maksimal Kredit untuk Kredit Pribadi adalah",
    o: [
      "5x Gaji per bulan",
      "2x Gaji per Bulan",
      "3x Gaji per Bulan",
      "1/3 Gaji"
    ],
    a: 2
  },
  {
    q: "Benefit Kartu Kredit Korporat kecuali",
    o: [
      "Kredit Limit Fleksibel",
      "Cash Advance Optional",
      "Klik BCA Bisnis",
      "Asuransi Perjalanan Rp 650 juta"
    ],
    a: 3
  },
  {
    q: "Iuran Kartu Kredit untuk Korporasi adalah",
    o: [
      "250 ribu per kartu",
      "300 ribu per kartu",
      "150 ribu per kartu",
      "200 ribu per kartu"
    ],
    a: 0
  },
  {
    q: "Plafon Pinjaman Personal Loan Maksimum adalah",
    o: ["150 Juta", "100 Juta", "50 Juta", "200 Juta"],
    a: 1
  },
  {
    q: "Suku Bunga Corporate dan Retail Payroll BCA Personal Loan untuk 12 bulan adalah",
    o: [
      "Corporate : 0,90% flat/bln, Retail : 1% flat/bln",
      "Corporate : 0,97% flat/bln, Retail : 1,07% flat/bln",
      "Corporate : 0,93% flat/bln, Retail : 1,03% flat/bln",
      "Corporate : 0,98% flat/bln, Retail : 1,8% flat/bln"
    ],
    a: 0
  },
  {
    q: "Sebuah kartu yang berfungsi sebagai penyedia dana pinjaman tanpa agunan untuk transaksi bisnis adalah",
    o: [
      "BCA Smart Cash",
      "Corporate Business Account",
      "BCA SmartCash Distributor",
      "BCA Smartcash Distributor Financing"
    ],
    a: 0
  },
  {
    q: "Merupakan rekening yang digunakan untuk pembelian barang & jasa serta pembayaran rutin perusahaan",
    o: [
      "BCA Smart Cash",
      "Corporate Business Account",
      "BCA SmartCash Distributor",
      "BCA Smartcash Distributor Financing"
    ],
    a: 1
  },
  {
    q: "Rekening yang diberikan kepada debitur atas rekomendasi merchant untuk pembiayaan tanpa agunan adalah",
    o: [
      "BCA Smart Cash",
      "Corporate Business Account",
      "BCA SmartCash Distributor",
      "BCA Smartcash Distributor Financing"
    ],
    a: 3
  },
  {
    q: "Berapa jangka waktu maksimum Installment Loan",
    o: [
      "Maksimum 5 tahun",
      "Sesuai kebutuhan nasabah",
      "Maksimum 10 tahun",
      "Maksimum 20 Tahun"
    ],
    a: 0
  },
  {
    q: "Berapa plafon maksimum dari kredit investasi",
    o: [
      "Maksimum 70% dari kebutuhan pembiayaan yang sebenarnya (project cost) atau hasil penilaian agunan yang dilakukan oleh Penilai Independen/penilai Internal Bank (staf Appraisal BCA)",
      "Maksimum 75% dari kebutuhan pembiayaan yang sebenarnya (project cost) atau hasil penilaian agunan yang dilakukan oleh Penilai Independen/penilai Internal Bank (staf Appraisal BCA)",
      "Maksimum 80% dari kebutuhan pembiayaan yang sebenarnya (project cost) atau hasil penilaian agunan yang dilakukan oleh Penilai Independen/penilai Internal Bank (staf Appraisal BCA)",
      "Maksimum 90% dari kebutuhan pembiayaan yang sebenarnya (project cost) atau hasil penilaian agunan yang dilakukan oleh Penilai Independen/penilai Internal Bank (staf Appraisal BCA)"
    ],
    a: 0
  },
  {
    q: "Nilai kredit yang belum dipergunakan oleh debitur selama masa kredit adalah",
    o: ["Plafon", "Outstanding", "Tenor Kredit", "Unused Plafon"],
    a: 3
  },
  {
    q: "Jenis bunga yang dibebankan terhadap jumlah outstanding kredit yang terpakai adalah",
    o: ["Bunga countdown", "Bunga fixed", "Bunga efektif", "Bunga flat"],
    a: 2
  },
  {
    q: "Berikut kebutuhan kredit modal kerja yang dimiliki oleh nasabah, kecuali",
    o: ["Cash Loan", "Non Cash Loan", "Dana Tunai", "Non Cash Flow"],
    a: 3
  },
  {
    q: "Kepanjangan dari SPPFK adalah",
    o: [
      "Surat Permohonan Penarikan Fasilitas Kredit",
      "Surat Penarikan Permohonan Fasilitas Kredit",
      "Surat Permohonan Pengambilan Fasilitas Krediti",
      "Surat Pengambilan Permohonan Fasilitas Kredit"
    ],
    a: 0
  },
  {
    q: "Fasilitas non cash loan dimana pihak pembeli dan penjual berada di Indonesia adalah",
    o: ["SKBDN", "L/C", "Bank Garansi", "Kredit Lokal"],
    a: 0
  },
  {
    q: "Dalam mekanisme usance L/C dari sisi importer, pihak yang memberi tempohutang adalah",
    o: ["Bank Koresponden", "Issuing Bank", "Importir", "Eksportir"],
    a: 1
  },
  {
    q: "SKBDN merupakan kepanjangan dari",
    o: [
      "Surat Kerjasama Berdokumen Dalam Negeri",
      "Surat Kredit Berdokumen Dalam Negeri",
      "Surat Keputusan Berdokumen dalam Negeri",
      "Surat Kontrak Berdokumen Dalam Negeri"
    ],
    a: 1
  },
  {
    q: "SKBDN dapat diajukan dalam mata uang",
    o: ["Yuan", "Rupiah dan Valas", "USD", "Rupiah"],
    a: 1
  },
  {
    q: "Fasilitas Kredit dimana plafon dicatat terpisah dari rekening giro nasabah adalah",
    o: [
      "Kredit lokal",
      "Bank Garansi",
      "Kredit lokal dan Time loan revolving",
      "Time loan revolving"
    ],
    a: 3
  },
  {
    q: "Berikut termasuk dalam kredit modal kerja, kecuali",
    o: ["Kredit lokal", "Time Loan", "Kredit Investasi", "Installment Loan"],
    a: 2
  },
  {
    q: "Penarikan dana untuk Time Loan Insidentil dilakukan dengan",
    o: [
      "Debitur harus datang ke cabang dan melakukan penarikan dengan menggunakan/membuat Surat Permohonan Penarikan Fasilitas Kredit/Perpanjangan Pembayaran (SPPFK/PP)",
      "Sesuai dengan syarat penarikan rekening giro",
      "Bank akan memindahbukukan ke rekening giro nasabah sejumlah pinjaman yang diberikan",
      "Pencairan dana dilakukan secara sekaligus ataupun bertahap dengan melakukan pemindahbukuan ke rekening giro nasabah"
    ],
    a: 2
  },
  {
    q: "Kredit yang bertujuan untuk rehabilitasi, modernisasi, dan ekspansi usaha produktif adalah",
    o: [
      "Kredit Investasi",
      "Kredit Lokal",
      "Kredit Modal Kerja",
      "Kredit Ekspor"
    ],
    a: 0
  },
  {
    q: "Bunga yang dibebankan secara konstan selama periode tertentu adalah",
    o: ["Bunga fixed", "Bunga efektif", "Bunga flat", "Bunga floating"],
    a: 0
  },
  {
    q: "Pelunasan pokok fasilitas dilakukan dengan pencabutan plafon apabila tidak ada outstanding merupakan ciri dari",
    o: [
      "Time loan revolving",
      "Bank Garansi",
      "Kredit lokal",
      "Kredit lokal dan Time loan revolving"
    ],
    a: 2
  },
  {
    q: "Pengertian dari bunga floating adalah",
    o: [
      "Jenis bunga sesuai perjanjian awal",
      "Jenis bunga sesuai perjanjian awal dalam periode tertentu",
      "Jenis bunga sesuai suku bunga pasar dan ditinjau berkala",
      "Jenis bunga dengan perhitungan tetap"
    ],
    a: 2
  },
  {
    q: "Seorang pedagang grosir membutuhkan dana yang bisa ditarik dan disetor kapan saja melalui giro. Fasilitas yang sesuai adalah",
    o: ["Time Loan Insidentil", "Installment Loan", "Kredit Lokal", "Kredit Investasi"],
    a: 2
  },
  {
    q: "Nasabah membutuhkan dana hanya saat ada proyek tertentu dan dicatat di rekening pinjaman. Fasilitas yang sesuai adalah",
    o: ["Kredit Lokal", "Time Loan", "Installment Loan", "Kredit Investasi"],
    a: 1
  },
  {
    q: "Pembayaran pokok dan bunga setiap bulan dengan jumlah tetap adalah ciri dari",
    o: ["Angsuran menurun", "Angsuran anuitas", "Kredit Lokal", "Time Loan Revolving"],
    a: 1
  },
  {
    q: "Nasabah memiliki kebutuhan modal kerja musiman dan pencairan satu kali tiap periode. Fasilitas yang tepat adalah",
    o: ["Time Loan Regular", "Time Loan Insidentil", "Kredit Lokal", "Installment Loan"],
    a: 1
  },
  {
    q: "Plafon kredit yang hanya untuk melunasi L/C atau SKBDN disebut",
    o: ["Kredit Lokal", "Trust Receipt", "Kredit Ekspor", "Installment Loan"],
    a: 1
  },
  {
    q: "Seorang eksportir memperoleh pembiayaan maksimal 85% dari nilai ekspor. Fasilitas tersebut adalah",
    o: ["Kredit Lokal", "Trust Receipt", "Kredit Ekspor", "Time Loan"],
    a: 2
  },
  {
    q: "Penarikan kredit berulang dengan plafon dicatat di rekening pinjaman adalah",
    o: ["Kredit Lokal", "Time Loan Revolving", "Installment Loan", "Kredit Investasi"],
    a: 1
  },
  {
    q: "Nasabah membeli mesin produksi dengan masa manfaat panjang dan angsuran 7 tahun. Fasilitas yang sesuai adalah",
    o: ["Kredit Lokal", "Installment Loan", "Kredit Investasi", "Time Loan"],
    a: 2
  },
  {
    q: "Dalam Kredit Lokal, bunga dibebankan berdasarkan",
    o: [
      "Plafon kredit yang disetujui",
      "Outstanding pinjaman harian",
      "Nilai angsuran bulanan",
      "Jumlah penarikan pertama"
    ],
    a: 1
  },
  {
    q: "Nasabah memiliki beberapa SPPFK aktif pada Time Loan. Jadwal pembayaran akan",
    o: [
      "Digabung menjadi satu",
      "Mengikuti SPPFK terakhir",
      "Berjalan masing-masing",
      "Ditunda hingga fasilitas berakhir"
    ],
    a: 2
  },
  {
    q: "Fasilitas kredit dengan penarikan sekaligus atau bertahap dan pelunasan mengangsur adalah",
    o: ["Kredit Lokal", "Time Loan", "Installment Loan", "Trust Receipt"],
    a: 2
  },
  {
    q: "Nasabah membutuhkan jaminan bahwa proyek selesai sesuai kontrak. Bank Garansi yang tepat adalah",
    o: ["Bid Bond", "Performance Bond", "Payment Bond", "Advance Payment Bond"],
    a: 1
  },
  {
    q: "Garansi bank untuk menjamin pengembalian uang muka disebut",
    o: ["Performance Bond", "Payment Bond", "Advance Payment Bond", "Maintenance Bond"],
    a: 2
  },
  {
    q: "Dalam proses klaim Bank Garansi, pencairan dilakukan oleh",
    o: ["Debitur", "Bank penerbit", "Pemilik proyek", "Reimbursing bank"],
    a: 1
  },
  {
    q: "L/C yang memungkinkan beneficiary menerima pembayaran segera sementara applicant membayar usance adalah",
    o: ["Sight L/C", "Usance L/C", "UPAS L/C", "UPAU L/C"],
    a: 2
  },
  {
    q: "L/C dengan pembayaran pada saat jatuh tempo usance bagi semua pihak adalah",
    o: ["Sight L/C", "Usance L/C", "UPAS L/C", "UPAU L/C"],
    a: 3
  },
  {
    q: "Fasilitas L/C dapat bersifat revolving apabila",
    o: [
      "Debitur baru pertama kali impor",
      "Kebutuhan bersifat berulang",
      "Barang impor bernilai kecil",
      "Tidak menggunakan mata uang asing"
    ],
    a: 1
  },
  {
    q: "SKBDN mirip dengan L/C namun digunakan untuk",
    o: [
      "Hanya menggunakan valuta asing",
      "Transaksi dalam negeri",
      "Tanpa bank",
      "Tanpa dokumen"
    ],
    a: 1
  },
  {
    q: "Nasabah menunggak pokok atau bunga selama 95 hari. Kolektibilitasnya adalah",
    o: ["DPK", "Kurang Lancar", "Diragukan", "Macet"],
    a: 1
  },
  {
    q: "Plafon kredit bersifat revolving berarti",
    o: [
      "Tidak dapat digunakan kembali",
      "Hanya sekali",
      "Dapat digunakan kembali setelah pelunasan",
      "Harus ditarik sekaligus"
    ],
    a: 2
  },
  {
    q: "Kredit yang mencakup penyediaan dana dan penjaminan termasuk kategori",
    o: ["Kredit konsumtif", "Kredit produktif", "Kredit personal", "Kredit jangka panjang"],
    a: 1
  },
  {
    q: "Nasabah membayar pemasok sementara piutang belum diterima termasuk kebutuhan",
    o: [
      "Kebutuhan investasi",
      "Kebutuhan penjaminan",
      "Kebutuhan pembiayaan",
      "Kebutuhan refinancing"
    ],
    a: 2
  },
  {
    q: "Dalam Kredit Investasi, realisasi pembelian mesin berdasarkan",
    o: [
      "Saldo giro debitur",
      "Dokumen tagihan atau invoice",
      "Permintaan lisan debitur",
      "Plafon rekening giro"
    ],
    a: 1
  },
  {
    q: "Kredit Modal Kerja dengan jangka waktu maksimum 1 tahun dan dapat diperpanjang adalah",
    o: [
      "Kredit Lokal dan Time Loan",
      "Installment Loan",
      "Kredit Investasi",
      "Bank Garansi"
    ],
    a: 0
  },
  {
    q: "Perhitungan plafon Kredit Ekspor dipengaruhi oleh",
    o: [
      "Suku bunga pasar",
      "Jumlah perputaran usaha",
      "Nilai agunan",
      "Saldo rekening giro"
    ],
    a: 1
  },
  {
    q: "Nasabah ingin pembayaran modal kerja dicicil agar arus kas terkontrol. Solusi yang tepat adalah",
    o: ["Kredit Lokal", "Time Loan", "Installment Loan", "Trust Receipt"],
    a: 2
  },
  {
    q: "Dalam Kredit Lokal, apabila tidak ada outstanding maka pelunasan pokok dilakukan dengan",
    o: [
      "Pendebetan angsuran",
      "Penarikan tunai",
      "Pencabutan plafon",
      "Perpanjangan tenor"
    ],
    a: 2
  },
  {
    q: "Bank berperan sebagai penengah antara buyer dan seller pada kebutuhan",
    o: ["Pembiayaan", "Penjaminan", "Investasi", "Refinancing"],
    a: 1
  },
  {
    q: "Kredit dengan plafon dicatat di rekening giro dan digunakan melalui cek atau BG adalah",
    o: ["Time Loan", "Installment Loan", "Kredit Lokal", "Trust Receipt"],
    a: 2
  },
  {
    q: "Pelunasan sebelum jatuh tempo pada Time Loan diperbolehkan",
    o: [
      "Tidak diperbolehkan",
      "Hanya seluruhnya",
      "Per SPPFK",
      "Menunggu akhir fasilitas"
    ],
    a: 2
  },
  {
    q: "Berapa bunga terendah Kredit Usaha Rakyat (KUR)?",
    o: ["5%", "7%", "6%", "8%"],
    a: 2
  },
  {
    q: "Berikut termasuk kredit produktif, kecuali",
    o: [
      "Kredit Modal Kerja",
      "Kredit Investasi",
      "Kredit Pemilikan Rumah",
      "Kredit Usaha Rakyat"
    ],
    a: 2
  },
  {
    q: "Produk yang tidak bisa digunakan untuk agunan back to back obligasi adalah",
    o: ["SBR", "SR", "FR", "ORI"],
    a: 0
  },
  {
    q: "Agunan dengan nilai taksasi 80% adalah",
    o: ["Ruko", "Gudang", "Rumah tinggal", "Tanah"],
    a: 2
  },
  {
    q: "Biaya admin untuk kredit 500jt-5M",
    o: ["1 jt", "4 jt", "6 jt", "2 jt"],
    a: 3
  },
  {
    q: "Plafon maksimal untuk KUR adalah",
    o: ["400 jt", "600 jt", "500 jt", "700 jt"],
    a: 2
  },
  {
    q: "Nasabah membeli mesin usaha. Tipe kredit yang tepat adalah",
    o: ["KMK", "KI", "KSM", "KKB"],
    a: 1
  },
  {
    q: "KPR bisa digunakan untuk pembelian, kecuali",
    o: ["Rumah", "Ruko", "Gudang", "Apartment"],
    a: 2
  },
  {
    q: "Kredit RK termasuk dalam",
    o: [
      "Kredit Lokal",
      "Time Loan",
      "Installment Loan",
      "Kredit Usaha Rakyat"
    ],
    a: 0
  },
  {
    q: "Apa kepanjangan dari KL?",
    o: [
      "Kredit Lokal",
      "Kartu kredit Loan",
      "Kredit motor Loan",
      "Kredit mobil Loan"
    ],
    a: 0
  },
  {
    q: "Solusi pembiayaan usaha dengan pembayaran angsuran adalah",
    o: [
      "Kredit Lokal",
      "Time Loan",
      "Installment Loan",
      "Back to back"
    ],
    a: 2
  },
  {
    q: "Pembiayaan dana untuk kredit jenis SME oleh BCA adalah",
    o: [
      "100 Jt - 500 Jt",
      "1 M - 5 M",
      "250 Jt - 500 Jt",
      "100 Jt - 30 M"
    ],
    a: 3
  },
  {
    q: "Produk yang tidak bisa dijaminkan untuk back to back adalah",
    o: ["Deposito", "Saham", "ORI", "SR"],
    a: 1
  },
  {
    q: "Berapa bunga untuk Kredit Angsuran?",
    o: ["10% - 12%", "6% - 12%", "10% - 14%", "6% - 14%"],
    a: 0
  },
  {
    q: "Kredit yang cocok untuk usaha Penggilingan Padi adalah",
    o: [
      "Kredit Usaha Rakyat",
      "Bank Garansi",
      "Kredit Lokal dan Time Loan",
      "Back to back"
    ],
    a: 2
  },
  {
    q: "Persentase dana stand by untuk RK adalah",
    o: ["75% dari plafon", "50% dari plafon", "70% dari plafon", "80% dari plafon"],
    a: 3
  },
  {
    q: "Kredit yang cocok untuk usaha distributor bahan makanan adalah",
    o: [
      "Time Loan",
      "Kredit Ekspor",
      "Installment Loan",
      "Kredit Usaha Rakyat"
    ],
    a: 2
  },
  {
    q: "Sertifikat yang tidak dapat dijaminkan di BCA adalah",
    o: ["Lahan kosong", "Sawah", "Toko", "Rumah"],
    a: 1
  },
  {
    q: "Posisi besarnya kredit yang telah digunakan debitur disebut",
    o: ["Outstanding", "Plafon", "Unused Plafon", "Revolving"],
    a: 0
  },
  {
    q: "Jenis bunga yang dibebankan terhadap jumlah outstanding adalah",
    o: ["Bunga Flat", "Bunga Efektif", "Bunga Fix", "Bunga Floating"],
    a: 1
  }
]



export default questions
