# Deana Coffee — Fase 2: Backend Laravel + MongoDB
Status: BERJALAN · Service: deana-coffee-web · Diperbarui: 2026-11-13 15:40

## Sedang dikerjakan
Fase 1 frontend MVP SELESAI (commit 32334b5): landing, /products (+ detail),
/inquiry, /blog (+ detail + search), /login, /dashboard (buyer), /admin
(dashboard, CRUD harga, inquiry status + catatan, export CSV). Data & auth
masih MOCK lokal (lib/data.ts, localStorage).

## Status terakhir (apa yang sudah terbukti / sudah deploy)
- `npm run build` hijau (Next 16.4.6 Turbopack, 23 page static/PPR).
- Smoke test prod server: semua route 200 kecuali /products (compile delay,
  bukan error — verified 200 setelah warm).
- Self-check: `npx tsx lib/inquiries.test.ts` PASS.
- WA number 6282136844579 sudah dipakai di widget + footer + CTA.
- Admin/buyer demo: admin@deanacoffee.id/admin123,
  marco@nordicroasters.se/buyer123.

## Keputusan penting
- Laravel + MongoDB BELUM dibuat — user belum minta backend di sesi ini.
  Frontend sengaja di-mock agar UI bisa diuji tanpa dependency backend.
- `next.config.ts`: remotePatterns images.unsplash.com + ui-avatars.com.
- PRD minta Tailwind 3.4; project pakai Tailwind v4 (already scaffolded) —
  warna custom via CSS vars di globals.css, bukan tailwind.config.js.
- Next 16 breaking changes: `params`/`searchParams` = Promise;
  `LayoutProps`/`PageProps` butuh type arg (global types tidak auto-loaded
  di project ini, jadi dipakai type inline `{ children: React.ReactNode }`
  dan `{ params: Promise<{ slug: string }> }`).
- Partial Prerendering aktif: akses `params` harus dibungkus `<Suspense>`
  (sudah diterapkan di /products/[slug] dan /blog/[slug]).
- `dangerouslySetInnerHTML` dipakai untuk konten blog — konten dari
  lib/data.ts (trusted, bukan user input). Sinkronisasi ke Laravel nanti
  tetap perlu sanitasi saat content dari DB.

## Langkah berikutnya
1. Setup Laravel 11 + MongoDB driver di folder terpisah (mis.
   `deana-coffee-api/`) — endpoint: auth, products, inquiries, blog.
2. Ganti lib/data.ts import di komponen publik (ProductCard, BlogCard,
   landing) jadi fetch ke `NEXT_PUBLIC_API_URL` dengan TanStack Query.
3. Ganti lib/auth.ts + lib/inquiries.ts (localStorage) jadi API calls.
4. Rate limiting 60 req/menit per IP di Laravel (throttle middleware).
5. Data seed: 4 produk, 1 admin, 1 buyer, 5 blog, 2 inquiry (sesuai PRD §8).
6. Postman collection dokumentasi API (DOD PRD §9).

## Jangan lakukan (jebakan yang sudah ditemukan)
- Jangan jalankan 2 `next build`/`next dev` barengan — lock `.next/lock`
  bikin error "Another next build process is already running". Fix:
  `rm .next/lock` lalu restart.
- `npm run build` di project ini bisa > 5 menit (Turbopack cache write
  lambat di F:). Jangan anggap hang sebelum cek `.next/BUILD_ID`.
- Image Unsplash/avatars harus masuk `images.remotePatterns` di
  next.config.ts, selain itu `next build` 500 saat prerender.
- `antialiased` BUKAN CSS property — pakai `-webkit-font-smoothing:
  antialiased` di globals.css.
- Jangan ubah WA number tanpa izin — sudah dikonfirmasi user:
  6282136844579.
