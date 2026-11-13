import type { Metadata } from "next";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { PageHeader } from "../../components/ui";
import InquiryForm from "../../components/inquiry-form";
import { WHATSAPP_NUMBER } from "../../lib/data";

const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello Deana Coffee, I would like to make an inquiry."
)}`;

export const metadata: Metadata = {
  title: "Inquiry",
  description: "Kirim Request For Quotation ke Deana Coffee. Response dalam 1×24 jam kerja.",
};

export default function InquiryPage() {
  return (
    <>
      <PageHeader
        eyebrow="RFQ"
        title="Kirim Inquiry"
        sub="Form 3 langkah: data klien, kebutuhan, dan pesan. Tim sales kami membalas dalam 1×24 jam kerja."
      />
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-14 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <InquiryForm />
        </div>
        <aside className="flex flex-col gap-6">
          <div className="rounded-3xl border border-cream-deep bg-cream p-6">
            <h3 className="mb-3 font-display text-lg">Langkah berikutnya</h3>
            <div className="flex flex-col gap-3">
              {[
                "RFQ diverifikasi tim sales",
                "Katalog lot & harga FOB dikirim",
                "Negosiasi volume & sampling",
                "PO dan pengiriman",
              ].map((s, i) => (
                <div key={s} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                  <span>
                    <strong className="text-sage">{i + 1}.</strong> {s}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl bg-sage-dark p-6 text-cream">
            <h3 className="mb-2 font-display text-lg">Butuh jawaban cepat?</h3>
            <p className="mb-4 text-sm opacity-80">
              Chat langsung via WhatsApp — reply dalam beberapa menit.
            </p>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-2.5 text-sm font-bold text-white transition-transform hover:scale-105"
            >
              <MessageCircle className="h-4 w-4" /> Chat Sekarang
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}
