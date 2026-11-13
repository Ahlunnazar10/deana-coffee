"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Pencil } from "lucide-react";
import { products } from "../../../lib/data";
import type { Product } from "../../../lib/types";

type EditableProduct = Product & { price: number };
import { PageHeader, btn } from "../../../components/ui";
import { useAuth } from "../../../lib/auth";
import { useRouter } from "next/navigation";

export default function AdminProducts() {
  const router = useRouter();
  const { checked } = useAuth();
  const [rows, setRows] = useState<EditableProduct[]>(products.map((p) => ({
    ...p,
    price: p.priceUsdPerKg,
  })));
  const [editing, setEditing] = useState<string | null>(null);
  const [saved, setSaved] = useState<string | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem("deana-products");
    if (raw) {
      const stored: Record<string, number> = JSON.parse(raw);
      setRows((prev) =>
        prev.map((r) =>
          stored[r.slug] ? { ...r, priceUsdPerKg: stored[r.slug], price: stored[r.slug] } : r
        )
      );
    }
  }, []);

  useEffect(() => {
    if (!checked || !useAuthUser()) router.replace("/login");
  }, [checked, router]);

  function useAuthUser() {
    try {
      const raw = localStorage.getItem("deana-session");
      const u = raw ? JSON.parse(raw) : null;
      return u?.role === "admin" ? u : null;
    } catch {
      return null;
    }
  }

  function save(slug: string) {
    const row = rows.find((r) => r.slug === slug)!;
    const price = Number(row.price) || row.priceUsdPerKg;
    const raw = localStorage.getItem("deana-products");
    const stored: Record<string, number> = raw ? JSON.parse(raw) : {};
    stored[slug] = price;
    localStorage.setItem("deana-products", JSON.stringify(stored));
    setRows((prev) =>
      prev.map((r) => (r.slug === slug ? { ...r, priceUsdPerKg: price, price } : r))
    );
    setEditing(null);
    setSaved(slug);
    setTimeout(() => setSaved(null), 2000);
  }

  return (
    <div>
      <PageHeader
        eyebrow="Manajemen Produk"
        title="Katalog"
        sub="Edit harga referensi. Perubahan tersimpan di browser (mock) — sinkronisasi MongoDB menunggu backend Laravel."
      />
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="overflow-hidden rounded-3xl border border-cream-deep">
          {rows.map((r, i) => (
            <div
              key={r.slug}
              className={`flex flex-wrap items-center gap-4 p-5 ${
                i % 2 ? "bg-background" : "bg-cream"
              }`}
            >
              <div className="flex-1">
                <Link
                  href={`/products/${r.slug}`}
                  className="font-semibold hover:text-sage"
                >
                  {r.name}
                </Link>
                <p className="text-xs text-muted">
                  {r.category} · {r.origin} · MOQ {r.specifications.find((s) => s.key === "MOQ")?.value}
                </p>
              </div>

              {editing === r.slug ? (
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    step="0.1"
                    value={r.price}
                    onChange={(e) =>
                      setRows((prev) =>
                        prev.map((x) =>
                          x.slug === r.slug
                            ? { ...x, price: e.target.valueAsNumber || 0 }
                            : x
                        )
                      )
                    }
                    className="w-24 rounded-lg border border-cream-deep px-3 py-1.5 text-sm outline-none focus:border-sage"
                  />
                  <button onClick={() => save(r.slug)} className={btn.primary + " !px-4 !py-1.5 text-xs"}>
                    Simpan
                  </button>
                  <button onClick={() => setEditing(null)} className={btn.ghost + " !px-3 !py-1.5 text-xs"}>
                    Batal
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <p className="text-lg font-bold text-sage">
                    ${(editing === r.slug ? r.price : r.priceUsdPerKg).toFixed(2)}
                    <span className="text-xs font-normal text-muted">/kg</span>
                    {saved === r.slug ? (
                      <span className="ml-2 text-xs font-bold text-green-600">✓ Tersimpan</span>
                    ) : null}
                  </p>
                  <button
                    onClick={() => {
                      setEditing(r.slug);
                      setRows((prev) =>
                        prev.map((x) =>
                          x.slug === r.slug ? { ...x, price: x.priceUsdPerKg } : x
                        )
                      );
                    }}
                    className="rounded-full border border-cream-deep p-2 text-muted transition-colors hover:border-sage hover:text-sage"
                    aria-label={`Edit ${r.name}`}
                  >
                    <Pencil className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
