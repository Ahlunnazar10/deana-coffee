# Kopi Nusantara Export — PRD

## 1. Overview
Solusi digital ini dirancang untuk memfasilitasi ekspor biji kopi spesialiti Indonesia dengan menghadirkan profil perusahaan yang kredibel, cepat, dan interaktif. Masalah utama yang diatasi adalah kurangnya platform B2B yang mampu menyajikan informasi teknis kopi, testimoni, dan tour perkebunan secara visual dan efisien bagi pembeli internasional. Target user utama adalah buyer B2B global (roaster, importir, chain cafe) dan admin perusahaan. Tujuan utamanya adalah menghasilkan leads berkualitas tinggi melalui form inquiry, chat WhatsApp, dan portal klien khusus, dengan pengalaman UI yang modern, eye-catching, dan performa loading sangat cepat (<1s LCP) menggunakan teknologi terkini.

## 2. Requirements
*   **Katalog Produk:** Menampilkan 4 varian spesifik: Arabika Java Preanger, Arabica Wild Luwak, Arabika Gayo, dan Robusta Temanggung. Setiap produk harus memiliki detail deskripsi, spesifikasi (origin, proses, varietas, ukuran), dan harga referensi (USD/kg).
*   **Fitur Interaksi:** Form Inquiry/RFQ wajib validasi email dan perusahaan. Integrasi Widget Chat WhatsApp (menggunakan link `wa.me`) untuk respons cepat. Blog/Jurnal Kopi dengan kategori (Tinjauan Pasar, Teknik Roasting, Cerita Petani). Video Tour Perkebunan (embed YouTube/Vimeo) terintegrasi di halaman produk. Testimoni klien dengan foto logo.
*   **Portal Login:** Area khusus untuk Buyer B2B dan Admin. Buyer dapat melihat riwayat inquiry dan statusnya. Admin dapat mengelola produk, blog, dan status inquiry.
*   **Batasan & Aturan Main:**
    *   **TIDAK ADA** transaksi langsung/e-commerce. Alur pesanan hanya melalui form inquiry (manual approval oleh tim sales).
    *   Warna Primary: Putih (`#FFFFFF`). Secondary: `#586a57` (Hijau Zam). Akar warna harus matching (abu-abu sage, krem light).
    *   Desain wajib: Eye-catching, tren Gen-Z (micro-interactions, scroll animations, dark mode opsi), user-friendly, CTA-friendly.
    *   Performa: Lighthouse Score Performance > 90. Time to Interactive < 3.5s.
    *   Database: Semua data (katalog, user, order/inquiry, blog) disimpan di MongoDB.
    *   Backend: Laravel API sebagai middleware untuk logika bisnis dan auth, terhubung ke MongoDB.
    *   Frontend: Next.js versi terbaru (App Router) di-host di Vercel.
    *   Validasi: Field "Nama Perusahaan" di form inquiry wajib diisi. Email harus valid format.
    *   Keamanan: CSRF protection di API, rate-limiting untuk endpoint public (maks 60 req/menit per IP untuk form inquiry).
- Pastikan identitas visual dan tone komunikasi selaras dengan referensi zatmactrading, alqalaaco, dan wogancoffee

## 3. Core Features

### Fase 1: MVP & Fondasi (Wajib Selesai)
*   **Public Landing Page:** Hero section dengan video background, navbar sticky, section "About Us", "Our Products" (grid 4 varian), "Jurnal" (preview 3 artikel), dan Footer.
*   **Product Detail Page:** Halaman individual untuk 4 produk kopi. Fitur: galeri gambar, spesifikasi table, video tour perkebunan terkait, tombol CTA "Inquiry Now" dan "Chat WhatsApp".
*   **Inquiry & Chat System:** Form RFQ multi-step (Data Klien -> Kebutuhan -> Pesan). Integrasi API ke Laravel. Widget WhatsApp floating.
*   **Blog/Jurnal Sistem:** Listing dan detail artikel. Search sederhana.
*   **Authentication (Basic):** Register/Login untuk Buyer dan Admin. Role-based access control sederhana.
*   **Dashboard Admin (MVP):** CRUD Produk, Tampilan List Inquiry, Update Status Inquiry (New/Reviewed/Closed).

