import { products } from "../../lib/data";
import { PageHeader } from "../../components/ui";
import ProductCard from "../../components/product-card";

export const metadata = {
  title: "Produk",
  description:
    "Katalog kopi spesialti Indonesia: Arabika Java Preanger, Wild Luwak, Gayo, dan Robusta Temanggung. Spesifikasi lengkap dan harga referensi USD/kg.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Katalog"
        title="Our Products"
        sub="Empat varian biji hijau pilihan. Semua lot tersortir manual dan traceable ke kebun asalnya."
      />
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-muted">
            Menampilkan {products.length} produk
          </p>
          <div className="flex gap-2">
            {["Semua", "Arabica", "Robusta"].map((f, i) => (
              <span
                key={f}
                className={`rounded-full px-4 py-2 text-xs font-semibold ${
                  i === 0
                    ? "bg-sage text-white"
                    : "border border-cream-deep text-muted"
                }`}
              >
                {f}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>

        <div className="mt-14 grid gap-6 rounded-3xl border border-cream-deep bg-cream p-8 sm:grid-cols-3">
          {[
            {
              t: "Sampling Kit",
              d: "Ambil sampel 50 g tiap varian untuk tes roasting di lab Anda.",
            },
            {
              t: "Volume Besar",
              d: "Kontainer penuh (20–40 MT) tersedia. Diskon tier mulai 5 MT.",
            },
            {
              t: "Custom Blend",
              d: "Tim R&D kami bantu rakit arabika/robusta sesuai profil Anda.",
            },
          ].map((f) => (
            <div key={f.t}>
              <h3 className="mb-2 font-display text-lg text-sage">{f.t}</h3>
              <p className="text-sm leading-relaxed text-muted">{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
