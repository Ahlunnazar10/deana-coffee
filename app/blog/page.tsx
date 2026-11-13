import Link from "next/link";
import type { Metadata } from "next";
import { Search } from "lucide-react";
import { blogPosts } from "../../lib/data";
import { PageHeader } from "../../components/ui";
import BlogCard from "../../components/blog-card";
import BlogFilter from "../../components/blog-filter";

export const metadata: Metadata = {
  title: "Jurnal",
  description:
    "Tinjauan pasar, teknik roasting, dan cerita petani dari dunia kopi spesialti Indonesia.",
};

const categories = [
  "Semua",
  ...Array.from(new Set(blogPosts.map((p) => p.category))),
];

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Jurnal"
        title="Cerita dari pasar & kebun"
        sub="Analisa market, panduan roasting, dan kisah langsung dari petani yang bekerja sama dengan kami."
      />
      <div className="mx-auto max-w-7xl px-6 py-12">
        <BlogFilter categories={categories} />
      </div>
    </>
  );
}