### Fase 2: Portal Klien & Enhancements
*   **Buyer Dashboard:** Dashboard khusus klien dengan riwayat inquiry, status tracking, dan profil perusahaan yang terverifikasi.
*   **Testimoni & Social Proof:** Modul manajemen testimoni dinamis, bukan hardcoded.
*   **Multibahasa:** Support EN/ID toggle untuk konten utama.
*   **Advanced Admin:** Export data inquiry ke CSV, manajemen blog dengan rich-text editor, pengelolaan user.

### Fase 3: Optimization & Scale
*   **SEO Automation:** Sitemap dinamis, structured data JSON-LD untuk produk.
*   **Analytics Dashboard:** Visualisasi statistik inquiry per produk dan bulan.
*   **Newsletter Subscription:** Integrasi email marketing untuk konten jurnal.
*   **Performance Tweaks:** Image optimization agresif, edge rendering untuk static pages.

## 4. User Flow

**Peran: Guest/Buyer Publik**
1.  Buka website -> Landing Page dimuat (<1s LCP).
2.  Menjelajahi menu "Products" -> Klik "Arabica Wild Luwak".
3.  Lihat detail produk, spesifikasi, dan putar Video Tour Perkebunan.
4.  Klik CTA "Send Inquiry" -> Form RFQ terbuka.
5.  Isi form (Perusahaan, Email, Volume, Keterangan) -> Submit.
6.  Sistem memvalidasi data -> Pesan sukses muncul.
7.  (Opsional) Klik ikon WhatsApp -> Buka chat dengan pre-fill pesan.
8.  (Opsional) Baca artikel di "Jurnal" -> Subscribe (Fase 3) atau Share.

**Peran: Admin**
1.  Login ke `/admin` dengan kredensial admin.
2.  Dashboard menampilkan metrics: Total Inquiry, Inquiry Baru, Produk Teratas.
3.  Klik "Manajemen Produk" -> Edit harga/deskripsi "Arabika Gayo" -> Simpan.
4.  Klik "Manajemen Inquiry" -> Filter "Status: New".
5.  Buka detail inquiry -> Ubah status ke "Reviewed" -> Tambah catatan internal.
6.  Export data inquiry bulan ini ke CSV.

**Peran: Buyer Terdaftar**
1.  Login ke `/login` -> Diarahkan ke `/dashboard`.
2.  Lihat "My Inquiries" -> Cek status inquiry terakhir ("Reviewed").
3.  Lihat riwayat kontak sales.
4.  Edit profil perusahaan (alamat, kontak) -> Simpan.

## 5. Architecture

*   **Frontend (Vercel):** Next.js 14+ (App Router). Menggunakan SSR untuk halaman SEO (Products, Blog) dan ISR untuk konten statis. State management menggunakan Zustand atau React Query. Tailwind CSS 3.x dengan konfigurasi custom colors (`primary`, `secondary: #586a57`). Komponen UI berbasis Headless UI untuk aksesibilitas.
*   **Backend API (VPS Ubuntu):** Laravel 11 + MongoDB Driver (Morok/Alphatwo). Endpoint RESTful untuk Auth, Products, Inquiries, Blog, dan Users. Middleware untuk role check (Admin/Buyer). Rate limiting untuk endpoint publik.
*   **Database (VPS Ubuntu):** MongoDB Atlas atau On-Premise. Skema document-based. Indexing untuk field pencarian (nama produk, kategori blog).
*   **Storage:** Cloudinary atau AWS S3 untuk penyimpanan gambar produk, video thumbnails, dan file PDF dokumen.
*   **Communication:** Webhook (Opsional) untuk notifikasi inquiry ke Slack/Email Admin.

## 6. Database Schema

**Koleksi: `products`**
*   `_id`: ObjectID
*   `name`: String (e.g., "Arabika Java Preanger")
*   `slug`: String (unique, e.g., "java-preanger")
*   `category`: String ("Arabica", "Robusta")
*   `origin`: String ("West Java", "Luwak", "Aceh", "Central Java")
*   `price_usd_per_kg`: Decimal
*   `description`: String
*   `specifications`: Array of Objects ({key: String, value: String})
*   `images`: Array of Strings (URLs)
*   `video_url`: String (YouTube/Vimeo ID)
*   `created_at`: Date
*   `updated_at`: Date

