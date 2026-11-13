import Link from "next/link";
import { Coffee, Mail, MapPin, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "../lib/data";
import { waHref } from "../lib/wa";

export default function Footer() {
  const wa = waHref();

  return (
    <footer className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage text-white">
                <Coffee className="h-5 w-5" />
              </span>
              <span className="font-display text-xl">Deana Coffee</span>
            </div>
            <p className="max-w-sm text-sm leading-6 text-muted">
              Eksportir kopi spesialti Indonesia untuk pembeli B2B global.
              Jejak dari kebun petani, dari Preanger sampai Temanggung.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold tracking-wide text-sage uppercase">
              Navigasi
            </h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/products" className="text-muted hover:text-sage">
                Produk
              </Link>
              <Link href="/blog" className="text-muted hover:text-sage">
                Jurnal
              </Link>
              <Link href="/inquiry" className="text-muted hover:text-sage">
                Inquiry
              </Link>
              <Link href="/login" className="text-muted hover:text-sage">
                Portal
              </Link>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold tracking-wide text-sage uppercase">
              Kontak
            </h4>
            <div className="flex flex-col gap-2 text-sm text-muted">
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-sage"
              >
                <MessageCircle className="h-4 w-4" /> +{WHATSAPP_NUMBER}
              </a>
              <a
                href="mailto:sales@deanacoffee.id"
                className="flex items-center gap-2 hover:text-sage"
              >
                <Mail className="h-4 w-4" /> sales@deanacoffee.id
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Temanggung, Indonesia
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-cream-deep pt-6 text-center text-xs text-muted">
          © 2026 Deana Coffee. Biji hijau spesialti, langsung dari petani Indonesia.
        </div>
      </div>
    </footer>
  );
}
