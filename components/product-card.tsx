import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Product } from "../lib/types";
import { Badge, Reveal } from "./ui";

export default function ProductCard({
  product,
  index = 0,
}: {
  product: Product;
  index?: number;
}) {
  return (
    <Reveal delay={index * 0.08}>
      <Link
        href={`/products/${product.slug}`}
        className="group block overflow-hidden rounded-3xl border border-cream-deep bg-background shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <Badge>{product.category}</Badge>
          </div>
        </div>
        <div className="p-6">
          <p className="mb-1 text-xs font-semibold tracking-wider text-muted uppercase">
            {product.origin}
          </p>
          <h3 className="font-display text-xl">{product.name}</h3>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-lg font-bold text-sage">
              ${product.priceUsdPerKg.toFixed(2)}
              <span className="text-xs font-normal text-muted">/kg</span>
            </p>
            <span className="flex items-center gap-1 text-sm font-medium text-sage opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100">
              Detail <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
