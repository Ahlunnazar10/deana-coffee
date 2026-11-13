"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Inbox,
  Package,
  TrendingUp,
} from "lucide-react";
import { useAuth } from "../../lib/auth";
import { useInquiries } from "../../lib/inquiries";
import { products } from "../../lib/data";
import { StatusPill } from "../dashboard/page";
import { PageHeader } from "../../components/ui";

export default function AdminDashboard() {
  const router = useRouter();
  const { user, checked } = useAuth();
  const { inquiries } = useInquiries();
  const [ready, setReady] = useState(false);

  useEffect(() => setReady(checked), [checked]);
  useEffect(() => {
    if (checked && !user) router.replace("/login");
  }, [checked, user, router]);

  if (!ready || !user)
    return <div className="py-40 text-center text-muted">Memuat…</div>;

  const newCount = inquiries.filter((i) => i.status === "new").length;
  const byProduct = products.map((p) => ({
    product: p,
    n: inquiries.filter((i) => i.productName === p.name).length,
  }));
  const top = byProduct.sort((a, b) => b.n - a.n)[0];

  const stats = [
    { label: "Total Inquiry", value: inquiries.length, icon: Inbox, href: "/admin/inquiries" },
    { label: "Inquiry Baru", value: newCount, icon: TrendingUp, href: "/admin/inquiries" },
    {
      label: "Produk Teratas",
      value: top && top.n > 0 ? top.product.name : "—",
      icon: Package,
      href: "/admin/products",
      small: true,
    },
  ];

  return (
    <div>
      <PageHeader
        eyebrow="Admin"
        title="Dashboard"
        sub="Ringkasan aktivitas bisnis Deana Coffee."
      />
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              className="group rounded-3xl border border-cream-deep bg-background p-6 transition-all hover:-translate-y-0.5 hover:shadow-lift"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold tracking-wider text-muted uppercase">
                  {s.label}
                </p>
                <s.icon className="h-5 w-5 text-sage" />
              </div>
              <p
                className={`mt-3 font-display ${
                  s.small ? "text-2xl" : "text-4xl"
                } text-sage`}
              >
                {s.value}
              </p>
              <ArrowRight className="mt-4 h-4 w-4 text-muted transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>

        <h2 className="mb-5 mt-12 font-display text-2xl">Inquiry Terbaru</h2>
        <div className="flex flex-col gap-3">
          {inquiries.slice(0, 5).map((i) => (
            <div
              key={i.id}
              className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-cream-deep bg-background p-5"
            >
              <div>
                <p className="font-semibold">{i.companyName}</p>
                <p className="text-sm text-muted">
                  {i.productName} · {i.volume} · {i.guestEmail}
                </p>
              </div>
              <StatusPill status={i.status} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
