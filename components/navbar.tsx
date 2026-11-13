"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Coffee, Menu, X } from "lucide-react";
import { cn } from "./ui";
import ThemeToggle from "./theme-toggle";
import { useAuth } from "../lib/auth";

const links = [
  { label: "Beranda", href: "/" },
  { label: "Produk", href: "/products" },
  { label: "Jurnal", href: "/blog" },
  { label: "Inquiry", href: "/inquiry" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { user } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dashHref = user?.role === "admin" ? "/admin" : "/dashboard";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-cream-deep bg-background/90 shadow-sm backdrop-blur-lg"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage text-white">
            <Coffee className="h-5 w-5" />
          </span>
          <span className="font-display text-xl tracking-wide">
            Deana<span className="text-sage">.</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-sage",
                pathname === l.href ? "text-sage" : "text-muted"
              )}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          {user ? (
            <Link
              href={dashHref}
              className="rounded-full bg-sage px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-sage-dark"
            >
              {user.role === "admin" ? "Admin" : "My Account"}
            </Link>
          ) : (
            <Link
              href="/login"
              className="rounded-full border-2 border-sage px-5 py-2 text-sm font-semibold text-sage transition-all hover:bg-sage hover:text-white"
            >
              Login
            </Link>
          )}
        </div>

        <button
          className="p-2 text-muted md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-cream-deep bg-background px-6 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-sm font-medium",
                  pathname === l.href ? "bg-cream text-sage" : "text-muted"
                )}
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-3 flex items-center justify-between border-t border-cream-deep pt-3">
              <Link
                href={user ? dashHref : "/login"}
                onClick={() => setOpen(false)}
                className="rounded-full bg-sage px-5 py-2.5 text-sm font-semibold text-white"
              >
                {user ? dashHref : "Login"}
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