**Koleksi: `users`**
*   `_id`: ObjectID
*   `name`: String
*   `email`: String (unique, indexed)
*   `password`: Hashed String
*   `role`: String ("admin", "buyer")
*   `company`: String
*   `whatsapp`: String
*   `verified`: Boolean
*   `created_at`: Date

**Koleksi: `inquiries`**
*   `_id`: ObjectID
*   `user_id`: ObjectID (Nullable, jika guest)
*   `guest_name`: String (jika guest)
*   `guest_email`: String (jika guest)
*   `company_name`: String
*   `volume`: String (e.g., "1 MT", "5 MT")
*   `message`: String
*   `product_id`: ObjectID
*   `status`: String ("new", "reviewed", "closed")
*   `admin_notes`: String
*   `created_at`: Date

**Koleksi: `blog_posts`**
*   `_id`: ObjectID
*   `title`: String
*   `slug`: String (unique)
*   `content`: String (Rich Text/HTML)
*   `cover_image`: String
*   `category`: String
*   `author`: String
*   `published`: Boolean
*   `created_at`: Date

## 7. Tech Stack

*   **Framework:** Next.js 14 (App Router) – Alasan: SSR untuk SEO performa cepat, ecosystem React terkini.
*   **Styling:** Tailwind CSS 3.4 – Alasan: Utilitarian, cepat, mudah customize warna `#586a57`.
*   **Animation:** Framer Motion – Alasan: Smooth scroll effects, micro-interactions sesuai tren Gen-Z.
*   **Backend:** Laravel 11 – Alasan: Robust, mudah integrasi MongoDB, ekosistem besar.
*   **Database:** MongoDB (v6+) – Alasan: NoSQL fleksibel untuk katalog dan log inquiry, skala horizontal.
*   **Server:** VPS Ubuntu 22.04 – Alasan: Kontrol penuh, hosting backend Laravel.
*   **Frontend Hosting:** Vercel – Alasan: Zero-config, edge network, integrasi Next.js seamless.
*   **State Management:** TanStack Query – Alasan: Caching API response, handling loading/error state.
*   **Form Handling:** React Hook Form + Zod – Alasan: Validasi tiping ketat, performa tinggi.

## 8. Kriteria Penerimaan

1.  **Katalog Produk:** Diberi 4 produk baru di database, ketika halaman `/products` dimuat, maka 4 kartu produk tampil dengan gambar, nama, dan harga. Video tour dapat diputar tanpa buffering di kecepatan internet normal.
2.  **Form Inquiry:** Diberi form inquiry kosong, ketika user submit tanpa email valid, maka validasi Zod menampilkan error merah "Email tidak valid" di bawah field. Diberi data valid, ketika submit sukses, maka inquiry tersimpan di MongoDB dan user melihat pesan "Inquiry Terkirim".
3.  **WhatsApp Integrasi:** Diberi halaman produk, ketika user klik ikon WhatsApp, maka browser membuka tab baru/inline chat ke nomor `wa.me/62xxxxxxxxx` dengan pesan otomatis berisi nama produk yang sedang dilihat.
4.  **Auth & Roles:** Diberi akun admin, ketika login, maka diarahkan ke `/admin` dan menu "Manajemen Produk" terlihat. Diberi akun buyer, ketika login, maka diarahkan ke `/dashboard` dan menu admin tersembunyi.
5.  **Performa:** Diberi halaman home, ketika diukur dengan Lighthouse di network throttling "Fast 3G", maka LCP < 3.5s dan CLS < 0.1.
6.  **Data Seed:** Database harus di-seed dengan:
    *   4 Produk Spesifik (Java Preanger, Wild Luwak, Gayo, Temanggung).
    *   1 Admin User.
    *   1 Buyer User.
    *   5 Artikel Blog Sampel.
    *   2 Inquiry Sampel (1 New, 1 Closed).

## 9. Cara Uji & Definition of Done

**Perintah Build & Test:**
*   `npm run build` di folder Next.js harus lulus tanpa error.
*   `npm run test` (Jest/Vitest) harus lulus semua test case untuk form validasi dan komponen UI.
*   `php artisan test` di folder Laravel harus lulus semua test untuk API endpoint (unit test for controllers, integration test for routes).
*   `php artisan migrate:seed` harus berjalan sukses tanpa error.
*   Endpoint API `/api/inquiries` harus merespons dengan status 201 saat POST valid, dan 422 saat invalid.

