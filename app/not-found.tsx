import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center px-6 text-center">
      <p className="mb-2 font-display text-7xl text-sage">404</p>
      <h1 className="mb-4 font-display text-3xl">Halaman tidak ditemukan</h1>
      <p className="mb-8 max-w-md text-muted">
        Alamat yang Anda cari tidak ada atau sudah dipindahkan.
      </p>
      <Link
        href="/"
        className="rounded-full bg-sage px-7 py-3.5 text-sm font-semibold text-white shadow-lift transition-all hover:-translate-y-0.5 hover:bg-sage-dark"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
