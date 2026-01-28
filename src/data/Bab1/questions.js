const questions = [
  {
    q: "Andi sedang di depan ATM Setor Tarik BCA pada malam hari dan ingin tarik tunai Rp3.000.000. Kartunya tertinggal di rumah, tapi ia sudah registrasi dan aktivasi m-BCA di aplikasi BCA mobile pada HP-nya. Kanal mana yang paling tepat ia gunakan untuk tetap bisa tarik tunai saat itu juga?",
    o: [
      "Menggunakan fitur Cardless di menu m-BCA pada BCA mobile",
      "Menggunakan QRIS CPM di BCA mobile lalu minta merchant tarik tunai",
      "Menghubungi HaloBCA untuk meminta teller cabang menyiapkan uang tunai",
      "Menggunakan VIRA untuk meminta transfer ke rekening temannya"
    ],
    a: 0
  },
  {
    q: "Sari ingin membayar belanja di sebuah minimarket yang hanya menerima QRIS. Ia memiliki kartu Paspor BCA dan juga sudah mengaktifkan BCA mobile dengan akses m-BCA. Namun ia tidak ingin menggunakan kartu fisik. Fitur mana yang paling tepat ia gunakan untuk melakukan pembayaran tersebut?",
    o: [
      "Transfer antar bank melalui m-BCA ke rekening kasir",
      "Pembayaran menggunakan QRIS MPM di menu QR pada BCA mobile",
      "Menggunakan fasilitas Tarik Tunai Cardless lalu bayar tunai",
      "Melakukan pembelian menggunakan Flazz di EDC BCA"
    ],
    a: 1
  },
  {
    q: "Dono ingin top up uang elektronik aplikasi lain (bukan produk BCA) menggunakan BCA mobile. Ia tahu ada limit harian untuk top up via Virtual Account di m-BCA. Saat ini ia sudah top up Rp9.000.000 hari ini dan ingin top up lagi Rp2.000.000 dengan nomor handphone yang sama. Apa yang paling tepat?",
    o: [
      "Transaksi bisa dilakukan karena limit top up per hari/nomor HP Rp10.000.000",
      "Transaksi tidak bisa dilakukan karena limit top up per hari/nomor HP Rp10.000.000 sudah hampir tercapai",
      "Transaksi tidak bisa dilakukan karena limit top up per hari/nomor HP Rp10.000.000 akan terlewati",
      "Transaksi tetap bisa dilakukan karena limit mengikuti limit kartu debit"
    ],
    a: 2
  },
  {
    q: "Rina ingin membuka rekening baru secara online. Ia memiliki HP Android dan ingin prosesnya tanpa datang cabang. Ia mendengar bahwa pembukaan rekening online BCA mensyaratkan video call dengan CS HaloBCA dan verifikasi email. Layanan mana yang harus ia gunakan untuk membuka rekening tersebut?",
    o: [
      "Menu Buka Rekening Baru di BCA mobile",
      "Menu Pembukaan Rekening di KlikBCA Individu",
      "Menu Pembukaan Rekening di myBCA web",
      "Mengajukan melalui Mobile HaloBCA"
    ],
    a: 0
  },
  {
    q: "Bayu ingin melakukan transfer antar rekening BCA melalui m-BCA dengan kartu Paspor BCA Gold. Hari ini ia sudah transfer Rp90.000.000 via m-BCA dan ingin transfer lagi Rp40.000.000 di hari yang sama. Ia belum melakukan transfer via ATM. Mana pernyataan yang paling tepat terkait limitnya?",
    o: [
      "Transaksi bisa karena limit harian transfer antar rekening BCA via m-BCA untuk Gold Rp125.000.000",
      "Transaksi tidak bisa karena limit harian m-BCA hanya Rp100.000.000 untuk semua kartu",
      "Transaksi hanya bisa jika dilakukan via KlikBCA Individu",
      "Transaksi hanya bisa jika menggunakan myBCA, bukan m-BCA"
    ],
    a: 0
  },
  {
    q: "Vina ingin membayar tagihan listrik PLN Prepaid melalui BCA mobile saat berada di rumah. Ia sudah registrasi m-BCA dan memiliki akses menu finansial. Menu mana yang harus ia gunakan agar transaksi berjalan sesuai ketentuan?",
    o: [
      "Menu m-Info di BCA mobile",
      "Menu m-Payment di BCA mobile",
      "Menu m-Admin di BCA mobile",
      "Menu Info BCA di BCA mobile"
    ],
    a: 1
  },
  {
    q: "Rudi ingin memastikan bahwa saat ia mengakses m-BCA di BCA mobile, keamanan transaksinya terjaga. Ia tahu bahwa untuk login m-BCA, diperlukan Kode Akses dan untuk transaksi finansial akan menggunakan PIN m-BCA. Mana pernyataan yang paling tepat?",
    o: [
      "Kode Akses dan PIN m-BCA sama-sama 8 digit alfanumerik",
      "Kode Akses berupa kombinasi huruf/angka, PIN m-BCA 6 digit numerik",
      "Kode Akses 6 digit numerik, PIN m-BCA 4 digit numerik",
      "Kode Akses memakai biometrik, PIN m-BCA 8 digit numerik"
    ],
    a: 1
  },
  {
    q: "Lina hendak melakukan QRIS Cross Border di myBCA saat berada di Singapura. Ia membaca bahwa limit QR Cross Border mengikuti limit terkecil antara limit negara dan limit QRIS. Apa implikasinya terhadap transaksi yang ingin ia lakukan?",
    o: [
      "Transaksi pasti mengikuti limit harian Rp25.000.000 per BCA ID",
      "Transaksi mengikuti limit per transaksi QRIS saja",
      "Transaksi mengikuti limit terkecil antara limit negara tujuan dan limit QRIS",
      "Transaksi tidak memiliki limit jika di luar negeri"
    ],
    a: 2
  },
  {
    q: "Siti ingin membuka rekening melalui BCA mobile. Ia menggunakan nomor HP yang sebelumnya sudah pernah diregistrasikan untuk m-BCA. Berdasarkan ketentuan pembukaan rekening di BCA mobile, apa yang paling tepat?",
    o: [
      "Nomor HP boleh yang sudah terdaftar m-BCA, tidak ada batasan",
      "Nomor HP yang digunakan untuk pembukaan rekening tidak boleh pernah diregistrasikan m-BCA",
      "Nomor HP hanya boleh yang terdaftar di HaloBCA",
      "Nomor HP harus nomor pascabayar"
    ],
    a: 1
  },
  {
    q: "Doni ingin melakukan pembayaran QRIS CPM (Customer Presented Mode) melalui BCA mobile di merchant yang sudah mendukung. Bagaimana alur yang paling tepat sesuai definisi QRIS CPM?",
    o: [
      "Merchant menampilkan QR, Doni melakukan scan QR",
      "Doni menampilkan QR dari BCA mobile, merchant melakukan scan",
      "Doni mengirim screenshot QR ke merchant lalu merchant kirim OTP",
      "Doni meminta merchant mengirim QR melalui WhatsApp"
    ],
    a: 1
  },

  {
    q: "Riko memiliki Sakuku non-KYC dan saldonya sudah mendekati batas maksimal. Ia menerima transfer dari temannya sebesar Rp500.000 sehingga total saldo berpotensi melewati batas maksimal Sakuku non-KYC. Apa batas maksimum saldo yang tidak boleh ia lewati?",
    o: [
      "Rp1.000.000 per akun",
      "Rp2.000.000 per akun",
      "Rp5.000.000 per akun",
      "Rp10.000.000 per akun"
    ],
    a: 1
  },
  {
    q: "Dewi menggunakan Sakuku Plus dan ingin membayar belanja di merchant offline yang menerima Sakuku. Ia juga ingin bisa melakukan Split Bill dengan teman-temannya setelah makan. Apa yang membedakan Sakuku dan Sakuku Plus terkait fitur ini?",
    o: [
      "Split Bill hanya bisa di Sakuku Plus",
      "Split Bill hanya bisa di Sakuku non-KYC",
      "Split Bill tersedia di semua jenis Sakuku tanpa syarat",
      "Split Bill hanya bisa dilakukan lewat QRIS di BCA mobile"
    ],
    a: 0
  },
  {
    q: "Nana ingin top up Sakuku dari rekening BCA. Ia mendengar bahwa untuk top up dari BCA tidak dikenakan biaya, namun dari bank lain akan mengikuti ketentuan masing-masing. Jika Nana top up langsung dari m-BCA ke Sakuku miliknya, pernyataan mana yang paling tepat?",
    o: [
      "Top up Sakuku dari BCA dikenakan biaya Rp2.500 per transaksi",
      "Top up Sakuku dari BCA dikenakan biaya Rp5.000 per transaksi",
      "Top up Sakuku dari BCA tidak dikenakan biaya (gratis)",
      "Top up Sakuku selalu dikenakan biaya oleh bank penerbit kartu"
    ],
    a: 2
  },
  {
    q: "Wawan ingin top up Sakuku dari bank lain. Ia diberitahu bahwa format tujuan transfer adalah khusus. Rekening tujuan mana yang paling tepat digunakan untuk top up Sakuku dari bank lain?",
    o: [
      "Nomor rekening BCA biasa miliknya",
      "88000 + nomor Sakuku yang terdaftar",
      "Nomor kartu debit Paspor BCA",
      "Nomor handphone yang terdaftar HaloBCA"
    ],
    a: 1
  },
  {
    q: "Intan ingin mengakses seluruh rekening yang terhubung ke BCA ID miliknya dalam satu aplikasi, termasuk fitur kontrol akun dan transaksi QRIS. Ia juga tahu bahwa layanan ini bisa diakses lewat web dengan alamat tertentu. Layanan apa yang dimaksud dan URL mana yang benar?",
    o: [
      "KlikBCA Individu di https://mybca.co.id",
      "myBCA di https://mybca.bca.co.id",
      "myBCA di https://mybca.co.id",
      "BCA mobile di https://mBCA.bca.co.id"
    ],
    a: 1
  },
  {
    q: "Doni menggunakan Paylater BCA sebagai sumber dana transaksi di aplikasi myBCA. Ia ingin melakukan pembayaran QRIS. Berdasarkan materi, Paylater BCA bisa digunakan sebagai sumber dana untuk apa?",
    o: [
      "Tarik tunai di ATM BCA",
      "Transaksi QRIS di myBCA",
      "Setoran tunai di ATM Setor Tarik",
      "Transaksi di CS Digital"
    ],
    a: 1
  },
  {
    q: "Vivi sering berbelanja di marketplace yang sudah bekerja sama dengan OneKlik. Ia ingin menggunakan OneKlik agar bisa sekali klik tanpa input nomor kartu terus-menerus. Dana transaksi OneKlik akan terdebet dari mana?",
    o: [
      "Saldo kartu kredit BCA",
      "Saldo rekening BCA yang terhubung dengan kartu Paspor BCA",
      "Saldo Sakuku",
      "Saldo Flazz"
    ],
    a: 1
  },
  {
    q: "Andi memiliki satu akun OneKlik dan ingin mengetahui batas maksimal nominal yang bisa ia gunakan dalam satu hari di semua co-partner. Limit harian maksimum OneKlik yang berlaku adalah berapa?",
    o: [
      "Rp1.000.000 per hari per akun",
      "Rp2.000.000 per hari per akun",
      "Rp3.000.000 per hari per akun",
      "Rp5.000.000 per hari per akun"
    ],
    a: 2
  },
  {
    q: "Rara ingin mengontrol limit kartu debit, status transaksi dalam/luar negeri, serta pengaturan OneKlik dan QRIS dari satu aplikasi. Menu mana di myBCA yang paling tepat ia gunakan?",
    o: [
      "Menu Bayar & Isi Ulang",
      "Menu Kontrol Akun",
      "Menu Kurs Mata Uang",
      "Menu Catatan Finansial"
    ],
    a: 1
  },
  {
    q: "Dimas baru selesai melakukan beberapa transaksi QRIS di myBCA hingga total Rp20.000.000 hari ini. Ia ingin melakukan transaksi QRIS lagi senilai Rp10.000.000. Berdasarkan limit gabungan harian QRIS di myBCA, apa yang paling tepat?",
    o: [
      "Bisa, karena limit harian gabungan QRIS di myBCA Rp25.000.000 per BCA ID",
      "Tidak bisa, karena limit harian gabungan QRIS di myBCA Rp25.000.000 per BCA ID akan terlewati",
      "Tidak bisa, karena limit harian gabungan QRIS di myBCA Rp10.000.000 per BCA ID",
      "Bisa tanpa limit karena berbeda merchant"
    ],
    a: 1
  },

  {
    q: "Anton ingin masuk ke BCA KlikPay untuk membayar belanja online. Ia diminta membuat password saat registrasi. Berdasarkan ketentuan, bagaimana format minimum password akun BCA KlikPay?",
    o: [
      "Minimal 8 digit alfanumerik",
      "Minimal 8 digit numerik",
      "Minimal 6 digit alfanumerik",
      "Minimal 6 digit numerik"
    ],
    a: 2
  },
  {
    q: "Budi menggunakan KlikBCA Individu dan ingin memastikan keamanannya. Ia tahu bahwa untuk login digunakan User ID dan PIN, sedangkan untuk transaksi finansial digunakan KeyBCA. PIN KlikBCA Individu sendiri terdiri dari apa?",
    o: [
      "6 digit numerik",
      "8 digit numerik",
      "6 digit alfanumerik",
      "8 digit alfanumerik"
    ],
    a: 0
  },
  {
    q: "Reno lalai menjaga KeyBCA miliknya hingga hilang dan sudah melewati masa garansi. Ia ingin meminta penggantian KeyBCA di cabang. Berapa biaya penggantian KeyBCA karena kelalaian nasabah di luar masa garansi?",
    o: [
      "Gratis",
      "Rp25.000",
      "Rp50.000",
      "Rp100.000"
    ],
    a: 2
  },
  {
    q: "Perusahaan ingin memanfaatkan KlikBCA Bisnis. Mereka menggunakan role Maker, Approver, dan Releaser untuk otorisasi transaksi. Untuk meningkatkan keamanan koneksi, media tambahan apa yang digunakan KlikBCA Bisnis?",
    o: [
      "VPN (Virtual Private Network)",
      "OTP WhatsApp",
      "Hanya username dan password",
      "Koneksi biasa tanpa enkripsi"
    ],
    a: 0
  },
  {
    q: "Andi sebagai nasabah individu menggunakan KlikBCA Individu terutama untuk transfer dan pembayaran. Dari sisi bank, salah satu manfaat KlikBCA Individu adalah mengurangi beban apa?",
    o: [
      "Mengurangi corporate image",
      "Mengurangi beban kerja teller dan antrean di cabang",
      "Mengurangi jumlah nasabah",
      "Mengurangi penggunaan e-channel"
    ],
    a: 1
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
    q: "Seorang nasabah menggunakan akun BCA KlikPay untuk pembayaran online. Ia lupa passwordnya dan khawatir karena format password cukup kompleks. Mengapa BCA mensyaratkan password minimal 6 digit alfanumerik untuk KlikPay?",
    o: [
      "Agar mudah diingat nasabah",
      "Untuk meningkatkan keamanan transaksi pembayaran online",
      "Untuk mempermudah proses reset password via HaloBCA",
      "Supaya sama seperti PIN ATM"
    ],
    a: 1
  },
  {
    q: "Ria ingin melakukan pembayaran e-commerce melalui KlikBCA Individu pada menu pembayaran. Transaksi ini termasuk jenis apa di KlikBCA Individu?",
    o: [
      "Transfer antar rekening",
      "Pembayaran e-commerce",
      "OR",
      "Inkaso"
    ],
    a: 1
  },
  {
    q: "Suatu perusahaan menggunakan fitur Fleet dalam KlikBCA Bisnis untuk mengelola biaya BBM kendaraan operasional. Fasilitas ini bekerja dengan menggunakan media apa?",
    o: [
      "Kartu Flazz yang dikaitkan dengan Fleet",
      "Sakuku Plus",
      "Kartu kredit Mastercard BCA",
      "SDB"
    ],
    a: 0
  },
  {
    q: "Ardi ingin melakukan transaksi B2B Pertamina melalui KlikBCA Bisnis untuk pembayaran tagihan. Menu mana yang harus ia gunakan?",
    o: [
      "Menu Transfer Dana",
      "Menu B2B Pertamina",
      "Menu BCA Virtual Account",
      "Menu OR"
    ],
    a: 1
  },

  {
    q: "Meri ingin menggunakan layanan WA Chat HaloBCA untuk menanyakan informasi kartu kredit. Ia sudah tahu bahwa nomor WhatsApp HaloBCA berbeda dengan nomor call center telepon. Ke nomor berapa ia harus mengirim pesan WhatsApp?",
    o: [
      "0811 1500 198",
      "0811 1500 998",
      "0811 5000 998",
      "0811 1500 999"
    ],
    a: 1
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
    q: "Lidya ingin memanfaatkan aplikasi Mobile HaloBCA. Ia belum menjadi nasabah BCA, tapi ingin bertanya produk tabungan. Apakah ia bisa menggunakan Mobile HaloBCA?",
    o: [
      "Tidak bisa karena hanya untuk nasabah yang punya BCA ID",
      "Hanya bisa jika sudah punya kartu kredit BCA",
      "Bisa, Mobile HaloBCA dapat digunakan nasabah maupun non nasabah",
      "Hanya bisa jika sudah registrasi m-BCA"
    ],
    a: 2
  },
  {
    q: "Seorang nasabah ingin melakukan pengkinian data nomor HP dan email tanpa datang ke cabang. Ia membaca bahwa hal ini dapat dilakukan melalui Mobile HaloBCA pada menu Transaksi tertentu. Apa yang paling tepat?",
    o: [
      "Menu Akun Saya",
      "Menu Status Laporan",
      "Menu Pengkinian Data",
      "Menu Contact Center"
    ],
    a: 2
  },
  {
    q: "Yusuf ingin menghubungi HaloBCA Prioritas karena ia nasabah prioritas. Nomor mana yang paling tepat ia hubungi?",
    o: [
      "1500888",
      "1500222",
      "1500123",
      "1500998"
    ],
    a: 1
  },
  {
    q: "Sebuah perusahaan ingin menghubungi HaloBCA untuk keperluan korporasi. Mereka mengetahui bahwa ada nomor khusus HaloBCA Bisnis. Nomor manakah yang tepat?",
    o: [
      "1500888",
      "1500222",
      "1500123",
      "1500998"
    ],
    a: 3
  },
  {
    q: "BCA by Phone Bisnis digunakan oleh perusahaan untuk melakukan transaksi finansial. Manakah yang termasuk transaksi finansial BCA by Phone Bisnis?",
    o: [
      "Transfer antar rekening BCA dan pembayaran tagihan",
      "Pembukaan rekening baru",
      "Pengajuan kartu kredit",
      "Penukaran banknotes"
    ],
    a: 0
  },
  {
    q: "Seorang nasabah ingin menggunakan layanan chat banking BCA di aplikasi messaging seperti LINE dan WhatsApp untuk cek informasi saldo, mutasi, hingga transaksi perbankan dengan OTP SMS. Layanan apa yang dimaksud?",
    o: [
      "MONICA",
      "VIRA",
      "SELVI",
      "STAR"
    ],
    a: 1
  },
  {
    q: "Nasabah ingin menggunakan VIRA untuk melakukan transaksi perbankan. Selain terhubung dengan channel chat, apa faktor keamanan tambahan yang digunakan untuk otorisasi transaksi finansial di VIRA?",
    o: [
      "PIN kartu ATM",
      "OTP SMS ke nomor HP e-Banking terdaftar",
      "KeyBCA",
      "Password myBCA"
    ],
    a: 1
  },
  {
    q: "Seorang nasabah ingin melihat status laporan keluhan yang pernah ia buat tanpa mengecek email. Layanan aplikasi yang dapat ia gunakan untuk memantau 'Status Laporan' tersebut adalah?",
    o: [
      "BCA mobile",
      "Mobile HaloBCA",
      "Sakuku",
      "VIRA"
    ],
    a: 1
  },

  {
    q: "Seorang nasabah membuka rekening Tahapan BCA di cabang dan langsung menerima Kartu Paspor BCA GPN berteknologi chip. Dimana saja kartu tersebut dapat digunakan?",
    o: [
      "Hanya di mesin ATM BCA",
      "Di channel BCA dan bank lain dalam negeri",
      "Di seluruh dunia di jaringan Mastercard",
      "Hanya untuk transaksi online"
    ],
    a: 1
  },
  {
    q: "Bima memiliki Kartu Paspor BCA Mastercard. Ia ingin menggunakannya untuk tarik tunai di luar negeri. Mengapa Mastercard lebih tepat dibandingkan kartu GPN untuk kasus ini?",
    o: [
      "Karena Mastercard hanya berlaku di dalam negeri",
      "Karena Mastercard terhubung ke jaringan internasional",
      "Karena GPN tidak bisa digunakan di ATM BCA",
      "Karena Mastercard tidak memiliki limit harian"
    ],
    a: 1
  },
  {
    q: "Rino memiliki Kartu Paspor BCA berteknologi chip dengan masa berlaku 5 tahun. Setelah masa berlaku habis, apa yang harus dilakukan nasabah?",
    o: [
      "Melanjutkan penggunaan kartu sampai gagal",
      "Tidak perlu mengganti kartu",
      "Wajib mengganti kartu yang kedaluwarsa",
      "Cukup menambah PIN baru"
    ],
    a: 2
  },
  {
    q: "Nasabah ingin menggunakan fitur contactless pada kartu debit di merchant dengan EDC BCA. Sebelum penggunaan, apa yang perlu dilakukan terkait fitur contactless ini?",
    o: [
      "Tidak perlu aktivasi, langsung dapat digunakan",
      "Mengaktifkan fitur contactless melalui BCA mobile atau myBCA",
      "Menghubungi HaloBCA untuk aktivasi manual",
      "Mengisi formulir di cabang untuk setiap transaksi contactless"
    ],
    a: 1
  },
  {
    q: "Seorang nasabah memiliki Kartu Paspor BCA Mastercard dengan jenis Blue. Ia ingin mengetahui limit harian penarikan tunai di ATM untuk kartunya. Berapa limit penarikan tunai di ATM untuk Paspor BCA Blue, Gold, maupun Platinum?",
    o: [
      "Blue Rp10.000.000, Gold Rp15.000.000, Platinum Rp20.000.000",
      "Blue Rp5.000.000, Gold Rp10.000.000, Platinum Rp15.000.000",
      "Rp15.000.000 per hari untuk ketiga jenis (Blue/Gold/Platinum)",
      "Rp20.000.000 per hari untuk semua jenis"
    ],
    a: 2
  },
  {
    q: "Galih ingin melakukan setoran tunai besar di ATM Setor Tarik menggunakan Kartu Paspor BCA Platinum. Limit setoran tunai harian kartu Platinum di ATM lebih besar dibandingkan Blue. Berapa limit setoran tunai harian di ATM untuk Platinum?",
    o: [
      "Rp50.000.000",
      "Rp80.000.000",
      "Rp100.000.000",
      "Rp150.000.000"
    ],
    a: 2
  },
  {
    q: "Seorang nasabah menggunakan Flazz Gen 2 dan ingin melakukan top up melalui BCA mobile menggunakan HP Android ber-NFC. Limit top up Flazz di BCA mobile per hari per kartu yang terhubung adalah?",
    o: [
      "Rp1.000.000 per hari per kartu",
      "Rp2.000.000 per hari per kartu",
      "Rp5.000.000 per hari per kartu",
      "Rp10.000.000 per hari per kartu"
    ],
    a: 1
  },
  {
    q: "Nasabah ingin melihat 10 transaksi terakhir kartu Flazz miliknya tanpa ke ATM atau EDC. Ia memiliki HP dengan NFC dan aplikasi BCA mobile. Fitur apa yang paling tepat digunakan?",
    o: [
      "Info Flazz di BCA mobile menggunakan NFC",
      "Mutasi rekening di m-BCA",
      "Kurs Valas di BCA mobile",
      "Catatan Finansial di myBCA"
    ],
    a: 0
  },
  {
    q: "Seorang nasabah datang ke cabang untuk membeli kartu Flazz perdana. Berdasarkan ketentuan, bagaimana perlakuan transaksi pembelian Flazz perdana di cabang?",
    o: [
      "Boleh membeli kartu tanpa isi saldo",
      "Kartu Flazz perdana harus langsung diisi dana (top up) dan tidak bisa di-void",
      "Top up perdana boleh di-void jika nasabah berubah pikiran",
      "Kartu diberikan tanpa struk apa pun"
    ],
    a: 1
  },
  {
    q: "Seorang nasabah ingin membeli Flazz di mesin Flazz otomatis. Ia membaca bahwa denominasi uang tunai yang diterima mesin Flazz dibatasi. Denominasi apa yang dapat diterima mesin Flazz untuk pembelian kartu?",
    o: [
      "Rp20.000 dan Rp50.000",
      "Rp50.000 dan Rp100.000",
      "Rp10.000 dan Rp20.000",
      "Semua denominasi"
    ],
    a: 1
  },

  {
    q: "BCA memiliki beberapa jenis ATM, termasuk ATM Tunai, ATM Setor Tarik (STAR/CRM), dan Mesin Setor Tunai. Mesin Setor Tunai khusus hanya melayani apa?",
    o: [
      "Setoran tunai untuk seluruh nasabah",
      "Setoran tunai hanya untuk nasabah organisasi",
      "Tarik tunai dan setoran tunai untuk umum",
      "Transaksi QRIS dan Flazz"
    ],
    a: 0
  },
  {
    q: "Seorang nasabah melihat logo Prima dan Cirrus di ATM BCA. Ia ingin melakukan transfer ke bank lain peserta switching. Fitur transfer ke rekening bank lain peserta switching di ATM BCA memanfaatkan jaringan apa?",
    o: [
      "VISA",
      "Mastercard",
      "ALTO / PRIMA",
      "GPN saja"
    ],
    a: 2
  },
  {
    q: "Nasabah ingin mengakses fitur cek saldo Flazz, top up Flazz, dan update saldo Flazz di ATM BCA. Layanan ini tersedia di jenis mesin apa?",
    o: [
      "Semua ATM BCA termasuk Mesin Setor Tunai",
      "Hanya di ATM Tunai biasa",
      "Hanya di ATM Setor Tarik/ATM STAR",
      "Hanya di EDC"
    ],
    a: 2
  },
  {
    q: "Seorang merchant menggunakan EDC BCA dan ingin menerima transaksi Flazz, termasuk top up dan cek saldo. Apa yang harus dimiliki merchant untuk dapat memproses transaksi Flazz di EDC?",
    o: [
      "Hanya EDC standar",
      "Reader Flazz tambahan yang dikonfigurasi pada FDM",
      "Mesin ATM kecil di kasir",
      "Aplikasi myBCA"
    ],
    a: 1
  },
  {
    q: "EDC BCA saat ini dapat menerima berbagai jenis transaksi, termasuk kartu debit/kredit, QRIS, dan Flazz. Manakah dari berikut ini yang bukan transaksi yang dapat dilakukan di EDC BCA?",
    o: [
      "Transaksi kartu debit",
      "Transaksi kartu kredit",
      "Transaksi QRIS Dinamis",
      "Pembacaan KTP elektronik"
    ],
    a: 3
  },
  {
    q: "Seorang merchant menggunakan QRIS Dinamis di EDC BCA. Alur mana yang paling tepat menggambarkan transaksi QRIS Dinamis MPM di EDC BCA?",
    o: [
      "Customer menampilkan QR, merchant melakukan scan",
      "Merchant memilih menu QR Dinamis di EDC, input nominal, cetak struk QR, customer scan, EDC cetak struk bukti transaksi",
      "Merchant mengirim QR melalui email, customer transfer manual",
      "Customer memasukkan kartu debit dan PIN"
    ],
    a: 1
  },
  {
    q: "Flazz juga dapat digunakan melalui EDC BCA. Selain pembayaran, fitur apa lagi yang dapat dilakukan terhadap kartu Flazz melalui EDC BCA?",
    o: [
      "Top up saldo, inquiry transaksi, dan cek saldo",
      "Mengubah PIN kartu debit",
      "Membuka rekening baru",
      "Melakukan OR/IR"
    ],
    a: 0
  },
  {
    q: "Seorang nasabah menggunakan kartu debit luar negeri berlogo Mastercard di merchant dengan EDC BCA. Kapan penggunaan kartu debit luar negeri di EDC BCA diperbolehkan?",
    o: [
      "Hanya jika merchant memiliki pengaturan khusus",
      "Selalu, tanpa syarat apapun",
      "Tidak boleh sama sekali",
      "Hanya untuk transaksi tunai"
    ],
    a: 0
  },
  {
    q: "Seorang nasabah ingin melakukan pembayaran QRIS menggunakan Sakuku. Sejak awal tahun 2020, QRIS di BCA dapat menerima pembayaran dari berbagai aplikasi termasuk Sakuku. Apa artinya bagi nasabah Sakuku?",
    o: [
      "Sakuku tidak bisa digunakan untuk QRIS",
      "Sakuku dapat digunakan sebagai sumber dana pembayaran QRIS",
      "Hanya BCA mobile yang bisa",
      "Hanya myBCA yang bisa"
    ],
    a: 1
  },
  {
    q: "Merchant ingin mendapatkan bantuan terkait fasilitas EDC BCA selama 24 jam. Nomor layanan merchant yang bisa dihubungi adalah?",
    o: [
      "1500888",
      "1500777",
      "1500788",
      "1500222"
    ],
    a: 2
  },

  {
    q: "Seorang nasabah ingin mengganti kartu Paspor BCA yang rusak dan lupa PIN tanpa harus menunggu CS di cabang yang ramai. Ia melihat ada CS Digital di cabang tersebut. Layanan apa yang dapat ia manfaatkan di CS Digital?",
    o: [
      "Penggantian kartu karena rusak/lupa PIN dan pengajuan kartu konvensional",
      "Hanya buka rekening baru",
      "Hanya setor tunai",
      "Hanya pembukaan SDB"
    ],
    a: 0
  },
  {
    q: "Nasabah ingin melakukan registrasi m-BCA dan KlikBCA Individu tanpa harus antri di CS. Ia dapat menggunakan mesin yang terhubung e-Service/CS Digital. Fitur apa yang tepat?",
    o: [
      "Registrasi melalui CS Digital dengan kartu ATM",
      "Registrasi melalui VIRA",
      "Registrasi hanya lewat HaloBCA",
      "Registrasi melalui Flazz"
    ],
    a: 0
  },
  {
    q: "Seseorang ingin mengurangi waktu tunggu di cabang dengan mengisi formulir pengajuan layanan sebelum datang dan mengambil nomor antrian dengan data sudah terisi. Layanan apa yang paling tepat digunakan?",
    o: [
      "CS Digital",
      "eBranch",
      "Mobile HaloBCA",
      "VIRA"
    ],
    a: 1
  },
  {
    q: "Suatu perusahaan ingin menagih tagihan rutin nasabahnya dari rekening BCA nasabah secara otomatis setiap bulan berdasarkan surat kuasa. Layanan apa yang digunakan?",
    o: [
      "Autodebet Offline",
      "OR",
      "Inkaso",
      "Kliring"
    ],
    a: 0
  },
  {
    q: "Dalam Autodebet Offline, pelanggan company partner harus memberikan dokumen tertentu kepada BCA sebelum rekeningnya dapat didebet. Dokumen apa yang dimaksud?",
    o: [
      "PIN ATM",
      "Nomor kartu kredit",
      "Surat kuasa",
      "KTP asli"
    ],
    a: 2
  },
  {
    q: "Open Payment via counter digunakan untuk pembayaran tagihan tertentu, bahkan untuk non nasabah. Salah satu keunggulannya adalah nasabah atau non nasabah dapat membayar tanpa membuka rekening BCA. Kapan proses settlement Open Payment via counter dilakukan?",
    o: [
      "Real-time di jam transaksi",
      "Dalam dua batch di hari kerja (sekitar 11.30 dan 15.30 WIB)",
      "Minggu pertama tiap bulan",
      "Hanya saat akhir tahun"
    ],
    a: 1
  },
  {
    q: "Seorang nasabah ingin mengirim dana dari rekeningnya di BCA ke rekening di bank luar negeri. Layanan apa yang digunakan?",
    o: [
      "OR (Outward Remittance)",
      "IR (Inward Remittance)",
      "Kliring",
      "Inkaso"
    ],
    a: 0
  },
  {
    q: "Seorang nasabah menunggu kiriman dari keluarga di luar negeri. Layanan apa yang diproses BCA untuk dana masuk tersebut?",
    o: [
      "OR",
      "IR",
      "Kliring",
      "MPN"
    ],
    a: 1
  },
  {
    q: "Autodebet Online biasanya menggunakan sumber data apa untuk mendebet rekening nasabah?",
    o: [
      "File transaksi yang dikirim company partner",
      "Input manual teller",
      "Data dari kartu Flazz",
      "Data dari KTP elektronik"
    ],
    a: 0
  },
  {
    q: "Suatu perusahaan ingin memanfaatkan KlikBCA Bisnis untuk memonitor transaksi fasilitasnya secara real time dan mengunduh laporan transaksi dalam bentuk XLS/CSV. Fitur apa di KBB yang mendukung hal ini?",
    o: [
      "Business Dashboard",
      "B2B Pertamina",
      "Transfer Dana",
      "Autodebet"
    ],
    a: 0
  },

  {
    q: "Seorang nasabah membawa uang kertas asing (valuta asing fisik) seperti USD dan SGD ke BCA untuk dijual dan ditukar ke Rupiah. Layanan apa yang digunakan?",
    o: [
      "Bank Notes",
      "OR",
      "IR",
      "Flazz"
    ],
    a: 0
  },
  {
    q: "BCA hanya menerima banknotes dengan kondisi tertentu. Manakah syarat yang benar untuk banknotes yang diterima BCA?",
    o: [
      "Boleh palsu asalkan tidak sobek",
      "Tidak basah, tidak sobek parah",
      "Harus dalam bentuk koin",
      "Harus yang sudah tidak berlaku"
    ],
    a: 1
  },
  {
    q: "Safe Deposit Box (SDB) digunakan nasabah untuk menyimpan barang berharga. Bagi bank, SDB juga memberikan manfaat. Salah satu manfaat SDB bagi bank adalah?",
    o: [
      "Mengurangi corporate image",
      "Mengurangi pengendapan dana dari uang jaminan",
      "Mendapatkan pendapatan sewa",
      "Mengurangi jumlah nasabah"
    ],
    a: 2
  },
  {
    q: "Seorang nasabah menyewa SDB golongan A. Dalam materi, ukuran SDB golongan A memiliki panjang, lebar, dan tinggi tertentu. Kombinasi ukuran apa yang benar?",
    o: [
      "60 cm, 12 cm, dan 7 cm",
      "60 cm, 26 cm, dan 25 cm",
      "60 cm, 26 cm, dan 12 cm",
      "60 cm, 26 cm, dan 7 cm"
    ],
    a: 1
  },
  {
    q: "Seorang nasabah membawa cek bank lain ke BCA dan ingin menagihnya. Layanan penagihan warkat (cek/bilyet giro) antar bank yang digunakan adalah?",
    o: [
      "Inkaso",
      "OR",
      "IR",
      "QRIS"
    ],
    a: 0
  },
  {
    q: "Kliring adalah layanan transfer antar bank domestik secara batch. Seorang nasabah mentransfer dana ke bank lain menggunakan kliring, namun ternyata ada penolakan. Apa istilah untuk warkat yang ditolak dalam kliring?",
    o: [
      "Menang Kliring",
      "Kalah Kliring",
      "Penundaan Kliring",
      "Tolakan Kliring"
    ],
    a: 3
  },
  {
    q: "Kiriman Uang (transfer) di BCA dapat bersumber dari beberapa jenis dana. Manakah yang bukan sumber dana Kiriman Uang?",
    o: [
      "Cek BCA",
      "Bilyet Giro BCA",
      "Debet rekening BCA",
      "Pembayaran tunai"
    ],
    a: 1
  },
  {
    q: "MPN Gen 2 adalah sistem penerimaan negara yang menghubungkan sistem BCA dengan sistem tertentu milik pemerintah. MPN Gen 2 menghubungkan sistem BCA dengan?",
    o: [
      "Sistem penerimaan negara milik BUMN",
      "Sistem penerimaan negara milik pemerintah",
      "Sistem penerimaan negara milik perusahaan swasta",
      "Sistem penerimaan pajak daerah saja"
    ],
    a: 1
  },
  {
    q: "Seorang nasabah ingin membayar setoran pajak negara melalui BCA. MPN Gen 2 menjadikan BCA sebagai apa bagi pemerintah?",
    o: [
      "Pelaksana transaksi setoran pajak negara",
      "Pelaksana transaksi setoran swasta",
      "Penyedia kartu kredit",
      "Penyedia SDB"
    ],
    a: 0
  },
  {
    q: "Seorang nasabah ingin menyimpan dokumen penting dan perhiasan dalam ruang khusus yang aman dan rahasia di bank. Fasilitas apa yang paling tepat?",
    o: [
      "SDB",
      "Flazz",
      "Sakuku",
      "Fleet Card"
    ],
    a: 0
  },

  {
    q: "Kartu Paspor BCA dapat digunakan pada berbagai jaringan switching lokal. Manakah yang termasuk jaringan switching lokal?",
    o: [
      "Mastercard",
      "VISA",
      "PRIMA",
      "Cirrus"
    ],
    a: 2
  },
  {
    q: "Sebuah perusahaan ingin memanfaatkan jasa pembayaran BCA untuk penerimaan setoran penerimaan negara. Peran BCA dalam MPN Gen 2 adalah sebagai?",
    o: [
      "Sistem penerimaan negara milik pemerintah",
      "Pelaksana transaksi setoran penerimaan negara",
      "Pemilik regulasi pajak",
      "Penjamin banknotes"
    ],
    a: 1
  },
  {
    q: "BCA mengembangkan berbagai e-channel seperti BCA mobile, myBCA, KlikBCA, dan lainnya. Salah satu tujuan utama bagi BCA menyediakan e-channel adalah?",
    o: [
      "Mengurangi antrean di cabang",
      "Menghapus cabang seluruhnya",
      "Mengurangi jumlah nasabah",
      "Mengurangi penggunaan teknologi"
    ],
    a: 0
  },
  {
    q: "Manfaat ATM bagi BCA antara lain mengurangi antrean di counter dan meningkatkan dana pihak ketiga. Manakah pernyataan yang bukan manfaat ATM bagi BCA?",
    o: [
      "Mengurangi fee based income",
      "Mengurangi antrean di counter kantor cabang",
      "Meningkatkan dana di BCA",
      "Menambah nasabah"
    ],
    a: 0
  },
  {
    q: "Seorang nasabah ingin mengakses daftar e-banking BCA, informasi saldo, kurs, dan inquiry tagihan kartu kredit di ATM. Fitur ini termasuk jenis apa?",
    o: [
      "Transaksi tunai",
      "Transaksi non-tunai/informasi",
      "Transaksi Flazz",
      "Transaksi SDB"
    ],
    a: 1
  },
  {
    q: "Nasabah ingin menggunakan kartu Paspor BCA-nya di ATM bank lain peserta Cirrus/Mastercard di luar negeri. Kartu seperti apa yang dapat digunakan?",
    o: [
      "Kartu Paspor BCA GPN",
      "Kartu Paspor BCA berlogo Mastercard",
      "Flazz",
      "Sakuku"
    ],
    a: 1
  },
  {
    q: "Seorang nasabah ingin mengecek mutasi rekening, namun di m-BCA mutasi belum tampil sesuai kebutuhan. Salah satu alternatif e-channel lain yang dapat ia gunakan untuk cek mutasi lebih rinci adalah?",
    o: [
      "KlikBCA Individu",
      "Flazz",
      "Sakuku",
      "EDC"
    ],
    a: 0
  },
  {
    q: "Dalam mesin STAR Teller, BCA menerima berbagai jenis uang tunai, namun ada jenis yang tidak diterima. Manakah yang bukan jenis uang yang diterima STAR Teller?",
    o: [
      "Semua denom kertas Rupiah yang masih berlaku",
      "Uang dalam kondisi tidak palsu/bukan mutilasi",
      "Uang tidak basah, tidak sobek, masih dapat dikenali",
      "Semua uang logam/koin"
    ],
    a: 3
  },
  {
    q: "BCA menyediakan layanan Collection untuk membantu perusahaan dalam penagihan. Dalam konteks Collection, salah satu manfaat bagi perusahaan adalah?",
    o: [
      "Penurunan dana pihak ketiga",
      "Rekonsiliasi penerimaan pembayaran menjadi lebih mudah",
      "Mengurangi jumlah rekening nasabah",
      "Mengurangi penggunaan e-channel"
    ],
    a: 1
  },
  {
    q: "Dalam Jasa Pembayaran, BCA menyediakan layanan kiriman uang, MPN, dan lain-lain. Layanan yang digunakan untuk setoran penerimaan negara non pajak juga terhubung melalui sistem?",
    o: [
      "MPN Gen 2",
      "OR",
      "IR",
      "Inkaso"
    ],
    a: 0
  },

  {
    q: "Seorang nasabah ingin membayar pajak kendaraan secara online dengan memanfaatkan Jasa Pembayaran BCA. Ia tidak ingin datang ke kantor samsat. Layanan mana yang paling mungkin digunakan BCA untuk menyalurkan setoran pajak tersebut ke pemerintah?",
    o: [
      "MPN Gen 2",
      "Inkaso",
      "Banknotes",
      "SDB"
    ],
    a: 0
  },
  {
    q: "Rani ingin menyimpan dokumen penting perusahaan dan perhiasan pribadi secara aman di BCA. Ia juga ingin bisa mengaksesnya hanya pada jam operasional tertentu. Layanan apa yang paling tepat dan apa manfaat bagi BCA?",
    o: [
      "SDB, memberi pendapatan sewa dan meningkatkan corporate image",
      "Flazz, memberi pendapatan fee transaksi",
      "Sakuku, memberi kemudahan pembayaran",
      "ATM Setor Tarik, memberi kemudahan transaksi tunai"
    ],
    a: 0
  },
  {
    q: "Dimas ingin menarik uang di ATM BCA Dollar menggunakan kartu ATM BCA Dollar. Namun ia berencana transfer valas ke rekening valas lain di BCA Dollar melalui ATM. Apa batasan yang perlu ia ketahui?",
    o: [
      "Kartu ATM BCA Dollar tidak bisa tarik tunai",
      "Transaksi transfer valas ke valas tidak dapat dilakukan melalui ATM BCA Dollar",
      "Semua transaksi valas bebas",
      "Hanya bisa transfer rupiah ke valas"
    ],
    a: 1
  },
  {
    q: "Seorang nasabah ingin melakukan transaksi pembelian menggunakan kartu debit berteknologi contactless di EDC BCA tanpa memasukkan PIN untuk nominal kecil. Sebelum itu, ia harus memastikan?",
    o: [
      "fitur contactless sudah diaktifkan di m-BCA/myBCA",
      "Kartu berlogo GPN saja",
      "Kartu berlogo Flazz",
      "Kartu tidak memiliki chip"
    ],
    a: 0
  },
  {
    q: "Seorang nasabah ingin menghubungkan banyak rekening ke satu Kartu Paspor BCA agar bisa mengelola beberapa rekening dengan satu kartu. Berapa maksimal rekening yang dapat dikoneksikan ke satu Kartu Paspor BCA atas nama nasabah yang sama?",
    o: [
      "3 rekening",
      "4 rekening",
      "5 rekening",
      "Tidak dibatasi"
    ],
    a: 2
  },
  {
    q: "PT Sentosa ingin mengurangi antrean di kasir dan mempermudah pembayaran tol, parkir, dan transportasi umum karyawan. Mereka memutuskan menggunakan kartu prabayar yang diterbitkan BCA. Produk mana yang paling sesuai?",
    o: [
      "Sakuku",
      "Flazz",
      "Fleet Card",
      "Paspor BCA GPN"
    ],
    a: 1
  },
  {
    q: "Sebuah perusahaan transportasi ingin memisahkan tagihan BBM kendaraan operasional dari transaksi lainnya. Mereka ingin menggunakan kartu yang hanya bisa digunakan untuk pembelian BBM resmi. Produk apa yang paling sesuai?",
    o: [
      "Fleet Card",
      "Flazz",
      "Sakuku",
      "Kartu Paspor BCA Mastercard"
    ],
    a: 0
  },
  {
    q: "Perusahaan lain ingin mengatur pembayaran BBM di SPBU dengan kartu khusus bekerja sama dengan Pertamina. Kartu apa yang digunakan?",
    o: [
      "Flazz",
      "GazCard",
      "Fleet Card",
      "Sakuku"
    ],
    a: 1
  },
  {
    q: "Slip yang digunakan nasabah untuk transaksi Kiriman Uang (KU) di cabang adalah...",
    o: [
      "Slip KU",
      "PPU",
      "Slip Setoran",
      "Slip pemindahan dana"
    ],
    a: 1
  },
  {
    q: "Berikut banknotes yang diperjualbelikan di BCA antara lain...",
    o: [
      "USD, SGD, EUR",
      "USD, EUR, GBP",
      "USD, SGD, GBP",
      "GBP, AUD, USD"
    ],
    a: 1
  }
]

export default questions