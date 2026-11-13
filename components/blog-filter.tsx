"use client";

import { useEffect, useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { blogPosts } from "../lib/data";
import BlogCard from "./blog-card";
import { cn } from "./ui";

export default function BlogFilter({
  categories,
}: {
  categories: string[];
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [active, setActive] = useState(
    () => (typeof window !== "undefined" ? new URLSearchParams(window.location.search).get("category") ?? "Semua" : "Semua")
  );
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return blogPosts.filter((p) => {
      const catOk = active === "Semua" || p.category === active;
      const q = query.trim().toLowerCase();
      const qOk =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.content.toLowerCase().includes(q);
      return catOk && qOk;
    });
  }, [active, query]);

  useEffect(() => {
    const url = new URL(window.location.href);
    if (active !== "Semua") url.searchParams.set("category", active);
    else url.searchParams.delete("category");
    router.replace(url.pathname + url.search, { scroll: false });
  }, [active, router]);

  return (
    <div>
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={cn(
                "rounded-full px-4 py-2 text-xs font-semibold transition-colors",
                active === c
                  ? "bg-sage text-white"
                  : "border border-cream-deep text-muted hover:border-sage hover:text-sage"
              )}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="relative sm:w-72">
          <Search className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-muted" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari artikel…"
            className="w-full rounded-full border border-cream-deep bg-background py-2.5 pr-4 pl-10 text-sm outline-none transition-colors focus:border-sage"
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="py-20 text-center text-muted">
          Tidak ada artikel yang cocok.
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-3">
          {filtered.map((p, i) => (
            <BlogCard key={p.slug} post={p} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
