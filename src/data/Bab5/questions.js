const questions = [
{
q: "Seorang calon nasabah membuka rekening perusahaan. Saat proses CDD, diketahui bahwa salah satu komisaris adalah mantan Bupati yang berhenti menjabat 2 tahun lalu. Perusahaan bergerak di bidang ekspor batu bara. Berdasarkan pedoman APU PPT, tindakan yang paling tepat adalah",
o: ["Proses normal karena sudah tidak menjabat", "Tolak pembukaan rekening", "Tetapkan sebagai PEP dan lakukan EDD", "Tetapkan sebagai NRT tanpa EDD"],
a: 2
},
{
q: "Seorang WIC melakukan setoran tunai Rp 490 juta sebanyak 3 kali dalam 2 hari berbeda ke rekening yang sama. Profil pemilik rekening adalah usaha kecil minimarket. Indikasi yang paling tepat menurut PPT adalah",
o: ["Transaksi normal karena di bawah 500 juta", "Indikasi structuring", "Indikasi integration", "Tidak perlu dianalisis"],
a: 1
},
{
q: "Dalam proses pembukaan rekening, calon nasabah WNA tidak memiliki TIN dan menyatakan negaranya tidak mewajibkan TIN. Namun negara tersebut sebenarnya menerbitkan TIN. Berdasarkan pedoman FATCA/CRS, tindakan cabang adalah",
o: ["Tetap proses dengan catatan", "Tunda pembukaan rekening", "Masukkan alasan 5", "Setujui dengan EDD"],
a: 1
},
{
q: "Seorang nasabah existing tiba-tiba melakukan transfer ke negara yang termasuk dalam daftar negara berisiko tinggi menurut FATF. Sebelumnya transaksi hanya domestik. Tindakan awal yang tepat adalah",
o: ["Blokir otomatis rekening", "Monitoring dan analisa transaksi", "Langsung lapor LTKM", "Tutup hubungan usaha"],
a: 1
},
{
q: "Calon nasabah perusahaan tidak bersedia mengungkap Beneficial Owner dengan alasan privasi. Berdasarkan pedoman PPT, bank harus",
o: ["Terima dengan surat pernyataan", "Proses sebagai risiko sedang", "Tolak pembukaan rekening", "Tunda dan minta klarifikasi internal"],
a: 2
},
{
q: "Seorang nasabah melakukan transaksi tunai Rp 600 juta satu kali. Tidak ada indikasi mencurigakan lainnya. Kewajiban pelaporan yang timbul adalah",
o: ["LTKM", "LTKT", "LTKL", "Tidak wajib lapor"],
a: 1
},
{
q: "Dalam monitoring sistem STIM terdeteksi transaksi tidak sesuai profil usaha. Cabang telah diminta klarifikasi oleh DCP. Batas waktu respon cabang adalah",
o: ["3 hari", "5 hari", "7 hari", "14 hari"],
a: 2
},
{
q: "Seorang anak pejabat aktif membuka rekening dengan setoran awal besar dari perusahaan milik ayahnya. Berdasarkan pedoman PEP, status yang tepat adalah",
o: ["Nasabah biasa", "NRT non-PEP", "PEP karena keluarga inti", "Risiko rendah"],
a: 2
},
{
q: "Nasabah perusahaan properti memiliki struktur kepemilikan kompleks dan melibatkan perusahaan luar negeri di tax haven country. Tindakan yang tepat adalah",
o: ["Proses normal", "Lakukan EDD", "Tolak otomatis", "Abaikan negara asal"],
a: 1
},
{
q: "Seorang teller mengetahui bahwa laporan LTKM sedang dibuat atas transaksi nasabah. Nasabah menanyakan apakah rekeningnya bermasalah. Berdasarkan anti tipping-off, teller harus",
o: ["Memberi tahu sedang dianalisa", "Mengatakan tidak tahu", "Menjelaskan secara detail", "Menyarankan menunggu hasil investigasi"],
a: 1
},
{
q: "Nasabah termasuk dalam DTTOT. Berdasarkan pedoman, bank wajib",
o: ["Monitoring khusus", "Tutup hubungan usaha", "Tunggu arahan pusat", "Lakukan EDD saja"],
a: 1
},
{
q: "Calon nasabah menggunakan KTP-el namun tidak terverifikasi di Dukcapil. Langkah yang sesuai adalah",
o: ["Terima sementara", "Lanjut dengan surat keterangan", "Tolak pembukaan rekening", "Tandai sebagai NRT"],
a: 2
},
{
q: "Perusahaan money changer membuka rekening operasional. Berdasarkan kriteria bidang usaha, status awal risiko adalah",
o: ["Rendah", "Sedang", "Tinggi", "Tidak diklasifikasikan"],
a: 2
},
{
q: "Seorang nasabah PEP domestik melakukan transaksi rutin sesuai profil dan tidak ada indikasi penyimpangan. Kewajiban bank adalah",
o: ["Turunkan status risiko", "Tetap lakukan EDD berkala", "Hapus status PEP", "Tidak perlu monitoring"],
a: 1
},
{
q: "Transaksi dibatalkan sebelum diproses, namun diduga berasal dari hasil tindak pidana. Berdasarkan definisi TKM, transaksi tersebut",
o: ["Tidak termasuk TKM", "Termasuk TKM", "Hanya dicatat internal", "Dilaporkan sebagai LTKT"],
a: 1
},
{
q: "Nasabah tidak mengambil sisa dana setelah rekening ditutup akibat pelanggaran APU PPT. Tindakan selanjutnya sesuai pedoman adalah",
o: ["Disimpan permanen", "Diserahkan ke Balai Harta Peninggalan", "Dihapuskan", "Dikembalikan ke kas negara otomatis"],
a: 1
},
{
q: "Cabang terlambat menyampaikan satu laporan LTKM selama 5 hari. Potensi denda maksimal adalah",
o: ["Rp 500.000", "Rp 5.000.000", "Rp 30.000.000", "Rp 100.000"],
a: 0
},
{
q: "Seorang WNA membuka rekening namun tidak mengisi informasi FATCA/CRS. Berdasarkan pedoman, cabang harus",
o: ["Lanjut dan lengkapi belakangan", "Tunda pembukaan rekening", "Input alasan manual", "Proses sebagai risiko sedang"],
a: 1
},
{
q: "Perusahaan NGO menerima dana besar dari luar negeri tanpa kejelasan sumber. Berdasarkan klasifikasi usaha, tindakan yang tepat adalah",
o: ["Proses normal", "Tetapkan NRT dan analisa", "Langsung lapor LTKT", "Abaikan karena nonprofit"],
a: 1
},
{
q: "Seorang nasabah melakukan transfer ke rekening luar negeri sebesar Rp 200 juta. Kewajiban pelaporan adalah",
o: ["LTKT", "LTKL", "LTKM otomatis", "Tidak wajib lapor"],
a: 1
},
{
q: "Beneficial Owner tidak tercantum dalam struktur formal perusahaan tetapi mengendalikan keputusan transaksi. Berdasarkan definisi BO, orang tersebut",
o: ["Bukan BO", "Tetap BO", "Hanya pengurus", "Tidak relevan"],
a: 1
},
{
q: "Nasabah memberikan dokumen identitas berbeda antara sistem dan fisik. Langkah yang tepat adalah",
o: ["Proses jika minor", "Lanjut dengan catatan", "Verifikasi ulang dan tunda", "Setujui jika saldo besar"],
a: 2
},
{
q: "Dalam RBA, parameter sistem mendeteksi negara kewarganegaraan termasuk risiko tinggi. Otomatis status menjadi",
o: ["Rendah", "Sedang", "Tinggi", "Normal"],
a: 2
},
{
q: "Seorang analis menemukan transaksi yang bertujuan menghindari pelaporan CTR. Berdasarkan definisi TKM, tindakan yang tepat adalah",
o: ["LTKT", "LTKM", "Tidak dilaporkan", "Tunggu 14 hari"],
a: 1
},
{
q: "Data nasabah tidak pernah diperbarui selama 4 tahun dan termasuk NRT. Berdasarkan R-KYC09, tindakan yang wajib dilakukan adalah",
o: ["Biarkan", "Pengkinian data berkala", "Tutup rekening", "Hapus status NRT"],
a: 1
},
{
q: "Seorang nasabah individu berstatus PNS eselon II membuka rekening baru dengan setoran awal besar dan menyatakan dana berasal dari 'tabungan pribadi'. Berdasarkan kriteria PEP, tindakan awal yang tepat adalah",
o: ["Proses normal karena dana pribadi", "Tetapkan sebagai PEP dan lakukan EDD", "Tolak pembukaan rekening", "Masukkan sebagai risiko sedang"],
a: 1
},
{
q: "Perusahaan berbasis digital asset exchange mengajukan pembukaan rekening operasional. Bidang usaha ini dalam pedoman termasuk",
o: ["Risiko rendah", "Tidak diklasifikasikan", "Usaha risiko tinggi", "Risiko sedang otomatis"],
a: 2
},
{
q: "Nasabah existing masuk dalam sanction list organisasi internasional yang diakui pemerintah. Berdasarkan pedoman, bank harus",
o: ["Monitoring intensif", "Lakukan EDD tambahan", "Tutup hubungan usaha", "Turunkan limit transaksi"],
a: 2
},
{
q: "Seorang WIC melakukan transfer ke luar negeri sebesar Rp 50 juta. Tidak ada indikasi mencurigakan. Kewajiban pelaporan adalah",
o: ["LTKM", "LTKT", "LTKL", "Tidak wajib lapor"],
a: 2
},
{
q: "Nasabah perusahaan tidak memiliki pengurus yang terdaftar sebagai PEP, namun Beneficial Owner adalah keluarga inti Menteri aktif. Status risiko yang tepat adalah",
o: ["Risiko sedang", "PEP", "NRT non-PEP", "Risiko rendah"],
a: 1
},
{
q: "Seorang analis menemukan transaksi yang berasal dari salah satu dari 26 tindak pidana yang disebutkan dalam UU TPPU. Cabang wajib",
o: ["Tunggu instruksi PPATK", "Input STIM dan lapor ke DCP", "Hanya dokumentasi internal", "Blokir tanpa laporan"],
a: 1
},
{
q: "Calon nasabah tidak bersedia menyerahkan dokumen tambahan yang diminta dalam proses EDD. Tindakan yang sesuai adalah",
o: ["Proses dengan catatan", "Turunkan status risiko", "Tolak pembukaan rekening", "Laporkan sebagai LTKT"],
a: 2
},
{
q: "Nasabah melakukan transaksi yang menyimpang dari profil namun masih dalam batas nominal wajar. Berdasarkan definisi TKM, bank harus",
o: ["Abaikan karena nominal kecil", "Analisa dan pertimbangkan LTKM", "Laporkan LTKT", "Tutup rekening"],
a: 1
},
{
q: "Seorang pejabat aktif BI membuka rekening atas nama pribadi. Berdasarkan daftar PEP domestik, statusnya adalah",
o: ["Risiko rendah", "NRT non-PEP", "PEP domestik", "Tidak termasuk PEP"],
a: 2
},
{
q: "Nasabah menyatakan negaranya tidak menerbitkan TIN. Setelah dicek, benar negara tersebut tidak memiliki sistem TIN. Alasan yang dapat digunakan adalah",
o: ["Alasan 1", "Alasan 4", "Alasan 5", "Alasan 6"],
a: 1
},
{
q: "Bank menemukan transaksi mencurigakan dan menyusun LTKM. Jangka waktu pelaporan maksimal adalah",
o: ["3 hari", "5 hari", "7 hari", "14 hari"],
a: 0
},
{
q: "Seorang notaris membuka rekening escrow untuk transaksi properti bernilai besar. Berdasarkan profesi, notaris termasuk",
o: ["Risiko rendah", "Profesi risiko tinggi", "Tidak diklasifikasi", "Risiko sedang otomatis"],
a: 1
},
{
q: "Nasabah NRT tidak menunjukkan transaksi mencurigakan selama 2 tahun. Status risiko menurut pedoman",
o: ["Otomatis turun", "Tetap sesuai hasil RBA", "Harus dihapus", "Diubah menjadi rendah"],
a: 1
},
{
q: "Seorang teller mengetahui adanya STR terhadap nasabah dan membocorkannya kepada rekan kerja non-terkait. Berdasarkan pedoman, tindakan tersebut",
o: ["Diperbolehkan internal", "Melanggar anti tipping-off", "Tidak diatur", "Diperbolehkan jika lisan"],
a: 1
},
{
q: "Perusahaan ekspor-impor minyak mentah membuka rekening baru. Berdasarkan bidang usaha, risiko awal adalah",
o: ["Sedang", "Rendah", "Tinggi", "Tidak otomatis tinggi"],
a: 2
},
{
q: "Nasabah melakukan transaksi yang diminta PPATK untuk dilaporkan. Berdasarkan definisi, transaksi tersebut",
o: ["LTKT", "Bukan TKM", "Termasuk TKM", "Tidak perlu analisa"],
a: 2
},
{
q: "Cabang tidak melakukan pengkinian data terhadap nasabah NRT sesuai target R-KYC09. Dampak regulasi yang mungkin timbul adalah",
o: ["Tidak ada dampak", "Sanksi regulator", "Hanya audit internal", "Penurunan limit nasabah"],
a: 1
},
{
q: "Nasabah perusahaan memiliki cabang usaha di negara risiko tinggi. Parameter RBA badan usaha akan",
o: ["Tetap rendah", "Menjadi tinggi", "Tidak berubah", "Menjadi sedang"],
a: 1
},
{
q: "Seorang auditor pajak membuka rekening pribadi. Berdasarkan pedoman, termasuk kategori",
o: ["Risiko rendah", "PEP domestik", "NRT non-PEP unsur pemerintah", "Tidak termasuk risiko tinggi"],
a: 2
},
{
q: "Nasabah melakukan transaksi tunai Rp 450 juta dan Rp 60 juta pada hari yang sama. Total melebihi threshold. Kewajiban pelaporan adalah",
o: ["LTKM", "LTKT", "Tidak wajib lapor", "LTKL"],
a: 1
},
{
q: "Bank menyimpan dokumen transaksi nasabah selama 3 tahun setelah hubungan usaha berakhir. Berdasarkan pedoman, tindakan ini",
o: ["Sesuai ketentuan", "Kurang dari ketentuan", "Melebihi ketentuan", "Tidak diatur"],
a: 1
},
{
q: "Nasabah berbentuk shell bank. Berdasarkan pedoman, bank harus",
o: ["Proses dengan EDD", "Tolak hubungan usaha", "Monitoring khusus", "Tunggu audit"],
a: 1
},
{
q: "Seorang pengurus partai politik membuka rekening pribadi. Berdasarkan kriteria PEP, statusnya adalah",
o: ["Risiko rendah", "PEP domestik", "NRT non-PEP", "Sedang"],
a: 1
},
{
q: "Nasabah memberikan informasi yang diragukan kebenarannya namun tidak terbukti palsu. Tindakan yang sesuai adalah",
o: ["Proses normal", "Tunda dan klarifikasi lebih lanjut", "Langsung lapor LTKM", "Tutup hubungan usaha"],
a: 1
},
{
q: "Cabang menginput STIM namun tidak mengarsipkan bukti input saat terjadi rotasi pegawai. Berdasarkan pedoman, tindakan tersebut",
o: ["Tidak masalah", "Melanggar prosedur administrasi", "Boleh jika digital", "Hanya kesalahan minor"],
a: 1
},
{
q: "Seorang nasabah perusahaan kehutanan menerima dana besar dari luar negeri secara rutin. Bidang usaha termasuk risiko tinggi dan negara pengirim termasuk daftar negara dengan tata kelola rendah. Tindakan awal yang tepat adalah",
o: ["Proses normal karena sesuai usaha", "Lakukan EDD dan analisa transaksi", "Langsung tutup rekening", "Laporkan sebagai LTKT"],
a: 1
},
{
q: "Nasabah menyatakan tidak memiliki TIN karena sudah tidak menjadi subjek pajak di negara domisilinya. Setelah diverifikasi, pernyataan tersebut benar. Alasan yang digunakan adalah",
o: ["Alasan 2", "Alasan 3", "Alasan 5", "Alasan 6"],
a: 3
},
{
q: "Seorang kepala kantor pajak membuka rekening atas nama pribadi. Berdasarkan pedoman, status risiko yang tepat adalah",
o: ["Risiko rendah", "PEP domestik", "NRT non-PEP unsur pemerintah", "Risiko sedang"],
a: 2
},
{
q: "Nasabah melakukan transaksi berulang yang tujuannya diduga menghindari pelaporan CTR. Walau nominal kecil, tindakan bank adalah",
o: ["Abaikan karena kecil", "Laporkan LTKT", "Analisa dan pertimbangkan LTKM", "Blokir sementara tanpa laporan"],
a: 2
},
{
q: "Dalam proses screening, nama nasabah mirip dengan daftar DTTOT namun berbeda tanggal lahir dan alamat. Langkah yang tepat adalah",
o: ["Langsung tolak", "Abaikan karena mirip saja", "Lakukan verifikasi lanjutan", "Tutup hubungan usaha"],
a: 2
},
{
q: "Nasabah PEP telah berhenti menjabat 5 tahun lalu. Berdasarkan pedoman, statusnya",
o: ["Otomatis bukan PEP", "Tetap termasuk PEP", "Menjadi risiko rendah", "Tidak perlu EDD"],
a: 1
},
{
q: "Seorang analis mengetahui bahwa cabang tidak melaporkan transaksi mencurigakan dalam waktu yang ditentukan. Potensi sanksi yang timbul dapat berupa",
o: ["Hanya teguran lisan", "Sanksi administratif dan denda", "Tidak ada sanksi", "Pemotongan saldo nasabah"],
a: 1
},
{
q: "Nasabah badan usaha memiliki pengurus utama yang merupakan WNA dari negara risiko tinggi. Parameter RBA badan akan",
o: ["Menjadi rendah", "Menjadi sedang", "Menjadi tinggi", "Tidak berubah"],
a: 2
},
{
q: "Seorang mahasiswa membuka rekening dan tidak memiliki TIN karena belum diwajibkan menurut UU pajak negara domisili. Alasan yang digunakan adalah",
o: ["Alasan 1", "Alasan 2", "Alasan 4", "Alasan 6"],
a: 0
},
{
q: "Nasabah melakukan transfer dana ke luar negeri Rp 1 miliar tanpa indikasi mencurigakan. Kewajiban pelaporan adalah",
o: ["LTKT", "LTKL", "LTKM", "Tidak wajib"],
a: 1
},
{
q: "Dokumen identitas nasabah tidak tercatat pada Daftar Identitas Khusus (DIK). Implikasi terhadap pembukaan rekening adalah",
o: ["Langsung ditolak", "Perlu verifikasi tambahan", "Boleh diproses", "Masuk kategori NRT"],
a: 2
},
{
q: "Nasabah NGO menerima dana donasi dari berbagai negara termasuk negara yang terkena sanksi PBB. Tindakan bank adalah",
o: ["Proses biasa", "Lakukan EDD", "Turunkan limit", "Abaikan karena donasi"],
a: 1
},
{
q: "Cabang menyampaikan LTKM melebihi 30 hari keterlambatan. Berdasarkan ketentuan denda maksimal per laporan adalah",
o: ["Rp 100.000", "Rp 3.000.000", "Rp 30.000.000", "Rp 50.000.000"],
a: 2
},
{
q: "Seorang hakim aktif membuka rekening baru dengan transaksi awal besar. Status menurut pedoman adalah",
o: ["Risiko rendah", "NRT non-PEP", "PEP domestik", "Sedang"],
a: 2
},
{
q: "Nasabah perusahaan tidak memiliki usaha namun menerima dana besar dari pihak ketiga tanpa hubungan jelas. Berdasarkan profil, tindakan yang tepat adalah",
o: ["Proses normal", "Analisa dan evaluasi sebagai TKM", "Laporkan LTKT", "Tutup tanpa analisa"],
a: 1
},
{
q: "Bank melakukan pengkinian data dan menemukan perubahan Beneficial Owner. Langkah selanjutnya adalah",
o: ["Abaikan jika minor", "Update data dan evaluasi risiko ulang", "Tutup rekening", "Laporkan otomatis LTKM"],
a: 1
},
{
q: "Seorang pengusaha kasino membuka rekening baru. Berdasarkan bidang usaha, risiko awal adalah",
o: ["Rendah", "Sedang", "Tinggi", "Tidak otomatis tinggi"],
a: 2
},
{
q: "Nasabah meminta informasi apakah dirinya telah dilaporkan ke PPATK. Berdasarkan pedoman, pegawai harus",
o: ["Menjawab jujur", "Menolak memberikan informasi", "Memberikan sebagian info", "Mengarahkan ke PPATK"],
a: 1
},
{
q: "Perusahaan investasi emas menerima setoran tunai besar rutin tiap minggu. Berdasarkan klasifikasi usaha dan pola transaksi, tindakan yang tepat adalah",
o: ["Normal", "Analisa dan monitoring ketat", "Langsung LTKM", "Turunkan status risiko"],
a: 1
},
{
q: "Nasabah WNA tidak mengisi kolom CRS dan tidak memenuhi salah satu dari 6 alasan sah. Cabang wajib",
o: ["Lanjut dengan EDD", "Tunda pembukaan rekening", "Input alasan manual", "Proses sebagai NRT"],
a: 1
},
{
q: "Seorang pejabat TNI perwira tinggi membuka rekening. Berdasarkan pedoman, statusnya adalah",
o: ["Risiko rendah", "PEP domestik", "NRT non-PEP", "Sedang"],
a: 1
},
{
q: "Transaksi dinyatakan mencurigakan oleh media massa dan surat penegak hukum. Berdasarkan definisi, transaksi tersebut dapat menjadi",
o: ["LTKT", "Tidak relevan", "LTKM", "IFTI"],
a: 2
},
{
q: "Bank tidak menyimpan dokumen transaksi setelah 2 tahun hubungan usaha berakhir. Berdasarkan ketentuan, tindakan ini",
o: ["Sesuai aturan", "Melanggar karena kurang dari 5 tahun", "Melebihi ketentuan", "Tidak diatur"],
a: 1
},
{
q: "Seorang kurator membuka rekening untuk pengelolaan dana pailit. Berdasarkan profesi, termasuk kategori",
o: ["Risiko rendah", "Risiko sedang", "Profesi risiko tinggi", "Tidak diklasifikasi"],
a: 2
},
{
q: "Nasabah melakukan transaksi yang sesuai profil dan tidak ada indikasi mencurigakan, namun termasuk PEP. Kewajiban bank adalah",
o: ["Tidak perlu monitoring", "Tetap lakukan monitoring dan EDD", "Turunkan status risiko", "Tutup rekening"],
a: 1
},
{
q: "Seorang nasabah melakukan transaksi yang sumber dananya diketahui berasal dari tindak pidana korupsi berdasarkan putusan pengadilan. Berdasarkan pedoman, bank wajib",
o: ["Monitoring saja", "Laporkan sebagai LTKM", "Laporkan LTKT", "Tunggu instruksi regulator"],
a: 1
},
{
q: "Dalam proses EDD terhadap nasabah PEP, cabang tidak memperoleh persetujuan kepala KCU saat penetapan awal. Berdasarkan pedoman, tindakan tersebut",
o: ["Diperbolehkan", "Melanggar prosedur penetapan NRT/PEP", "Hanya kesalahan administratif ringan", "Tidak diatur"],
a: 1
},
{
q: "Nasabah perusahaan memiliki struktur kepemilikan berlapis dan tidak jelas pengendali akhirnya. Berdasarkan kewajiban identifikasi BO, bank harus",
o: ["Proses karena legal formal lengkap", "Minta klarifikasi dan identifikasi BO", "Tetap buka rekening", "Masukkan risiko rendah"],
a: 1
},
{
q: "Seorang nasabah melakukan transaksi tunai Rp 499 juta setiap minggu selama satu bulan. Profil usaha tidak mendukung volume tersebut. Tindakan yang tepat adalah",
o: ["Laporkan LTKT", "Analisa dan pertimbangkan LTKM", "Abaikan karena di bawah threshold", "Blokir tanpa analisa"],
a: 1
},
{
q: "Nasabah berbentuk badan usaha dengan lokasi cabang di negara risiko tinggi dan bidang usaha properti. Berdasarkan parameter RBA badan, status risiko kemungkinan",
o: ["Rendah", "Sedang", "Tinggi", "Tidak berubah"],
a: 2
},
{
q: "Cabang menerima permintaan pembukaan rekening dari bank asing yang mengizinkan rekeningnya digunakan oleh shell bank. Berdasarkan pedoman, bank wajib",
o: ["Lakukan EDD", "Tolak hubungan usaha", "Monitoring khusus", "Tunggu arahan pusat"],
a: 1
},
{
q: "Seorang nasabah memberikan PIN dan dokumen tambahan yang tidak konsisten dengan data sistem. Langkah awal yang sesuai adalah",
o: ["Proses karena minor", "Verifikasi ulang dan klarifikasi", "Langsung LTKM", "Tutup hubungan usaha"],
a: 1
},
{
q: "Nasabah termasuk dalam DPPSPM berdasarkan screening sistem. Tindakan bank adalah",
o: ["Monitoring biasa", "Tutup hubungan usaha", "Turunkan limit", "Proses dengan catatan"],
a: 1
},
{
q: "Bank menemukan transaksi mencurigakan namun belum ada kerugian nyata. Berdasarkan definisi TKM, laporan tetap",
o: ["Tidak perlu", "Wajib LTKM", "LTKT saja", "IFTI saja"],
a: 1
},
{
q: "Seorang analis mengetahui bahwa data nasabah tidak lengkap dan tidak valid berdasarkan Report DQI. Tindakan cabang adalah",
o: ["Abaikan jika transaksi normal", "Lakukan verifikasi dan feedback cabang", "Tutup rekening", "Laporkan LTKM"],
a: 1
},
{
q: "Nasabah WNA berasal dari negara yang termasuk daftar FATF high risk jurisdiction. Parameter RBA akan",
o: ["Menjadi rendah", "Menjadi tinggi", "Tidak berubah", "Menjadi sedang"],
a: 1
},
{
q: "Nasabah menolak dilakukan tatap muka elektronik saat proses identifikasi. Berdasarkan mekanisme onboarding, tindakan yang tepat adalah",
o: ["Proses tanpa tatap muka", "Tunda sampai identifikasi terpenuhi", "Masukkan risiko rendah", "Laporkan LTKM"],
a: 1
},
{
q: "Pegawai bank membocorkan informasi LTKM kepada pihak eksternal non-regulator. Sanksi yang mungkin timbul adalah",
o: ["Denda administratif saja", "Pidana penjara dan/atau denda", "Tidak ada sanksi", "Hanya teguran tertulis"],
a: 1
},
{
q: "Nasabah melakukan transaksi luar negeri dan termasuk dalam kategori IFTI. Jangka waktu pelaporan maksimal adalah",
o: ["3 hari", "7 hari", "14 hari", "30 hari"],
a: 2
},
{
q: "Perusahaan perdagangan senjata api mengajukan pembukaan rekening. Berdasarkan klasifikasi usaha, status risiko awal adalah",
o: ["Rendah", "Sedang", "Tinggi", "Tidak otomatis tinggi"],
a: 2
},
{
q: "Nasabah menyampaikan informasi perpajakan yang tidak dapat diverifikasi dan tidak termasuk 6 alasan sah. Berdasarkan pedoman, cabang harus",
o: ["Proses dengan EDD", "Tunda pembukaan rekening", "Input alasan manual", "Proses sebagai risiko sedang"],
a: 1
},
{
q: "Seorang pejabat partai politik aktif membuka rekening perusahaan miliknya. Berdasarkan pedoman, status risiko yang tepat adalah",
o: ["Risiko rendah", "NRT non-PEP", "PEP", "Sedang"],
a: 2
},
{
q: "Nasabah perusahaan menerima dana dari negara yang terkena embargo PBB. Tindakan bank yang tepat adalah",
o: ["Proses normal", "Lakukan EDD dan analisa", "Turunkan limit", "Abaikan karena legal formal lengkap"],
a: 1
},
{
q: "Cabang tidak melakukan screening terhadap database DTTOT saat onboarding. Dampak potensial adalah",
o: ["Tidak ada dampak", "Kegagalan penerapan APU PPT", "Hanya kesalahan minor", "Tidak termasuk pelanggaran"],
a: 1
},
{
q: "Nasabah melakukan transaksi sesuai profil namun termasuk NRT. Berdasarkan pedoman monitoring, bank harus",
o: ["Tidak perlu monitoring", "Tetap monitoring sesuai risiko", "Turunkan status risiko otomatis", "Tutup rekening"],
a: 1
},
{
q: "Dalam pengkinian berkala, ditemukan perubahan alamat namun tidak ada perubahan struktur kepemilikan. Tindakan bank adalah",
o: ["Update data dan dokumentasikan", "Tutup rekening", "Laporkan LTKM", "Abaikan perubahan"],
a: 0
},
{
q: "Seorang nasabah melakukan transaksi yang dibatalkan namun terdapat indikasi hasil tindak pidana. Berdasarkan definisi, transaksi tersebut",
o: ["Bukan TKM", "Termasuk TKM", "Hanya dicatat internal", "LTKT saja"],
a: 1
},
{
q: "Nasabah perusahaan tidak memenuhi kelengkapan dokumen pendukung pembukaan rekening. Berdasarkan pedoman, bank wajib",
o: ["Proses sementara", "Tolak hubungan usaha", "Turunkan limit", "Monitoring saja"],
a: 1
},
{
q: "Nasabah termasuk dalam watchlist internal dan memiliki informasi negatif dari sumber eksternal terpercaya. Berdasarkan RBA, status risiko kemungkinan",
o: ["Rendah", "Sedang", "Tinggi", "Tidak berubah"],
a: 2
},
{
q: "Bank tidak melaporkan LTKL dalam jangka waktu yang ditentukan. Potensi sanksi regulator dapat berupa",
o: ["Tidak ada sanksi", "Sanksi administratif dan denda", "Pemblokiran nasabah", "Penghapusan kewajiban laporan"],
a: 1
}
]

export default questions

