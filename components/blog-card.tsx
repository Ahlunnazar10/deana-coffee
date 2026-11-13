import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import type { BlogPost } from "../lib/types";
import { Badge, Reveal } from "./ui";

export default function BlogCard({
  post,
  index = 0,
}: {
  post: BlogPost;
  index?: number;
}) {
  return (
    <Reveal delay={index * 0.08}>
      <Link
        href={`/blog/${post.slug}`}
        className="group block overflow-hidden rounded-3xl border border-cream-deep bg-background shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
      >
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <Badge>{post.category}</Badge>
          </div>
        </div>
        <div className="p-6">
          <div className="mb-3 flex items-center gap-3 text-xs text-muted">
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" /> {post.publishedAt}
            </span>
            <span>·</span>
            <span>{post.author}</span>
          </div>
          <h3 className="font-display text-lg leading-snug group-hover:text-sage">
            {post.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted line-clamp-2">
            {post.content.replace(/<[^>]+>/g, "").slice(0, 140)}…
          </p>
          <span className="mt-4 flex items-center gap-1 text-sm font-medium text-sage">
            Baca artikel <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