**Variabel Lingkungan & Mode Uji:**
*   `.env` Vercel: `NEXT_PUBLIC_API_URL`, `NEXT_PUBLIC_WHATSAPP_NUMBER`, `VERCEL_ANALYTICS_ID`.
*   `.env` VPS Laravel: `DB_CONNECTION=mongodb`, `DB_HOST`, `DB_DATABASE`, `APP_KEY`, `APP_ENV=production`.
*   **MODE UJI TANPA LAYANAN LUAR:**
    *   `EMAIL_MODE=log`: Tidak mengirim email riil saat inquiry, hanya log ke console/stdout untuk pengujian lokal.
    *   `CHAT_MODE=mock`: WhatsApp link mengarah ke `#` atau dummy chat widget untuk testing UI tanpa backend riil.
    *   `SEARCH_MODE=local`: Pencarian blog menggunakan array in-memory, bukan external service (untuk MVP).

**Test Otomatis Minimal Wajib Ada:**
1.  **Unit Test (Frontend):** Test komponen `<InquiryForm/>` memastikan validasi email dan field wajib bekerja. Test komponen `<ProductCard/>` memastikan render harga dan nama benar.
2.  **Integration Test (Backend):** Test API `POST /api/inquiries` memastikan data tersimpan di MongoDB dengan struktur benar. Test API `GET /api/products` memastikan filter kategori bekerja.
3.  **E2E Test (Opsional tapi direkomendasikan):** Test alur Guest -> Submit Inquiry -> Cek Database.
4.  **Cypress/Playwright Test:** Verifikasi navigasi antar halaman publik dan interaksi WhatsApp link.

**Definition of Done (DOD):**
*   Kode push ke repository Git.
*   CI/CD pipeline Vercel & VPS lulus.
*   Semua kriteria penerimaan di Seksi 8 terverifikasi manual dan otomatis.
*   Dokumentasi API (Postman Collection) tersedia.
*   No blocking bug di browser modern (Chrome, Safari, Firefox).
*   Data seed lengkap tersedia di database development dan production staging.

---

## Rencana Task

### [Fase 1] Setup Infrastruktur & Basis Proyek
Membangun fondasi Next.js, Laravel, dan MongoDB dengan konfigurasi environment siap pakai.
Selesai bila: Build Next.js dan Laravel berjalan lokal tanpa error; Koneksi database MongoDB terverifikasi; Variabel lingkungan .env terkonfigurasi benar

**Setup Frontend Next.js** — Inisialisasi proyek Next.js 14 dengan Tailwind CSS dan struktur folder App Router.
- [ ] Buat proyek Next.js 14 dengan Tailwind CSS 3.4
- [ ] Konfigurasi custom colors primary dan secondary #586a57
- [ ] Instal dan konfigurasi TanStack Query dan React Hook Form

**Setup Backend Laravel & Mongo** — Setup Laravel 11 dengan driver MongoDB dan struktur folder API.
- [ ] Instal Laravel 11 dan konfigurasi koneksi MongoDB
- [ ] Buat struktur folder API RESTful standar
- [ ] Konfigurasi rate limiting untuk endpoint publik maks 60 req/menit

**Skema & Data Seeding** — Definisi skema MongoDB dan pembuatan seed data awal untuk pengembangan.
- [ ] Buat skema koleksi products, users, inquiries, dan blog_posts
- [ ] Buat factory dan seed untuk 4 produk dan user demo
- [ ] Buat seed untuk 5 artikel blog dan 2 inquiry sampel

### [Fase 1] Katalog Produk Publik
Menampilkan 4 varian kopi dengan detail spesifikasi, harga, dan media visual.
Selesai bila: 4 kartu produk tampil di halaman /products dengan gambar dan harga; Halaman detail produk menampilkan tabel spesifikasi dan video tour; Validasi URL video dan gambar tidak rusak

**Listing Produk** — Halaman /products menampilkan grid 4 varian kopi dengan filter sederhana.
- [ ] Buat endpoint GET /api/products di Laravel
- [ ] Buat komponen ProductCard untuk display nama dan harga
- [ ] Implementasikan halaman /products di Next.js dengan grid layout

