import type { BlogPost, Inquiry, Product, Testimonial, User } from "./types";

export const WHATSAPP_NUMBER = "6282136844579";

export const products: Product[] = [
  {
    name: "Arabika Java Preanger",
    slug: "java-preanger",
    category: "Arabica",
    origin: "West Java",
    priceUsdPerKg: 14.5,
    description:
      "Semi-washed arabika dari lereng Preanger, Jawa Barat. Profil manis dengan nuansa karamel dan cokelat, body penuh, dan aftertaste panjang. Dibudidayakan pada ketinggian 1.200–1.500 mdpl oleh petani koperasi tradisional.",
    specifications: [
      { key: "Origin", value: "Preanger, West Java" },
      { key: "Process", value: "Washed / Semi-washed" },
      { key: "Variety", value: "Kopi Liberika-Arabika hybrid" },
      { key: "Screen Size", value: "15–18" },
      { key: "Altitude", value: "1.200–1.500 msl" },
      { key: "MOQ", value: "500 kg" },
    ],
    images: [
      "https://images.unsplash.com/photo-1447933601405-1c416e8c2c1a?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524358830947-15676613d3fe?w=1200&q=80&auto=format&fit=crop",
    ],
    videoUrl:
      "https://www.youtube.com/embed/14QY7jZ7Y3w",
    featured: true,
  },
  {
    name: "Arabica Wild Luwak",
    slug: "wild-luwak",
    category: "Arabica",
    origin: "Sulawesi",
    priceUsdPerKg: 10.2,
    description:
      "Luwak liar, bukan hasil peternakan. Proses alami yang memberi karakter earthy, smoky, dan lembut. Pemanenan terbatas mengikuti musim buah — tersedia dalam jumlah terbatas setiap tahun.",
    specifications: [
      { key: "Origin", value: "Sulawesi, Indonesia" },
      { key: "Process", value: "Natural / Wild Luwak" },
      { key: "Variety", value: "Sariwangi / Tim Tim" },
      { key: "Screen Size", value: "15+" },
      { key: "Altitude", value: "1.100–1.400 msl" },
      { key: "MOQ", value: "100 kg" },
    ],
    images: [
      "https://images.unsplash.com/photo-1459739781010-277d002af0d5?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518057131659-5fb2043e794f?w=1200&q=80&auto=format&fit=crop",
    ],
    videoUrl: "https://www.youtube.com/embed/14QY7jZ7Y3w",
    featured: true,
  },
  {
    name: "Arabika Gayo",
    slug: "gayo",
    category: "Arabica",
    origin: "Aceh",
    priceUsdPerKg: 9.8,
    description:
      "Gayo terkenal dengan cita rasa herbal dan rempah, body tebal, asam seimbang. Didukung oleh koperasi petani di dataran tinggi Gayo — salah satu region paling dihormati di dunia kopi spesialti.",
    specifications: [
      { key: "Origin", value: "Aceh Tengah, Sumatra" },
      { key: "Process", value: "Wet-hulled (Giling Basah)" },
      { key: "Variety", value: "Ateng / Tim-Tim" },
      { key: "Screen Size", value: "15–17" },
      { key: "Altitude", value: "1.200–1.600 msl" },
      { key: "MOQ", value: "300 kg" },
    ],
    images: [
      "https://images.unsplash.com/photo-1522022283601-b683228a8e43?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504734949399-35237f17515a?w=1200&q=80&auto=format&fit=crop",
    ],
    videoUrl: "https://www.youtube.com/embed/14QY7jZ7Y3w",
  },
  {
    name: "Robusta Temanggung",
    slug: "temanggung",
    category: "Robusta",
    origin: "Central Java",
    priceUsdPerKg: 3.4,
    description:
      "Robusta pilihan dengan kadar kafein tinggi dan rasa pekat, ideal untuk campuran espresso dan coffee-in-a-cup. Ditanam pada dataran tinggi Temanggung dengan paparan matahari penuh.",
    specifications: [
      { key: "Origin", value: "Temanggung, Central Java" },
      { key: "Process", value: "Natural / Full Sun" },
      { key: "Variety", value: "Pandelewo" },
      { key: "Screen Size", value: "15–16" },
      { key: "Altitude", value: "800–1.000 msl" },
      { key: "MOQ", value: "1 MT" },
    ],
    images: [
      "https://images.unsplash.com/photo-1616714227623-3068616b82aa?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611854773521-2610d9929989?w=1200&q=80&auto=format&fit=crop",
    ],
    videoUrl: "https://www.youtube.com/embed/14QY7jZ7Y3w",
  },
];

