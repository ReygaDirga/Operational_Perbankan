const questions = [
  {
    q: "Kebutuhan yang dipenuhi oleh Kredit Produktif",
    o: [
      "Penjaminan",
      "Persetujuan",
      "Penagihan",
      "Kesepakatan"
    ],
    a: 0
  },
  {
    q: "Pembiayaan melalui Kredit Produktif dibagi menjadi 2 bagian yaitu",
    o: [
      "Kebutuhan Modal Kerja dan Penjaminan",
      "Kebutuhan Modal Kerja dan investasi",
      "Kebutuhan investasi dan Penjaminan",
      "Kebutuhan Kredit Bunga Rendah dan Modal Kerja"
    ],
    a: 0
  },
  {
    q: "Dibawah ini adalah jenis jenis Kredit Modal Kerja, kecuali",
    o: [
      "Kredit Lokal",
      "Trust Receipt",
      "Time Loan",
      "Kredit Impor"
    ],
    a: 3
  },
  {
    q: "Nasabah yang tidak cocok menggunakan Kredit Lokal adalah",
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
    o: [
      "Harian",
      "Anniversary Date",
      "Tahunan",
      "Secara Periodik"
    ],
    a: 0
  },
  {
    q: "Yang harus dicantumkan debitur pada SPPFK adalah",
    o: [
      "Konsekuensi gagal bayar",
      "Dana yang dibutuhkan",
      "Bunga yang diinginkan",
      "Bunga Revolving"
    ],
    a: 1
  },
  {
    q: "Kredit yang digunakan untuk melunasi L/C (Letter of Credit) atau SKBDN untuk keperluan penebusan dokumen impor yang diterbitkan oleh BCA untuk pembiayaan persediaan barang/bahan baku produksi",
    o: [
      "Kredit Lokal",
      "Trust Receipt",
      "Kredit Ekspor",
      "Installment Loan"
    ],
    a: 1
  },
  {
    q: "Pinjaman jangka pendek/menengah untuk pembiayaan modal kerja yang penarikannya dilakukan sekaligus/bertahap dan pelunasannya (pokok+bunga) dilakukan dengan cara mengangsur (anuitas / menurun) adalah definisi dari",
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
    q: "Kebutuhan Penjaminan yang dikeluarkan oleh Bank untuk menghindari wanprestasi adalah",
    o: [
      "Bid Bond",
      "Bank Garansi",
      "Performance Bond",
      "Andra and the Back Bond"
    ],
    a: 1
  },
  {
    q: "Kebutuhan Penjaminan yang dikeluarkan oleh Bank untuk Perusahaan Rokok untuk janji bayar cukai adalah",
    o: [
      "Tax Bond",
      "BG Pita Cukai",
      "Advance Payment Bond",
      "Bid Bond"
    ],
    a: 1
  },
  {
    q: "Jenis Bunga yang tidak ada di KPR BCA",
    o: [
      "Bunga Cap",
      "Bunga Floating",
      "Bunga Fix",
      "Bunga Revolving"
    ],
    a: 3
  },
  {
    q: "Berapa DP minimal KPR BCA",
    o: [
      "10%",
      "15%",
      "20%",
      "30%"
    ],
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
    q: "Berapa maximum tenor kredit KPR Xtra",
    o: [
      "20 tahun",
      "10 tahun",
      "35 tahun",
      "15 tahun"
    ],
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
    q: "Fasilitas apa yang diberikan kepada nasabah jika ia memiliki kebutuhan untuk fasilitas kepemilikan mobil karyawan",
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
    o: [
      "75%",
      "80%",
      "70%",
      "65%"
    ],
    a: 2
  },
  {
    q: "Maksimal usia mobil saat KKB Mobil Bekas dan Refinancing Lunas",
    o: [
      "10 Tahun",
      "14 Tahun",
      "12 tahun",
      "13 Tahun"
    ],
    a: 1
  },
  {
    q: "Yang Bukan Fitur Kartu Kredit BCA adalah",
    o: [
      "Cicilan 0%",
      "Autopay",
      "BCA Reward",
      "AIA"
    ],
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
    o: [
      "30.000",
      "20.000",
      "50.000",
      "40.000"
    ],
    a: 1
  },
  {
    q: "Solusi bagi Perusahaan Multinasional berukuran sedang & besar yang menginginkan efisiensi waktu maupun biaya dengan menyederhanakan proses pembiayaan keperluan travel & entertainment adalah",
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
    o: [
      "150 Juta",
      "100 Juta",
      "50 Juta",
      "200 Juta"
    ],
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
    q: "Sebuah kartu yang berfungsi sebagai penyedia dana pinjaman tanpa agunan untuk berbagai keperluan transaksi bisnis adalah",
    o: [
      "BCA Smart Cash",
      "Corporate Business Account",
      "BCA SmartCash Distributor",
      "BCA Smartcash Distributor Financing"
    ],
    a: 0
  },
  {
    q: "Merupakan rekening yang dapat digunakan untuk melakukan pembelian barang & jasa serta pembayaran pengeluaran rutin perusahaan",
    o: [
      "BCA Smart Cash",
      "Corporate Business Account",
      "BCA SmartCash Distributor",
      "BCA Smartcash Distributor Financing"
    ],
    a: 1
  },
  {
    q: "Rekening yang diberikan kepada debitur atas rekomendasi merchant yang dapat berfungsi sebagai sarana penyediaan dana pinjaman tanpa agunan untuk pembayaran bisnis kepada merchant.",
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
    o: [
      "Plafon",
      "Outstanding",
      "Tenor Kredit",
      "Unused Plafon"
    ],
    a: 3
  },
  {
    q: "Jenis bunga yang dibebankan terhadap jumlah outstanding kredit yang terpakai adalah",
    o: [
      "Bunga countdown",
      "Bunga fixed",
      "Bunga efektif",
      "Bunga flat"
    ],
    a: 2
  },
  {
    q: "Berikut kebutuhan kredit modal kerja yang dimiliki oleh nasabah, kecuali",
    o: [
      "Cash Loan",
      "Non Cash Loan",
      "Dana Tunai",
      "Non Cash Flow"
    ],
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
    q: "Fasilitas non cash loan, dimana pihak pembeli dan penjual sama-sama berada di Indonesia adalah",
    o: [
      "SKBDN",
      "L/C",
      "Bank Garansi",
      "Kredit Lokal"
    ],
    a: 0
  },
  {
    q: "Dalam mekanisme usance L/C (dari sisi importer) pihak yang memberi tempohutang adalah",
    o: [
      "Bank Koresponden",
      "Issuing Bank",
      "Importir",
      "Eksportir"
    ],
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
    o: [
      "Yuan",
      "Rupiah dan Valas",
      "USD",
      "Rupiah"
    ],
    a: 1
  },
  {
    q: "Fasilitas Kredit dimana plafon yang diberikan terpisah dari rekening giro nasabah (rekening pinjaman) adalah",
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
    o: [
      "Kredit lokal",
      "Time Loan",
      "Kredit Investasi",
      "Installment Loan"
    ],
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
    q: "Kredit yang bertujuan untuk rehabilitasi, modernisasi, dan ekspansi usaha-usaha produktif (seperti pembelian tanah, bangunan dan kendaraan) yangpenarikannya dapat dilakukan sekaligus/bertahap dan dilunasi dengan caramengangsur, merupakan pengertian dari",
    o: [
      "Kredit Investasi",
      "Kredit Lokal",
      "Kredit Modal Kerja",
      "Kredit Ekspor"
    ],
    a: 0
  },
  {
    q: "Bunga yang dibebankan kepada debitur konstan / tidak berubah - ubah selama periode tertentu adalah",
    o: [
      "Bunga fixed",
      "Bunga efektif",
      "Bunga flat",
      "Bunga floating"
    ],
    a: 0
  },
  {
    q: "Pelunasan pokok fasilitas dilakukan dengan cara pencabutan plafon di rekening nasabah pada saat tidak ada pemakaian di rekening tersebut (bila masih ada outstanding maka harus dilakukan penyetoran) merupakan ciri dari",
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
      "Jenis bunga yang diberlakukan/dikenakan kepada nasabah sesuai dengan perjanjian awal kontrak",
      "Jenis bunga yang diberlakukan/dikenakan kepada nasabah sesuai dengan perjanjian awal kontrak dan dalam periode tertentu",
      "Jenis bunga yang diberlakukan/dikenakan kepada nasabah sesuai dengan suku bunga yang berlaku di pasaran (ditinjau ulang secara berkala oleh BCA)",
      "Jenis bunga yang perhitungannya menggunakan nilai yang tetap"
    ],
    a: 2
  },
  {
    q: "Seorang pedagang grosir membutuhkan dana yang dapat ditarik dan disetor sewaktu-waktu melalui rekening giro untuk membiayai persediaan yang terus berputar selama usahanya berjalan. Fasilitas kredit yang paling sesuai adalah",
    o: ["Time Loan Insidentil", "Installment Loan", "Kredit Lokal", "Kredit Investasi"],
    a: 2
  },
  {
    q: "Nasabah hanya membutuhkan dana ketika ada proyek tertentu dan pencairannya harus melalui SPPFK serta dicatat di rekening pinjaman, bukan rekening giro. Karakteristik ini paling sesuai dengan",
    o: ["Kredit Lokal", "Time Loan", "Installment Loan", "Kredit Investasi"],
    a: 1
  },
  {
    q: "Pembayaran pokok dan bunga dilakukan setiap bulan dengan jumlah angsuran tetap sampai kredit lunas merupakan ciri dari",
    o: ["Angsuran menurun", "Angsuran anuitas", "Kredit Lokal", "Time Loan Revolving"],
    a: 1
  },
  {
    q: "Nasabah memiliki kebutuhan modal kerja musiman setiap tahun di bulan tertentu dan hanya membutuhkan pencairan satu kali setiap periode tersebut. Fasilitas yang paling tepat adalah",
    o: ["Time Loan Regular", "Time Loan Insidentil", "Kredit Lokal", "Installment Loan"],
    a: 1
  },
  {
    q: "Plafon kredit yang hanya dapat digunakan untuk melunasi L/C atau SKBDN dan wajib disertai dokumen perdagangan merupakan karakteristik dari",
    o: ["Kredit Lokal", "Trust Receipt", "Kredit Ekspor", "Installment Loan"],
    a: 1
  },
  {
    q: "Seorang eksportir mendapatkan pembiayaan maksimal 85% dari nilai ekspor dan sisanya harus dibiayai sendiri. Fasilitas ini mengacu pada",
    o: ["Kredit Lokal", "Trust Receipt", "Kredit Ekspor", "Time Loan"],
    a: 2
  },
  {
    q: "Penarikan kredit dilakukan berkali-kali selama total outstanding tidak melebihi plafon, namun plafon dicatat di rekening pinjaman. Produk yang dimaksud adalah",
    o: ["Kredit Lokal", "Time Loan Revolving", "Installment Loan", "Kredit Investasi"],
    a: 1
  },
  {
    q: "Nasabah ingin membeli mesin produksi dengan masa manfaat panjang dan pembayaran dilakukan dengan angsuran selama 7 tahun termasuk grace period. Fasilitas yang sesuai adalah",
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
    q: "Nasabah memiliki beberapa SPPFK aktif pada fasilitas Time Loan. Jadwal pembayaran pokok dan bunga akan",
    o: [
      "Digabung menjadi satu",
      "Mengikuti SPPFK terakhir",
      "Berjalan masing-masing",
      "Ditunda hingga fasilitas berakhir"
    ],
    a: 2
  },
  {
    q: "Fasilitas kredit yang penarikannya dilakukan sekaligus atau bertahap namun pelunasannya dilakukan dengan cara mengangsur adalah",
    o: ["Kredit Lokal", "Time Loan", "Installment Loan", "Trust Receipt"],
    a: 2
  },
  {
    q: "Nasabah membutuhkan jaminan kepada pemilik proyek bahwa ia mampu menyelesaikan pekerjaan sesuai kontrak. Bank Garansi yang tepat adalah",
    o: ["Bid Bond", "Performance Bond", "Payment Bond", "Advance Payment Bond"],
    a: 1
  },
  {
    q: "Garansi bank yang digunakan untuk menjamin pengembalian uang muka yang telah diterima kontraktor disebut",
    o: ["Performance Bond", "Payment Bond", "Advance Payment Bond", "Maintenance Bond"],
    a: 2
  },
  {
    q: "Dalam proses klaim Bank Garansi, pencairan dana garansi dilakukan oleh",
    o: ["Debitur", "Bank penerbit", "Pemilik proyek", "Reimbursing bank"],
    a: 1
  },
  {
    q: "L/C yang memungkinkan beneficiary menerima pembayaran segera, sementara applicant membayar secara usance disebut",
    o: ["Sight L/C", "Usance L/C", "UPAS L/C", "UPAU L/C"],
    a: 2
  },
  {
    q: "L/C yang pembayarannya dilakukan pada saat jatuh tempo usance baik oleh applicant maupun beneficiary adalah",
    o: ["Sight L/C", "Usance L/C", "UPAS L/C", "UPAU L/C"],
    a: 3
  },
  {
    q: "Fasilitas L/C dapat diberikan dalam bentuk revolving apabila",
    o: [
      "Debitur baru pertama kali impor",
      "Kebutuhan bersifat berulang",
      "Barang impor bernilai kecil",
      "Tidak menggunakan mata uang asing"
    ],
    a: 1
  },
  {
    q: "SKBDN memiliki mekanisme mirip L/C namun dibedakan oleh",
    o: [
      "Hanya menggunakan valuta asing",
      "Hanya untuk transaksi dalam negeri",
      "Tidak memerlukan bank",
      "Tidak memerlukan dokumen"
    ],
    a: 1
  },
  {
    q: "Nasabah memiliki kredit dengan tunggakan pokok dan/atau bunga selama 95 hari. Kolektibilitas kredit tersebut adalah",
    o: ["DPK", "Kurang Lancar", "Diragukan", "Macet"],
    a: 1
  },
  {
    q: "Plafon kredit yang bersifat revolving berarti",
    o: [
      "Tidak dapat digunakan kembali",
      "Hanya dapat digunakan sekali",
      "Dapat digunakan kembali setelah pelunasan",
      "Harus ditarik sekaligus"
    ],
    a: 2
  },
  {
    q: "Kredit yang tidak hanya mencakup penyediaan dana tetapi juga penjaminan termasuk dalam kategori",
    o: [
      "Kredit konsumtif",
      "Kredit produktif",
      "Kredit personal",
      "Kredit jangka panjang"
    ],
    a: 1
  },
  {
    q: "Nasabah membutuhkan pembiayaan untuk membayar pemasok sementara piutang dari pembeli belum diterima. Kebutuhan ini dikategorikan sebagai",
    o: [
      "Kebutuhan investasi",
      "Kebutuhan penjaminan",
      "Kebutuhan pembiayaan",
      "Kebutuhan refinancing"
    ],
    a: 2
  },
  {
    q: "Dalam Kredit Investasi, realisasi kredit untuk pembelian mesin dilakukan berdasarkan",
    o: [
      "Saldo giro debitur",
      "Dokumen tagihan atau invoice",
      "Permintaan lisan debitur",
      "Plafon rekening giro"
    ],
    a: 1
  },
  {
    q: "Kredit Modal Kerja dengan jangka waktu maksimum 1 tahun dan dapat diperpanjang adalah karakteristik dari",
    o: [
      "Kredit Lokal dan Time Loan",
      "Installment Loan",
      "Kredit Investasi",
      "Bank Garansi"
    ],
    a: 0
  },
  {
    q: "Perhitungan plafon Kredit Ekspor dipengaruhi oleh target nilai ekspor dan",
    o: [
      "Suku bunga pasar",
      "Jumlah perputaran usaha",
      "Nilai agunan",
      "Saldo rekening giro"
    ],
    a: 1
  },
  {
    q: "Nasabah ingin mengatur pembayaran pinjaman modal kerja secara mencicil agar arus kas lebih terkontrol. Solusi yang tepat adalah",
    o: ["Kredit Lokal", "Time Loan", "Installment Loan", "Trust Receipt"],
    a: 2
  },
  {
    q: "Dalam Kredit Lokal, apabila tidak ada outstanding maka pelunasan pokok dilakukan dengan cara",
    o: [
      "Pendebetan angsuran",
      "Penarikan tunai",
      "Pencabutan plafon",
      "Perpanjangan tenor"
    ],
    a: 2
  },
  {
    q: "Bank berperan sebagai penengah akibat adanya ketidakpercayaan antara buyer dan seller pada kebutuhan",
    o: [
      "Pembiayaan",
      "Penjaminan",
      "Investasi",
      "Refinancing"
    ],
    a: 1
  },
  {
    q: "Kredit dengan plafon dicatat di rekening giro dan dapat digunakan melalui cek atau BG merupakan ciri dari",
    o: ["Time Loan", "Installment Loan", "Kredit Lokal", "Trust Receipt"],
    a: 2
  },
  {
    q: "Nasabah ingin melunasi pinjaman sebelum jatuh tempo pada fasilitas Time Loan. Ketentuan yang berlaku adalah",
    o: [
      "Tidak diperbolehkan",
      "Hanya boleh seluruhnya",
      "Diperbolehkan per SPPFK",
      "Harus menunggu akhir fasilitas"
    ],
    a: 2
  }

]

export default questions