import type {
	BlogPost,
	ComplianceDoc,
	HarvestEntry,
	Inquiry,
	Product,
	QCStep,
	Testimonial,
	User,
} from "./types";

export const WHATSAPP_NUMBER = "6282136844579";

const pexels = (id: number, w = 1200) =>
	`https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const products: Product[] = [
	{
		name: "Arabica Java Preanger",
		slug: "java-preanger",
		category: "Arabica",
		origin: "Priangan, West Java",
		priceUsdPerKg: 14.5,
		description:
			"Indonesia's most legendary Arabica, sourced from the Priangan (Preanger) region of West Java — renowned for its unique and elegant flavor. Each batch is carefully processed to ensure the highest standards of quality, delivering a rich and authentic coffee experience.",
		specifications: [
			{ key: "Origin", value: "Priangan (Preanger), West Java" },
			{ key: "Process", value: "Semi-wash | Full-wash | Natural" },
			{ key: "Variety", value: "Typica | Sigararutang | S795" },
			{ key: "Screen Size", value: "15–18" },
			{ key: "Altitude", value: "1,200–1,500 msl" },
			{ key: "MOQ", value: "100 kg" },
		],
		images: [pexels(4157763), pexels(4129105)],
		videoUrl: "https://www.youtube.com/embed/14QY7jZ7Y3w",
		featured: true,
	},
	{
		name: "Arabica Wild Luwak Gayo",
		slug: "wild-luwak",
		category: "Arabica",
		origin: "Aceh Gayo, Sumatra",
		priceUsdPerKg: 10.2,
		description:
			"High-quality wild Luwak coffee from Sumatra, ethically harvested from natural forests without harming animals. Exceptional taste and aroma, rich and distinctive, with strict quality control. Our farmers are government-trained and certified to process wild Luwak coffee.",
		specifications: [
			{ key: "Origin", value: "Aceh Gayo, Sumatra" },
			{ key: "Process", value: "Wild Luwak Natural" },
			{ key: "Variety", value: "Wild Luwak Arabica" },
			{ key: "Screen Size", value: "15+" },
			{ key: "Altitude", value: "1,100–1,400 msl" },
			{ key: "MOQ", value: "100 kg" },
		],
		images: [pexels(4109740), pexels(38523136)],
		videoUrl: "https://www.youtube.com/embed/14QY7jZ7Y3w",
		featured: true,
	},
	{
		name: "Arabica Aceh Gayo",
		slug: "gayo",
		category: "Arabica",
		origin: "Aceh Gayo, Sumatra",
		priceUsdPerKg: 9.8,
		description:
			"Premium Arabica from Aceh Gayo, Sumatra — a fine region known for its unique flavor profile. Grown by certified, well-trained farmers. Each batch is carefully processed to deliver a rich and authentic coffee experience.",
		specifications: [
			{ key: "Origin", value: "Aceh Gayo, Sumatra" },
			{ key: "Process", value: "Semi-wash | Full-wash | Natural" },
			{ key: "Variety", value: "Ateng" },
			{ key: "Screen Size", value: "15–17" },
			{ key: "Altitude", value: "1,200–1,600 msl" },
			{ key: "MOQ", value: "300 kg" },
		],
		images: [pexels(38412662), pexels(3680132)],
		videoUrl: "https://www.youtube.com/embed/14QY7jZ7Y3w",
	},
	{
		name: "Robusta Temanggung",
		slug: "temanggung",
		category: "Robusta",
		origin: "Temanggung, Central Java",
		priceUsdPerKg: 3.4,
		description:
			"Robusta coffee from Temanggung, Central Java, cultivated in fertile volcanic highlands. Sourced directly from local farmers and processed using the natural method to preserve origin character while maintaining consistency and reliability in every batch.",
		specifications: [
			{ key: "Origin", value: "Temanggung, Central Java" },
			{ key: "Process", value: "Natural" },
			{ key: "Variety", value: "Robusta" },
			{ key: "Screen Size", value: "15–16" },
			{ key: "Altitude", value: "800–1,000 msl" },
			{ key: "MOQ", value: "1 MT" },
		],
		images: [pexels(36343666), pexels(35553036)],
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
		coverImage: pexels(35229818, 800),
	},
	{
		title: "Teknik Roasting untuk Biji Gayo: Mengangkat Aroma Herbal",
		slug: "roasting-gayo",
		category: "Teknik Roasting",
		author: "Deana Research",
		publishedAt: "2026-07-04",
		content: `<p>Biji Gayo yang diproses wet-hulled punya struktur sel berbeda dari arabika washed Latin Amerika. Panas awal (first crack) perlu dikejar lebih lambat.</p><h2>Profil rekomendasi</h2><ul><li>Congee phase: 96 °C, 4 menit, airflow penuh</li><li>Develop: 1:30–2:00 ratio develop</li><li>Drop di 10% Agtron warna medium</li></ul><p>Hasilnya: body tebal, finish rempah, dan aroma pala khas region Aceh.</p>`,
		coverImage: pexels(34977389, 800),
	},
	{
		title: "Cerita Petani Preanger: Generasi Ketiga Menjaga Lereng Gunung",
		slug: "cerita-petani-preanger",
		category: "Cerita Petani",
		author: "Tim Field Deana",
		publishedAt: "2026-05-20",
		content: `<p>Ibu Yuni (58) memulai kerja di kebun keluarganya di usia 12. Kini ia memimpin koperasi 140 petani di lereng Preanger.</p><blockquote>"Kopi bukan cuma komoditas, kopi itu identitas. Kalau anak saya tidak mau lanjut, siapa yang akan menjaga tanah ini?"</blockquote><p>Program traceability yang kami jalankan bersama koperasi memastikan setiap karung dapat dilacak ke kebun asalnya — dan petani menerima premium harga yang layak.</p>`,
		coverImage: pexels(34258683, 800),
	},
	{
		title: "Luwak Liar vs Budidaya: Mengapa Kami Hanya Pilih Liar",
		slug: "luwak-liar-vs-budidaya",
		category: "Cerita Petani",
		author: "Tim Field Deana",
		publishedAt: "2026-03-08",
		content: `<p>Proses luwak liar berbeda sepenuhnya dari yang dibudidayakan. Kami hanya bekerja sama dengan komunitas pemburu di Sumatra yang mengikuti protokol etis: tidak menangkap, hanya mengambil.</p><p>Kadar kafein rendah dan karakter smoky khas hanya muncul dari proses fermentasi alami di perut luwak liar — hasil yang sulit direplikasi di kandang.</p>`,
		coverImage: pexels(33015766, 800),
	},
	{
		title: "Mengapa Robusta Temanggung Layak Masuk Blending Espresso",
		slug: "robusta-temanggung-blending",
		category: "Teknik Roasting",
		author: "Deana Research",
		publishedAt: "2026-01-15",
		content: `<p>Robusta bukan musuh. Dipakai dengan rasio yang tepat, Pandelewo dari Temanggung memberikan crema tebal dan rasa cokelat pekat yang dicari chain cafe.</p><h2>Rasio uji yang terbukti</h2><p>70% arabika Gayo + 30% robusta Temanggung, dipanggang medium-dark — hasil espresso balance: manis, body, dan sedikit kepedasan manis.</p>`,
		coverImage: pexels(31890552, 800),
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
		productName: "Arabica Aceh Gayo",
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
		productName: "Arabica Wild Luwak Gayo",
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

// --- NEW DATA for Home page redesign ---

export const harvestCalendar: HarvestEntry[] = [
	{ region: "Java Preanger", mainCrop: "May – Sep", flyCrop: "Nov – Jan" },
	{ region: "Aceh Gayo", mainCrop: "Jun – Oct", flyCrop: "Feb – Apr" },
	{ region: "Wild Luwak Gayo", mainCrop: "Jul – Nov", flyCrop: "Mar – May" },
	{ region: "Robusta Temanggung", mainCrop: "Apr – Sep", flyCrop: "Oct – Jan" },
];

export const qcSteps: QCStep[] = [
	{
		n: "01",
		title: "Controlled Fermentation",
		desc: "Duration monitored for 24–72 hours depending on process. Temperature and pH tracked continuously to ensure consistency and prevent over-fermentation.",
		icon: "🧪",
	},
	{
		n: "02",
		title: "Raised Bed Drying",
		desc: "Cherry or parchment dried on raised African beds under controlled shade. Turned every 30 minutes for even moisture reduction to 10.5–12%.",
		icon: "☀️",
	},
	{
		n: "03",
		title: "In-House Cupping",
		desc: "Every lot is cupped by our Q-Grader before approval. We measure moisture with a calibrated meter and check water activity for stability.",
		icon: "☕",
	},
	{
		n: "04",
		title: "GrainPro Packing",
		desc: "Green beans are packed in GrainPro or Ecotact liners inside jute bags, sealed to protect against moisture, taint, and quality loss during ocean freight.",
		icon: "📦",
	},
];

export const complianceDocs: ComplianceDoc[] = [
	{
		name: "SCA Cupping Report",
		desc: "Official cupping score and flavor wheel from our certified Q-Grader for every approved lot.",
		icon: "📊",
	},
	{
		name: "Phytosanitary Certificate",
		desc: "Issued by Indonesian biosecurity authority confirming the shipment meets import requirements.",
		icon: "🌿",
	},
	{
		name: "Certificate of Origin",
		desc: "COO issued by Indonesian trade authority, required for customs clearance at destination port.",
		icon: "📜",
	},
	{
		name: "ICO Certificate",
		desc: "International Coffee Organization certificate for qualifying shipments under trade agreements.",
		icon: "🏛️",
	},
	{
		name: "GrainPro / Ecotact Liner",
		desc: "Food-grade moisture barrier liner inside every jute bag — the standard for specialty green coffee export.",
		icon: "🛡️",
	},
	{
		name: "Organic Certification",
		desc: "Our partner farms hold organic certification; documentation provided with each certified lot.",
		icon: "🌱",
	},
];