export const blogPosts: BlogPost[] = [
  {
    title: "Tinjauan Pasar Kopi 2026: Tren Harga Spesialti Global",
    slug: "tinjauan-pasar-2026",
    category: "Tinjauan Pasar",
    author: "Deana Research",
    publishedAt: "2026-09-12",
    content: `<p>Sekitar 14 bulan terakhir, harga arabika global mencatat penguatan 32 persen. Kebutuhan roaster Eropa terhadap biji dari Asia Tenggara meningkat tajam, terutama varietas dari Preanger dan Gayo.</p><h2>Dampak bagi eksportir</h2><p>Ekspor biji hijau Indonesia harus lebih transparan soal spesifikasi: screen size, kadar air, dan proses pascapanen. Buyer internasional makin menuntut sertifikasi traceability.</p><blockquote>Roastery di Kopenhagen kini menyebut Gayo sebagai "the next Sumatra" dalam brief purchasing 2026 mereka.</blockquote><p>Kami merekomendasikan buyer membangun long-term agreement dengan koperasi untuk mengamankan pasokan pada musim panen Q1.</p>`,
    coverImage:
      "https://images.unsplash.com/photo-1453903470486-b153dd9a0692?w=1200&q=80&auto=format&fit=crop",
  },
  {
    title: "Teknik Roasting untuk Biji Gayo: Mengangkat Aroma Herbal",
    slug: "roasting-gayo",
    category: "Teknik Roasting",
    author: "Deana Research",
    publishedAt: "2026-07-04",
    content: `<p>Biji Gayo yang diproses wet-hulled punya struktur sel berbeda dari arabika washed Latin Amerika. Panas awal (first crack) perlu dikejar lebih lambat.</p><h2>Profil rekomendasi</h2><ul><li>Congee phase: 96 °C, 4 menit, airflow penuh</li><li>Develop: 1:30–2:00 ratiodevelop</li><li>Drop di 10% Agtron warna medium</li></ul><p>Hasilnya: body tebal, finish rempah, dan aroma pala khas region Aceh.</p>`,
    coverImage:
      "https://images.unsplash.com/photo-1514432344050-98982310be25?w=1200&q=80&auto=format&fit=crop",
  },
  {
    title: "Cerita Petani Preanger: Generasi Ketiga Menjaga Lereng Gunung",
    slug: "cerita-petani-preanger",
    category: "Cerita Petani",
    author: "Tim Field Deana",
    publishedAt: "2026-05-20",
    content: `<p>Ibu Yuni (58) memulai kerja di kebun keluarganya di usia 12. Kini ia memimpin koperasi 140 petani di lereng Preanger.</p><blockquote>"Kopi bukan cuma komoditas, kopi itu identitas. Kalau anak saya tidak mau lanjut, siapa yang akan menjaga tanah ini?"</blockquote><p>Program traceability yang kami jalankan bersama koperasi memastikan setiap karung dapat dilacak ke kebun asalnya — dan petani menerima premium harga yang layak.</p>`,
    coverImage:
      "https://images.unsplash.com/photo-1519082052133-9d27377c98a8?w=1200&q=80&auto=format&fit=crop",
  },
  {
    title: "Luwak Liar vs Budidaya: Mengapa Kami Hanya Pilih Liar",
    slug: "luwak-liar-vs-budidaya",
    category: "Cerita Petani",
    author: "Tim Field Deana",
    publishedAt: "2026-03-08",
    content: `<p>Proses luwak liar berbeda sepenuhnya dari yang dibudidayakan. Kami hanya bekerja sama dengan komunitas pemburu di Sulawesi yang mengikuti protokol etis: tidak menangkap, hanya mengambil.</p><p>Kadar kafein rendah dan karakter smoky khas hanya muncul dari proses fermentasi alami di perut luwak liar — hasil yang sulit direplikasi di kandang.</p>`,
    coverImage:
      "https://images.unsplash.com/photo-1447933601405-1c416e8c2c1a?w=1200&q=80&auto=format&fit=crop",
  },
  {
    title: "Mengapa Robusta Temanggung Layak Masuk Blending Espresso",
    slug: "robusta-temanggung-blending",
    category: "Teknik Roasting",
    author: "Deana Research",
    publishedAt: "2026-01-15",
    content: `<p>Robusta bukan musuh. Dipakai dengan rasio yang tepat, Pandelewo dari Temanggung memberikan crema tebal dan rasa cokelat pekat yang dicari chain cafe.</p><h2>Rasio uji yang terbukti</h2><p>70% arabika Gayo + 30% robusta Temanggung, dipanggang medium-dark — hasil espresso balance: manis, body, dan sedikit kepedasan manis.</p>`,
    coverImage:
      "https://images.unsplash.com/photo-1616714227623-3068616b82aa?w=1200&q=80&auto=format&fit=crop",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Marco Lindgren",
    company: "Nordic Roasters",
    country: "Sweden",
    role: "Head of Procurement",
    quote:
      "Gayo dari Deana adalah backbone menu signature kami. Konsisten, traceable, dan tim mereka cepat merespons setiap RFQ.",
    logo: "https://ui-avatars.com/api/?name=Nordic+Roasters&background=586a57&color=fff&size=64",
  },
  {
    name: "Aiko Tanaka",
    company: "Kyoto Coffee Lab",
    country: "Japan",
    role: "Founder",
    quote:
      "Wild Luwak-nya adalah satu-satunya yang bisa kami temukan dengan standar etis. Kemitraan terbaik yang pernah kami bangun di Asia Tenggara.",
    logo: "https://ui-avatars.com/api/?name=Kyoto+Coffee+Lab&background=586a57&color=fff&size=64",
  },
  {
    name: "Daniel Okafor",
    company: "BrewWorks",
    country: "Nigeria",
    role: "Supply Director",
    quote:
      "Volume 5 MT per bulan sudah berjalan 8 bulan tanpa gangguan logistik. Deana adalah partner yang bisa diandalkan.",
    logo: "https://ui-avatars.com/api/?name=BrewWorks&background=586a57&color=fff&size=64",
  },
];