**Detail Produk** — Halaman individual produk menampilkan galeri gambar, spesifikasi, dan video.
- [ ] Buat endpoint GET /api/products/{slug} di Laravel
- [ ] Buat halaman /products/[slug] dengan tabel spesifikasi
- [ ] Integrasi embed video YouTube/Vimeo di halaman detail

### [Fase 1] Sistem Inquiry & WhatsApp
Form RFQ multi-step dan integrasi chat WhatsApp untuk lead generation.
Selesai bila: Form inquiry memvalidasi email dan nama perusahaan dengan Zod; Inquiry tersimpan di MongoDB setelah submit sukses; Klik ikon WhatsApp membuka link wa.me dengan pre-fill pesan produk

**Form Inquiry Multi-Step** — Form 3 langkah validasi data klien, kebutuhan, dan pesan.
- [ ] Buat komponen InquiryForm dengan React Hook Form dan Zod
- [ ] Tambahkan validasi wajib untuk nama perusahaan dan email valid
- [ ] Buat endpoint POST /api/inquiries dengan CSRF protection

**Integrasi WhatsApp** — Widget floating WhatsApp dengan link dinamis per produk.
- [ ] Buat komponen WhatsAppWidget dengan nomor dari environment
- [ ] Generate link wa.me dengan query string berisi nama produk
- [ ] Tambahkan mode CHAT_MODE=mock untuk pengujian tanpa backend

### [Fase 1] Blog & Jurnal Kopi
Modul berita dan artikel dengan kategori dan pencarian sederhana.
Selesai bila: Daftar artikel blog tampil dengan kategori dan cover image; Detail artikel render konten rich text secara benar; Pencarian artikel berdasarkan kata kunci berfungsi

**Listing & Detail Blog** — Halaman daftar artikel dan halaman detail konten jurnal.
- [ ] Buat endpoint GET /api/blog-posts dengan filter kategori
- [ ] Buat komponen BlogList dan BlogCard di Next.js
- [ ] Implementasikan halaman detail /blog/[slug] dengan render HTML

**Pencarian Blog** — Fitur search sederhana untuk artikel berdasarkan judul atau konten.
- [ ] Tambahkan parameter query search di endpoint GET /api/blog-posts
- [ ] Buat komponen SearchBar di halaman listing blog
- [ ] Konfigurasi mode SEARCH_MODE=local untuk pencarian in-memory

### [Fase 1] Autentikasi & Role Access
Registrasi dan login untuk user Admin dan Buyer dengan hak akses terpisah.
Selesai bila: User admin diarahkan ke /admin setelah login; User buyer diarahkan ke /dashboard setelah login; Menu admin tersembunyi untuk role buyer

**Login & Register** — Halaman autentikasi untuk buyer dan admin dengan validasi kredensial.
- [ ] Buat endpoint POST /api/auth/register dan /api/auth/login
- [ ] Buat halaman /login dan /register di Next.js
- [ ] Implementasikan state management untuk token JWT atau session

**Role Middleware & Guard** — Proteksi route berdasarkan role user (admin/buyer).
- [ ] Buat middleware role check di Laravel API
- [ ] Tambahkan guard frontend di Next.js untuk route /admin
- [ ] Test akses terlarang mengembalikan status 403

### [Fase 1] Dashboard Admin MVP
Panel admin untuk manajemen produk dan pemantauan status inquiry.
Selesai bila: Admin dapat CRUD data produk melalui interface; List inquiry dapat difilter berdasarkan status New/Reviewed/Closed; Status inquiry dapat diperbarui dan catatan internal disimpan

**CRUD Produk** — Manajemen data produk untuk admin.
- [ ] Buat endpoint PUT dan DELETE /api/products untuk admin
- [ ] Buat halaman /admin/products dengan tabel listing dan form edit
- [ ] Validasi perubahan harga dan deskripsi tersimpan ke MongoDB

**Manajemen Inquiry** — Dashboard inquiry untuk pelacakan dan pemrosesan lead.
- [ ] Buat endpoint GET /api/inquiries dengan filter status untuk admin
- [ ] Buat halaman /admin/inquiries dengan tombol update status
- [ ] Tambahkan input catatan internal yang hanya dilihat admin
