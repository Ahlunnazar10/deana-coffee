"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Building2,
  CheckCircle2,
  Clock,
  LogOut,
  Package,
  ShieldCheck,
} from "lucide-react";
import { useAuth } from "../../lib/auth";
import { useInquiries } from "../../lib/inquiries";
import { PageHeader, btn } from "../../components/ui";

export default function DashboardPage() {
  const router = useRouter();
  const { user, checked, logout } = useAuth();
  const { inquiries } = useInquiries();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(checked);
  }, [checked]);

  useEffect(() => {
    if (checked && !user) {
      if (typeof window !== "undefined") {
        localStorage.removeItem("deana-admin-redirect");
        localStorage.removeItem("deana-admin-redirect-ts");
      }
      router.replace("/login");
    }
  }, [checked, user, router]);

  if (!ready || !user)
    return <div className="py-40 text-center text-muted">Memuat…</div>;

  const myInquiries = inquiries.filter(
    (i) => i.guestEmail.toLowerCase() === user.email.toLowerCase()
  );
  const counts = {
    new: myInquiries.filter((i) => i.status === "new").length,
    reviewed: myInquiries.filter((i) => i.status === "reviewed").length,
    closed: myInquiries.filter((i) => i.status === "closed").length,
  };

  return (
    <>
      <PageHeader
        eyebrow="Portal Buyer"
        title={user.verified ? "Selamat datang kembali" : "Akun Anda"}
        sub="Pantau status inquiry dan kelola profil perusahaan Anda."
      />
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sage font-display text-xl text-white">
              {user.name.charAt(0)}
            </span>
            <div>
              <p className="flex items-center gap-2 text-lg font-bold">
                {user.name}
                {user.verified ? (
                  <span className="flex items-center gap-1 rounded-full bg-sage/15 px-2.5 py-0.5 text-xs font-semibold text-sage">
                    <ShieldCheck className="h-3.5 w-3.5" /> Terverifikasi
                  </span>
                ) : null}
              </p>
              <p className="flex items-center gap-1.5 text-sm text-muted">
                <Building2 className="h-4 w-4" /> {user.company}
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              logout();
              router.replace("/");
            }}
            className={btn.ghost}
          >
            <LogOut className="h-4 w-4" /> Keluar
          </button>
        </div>

        <div className="mb-10 grid gap-4 sm:grid-cols-3">
          {(
            [
              ["new", counts.new, Clock, "Menunggu Review"],
              ["reviewed", counts.reviewed, CheckCircle2, "Sedang Diproses"],
              ["closed", counts.closed, Package, "Selesai / Closed"],
            ] as const
          ).map(([key, n, Icon, label]) => (
            <div
              key={key}
              className="rounded-3xl border border-cream-deep bg-background p-6"
            >
              <div className="flex items-center justify-between">
                <p className="font-display text-4xl text-sage">{n}</p>
                <Icon className="h-8 w-8 text-cream-deep" />
              </div>
              <p className="mt-2 text-sm font-medium text-muted">{label}</p>
            </div>
          ))}
        </div>

        <h2 className="mb-5 font-display text-2xl">Riwayat Inquiry</h2>
        {myInquiries.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-cream-deep p-12 text-center">
            <p className="mb-4 text-muted">
              Belum ada inquiry pada akun ini.
            </p>
            <Link href="/inquiry" className={btn.primary}>
              Buat Inquiry Pertama
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {myInquiries.map((i) => (
              <div
                key={i.id}
                className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-cream-deep bg-background p-5"
              >
                <div>
                  <p className="font-semibold">{i.productName}</p>
                  <p className="text-sm text-muted">
                    {i.volume} · {i.createdAt}
                  </p>
                </div>
                <StatusPill status={i.status} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export function StatusPill({ status }: { status: string }) {
  const map: Record<string, string> = {
    new: "bg-cream text-sage",
    reviewed: "bg-sage/15 text-sage",
    closed: "bg-cream-deep text-muted",
  };
  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${map[status] ?? map.new}`}
    >
      {status}
    </span>
  );
}