export const sampleInquiries: Inquiry[] = [
  {
    id: "inq-001",
    guestName: "Marco Lindgren",
    guestEmail: "marco@nordicroasters.se",
    companyName: "Nordic Roasters AB",
    volume: "5 MT",
    message:
      "Looking for long-term supply of Arabika Gayo, medium roast grade. Please share 2026 season availability and FOB prices.",
    productName: "Arabika Gayo",
    status: "new",
    createdAt: "2026-10-28",
  },
  {
    id: "inq-002",
    guestName: "Aiko Tanaka",
    guestEmail: "aiko@kyotcoffeelab.jp",
    companyName: "Kyoto Coffee Lab",
    volume: "200 kg",
    message:
      "First order of Wild Luwak for retail sampling. Please include full traceability documentation per batch.",
    productName: "Arabica Wild Luwak",
    status: "closed",
    adminNotes: "Sample shipped, client confirmed quality. Awaiting PO.",
    createdAt: "2026-09-02",
  },
];

export const demoUsers: (User & { password: string })[] = [
  {
    name: "Admin Deana",
    email: "admin@deanacoffee.id",
    role: "admin",
    company: "Deana Coffee",
    whatsapp: WHATSAPP_NUMBER,
    verified: true,
    password: "admin123",
  },
  {
    name: "Marco Lindgren",
    email: "marco@nordicroasters.se",
    role: "buyer",
    company: "Nordic Roasters AB",
    whatsapp: "46701234567",
    verified: true,
    password: "buyer123",
  },
];
