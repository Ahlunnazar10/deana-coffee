import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { blogPosts } from "../../../lib/data";
import { Badge, Reveal } from "../../../components/ui";
import BlogCard from "../../../components/blog-card";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

function PostContent({ slug }: { slug: string }) {
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 2);

  return (
    <article>
      <section className="mx-auto max-w-3xl px-6 pt-12">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-sage"
        >
          <ArrowLeft className="h-4 w-4" /> Semua artikel
        </Link>

        <Reveal>
          <div className="flex flex-wrap items-center gap-3">
            <Badge>{post.category}</Badge>
            <span className="flex items-center gap-1.5 text-xs text-muted">
              <Calendar className="h-3.5 w-3.5" /> {post.publishedAt}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-muted">
              <User className="h-3.5 w-3.5" /> {post.author}
            </span>
          </div>
          <h1 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
            {post.title}
          </h1>
          <div className="relative mt-8 aspect-video overflow-hidden rounded-3xl shadow-lift">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 750px"
              className="object-cover"
            />
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-12">
        <Reveal>
          <div
            className="prose-richtext"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </Reveal>
      </section>

      {related.length ? (
        <section className="mx-auto max-w-7xl px-6 pb-24">
          <h2 className="mb-6 font-display text-3xl">Baca juga</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {related.map((p, i) => (
              <BlogCard key={p.slug} post={p} index={i} />
            ))}
          </div>
        </section>
      ) : null}
    </article>
  );
}

export default async function BlogPost({
  params,
}: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <Suspense fallback={<div className="py-40 text-center text-muted">Memuat…</div>}>
      <PostContent slug={slug} />
    </Suspense>
  );
}
