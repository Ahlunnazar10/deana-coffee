"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Inbox,
  LayoutDashboard,
  LogOut,
  Package,
} from "lucide-react";
import { useAuth } from "../../lib/auth";
import { cn } from "../../components/ui";

const tabs = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Produk", href: "/admin/products", icon: Package },
  { label: "Inquiry", href: "/admin/inquiries", icon: Inbox },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { user, checked, logout } = useAuth();

  if (!checked || !user || user.role !== "admin") {
    return (
      <div className="flex min-h-svh items-center justify-center pt-18">
        <div className="text-center">
          <p className="mb-4 text-lg text-muted">Area khusus admin.</p>
          <Link
            href="/login"
            className="rounded-full bg-sage px-6 py-3 text-sm font-semibold text-white"
          >
            Login sebagai Admin
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto flex max-w-7xl gap-8 px-6 pt-32 pb-12">
      <aside className="w-56 shrink-0">
        <div className="sticky top-24 flex flex-col gap-2">
          <Link href="/" className="mb-4 flex items-center gap-2 px-2">
            <img
              src="/images/logos/deana-logo-40x40.png"
              alt="Deana Coffee"
              className="h-9 w-9 rounded-full object-cover"
            />
            <span className="font-display">Deana Admin</span>
          </Link>
          {tabs.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                pathname === t.href
                  ? "bg-sage text-white"
                  : "text-muted hover:bg-cream hover:text-sage"
              )}
            >
              <t.icon className="h-4 w-4" /> {t.label}
            </Link>
          ))}
          <button
            onClick={() => {
              logout();
              window.location.href = "/";
            }}
            className="mt-4 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted transition-colors hover:text-red-500"
          >
            <LogOut className="h-4 w-4" /> Keluar
          </button>
        </div>
      </aside>
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
