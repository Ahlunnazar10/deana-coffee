"use client";

import { useState } from "react";
import { Check, ChevronDown, ChevronUp, FileText } from "lucide-react";
import { useInquiries } from "../../../lib/inquiries";
import type { InquiryStatus } from "../../../lib/types";
import { PageHeader, cn, btn } from "../../../components/ui";
import { StatusPill } from "../../dashboard/page";

const filters: (InquiryStatus | "all")[] = ["all", "new", "reviewed", "closed"];

export default function AdminInquiries() {
  const { inquiries, updateStatus } = useInquiries();
  const [filter, setFilter] = useState<"all" | InquiryStatus>("all");
  const [open, setOpen] = useState<string | null>(null);
  const [notes, setNotes] = useState<Record<string, string>>({});

  const list =
    filter === "all"
      ? inquiries
      : inquiries.filter((i) => i.status === filter);

  function exportCsv() {
    const header = "id,perusahaan,email,produk,volume,status,dibuat,catatan_admin\n";
    const rows = inquiries
      .map((i) =>
        [
          i.id,
          `"${i.companyName}"`,
          i.guestEmail,
          `"${i.productName}"`,
          i.volume,
          i.status,
          i.createdAt,
          `"${i.adminNotes ?? ""}"`,
        ].join(",")
      )
      .join("\n");
    const blob = new Blob([header + rows], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `deana-inquiries-${new Date().toISOString().slice(0, 7)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div>
      <PageHeader
        eyebrow="Manajemen Inquiry"
        title="Inbox Lead"
        sub="Perbarui status, tambahkan catatan internal, atau export ke CSV."
      />
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  "rounded-full px-4 py-2 text-xs font-semibold capitalize transition-colors",
                  filter === f
                    ? "bg-sage text-white"
                    : "border border-cream-deep text-muted hover:border-sage"
                )}
              >
                {f}
                {f !== "all" ? (
                  <span className="ml-2 opacity-60">
                    ({inquiries.filter((i) => i.status === f).length})
                  </span>
                ) : null}
              </button>
            ))}
          </div>
          <button onClick={exportCsv} className={btn.outline + " !px-5 !py-2 text-xs"}>
            <FileText className="h-4 w-4" /> Export CSV
          </button>
        </div>

        <div className="flex flex-col gap-3">
          {list.length === 0 ? (
            <p className="py-16 text-center text-muted">
              Tidak ada inquiry dengan status “{filter}”.
            </p>
          ) : (
            list.map((i) => (
              <div
                key={i.id}
                className="rounded-2xl border border-cream-deep bg-background"
              >
                <button
                  onClick={() => setOpen(open === i.id ? null : i.id)}
                  className="flex w-full flex-wrap items-center justify-between gap-4 p-5 text-left"
                >
                  <div>
                    <p className="font-semibold">{i.companyName}</p>
                    <p className="text-sm text-muted">
                      {i.productName} · {i.volume} · {i.createdAt}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <StatusPill status={i.status} />
                    {open === i.id ? (
                      <ChevronUp className="h-4 w-4 text-muted" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-muted" />
                    )}
                  </div>
                </button>

                {open === i.id ? (
                  <div className="border-t border-cream-deep p-5">
                    <div className="mb-5 grid gap-4 sm:grid-cols-2">
                      <div>
                        <p className="mb-1 text-xs font-bold text-muted uppercase">Kontak</p>
                        <p className="text-sm">{i.guestName}</p>
                        <a
                          href={`mailto:${i.guestEmail}`}
                          className="text-sm text-sage underline"
                        >
                          {i.guestEmail}
                        </a>
                      </div>
                      <div>
                        <p className="mb-1 text-xs font-bold text-muted uppercase">Pesan</p>
                        <p className="text-sm leading-relaxed text-muted">
                          {i.message}
                        </p>
                      </div>
                    </div>

                    <div className="mb-5">
                      <p className="mb-2 text-xs font-bold text-muted uppercase">
                        Catatan internal
                      </p>
                      <textarea
                        rows={2}
                        value={notes[i.id] ?? i.adminNotes ?? ""}
                        onChange={(e) =>
                          setNotes((prev) => ({ ...prev, [i.id]: e.target.value }))
                        }
                        className="w-full rounded-xl border border-cream-deep px-4 py-3 text-sm outline-none focus:border-sage"
                        placeholder="Catatan hanya terlihat oleh tim admin…"
                      />
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      {(
                        [
                          ["new", "Tandai New"],
                          ["reviewed", "Tandai Reviewed"],
                          ["closed", "Tandai Closed"],
                        ] as const
                      )
                        .filter(([s]) => s !== i.status)
                        .map(([s, label]) => (
                          <button
                            key={s}
                            onClick={() =>
                              updateStatus(
                                i.id,
                                s,
                                notes[i.id] ?? i.adminNotes
                              )
                            }
                            className={btn.outline + " !px-4 !py-2 text-xs"}
                          >
                            <Check className="h-3.5 w-3.5" /> {label}
                          </button>
                        ))}
                    </div>
                  </div>
                ) : null}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
