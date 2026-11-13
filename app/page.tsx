import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  Leaf,
  MessageCircle,
  PlayCircle,
  Quote,
} from "lucide-react";
import { blogPosts, products, testimonials } from "../lib/data";
import { Badge, Reveal, SectionTitle, btn } from "../components/ui";
import ProductCard from "../components/product-card";
import BlogCard from "../components/blog-card";
import { waHref } from "../lib/wa";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <About />
      <ProductsPreview />
      <JournalPreview />
      <Testimonials />
      <CtaBanner />
    </>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-svh items-center overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(80rem 40rem at 85% -10%, rgb(88 106 87 / 0.28), transparent), radial-gradient(50rem 30rem at -10% 90%, rgb(88 106 87 / 0.16), transparent)",
        }}
      />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
        <div>
          <Reveal>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-sage/30 bg-cream px-4 py-1.5 text-xs font-bold tracking-widest text-sage uppercase">
              <Leaf className="h-3.5 w-3.5" /> Biji hijau spesialti · Indonesia
            </p>
            <h1 className="font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              Kopi Nusantara,
              <br />
              <span className="text-sage">kelas dunia.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              Dari kebun Preanger sampai Temanggung — kami menyambungkan
              roaster global dengan petani Indonesia. Traceable, etis,
              konsolidated untuk volume 100 kg sampai 10+ MT.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/inquiry" className={btn.primary}>
                Kirim Inquiry <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={waHref()}
                target="_blank"
                rel="noopener noreferrer"
                className={btn.outline}
              >
                <MessageCircle className="h-4 w-4" /> Chat WhatsApp
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="hidden lg:block">
          <div className="relative aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1447933601405-1c416e8c2c1a?w=1200&q=80&auto=format&fit=crop"
              alt="Biji kopi spesialti Indonesia"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="rounded-[3rem] object-cover shadow-lift"
            />
            <div className="absolute -bottom-5 -left-5 rounded-3xl border border-cream-deep bg-background p-5 shadow-lift">
              <div className="flex items-center gap-4">
                <PlayCircle className="h-12 w-12 text-sage" />
                <div>
                  <p className="text-sm font-bold">Video Tour Kebun</p>
                  <p className="text-xs text-muted">Lihat dari petani ke kontainer</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    "100% Arabica & Robusta pilihan",
    "Traceability per karung",
    "MOQ 100 kg",
    "Pengiriman FOB / CIF",
  ];
  return (
    <div className="border-y border-cream-deep bg-cream">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 py-6">
        {items.map((t) => (
          <span
            key={t}
            className="flex items-center gap-2 text-sm font-medium text-muted"
          >
            <CheckCircle2 className="h-4 w-4 text-sage" /> {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem]">
            <Image
              src="https://images.unsplash.com/photo-1442512595331-e89a13ed5d48?w=1200&q=80&auto=format&fit=crop"
              alt="Kebun kopi Deana"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionTitle
            eyebrow="Tentang Kami"
            title="Dari kebun, bukan dari middleman"
            sub="Deana bekerja langsung dengan 140+ petani koperasi di 4 region. Tanpa perantara berarti harga yang lebih adil untuk petani, dan konsistensi yang lebih baik untuk buyer Anda."
          />
          <div className="grid grid-cols-3 gap-4">
            {[
              { n: "4", l: "Origin" },
              { n: "140+", l: "Petani" },
              { n: "8 MT", l: "Kapasitas/bulan" },
            ].map((s) => (
              <div
                key={s.l}
                className="rounded-2xl border border-cream-deep bg-background p-5 text-center"
              >
                <p className="font-display text-3xl text-sage">{s.n}</p>
                <p className="mt-1 text-xs font-medium tracking-wide text-muted uppercase">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {["ISO 22000", "Organic Certified", "Fair Trade"].map((c) => (
              <Badge key={c}>{c}</Badge>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProductsPreview() {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Our Products"
          title="Empat varian, empat karakter"
          sub="Setiap lot kami sortir manual. Spesifikasi lengkap di halaman produk."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/products" className={btn.outline}>
            Lihat Semua Produk <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function JournalPreview() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionTitle
        eyebrow="Jurnal"
        title="Cerita dari pasar & kebun"
        sub="Tinjauan pasar, teknik roasting, dan cerita petani — terbit tiap bulan."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {blogPosts.slice(0, 3).map((p, i) => (
          <BlogCard key={p.slug} post={p} index={i} />
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-sage-dark py-24 text-cream">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-bold tracking-[0.25em] uppercase opacity-70">
            Social Proof
          </p>
          <h2 className="font-display text-4xl text-cream sm:text-5xl">
            Dipercaya buyer global
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.company} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-3xl bg-cream/10 p-6 backdrop-blur-sm">
                <Quote className="mb-4 h-6 w-6 opacity-50" />
                <p className="flex-1 text-sm leading-relaxed opacity-90">
                  “{t.quote}”
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <Image
                    src={t.logo}
                    alt={`${t.company} logo`}
                    width={44}
                    height={44}
                    className="rounded-full ring-2 ring-cream/30"
                  />
                  <div>
                    <p className="text-sm font-bold">{t.name}</p>
                    <p className="flex items-center gap-1.5 text-xs opacity-70">
                      {t.company} · <Globe2 className="h-3 w-3" /> {t.country}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <Reveal>
        <div className="overflow-hidden rounded-[2.5rem] bg-cream p-12 text-center sm:p-16">
          <h2 className="font-display text-4xl sm:text-5xl">
            Siap mengamankan pasokan kopi?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
            Kirim RFQ sekarang. Kami balas dalam 1×24 jam kerja, lengkap dengan
            spesifikasi lot dan harga FOB.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/inquiry" className={btn.primary}>
              Inquiry Now <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={waHref()}
              target="_blank"
              rel="noopener noreferrer"
              className={btn.outline}
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
