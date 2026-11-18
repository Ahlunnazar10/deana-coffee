import Link from "next/link";
import { Globe, Mail, MapPin, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "../lib/data";
import { waHref } from "../lib/wa";

export default function Footer() {
  const wa = waHref();

  return (
    <footer className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <img
                src="/images/logos/deana-logo-40x40.png"
                alt="Deana Coffee"
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <p className="font-display text-lg leading-tight">Deana Kaia</p>
                <p className="text-xs text-muted">Nusantara</p>
              </div>
            </div>
            <p className="max-w-xs text-sm leading-6 text-muted">
              Eksportir kopi spesialti Indonesia untuk buyer B2B global.
              Langsung dari petani, traceable, etis.
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { href: "https://instagram.com/deanacoffee", label: "Instagram" },
                { href: "https://twitter.com/deanacoffee", label: "Twitter" },
                { href: "https://wa.me/6282136844579", label: "WhatsApp" },
              ].map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-cream-deep text-muted transition-colors hover:border-sage hover:text-sage"
                >
                  <span className="text-xs font-bold">{label[0]}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold tracking-wide text-sage uppercase">
              Jelajahi
            </h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/" className="text-muted hover:text-sage">Beranda</Link>
              <Link href="/products" className="text-muted hover:text-sage">Produk</Link>
              <Link href="/blog" className="text-muted hover:text-sage">Jurnal</Link>
              <Link href="/inquiry" className="text-muted hover:text-sage">Inquiry</Link>
              <Link href="/login" className="text-muted hover:text-sage">Portal Buyer</Link>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold tracking-wide text-sage uppercase">
              Origin
            </h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/products/java-preanger" className="text-muted hover:text-sage">Java Preanger</Link>
              <Link href="/products/wild-luwak" className="text-muted hover:text-sage">Wild Luwak</Link>
              <Link href="/products/gayo" className="text-muted hover:text-sage">Aceh Gayo</Link>
              <Link href="/products/temanggung" className="text-muted hover:text-sage">Robusta Temanggung</Link>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold tracking-wide text-sage uppercase">
              Hubungi Kami
            </h4>
            <div className="flex flex-col gap-2.5 text-sm text-muted">
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-sage"
              >
                <MessageCircle className="h-4 w-4 shrink-0" /> +{WHATSAPP_NUMBER}
              </a>
              <a
                href="mailto:info@deanacoffee.com"
                className="flex items-center gap-2 hover:text-sage"
              >
                <Mail className="h-4 w-4 shrink-0" /> info@deanacoffee.com
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0" />
                Cibiru, Bandung, Jawa Barat
              </span>
              <a
                href="https://www.deanacoffee.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-sage"
              >
                <Globe className="h-4 w-4 shrink-0" /> www.deanacoffee.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-cream-deep pt-6 text-xs text-muted sm:flex-row">
          <span>© 2026 PT Deana Kaia Nusantara. Semua hak dilindungi.</span>
          <span>Kopi spesialti Indonesia · Dari kebun ke kontainer</span>
        </div>
      </div>
    </footer>
  );
}
