const questions = [
  {
    text: "Andi sedang di depan ATM Setor Tarik BCA pada malam hari dan ingin tarik tunai Rp3.000.000. Kartunya tertinggal di rumah, tapi ia sudah registrasi dan aktivasi m-BCA di aplikasi BCA mobile pada HP-nya. Kanal mana yang paling tepat ia gunakan untuk tetap bisa tarik tunai saat itu juga?",
    options: [
      "Menggunakan fitur Cardless di menu m-BCA pada BCA mobile",
      "Menggunakan QRIS CPM di BCA mobile lalu minta merchant tarik tunai",
      "Menghubungi HaloBCA untuk meminta teller cabang menyiapkan uang tunai",
      "Menggunakan VIRA untuk meminta transfer ke rekening temannya"
    ],
    correctIndex: 0
  },
  {
    text: "Sari ingin membayar belanja di sebuah minimarket yang hanya menerima QRIS. Ia memiliki kartu Paspor BCA dan juga sudah mengaktifkan BCA mobile dengan akses m-BCA. Namun ia tidak ingin menggunakan kartu fisik. Fitur mana yang paling tepat ia gunakan untuk melakukan pembayaran tersebut?",
    options: [
      "Transfer antar bank melalui m-BCA ke rekening kasir",
      "Pembayaran menggunakan QRIS MPM di menu QR pada BCA mobile",
      "Menggunakan fasilitas Tarik Tunai Cardless lalu bayar tunai",
      "Melakukan pembelian menggunakan Flazz di EDC BCA"
    ],
    correctIndex: 1
  },
  {
    text: "Dono ingin top up uang elektronik aplikasi lain (bukan produk BCA) menggunakan BCA mobile. Ia tahu ada limit harian untuk top up via Virtual Account di m-BCA. Saat ini ia sudah top up Rp9.000.000 hari ini dan ingin top up lagi Rp2.000.000 dengan nomor handphone yang sama. Apa yang paling tepat?",
    options: [
      "Transaksi bisa dilakukan karena limit top up per hari/nomor HP Rp10.000.000",
      "Transaksi tidak bisa dilakukan karena limit top up per hari/nomor HP Rp10.000.000 sudah hampir tercapai",
      "Transaksi tidak bisa dilakukan karena limit top up per hari/nomor HP Rp10.000.000 akan terlewati",
      "Transaksi tetap bisa dilakukan karena limit mengikuti limit kartu debit"
    ],
    correctIndex: 2
  },
  {
    text: "Rina ingin membuka rekening baru secara online. Ia memiliki HP Android dan ingin prosesnya tanpa datang cabang. Ia mendengar bahwa pembukaan rekening online BCA mensyaratkan video call dengan CS HaloBCA dan verifikasi email. Layanan mana yang harus ia gunakan untuk membuka rekening tersebut?",
    options: [
      "Menu Buka Rekening Baru di BCA mobile",
      "Menu Pembukaan Rekening di KlikBCA Individu",
      "Menu Pembukaan Rekening di myBCA web",
      "Mengajukan melalui Mobile HaloBCA"
    ],
    correctIndex: 0
  },
  {
    text: "Bayu ingin melakukan transfer antar rekening BCA melalui m-BCA dengan kartu Paspor BCA Gold. Hari ini ia sudah transfer Rp90.000.000 via m-BCA dan ingin transfer lagi Rp40.000.000 di hari yang sama. Ia belum melakukan transfer via ATM. Mana pernyataan yang paling tepat terkait limitnya?",
    options: [
      "Transaksi bisa karena limit harian transfer antar rekening BCA via m-BCA untuk Gold Rp125.000.000",
      "Transaksi tidak bisa karena limit harian m-BCA hanya Rp100.000.000 untuk semua kartu",
      "Transaksi hanya bisa jika dilakukan via KlikBCA Individu",
      "Transaksi hanya bisa jika menggunakan myBCA, bukan m-BCA"
    ],
    correctIndex: 0
  },
  {
    text: "Vina ingin membayar tagihan listrik PLN Prepaid melalui BCA mobile saat berada di rumah. Ia sudah registrasi m-BCA dan memiliki akses menu finansial. Menu mana yang harus ia gunakan agar transaksi berjalan sesuai ketentuan?",
    options: [
      "Menu m-Info di BCA mobile",
      "Menu m-Payment di BCA mobile",
      "Menu m-Admin di BCA mobile",
      "Menu Info BCA di BCA mobile"
    ],
    correctIndex: 1
  },
  {
    text: "Rudi ingin memastikan bahwa saat ia mengakses m-BCA di BCA mobile, keamanan transaksinya terjaga. Ia tahu bahwa untuk login m-BCA, diperlukan Kode Akses dan untuk transaksi finansial akan menggunakan PIN m-BCA. Mana pernyataan yang paling tepat?",
    options: [
      "Kode Akses dan PIN m-BCA sama-sama 8 digit alfanumerik",
      "Kode Akses berupa kombinasi huruf/angka, PIN m-BCA 6 digit numerik",
      "Kode Akses 6 digit numerik, PIN m-BCA 4 digit numerik",
      "Kode Akses memakai biometrik, PIN m-BCA 8 digit numerik"
    ],
    correctIndex: 1
  },
  {
    text: "Lina hendak melakukan QRIS Cross Border di myBCA saat berada di Singapura. Ia membaca bahwa limit QR Cross Border mengikuti limit terkecil antara limit negara dan limit QRIS. Apa implikasinya terhadap transaksi yang ingin ia lakukan?",
    options: [
      "Transaksi pasti mengikuti limit harian Rp25.000.000 per BCA ID",
      "Transaksi mengikuti limit per transaksi QRIS saja",
      "Transaksi mengikuti limit terkecil antara limit negara tujuan dan limit QRIS",
      "Transaksi tidak memiliki limit jika di luar negeri"
    ],
    correctIndex: 2
  },
  {
    text: "Siti ingin membuka rekening melalui BCA mobile. Ia menggunakan nomor HP yang sebelumnya sudah pernah diregistrasikan untuk m-BCA. Berdasarkan ketentuan pembukaan rekening di BCA mobile, apa yang paling tepat?",
    options: [
      "Nomor HP boleh yang sudah terdaftar m-BCA, tidak ada batasan",
      "Nomor HP yang digunakan untuk pembukaan rekening tidak boleh pernah diregistrasikan m-BCA",
      "Nomor HP hanya boleh yang terdaftar di HaloBCA",
      "Nomor HP harus nomor pascabayar"
    ],
    correctIndex: 1
  },
  {
    text: "Doni ingin melakukan pembayaran QRIS CPM (Customer Presented Mode) melalui BCA mobile di merchant yang sudah mendukung. Bagaimana alur yang paling tepat sesuai definisi QRIS CPM?",
    options: [
      "Merchant menampilkan QR, Doni melakukan scan QR",
      "Doni menampilkan QR dari BCA mobile, merchant melakukan scan",
      "Doni mengirim screenshot QR ke merchant lalu merchant kirim OTP",
      "Doni meminta merchant mengirim QR melalui WhatsApp"
    ],
    correctIndex: 1
  },

  {
    text: "Riko memiliki Sakuku non-KYC dan saldonya sudah mendekati batas maksimal. Ia menerima transfer dari temannya sebesar Rp500.000 sehingga total saldo berpotensi melewati batas maksimal Sakuku non-KYC. Apa batas maksimum saldo yang tidak boleh ia lewati?",
    options: [
      "Rp1.000.000 per akun",
      "Rp2.000.000 per akun",
      "Rp5.000.000 per akun",
      "Rp10.000.000 per akun"
    ],
    correctIndex: 1
  },
  {
    text: "Dewi menggunakan Sakuku Plus dan ingin membayar belanja di merchant offline yang menerima Sakuku. Ia juga ingin bisa melakukan Split Bill dengan teman-temannya setelah makan. Apa yang membedakan Sakuku dan Sakuku Plus terkait fitur ini?",
    options: [
      "Split Bill hanya bisa di Sakuku Plus",
      "Split Bill hanya bisa di Sakuku non-KYC",
      "Split Bill tersedia di semua jenis Sakuku tanpa syarat",
      "Split Bill hanya bisa dilakukan lewat QRIS di BCA mobile"
    ],
    correctIndex: 0
  },
  {
    text: "Nana ingin top up Sakuku dari rekening BCA. Ia mendengar bahwa untuk top up dari BCA tidak dikenakan biaya, namun dari bank lain akan mengikuti ketentuan masing-masing. Jika Nana top up langsung dari m-BCA ke Sakuku miliknya, pernyataan mana yang paling tepat?",
    options: [
      "Top up Sakuku dari BCA dikenakan biaya Rp2.500 per transaksi",
      "Top up Sakuku dari BCA dikenakan biaya Rp5.000 per transaksi",
      "Top up Sakuku dari BCA tidak dikenakan biaya (gratis)",
      "Top up Sakuku selalu dikenakan biaya oleh bank penerbit kartu"
    ],
    correctIndex: 2
  },
  {
    text: "Wawan ingin top up Sakuku dari bank lain. Ia diberitahu bahwa format tujuan transfer adalah khusus. Rekening tujuan mana yang paling tepat digunakan untuk top up Sakuku dari bank lain?",
    options: [
      "Nomor rekening BCA biasa miliknya",
      "88000 + nomor Sakuku yang terdaftar",
      "Nomor kartu debit Paspor BCA",
      "Nomor handphone yang terdaftar HaloBCA"
    ],
    correctIndex: 1
  },
  {
    text: "Intan ingin mengakses seluruh rekening yang terhubung ke BCA ID miliknya dalam satu aplikasi, termasuk fitur kontrol akun dan transaksi QRIS. Ia juga tahu bahwa layanan ini bisa diakses lewat web dengan alamat tertentu. Layanan apa yang dimaksud dan URL mana yang benar?",
    options: [
      "KlikBCA Individu di https://mybca.co.id",
      "myBCA di https://mybca.bca.co.id",
      "myBCA di https://mybca.co.id",
      "BCA mobile di https://mBCA.bca.co.id"
    ],
    correctIndex: 1
  },
  {
    text: "Doni menggunakan Paylater BCA sebagai sumber dana transaksi di aplikasi myBCA. Ia ingin melakukan pembayaran QRIS. Berdasarkan materi, Paylater BCA bisa digunakan sebagai sumber dana untuk apa?",
    options: [
      "Tarik tunai di ATM BCA",
      "Transaksi QRIS di myBCA",
      "Setoran tunai di ATM Setor Tarik",
      "Transaksi di CS Digital"
    ],
    correctIndex: 1
  },
  {
    text: "Vivi sering berbelanja di marketplace yang sudah bekerja sama dengan OneKlik. Ia ingin menggunakan OneKlik agar bisa sekali klik tanpa input nomor kartu terus-menerus. Dana transaksi OneKlik akan terdebet dari mana?",
    options: [
      "Saldo kartu kredit BCA",
      "Saldo rekening BCA yang terhubung dengan kartu Paspor BCA",
      "Saldo Sakuku",
      "Saldo Flazz"
    ],
    correctIndex: 1
  },
  {
    text: "Andi memiliki satu akun OneKlik dan ingin mengetahui batas maksimal nominal yang bisa ia gunakan dalam satu hari di semua co-partner. Limit harian maksimum OneKlik yang berlaku adalah berapa?",
    options: [
      "Rp1.000.000 per hari per akun",
      "Rp2.000.000 per hari per akun",
      "Rp3.000.000 per hari per akun",
      "Rp5.000.000 per hari per akun"
    ],
    correctIndex: 2
  },
  {
    text: "Rara ingin mengontrol limit kartu debit, status transaksi dalam/luar negeri, serta pengaturan OneKlik dan QRIS dari satu aplikasi. Menu mana di myBCA yang paling tepat ia gunakan?",
    options: [
      "Menu Bayar & Isi Ulang",
      "Menu Kontrol Akun",
      "Menu Kurs Mata Uang",
      "Menu Catatan Finansial"
    ],
    correctIndex: 1
  },
  {
    text: "Dimas baru selesai melakukan beberapa transaksi QRIS di myBCA hingga total Rp20.000.000 hari ini. Ia ingin melakukan transaksi QRIS lagi senilai Rp10.000.000. Berdasarkan limit gabungan harian QRIS di myBCA, apa yang paling tepat?",
    options: [
      "Bisa, karena limit harian gabungan QRIS di myBCA Rp25.000.000 per BCA ID",
      "Tidak bisa, karena limit harian gabungan QRIS di myBCA Rp25.000.000 per BCA ID akan terlewati",
      "Tidak bisa, karena limit harian gabungan QRIS di myBCA Rp10.000.000 per BCA ID",
      "Bisa tanpa limit karena berbeda merchant"
    ],
    correctIndex: 1
  },

  {
    text: "Anton ingin masuk ke BCA KlikPay untuk membayar belanja online. Ia diminta membuat password saat registrasi. Berdasarkan ketentuan, bagaimana format minimum password akun BCA KlikPay?",
    options: [
      "Minimal 8 digit alfanumerik",
      "Minimal 8 digit numerik",
      "Minimal 6 digit alfanumerik",
      "Minimal 6 digit numerik"
    ],
    correctIndex: 2
  },
  {
    text: "Budi menggunakan KlikBCA Individu dan ingin memastikan keamanannya. Ia tahu bahwa untuk login digunakan User ID dan PIN, sedangkan untuk transaksi finansial digunakan KeyBCA. PIN KlikBCA Individu sendiri terdiri dari apa?",
    options: [
      "6 digit numerik",
      "8 digit numerik",
      "6 digit alfanumerik",
      "8 digit alfanumerik"
    ],
    correctIndex: 0
  },
  {
    text: "Reno lalai menjaga KeyBCA miliknya hingga hilang dan sudah melewati masa garansi. Ia ingin meminta penggantian KeyBCA di cabang. Berapa biaya penggantian KeyBCA karena kelalaian nasabah di luar masa garansi?",
    options: [
      "Gratis",
      "Rp25.000",
      "Rp50.000",
      "Rp100.000"
    ],
    correctIndex: 2
  },
  {
    text: "Perusahaan ingin memanfaatkan KlikBCA Bisnis. Mereka menggunakan role Maker, Approver, dan Releaser untuk otorisasi transaksi. Untuk meningkatkan keamanan koneksi, media tambahan apa yang digunakan KlikBCA Bisnis?",
    options: [
      "VPN (Virtual Private Network)",
      "OTP WhatsApp",
      "Hanya username dan password",
      "Koneksi biasa tanpa enkripsi"
    ],
    correctIndex: 0
  },
  {
    text: "Andi sebagai nasabah individu menggunakan KlikBCA Individu terutama untuk transfer dan pembayaran. Dari sisi bank, salah satu manfaat KlikBCA Individu adalah mengurangi beban apa?",
    options: [
      "Mengurangi corporate image",
      "Mengurangi beban kerja teller dan antrean di cabang",
      "Mengurangi jumlah nasabah",
      "Mengurangi penggunaan e-channel"
    ],
    correctIndex: 1
  },
  {
    text: "Suatu perusahaan menggunakan KlikBCA Bisnis dan ingin mengetahui fitur non finansial yang tersedia. Manakah yang termasuk fitur non finansial di KlikBCA Bisnis?",
    options: [
      "Transfer dana antar bank",
      "Pembayaran B2B Pertamina",
      "BCA Virtual Account dan pengelolaan user",
      "OR ke luar negeri"
    ],
    correctIndex: 2
  },
  {
    text: "Seorang nasabah menggunakan akun BCA KlikPay untuk pembayaran online. Ia lupa passwordnya dan khawatir karena format password cukup kompleks. Mengapa BCA mensyaratkan password minimal 6 digit alfanumerik untuk KlikPay?",
    options: [
      "Agar mudah diingat nasabah",
      "Untuk meningkatkan keamanan transaksi pembayaran online",
      "Untuk mempermudah proses reset password via HaloBCA",
      "Supaya sama seperti PIN ATM"
    ],
    correctIndex: 1
  },
  {
    text: "Ria ingin melakukan pembayaran e-commerce melalui KlikBCA Individu pada menu pembayaran. Transaksi ini termasuk jenis apa di KlikBCA Individu?",
    options: [
      "Transfer antar rekening",
      "Pembayaran e-commerce",
      "OR",
      "Inkaso"
    ],
    correctIndex: 1
  },
  {
    text: "Suatu perusahaan menggunakan fitur Fleet dalam KlikBCA Bisnis untuk mengelola biaya BBM kendaraan operasional. Fasilitas ini bekerja dengan menggunakan media apa?",
    options: [
      "Kartu Flazz yang dikaitkan dengan Fleet",
      "Sakuku Plus",
      "Kartu kredit Mastercard BCA",
      "SDB"
    ],
    correctIndex: 0
  },
  {
    text: "Ardi ingin melakukan transaksi B2B Pertamina melalui KlikBCA Bisnis untuk pembayaran tagihan. Menu mana yang harus ia gunakan?",
    options: [
      "Menu Transfer Dana",
      "Menu B2B Pertamina",
      "Menu BCA Virtual Account",
      "Menu OR"
    ],
    correctIndex: 1
  },

  {
    text: "Meri ingin menggunakan layanan WA Chat HaloBCA untuk menanyakan informasi kartu kredit. Ia sudah tahu bahwa nomor WhatsApp HaloBCA berbeda dengan nomor call center telepon. Ke nomor berapa ia harus mengirim pesan WhatsApp?",
    options: [
      "0811 1500 198",
      "0811 1500 998",
      "0811 5000 998",
      "0811 1500 999"
    ],
    correctIndex: 1
  },
  {
    text: "Galih ingin menghubungi HaloBCA untuk melaporkan kartu kreditnya hilang, namun tidak memiliki pulsa telepon. Ia hanya memiliki koneksi internet. Kanal mana yang paling tepat dan efisien untuk ia gunakan?",
    options: [
      "Telepon HaloBCA Reguler 1500888",
      "WhatsApp Chat HaloBCA",
      "VIRA di LINE",
      "eBranch"
    ],
    correctIndex: 1
  },
  {
    text: "Lidya ingin memanfaatkan aplikasi Mobile HaloBCA. Ia belum menjadi nasabah BCA, tapi ingin bertanya produk tabungan. Apakah ia bisa menggunakan Mobile HaloBCA?",
    options: [
      "Tidak bisa karena hanya untuk nasabah yang punya BCA ID",
      "Hanya bisa jika sudah punya kartu kredit BCA",
      "Bisa, Mobile HaloBCA dapat digunakan nasabah maupun non nasabah",
      "Hanya bisa jika sudah registrasi m-BCA"
    ],
    correctIndex: 2
  },
  {
    text: "Seorang nasabah ingin melakukan pengkinian data nomor HP dan email tanpa datang ke cabang. Ia membaca bahwa hal ini dapat dilakukan melalui Mobile HaloBCA pada menu Transaksi tertentu. Apa yang paling tepat?",
    options: [
      "Menu Akun Saya",
      "Menu Status Laporan",
      "Menu Pengkinian Data",
      "Menu Contact Center"
    ],
    correctIndex: 2
  },
  {
    text: "Yusuf ingin menghubungi HaloBCA Prioritas karena ia nasabah prioritas. Nomor mana yang paling tepat ia hubungi?",
    options: [
      "1500888",
      "1500222",
      "1500123",
      "1500998"
    ],
    correctIndex: 1
  },
  {
    text: "Sebuah perusahaan ingin menghubungi HaloBCA untuk keperluan korporasi. Mereka mengetahui bahwa ada nomor khusus HaloBCA Bisnis. Nomor manakah yang tepat?",
    options: [
      "1500888",
      "1500222",
      "1500123",
      "1500998"
    ],
    correctIndex: 3
  },
  {
    text: "BCA by Phone Bisnis digunakan oleh perusahaan untuk melakukan transaksi finansial. Manakah yang termasuk transaksi finansial BCA by Phone Bisnis?",
    options: [
      "Transfer antar rekening BCA dan pembayaran tagihan",
      "Pembukaan rekening baru",
      "Pengajuan kartu kredit",
      "Penukaran banknotes"
    ],
    correctIndex: 0
  },
  {
    text: "Seorang nasabah ingin menggunakan layanan chat banking BCA di aplikasi messaging seperti LINE dan WhatsApp untuk cek informasi saldo, mutasi, hingga transaksi perbankan dengan OTP SMS. Layanan apa yang dimaksud?",
    options: [
      "MONICA",
      "VIRA",
      "SELVI",
      "STAR"
    ],
    correctIndex: 1
  },
  {
    text: "Nasabah ingin menggunakan VIRA untuk melakukan transaksi perbankan. Selain terhubung dengan channel chat, apa faktor keamanan tambahan yang digunakan untuk otorisasi transaksi finansial di VIRA?",
    options: [
      "PIN kartu ATM",
      "OTP SMS ke nomor HP e-Banking terdaftar",
      "KeyBCA",
      "Password myBCA"
    ],
    correctIndex: 1
  },
  {
    text: "Seorang nasabah ingin melihat status laporan keluhan yang pernah ia buat tanpa mengecek email. Layanan aplikasi yang dapat ia gunakan untuk memantau 'Status Laporan' tersebut adalah?",
    options: [
      "BCA mobile",
      "Mobile HaloBCA",
      "Sakuku",
      "VIRA"
    ],
    correctIndex: 1
  },

  {
    text: "Seorang nasabah membuka rekening Tahapan BCA di cabang dan langsung menerima Kartu Paspor BCA GPN berteknologi chip. Dimana saja kartu tersebut dapat digunakan?",
    options: [
      "Hanya di mesin ATM BCA",
      "Di channel BCA dan bank lain dalam negeri",
      "Di seluruh dunia di jaringan Mastercard",
      "Hanya untuk transaksi online"
    ],
    correctIndex: 1
  },
  {
    text: "Bima memiliki Kartu Paspor BCA Mastercard. Ia ingin menggunakannya untuk tarik tunai di luar negeri. Mengapa Mastercard lebih tepat dibandingkan kartu GPN untuk kasus ini?",
    options: [
      "Karena Mastercard hanya berlaku di dalam negeri",
      "Karena Mastercard terhubung ke jaringan internasional",
      "Karena GPN tidak bisa digunakan di ATM BCA",
      "Karena Mastercard tidak memiliki limit harian"
    ],
    correctIndex: 1
  },
  {
    text: "Rino memiliki Kartu Paspor BCA berteknologi chip dengan masa berlaku 5 tahun. Setelah masa berlaku habis, apa yang harus dilakukan nasabah?",
    options: [
      "Melanjutkan penggunaan kartu sampai gagal",
      "Tidak perlu mengganti kartu",
      "Wajib mengganti kartu yang kedaluwarsa",
      "Cukup menambah PIN baru"
    ],
    correctIndex: 2
  },
  {
    text: "Nasabah ingin menggunakan fitur contactless pada kartu debit di merchant dengan EDC BCA. Sebelum penggunaan, apa yang perlu dilakukan terkait fitur contactless ini?",
    options: [
      "Tidak perlu aktivasi, langsung dapat digunakan",
      "Mengaktifkan fitur contactless melalui BCA mobile atau myBCA",
      "Menghubungi HaloBCA untuk aktivasi manual",
      "Mengisi formulir di cabang untuk setiap transaksi contactless"
    ],
    correctIndex: 1
  },
  {
    text: "Seorang nasabah memiliki Kartu Paspor BCA Mastercard dengan jenis Blue. Ia ingin mengetahui limit harian penarikan tunai di ATM untuk kartunya. Berapa limit penarikan tunai di ATM untuk Paspor BCA Blue, Gold, maupun Platinum?",
    options: [
      "Blue Rp10.000.000, Gold Rp15.000.000, Platinum Rp20.000.000",
      "Blue Rp5.000.000, Gold Rp10.000.000, Platinum Rp15.000.000",
      "Rp15.000.000 per hari untuk ketiga jenis (Blue/Gold/Platinum)",
      "Rp20.000.000 per hari untuk semua jenis"
    ],
    correctIndex: 2
  },
  {
    text: "Galih ingin melakukan setoran tunai besar di ATM Setor Tarik menggunakan Kartu Paspor BCA Platinum. Limit setoran tunai harian kartu Platinum di ATM lebih besar dibandingkan Blue. Berapa limit setoran tunai harian di ATM untuk Platinum?",
    options: [
      "Rp50.000.000",
      "Rp80.000.000",
      "Rp100.000.000",
      "Rp150.000.000"
    ],
    correctIndex: 2
  },
  {
    text: "Seorang nasabah menggunakan Flazz Gen 2 dan ingin melakukan top up melalui BCA mobile menggunakan HP Android ber-NFC. Limit top up Flazz di BCA mobile per hari per kartu yang terhubung adalah?",
    options: [
      "Rp1.000.000 per hari per kartu",
      "Rp2.000.000 per hari per kartu",
      "Rp5.000.000 per hari per kartu",
      "Rp10.000.000 per hari per kartu"
    ],
    correctIndex: 1
  },
  {
    text: "Nasabah ingin melihat 10 transaksi terakhir kartu Flazz miliknya tanpa ke ATM atau EDC. Ia memiliki HP dengan NFC dan aplikasi BCA mobile. Fitur apa yang paling tepat digunakan?",
    options: [
      "Info Flazz di BCA mobile menggunakan NFC",
      "Mutasi rekening di m-BCA",
      "Kurs Valas di BCA mobile",
      "Catatan Finansial di myBCA"
    ],
    correctIndex: 0
  },
  {
    text: "Seorang nasabah datang ke cabang untuk membeli kartu Flazz perdana. Berdasarkan ketentuan, bagaimana perlakuan transaksi pembelian Flazz perdana di cabang?",
    options: [
      "Boleh membeli kartu tanpa isi saldo",
      "Kartu Flazz perdana harus langsung diisi dana (top up) dan tidak bisa di-void",
      "Top up perdana boleh di-void jika nasabah berubah pikiran",
      "Kartu diberikan tanpa struk apa pun"
    ],
    correctIndex: 1
  },
  {
    text: "Seorang nasabah ingin membeli Flazz di mesin Flazz otomatis. Ia membaca bahwa denominasi uang tunai yang diterima mesin Flazz dibatasi. Denominasi apa yang dapat diterima mesin Flazz untuk pembelian kartu?",
    options: [
      "Rp20.000 dan Rp50.000",
      "Rp50.000 dan Rp100.000",
      "Rp10.000 dan Rp20.000",
      "Semua denominasi"
    ],
    correctIndex: 1
  },

  {
    text: "BCA memiliki beberapa jenis ATM, termasuk ATM Tunai, ATM Setor Tarik (STAR/CRM), dan Mesin Setor Tunai. Mesin Setor Tunai khusus hanya melayani apa?",
    options: [
      "Setoran tunai untuk seluruh nasabah",
      "Setoran tunai hanya untuk nasabah organisasi",
      "Tarik tunai dan setoran tunai untuk umum",
      "Transaksi QRIS dan Flazz"
    ],
    correctIndex: 0
  },
  {
    text: "Seorang nasabah melihat logo Prima dan Cirrus di ATM BCA. Ia ingin melakukan transfer ke bank lain peserta switching. Fitur transfer ke rekening bank lain peserta switching di ATM BCA memanfaatkan jaringan apa?",
    options: [
      "VISA",
      "Mastercard",
      "ALTO / PRIMA",
      "GPN saja"
    ],
    correctIndex: 2
  },
  {
    text: "Nasabah ingin mengakses fitur cek saldo Flazz, top up Flazz, dan update saldo Flazz di ATM BCA. Layanan ini tersedia di jenis mesin apa?",
    options: [
      "Semua ATM BCA termasuk Mesin Setor Tunai",
      "Hanya di ATM Tunai biasa",
      "Hanya di ATM Setor Tarik/ATM STAR",
      "Hanya di EDC"
    ],
    correctIndex: 2
  },
  {
    text: "Seorang merchant menggunakan EDC BCA dan ingin menerima transaksi Flazz, termasuk top up dan cek saldo. Apa yang harus dimiliki merchant untuk dapat memproses transaksi Flazz di EDC?",
    options: [
      "Hanya EDC standar",
      "Reader Flazz tambahan yang dikonfigurasi pada FDM",
      "Mesin ATM kecil di kasir",
      "Aplikasi myBCA"
    ],
    correctIndex: 1
  },
  {
    text: "EDC BCA saat ini dapat menerima berbagai jenis transaksi, termasuk kartu debit/kredit, QRIS, dan Flazz. Manakah dari berikut ini yang bukan transaksi yang dapat dilakukan di EDC BCA?",
    options: [
      "Transaksi kartu debit",
      "Transaksi kartu kredit",
      "Transaksi QRIS Dinamis",
      "Pembacaan KTP elektronik"
    ],
    correctIndex: 3
  },
  {
    text: "Seorang merchant menggunakan QRIS Dinamis di EDC BCA. Alur mana yang paling tepat menggambarkan transaksi QRIS Dinamis MPM di EDC BCA?",
    options: [
      "Customer menampilkan QR, merchant melakukan scan",
      "Merchant memilih menu QR Dinamis di EDC, input nominal, cetak struk QR, customer scan, EDC cetak struk bukti transaksi",
      "Merchant mengirim QR melalui email, customer transfer manual",
      "Customer memasukkan kartu debit dan PIN"
    ],
    correctIndex: 1
  },
  {
    text: "Flazz juga dapat digunakan melalui EDC BCA. Selain pembayaran, fitur apa lagi yang dapat dilakukan terhadap kartu Flazz melalui EDC BCA?",
    options: [
      "Top up saldo, inquiry transaksi, dan cek saldo",
      "Mengubah PIN kartu debit",
      "Membuka rekening baru",
      "Melakukan OR/IR"
    ],
    correctIndex: 0
  },
  {
    text: "Seorang nasabah menggunakan kartu debit luar negeri berlogo Mastercard di merchant dengan EDC BCA. Kapan penggunaan kartu debit luar negeri di EDC BCA diperbolehkan?",
    options: [
      "Hanya jika merchant memiliki pengaturan khusus",
      "Selalu, tanpa syarat apapun",
      "Tidak boleh sama sekali",
      "Hanya untuk transaksi tunai"
    ],
    correctIndex: 0
  },
  {
    text: "Seorang nasabah ingin melakukan pembayaran QRIS menggunakan Sakuku. Sejak awal tahun 2020, QRIS di BCA dapat menerima pembayaran dari berbagai aplikasi termasuk Sakuku. Apa artinya bagi nasabah Sakuku?",
    options: [
      "Sakuku tidak bisa digunakan untuk QRIS",
      "Sakuku dapat digunakan sebagai sumber dana pembayaran QRIS",
      "Hanya BCA mobile yang bisa",
      "Hanya myBCA yang bisa"
    ],
    correctIndex: 1
  },
  {
    text: "Merchant ingin mendapatkan bantuan terkait fasilitas EDC BCA selama 24 jam. Nomor layanan merchant yang bisa dihubungi adalah?",
    options: [
      "1500888",
      "1500777",
      "1500788",
      "1500222"
    ],
    correctIndex: 2
  },

  {
    text: "Seorang nasabah ingin mengganti kartu Paspor BCA yang rusak dan lupa PIN tanpa harus menunggu CS di cabang yang ramai. Ia melihat ada CS Digital di cabang tersebut. Layanan apa yang dapat ia manfaatkan di CS Digital?",
    options: [
      "Penggantian kartu karena rusak/lupa PIN dan pengajuan kartu konvensional",
      "Hanya buka rekening baru",
      "Hanya setor tunai",
      "Hanya pembukaan SDB"
    ],
    correctIndex: 0
  },
  {
    text: "Nasabah ingin melakukan registrasi m-BCA dan KlikBCA Individu tanpa harus antri di CS. Ia dapat menggunakan mesin yang terhubung e-Service/CS Digital. Fitur apa yang tepat?",
    options: [
      "Registrasi melalui CS Digital dengan kartu ATM",
      "Registrasi melalui VIRA",
      "Registrasi hanya lewat HaloBCA",
      "Registrasi melalui Flazz"
    ],
    correctIndex: 0
  },
  {
    text: "Seseorang ingin mengurangi waktu tunggu di cabang dengan mengisi formulir pengajuan layanan sebelum datang dan mengambil nomor antrian dengan data sudah terisi. Layanan apa yang paling tepat digunakan?",
    options: [
      "CS Digital",
      "eBranch",
      "Mobile HaloBCA",
      "VIRA"
    ],
    correctIndex: 1
  },
  {
    text: "Suatu perusahaan ingin menagih tagihan rutin nasabahnya dari rekening BCA nasabah secara otomatis setiap bulan berdasarkan surat kuasa. Layanan apa yang digunakan?",
    options: [
      "Autodebet Offline",
      "OR",
      "Inkaso",
      "Kliring"
    ],
    correctIndex: 0
  },
  {
    text: "Dalam Autodebet Offline, pelanggan company partner harus memberikan dokumen tertentu kepada BCA sebelum rekeningnya dapat didebet. Dokumen apa yang dimaksud?",
    options: [
      "PIN ATM",
      "Nomor kartu kredit",
      "Surat kuasa",
      "KTP asli"
    ],
    correctIndex: 2
  },
  {
    text: "Open Payment via counter digunakan untuk pembayaran tagihan tertentu, bahkan untuk non nasabah. Salah satu keunggulannya adalah nasabah atau non nasabah dapat membayar tanpa membuka rekening BCA. Kapan proses settlement Open Payment via counter dilakukan?",
    options: [
      "Real-time di jam transaksi",
      "Dalam dua batch di hari kerja (sekitar 11.30 dan 15.30 WIB)",
      "Minggu pertama tiap bulan",
      "Hanya saat akhir tahun"
    ],
    correctIndex: 1
  },
  {
    text: "Seorang nasabah ingin mengirim dana dari rekeningnya di BCA ke rekening di bank luar negeri. Layanan apa yang digunakan?",
    options: [
      "OR (Outward Remittance)",
      "IR (Inward Remittance)",
      "Kliring",
      "Inkaso"
    ],
    correctIndex: 0
  },
  {
    text: "Seorang nasabah menunggu kiriman dari keluarga di luar negeri. Layanan apa yang diproses BCA untuk dana masuk tersebut?",
    options: [
      "OR",
      "IR",
      "Kliring",
      "MPN"
    ],
    correctIndex: 1
  },
  {
    text: "Autodebet Online biasanya menggunakan sumber data apa untuk mendebet rekening nasabah?",
    options: [
      "File transaksi yang dikirim company partner",
      "Input manual teller",
      "Data dari kartu Flazz",
      "Data dari KTP elektronik"
    ],
    correctIndex: 0
  },
  {
    text: "Suatu perusahaan ingin memanfaatkan KlikBCA Bisnis untuk memonitor transaksi fasilitasnya secara real time dan mengunduh laporan transaksi dalam bentuk XLS/CSV. Fitur apa di KBB yang mendukung hal ini?",
    options: [
      "Business Dashboard",
      "B2B Pertamina",
      "Transfer Dana",
      "Autodebet"
    ],
    correctIndex: 0
  },

  {
    text: "Seorang nasabah membawa uang kertas asing (valuta asing fisik) seperti USD dan SGD ke BCA untuk dijual dan ditukar ke Rupiah. Layanan apa yang digunakan?",
    options: [
      "Bank Notes",
      "OR",
      "IR",
      "Flazz"
    ],
    correctIndex: 0
  },
  {
    text: "BCA hanya menerima banknotes dengan kondisi tertentu. Manakah syarat yang benar untuk banknotes yang diterima BCA?",
    options: [
      "Boleh palsu asalkan tidak sobek",
      "Tidak basah, tidak sobek parah",
      "Harus dalam bentuk koin",
      "Harus yang sudah tidak berlaku"
    ],
    correctIndex: 1
  },
  {
    text: "Safe Deposit Box (SDB) digunakan nasabah untuk menyimpan barang berharga. Bagi bank, SDB juga memberikan manfaat. Salah satu manfaat SDB bagi bank adalah?",
    options: [
      "Mengurangi corporate image",
      "Mengurangi pengendapan dana dari uang jaminan",
      "Mendapatkan pendapatan sewa",
      "Mengurangi jumlah nasabah"
    ],
    correctIndex: 2
  },
  {
    text: "Seorang nasabah menyewa SDB golongan A. Dalam materi, ukuran SDB golongan A memiliki panjang, lebar, dan tinggi tertentu. Kombinasi ukuran apa yang benar?",
    options: [
      "60 cm, 12 cm, dan 7 cm",
      "60 cm, 26 cm, dan 25 cm",
      "60 cm, 26 cm, dan 12 cm",
      "60 cm, 26 cm, dan 7 cm"
    ],
    correctIndex: 1
  },
  {
    text: "Seorang nasabah membawa cek bank lain ke BCA dan ingin menagihnya. Layanan penagihan warkat (cek/bilyet giro) antar bank yang digunakan adalah?",
    options: [
      "Inkaso",
      "OR",
      "IR",
      "QRIS"
    ],
    correctIndex: 0
  },
  {
    text: "Kliring adalah layanan transfer antar bank domestik secara batch. Seorang nasabah mentransfer dana ke bank lain menggunakan kliring, namun ternyata ada penolakan. Apa istilah untuk warkat yang ditolak dalam kliring?",
    options: [
      "Menang Kliring",
      "Kalah Kliring",
      "Penundaan Kliring",
      "Tolakan Kliring"
    ],
    correctIndex: 3
  },
  {
    text: "Kiriman Uang (transfer) di BCA dapat bersumber dari beberapa jenis dana. Manakah yang bukan sumber dana Kiriman Uang?",
    options: [
      "Cek BCA",
      "Bilyet Giro BCA",
      "Debet rekening BCA",
      "Pembayaran tunai"
    ],
    correctIndex: 1
  },
  {
    text: "MPN Gen 2 adalah sistem penerimaan negara yang menghubungkan sistem BCA dengan sistem tertentu milik pemerintah. MPN Gen 2 menghubungkan sistem BCA dengan?",
    options: [
      "Sistem penerimaan negara milik BUMN",
      "Sistem penerimaan negara milik pemerintah",
      "Sistem penerimaan negara milik perusahaan swasta",
      "Sistem penerimaan pajak daerah saja"
    ],
    correctIndex: 1
  },
  {
    text: "Seorang nasabah ingin membayar setoran pajak negara melalui BCA. MPN Gen 2 menjadikan BCA sebagai apa bagi pemerintah?",
    options: [
      "Pelaksana transaksi setoran pajak negara",
      "Pelaksana transaksi setoran swasta",
      "Penyedia kartu kredit",
      "Penyedia SDB"
    ],
    correctIndex: 0
  },
  {
    text: "Seorang nasabah ingin menyimpan dokumen penting dan perhiasan dalam ruang khusus yang aman dan rahasia di bank. Fasilitas apa yang paling tepat?",
    options: [
      "SDB",
      "Flazz",
      "Sakuku",
      "Fleet Card"
    ],
    correctIndex: 0
  },

  {
    text: "Kartu Paspor BCA dapat digunakan pada berbagai jaringan switching lokal. Manakah yang termasuk jaringan switching lokal?",
    options: [
      "Mastercard",
      "VISA",
      "PRIMA",
      "Cirrus"
    ],
    correctIndex: 2
  },
  {
    text: "Sebuah perusahaan ingin memanfaatkan jasa pembayaran BCA untuk penerimaan setoran penerimaan negara. Peran BCA dalam MPN Gen 2 adalah sebagai?",
    options: [
      "Sistem penerimaan negara milik pemerintah",
      "Pelaksana transaksi setoran penerimaan negara",
      "Pemilik regulasi pajak",
      "Penjamin banknotes"
    ],
    correctIndex: 1
  },
  {
    text: "BCA mengembangkan berbagai e-channel seperti BCA mobile, myBCA, KlikBCA, dan lainnya. Salah satu tujuan utama bagi BCA menyediakan e-channel adalah?",
    options: [
      "Mengurangi antrean di cabang",
      "Menghapus cabang seluruhnya",
      "Mengurangi jumlah nasabah",
      "Mengurangi penggunaan teknologi"
    ],
    correctIndex: 0
  },
  {
    text: "Manfaat ATM bagi BCA antara lain mengurangi antrean di counter dan meningkatkan dana pihak ketiga. Manakah pernyataan yang bukan manfaat ATM bagi BCA?",
    options: [
      "Mengurangi fee based income",
      "Mengurangi antrean di counter kantor cabang",
      "Meningkatkan dana di BCA",
      "Menambah nasabah"
    ],
    correctIndex: 0
  },
  {
    text: "Seorang nasabah ingin mengakses daftar e-banking BCA, informasi saldo, kurs, dan inquiry tagihan kartu kredit di ATM. Fitur ini termasuk jenis apa?",
    options: [
      "Transaksi tunai",
      "Transaksi non-tunai/informasi",
      "Transaksi Flazz",
      "Transaksi SDB"
    ],
    correctIndex: 1
  },
  {
    text: "Nasabah ingin menggunakan kartu Paspor BCA-nya di ATM bank lain peserta Cirrus/Mastercard di luar negeri. Kartu seperti apa yang dapat digunakan?",
    options: [
      "Kartu Paspor BCA GPN",
      "Kartu Paspor BCA berlogo Mastercard",
      "Flazz",
      "Sakuku"
    ],
    correctIndex: 1
  },
  {
    text: "Seorang nasabah ingin mengecek mutasi rekening, namun di m-BCA mutasi belum tampil sesuai kebutuhan. Salah satu alternatif e-channel lain yang dapat ia gunakan untuk cek mutasi lebih rinci adalah?",
    options: [
      "KlikBCA Individu",
      "Flazz",
      "Sakuku",
      "EDC"
    ],
    correctIndex: 0
  },
  {
    text: "Dalam mesin STAR Teller, BCA menerima berbagai jenis uang tunai, namun ada jenis yang tidak diterima. Manakah yang bukan jenis uang yang diterima STAR Teller?",
    options: [
      "Semua denom kertas Rupiah yang masih berlaku",
      "Uang dalam kondisi tidak palsu/bukan mutilasi",
      "Uang tidak basah, tidak sobek, masih dapat dikenali",
      "Semua uang logam/koin"
    ],
    correctIndex: 3
  },
  {
    text: "BCA menyediakan layanan Collection untuk membantu perusahaan dalam penagihan. Dalam konteks Collection, salah satu manfaat bagi perusahaan adalah?",
    options: [
      "Penurunan dana pihak ketiga",
      "Rekonsiliasi penerimaan pembayaran menjadi lebih mudah",
      "Mengurangi jumlah rekening nasabah",
      "Mengurangi penggunaan e-channel"
    ],
    correctIndex: 1
  },
  {
    text: "Dalam Jasa Pembayaran, BCA menyediakan layanan kiriman uang, MPN, dan lain-lain. Layanan yang digunakan untuk setoran penerimaan negara non pajak juga terhubung melalui sistem?",
    options: [
      "MPN Gen 2",
      "OR",
      "IR",
      "Inkaso"
    ],
    correctIndex: 0
  },

  {
    text: "Seorang nasabah ingin membayar pajak kendaraan secara online dengan memanfaatkan Jasa Pembayaran BCA. Ia tidak ingin datang ke kantor samsat. Layanan mana yang paling mungkin digunakan BCA untuk menyalurkan setoran pajak tersebut ke pemerintah?",
    options: [
      "MPN Gen 2",
      "Inkaso",
      "Banknotes",
      "SDB"
    ],
    correctIndex: 0
  },
  {
    text: "Rani ingin menyimpan dokumen penting perusahaan dan perhiasan pribadi secara aman di BCA. Ia juga ingin bisa mengaksesnya hanya pada jam operasional tertentu. Layanan apa yang paling tepat dan apa manfaat bagi BCA?",
    options: [
      "SDB, memberi pendapatan sewa dan meningkatkan corporate image",
      "Flazz, memberi pendapatan fee transaksi",
      "Sakuku, memberi kemudahan pembayaran",
      "ATM Setor Tarik, memberi kemudahan transaksi tunai"
    ],
    correctIndex: 0
  },
  {
    text: "Dimas ingin menarik uang di ATM BCA Dollar menggunakan kartu ATM BCA Dollar. Namun ia berencana transfer valas ke rekening valas lain di BCA Dollar melalui ATM. Apa batasan yang perlu ia ketahui?",
    options: [
      "Kartu ATM BCA Dollar tidak bisa tarik tunai",
      "Transaksi transfer valas ke valas tidak dapat dilakukan melalui ATM BCA Dollar",
      "Semua transaksi valas bebas",
      "Hanya bisa transfer rupiah ke valas"
    ],
    correctIndex: 1
  },
  {
    text: "Seorang nasabah ingin melakukan transaksi pembelian menggunakan kartu debit berteknologi contactless di EDC BCA tanpa memasukkan PIN untuk nominal kecil. Sebelum itu, ia harus memastikan?",
    options: [
      "fitur contactless sudah diaktifkan di m-BCA/myBCA",
      "Kartu berlogo GPN saja",
      "Kartu berlogo Flazz",
      "Kartu tidak memiliki chip"
    ],
    correctIndex: 0
  },
  {
    text: "Seorang nasabah ingin menghubungkan banyak rekening ke satu Kartu Paspor BCA agar bisa mengelola beberapa rekening dengan satu kartu. Berapa maksimal rekening yang dapat dikoneksikan ke satu Kartu Paspor BCA atas nama nasabah yang sama?",
    options: [
      "3 rekening",
      "4 rekening",
      "5 rekening",
      "Tidak dibatasi"
    ],
    correctIndex: 2
  },
  {
    text: "PT Sentosa ingin mengurangi antrean di kasir dan mempermudah pembayaran tol, parkir, dan transportasi umum karyawan. Mereka memutuskan menggunakan kartu prabayar yang diterbitkan BCA. Produk mana yang paling sesuai?",
    options: [
      "Sakuku",
      "Flazz",
      "Fleet Card",
      "Paspor BCA GPN"
    ],
    correctIndex: 1
  },
  {
    text: "Sebuah perusahaan transportasi ingin memisahkan tagihan BBM kendaraan operasional dari transaksi lainnya. Mereka ingin menggunakan kartu yang hanya bisa digunakan untuk pembelian BBM resmi. Produk apa yang paling sesuai?",
    options: [
      "Fleet Card",
      "Flazz",
      "Sakuku",
      "Kartu Paspor BCA Mastercard"
    ],
    correctIndex: 0
  },
  {
    text: "Perusahaan lain ingin mengatur pembayaran BBM di SPBU dengan kartu khusus bekerja sama dengan Pertamina. Kartu apa yang digunakan?",
    options: [
      "Flazz",
      "GazCard",
      "Fleet Card",
      "Sakuku"
    ],
    correctIndex: 1
  },
  {
    text: "Slip yang digunakan nasabah untuk transaksi Kiriman Uang (KU) di cabang adalah...",
    options: [
      "Slip KU",
      "PPU",
      "Slip Setoran",
      "Slip pemindahan dana"
    ],
    correctIndex: 1
  },
  {
    text: "Berikut banknotes yang diperjualbelikan di BCA antara lain...",
    options: [
      "USD, SGD, EUR",
      "USD, EUR, GBP",
      "USD, SGD, GBP",
      "GBP, AUD, USD"
    ],
    correctIndex: 1
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