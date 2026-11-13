import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import type { Metadata } from "next";
import {
  ArrowLeft,
  CheckCircle2,
  MessageCircle,
  PlayCircle,
} from "lucide-react";
import { notFound } from "next/navigation";
import { products } from "../../../lib/data";
import { Badge, Reveal, btn } from "../../../components/ui";
import { waHref } from "../../../lib/wa";
import InquiryForm from "../../../components/inquiry-form";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

function ProductDetailContent({ slug }: { slug: string }) {
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const others = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-12">
        <Link
          href="/products"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-sage"
        >
          <ArrowLeft className="h-4 w-4" /> Kembali ke katalog
        </Link>

        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lift">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              {product.images.map((src, i) => (
                <div
                  key={src}
                  className="relative aspect-square overflow-hidden rounded-2xl"
                >
                  <Image
                    src={src}
                    alt={`${product.name} foto ${i + 1}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 25vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Badge>{product.category}</Badge>
            <h1 className="mt-4 font-display text-4xl sm:text-5xl">
              {product.name}
            </h1>
            <p className="mt-2 text-sm font-semibold tracking-wider text-muted uppercase">
              {product.origin}
            </p>
            <p className="mt-5 leading-relaxed text-muted">
              {product.description}
            </p>

            <p className="mt-6 text-4xl font-bold text-sage">
              ${product.priceUsdPerKg.toFixed(2)}
              <span className="text-base font-normal text-muted"> /kg</span>
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#inquiry" className={btn.primary}>
                Inquiry Now
              </a>
              <a
                href={waHref(product.name)}
                target="_blank"
                rel="noopener noreferrer"
                className={btn.outline}
              >
                <MessageCircle className="h-4 w-4" /> Chat WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <Reveal>
          <h2 className="mb-6 font-display text-3xl">Spesifikasi</h2>
          <div className="overflow-hidden rounded-3xl border border-cream-deep">
            {product.specifications.map((s, i) => (
              <div
                key={s.key}
                className={`flex items-center justify-between gap-4 px-6 py-4 text-sm ${
                  i % 2 ? "bg-background" : "bg-cream"
                }`}
              >
                <span className="font-semibold text-muted">{s.key}</span>
                <span className="flex items-center gap-2 text-right">
                  <CheckCircle2 className="h-4 w-4 text-sage" />
                  {s.value}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <Reveal>
          <h2 className="mb-6 font-display text-3xl">Video Tour Kebun</h2>
          <div className="overflow-hidden rounded-3xl shadow-lift">
            <div className="relative aspect-video">
              <iframe
                src={product.videoUrl}
                title={`Video tour ${product.name}`}
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <p className="mt-4 flex items-center gap-2 text-sm text-muted">
            <PlayCircle className="h-4 w-4 text-sage" />
            Tur langsung dari kebun {product.origin} — dari panen ke kontainer.
          </p>
        </Reveal>
      </section>

      <section id="inquiry" className="mx-auto max-w-3xl px-6 py-16">
        <Reveal>
          <h2 className="mb-2 text-center font-display text-3xl">
            Request a Quote
          </h2>
          <p className="mb-8 text-center text-sm text-muted">
            Menginquiry produk:{" "}
            <strong className="text-sage">{product.name}</strong>
          </p>
          <InquiryForm defaultProduct={product.name} compact />
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <h2 className="mb-6 font-display text-3xl">Varian lainnya</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {others.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <Link
                href={`/products/${p.slug}`}
                className="group flex items-center gap-4 rounded-2xl border border-cream-deep p-4 transition-all hover:-translate-y-0.5 hover:shadow-lift"
              >
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src={p.images[0]}
                    alt={p.name}
                    fill
                    sizes="80px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted uppercase">
                    {p.origin}
                  </p>
                  <p className="font-display text-lg group-hover:text-sage">
                    {p.name}
                  </p>
                  <p className="text-sm font-bold text-sage">
                    ${p.priceUsdPerKg.toFixed(2)}/kg
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

export default async function ProductDetail({
  params,
}: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <Suspense
      fallback={
        <div className="py-40 text-center text-muted">Memuat produk…</div>
      }
    >
      <ProductDetailContent slug={slug} />
    </Suspense>
  );
}
