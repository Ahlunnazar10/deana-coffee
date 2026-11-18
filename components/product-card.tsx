"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Product } from "../lib/types";
import { Badge, Reveal } from "./ui";

export default function ProductCard({
	product,
	index = 0,
	featured = false,
}: {
	product: Product;
	index?: number;
	featured?: boolean;
}) {
	return (
		<Reveal delay={index * 0.08}>
			<Link
				href={`/products/${product.slug}`}
				className={`product-card group block overflow-hidden rounded-3xl border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift ${
					featured
						? "border-sage/40 bg-linear-to-b from-sage/5 to-transparent shadow-lg"
						: "border-cream-deep bg-background shadow-sm"
				}`}
			>
				<div className="relative aspect-5/3 overflow-hidden">
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
				<div className="flex flex-col p-6">
					<p className="mb-1 text-xs font-semibold tracking-wider text-muted uppercase">
						{product.origin}
					</p>
					<h3 className="font-display text-xl font-semibold text-sage">
						{product.name}
					</h3>

					{/* Full spec table — no icons */}
					<div className="mt-2 flex flex-1 flex-col gap-1 text-xs">
						{product.specifications.map((s) => (
							<div key={s.key} className="flex gap-1.5">
								<span className="font-semibold text-foreground shrink-0">
									{s.key}:
								</span>
								<span className="text-muted">{s.value}</span>
							</div>
						))}
					</div>

					<div className="mt-3 flex items-center justify-between border-t border-cream-deep pt-2">
						<div>
							<p className="text-lg font-bold text-sage">
								${product.priceUsdPerKg.toFixed(2)}
								<span className="text-xs font-normal text-muted">/kg</span>
							</p>
							<p className="text-[11px] text-muted">FOB Indonesia</p>
						</div>
						<span className="flex items-center gap-1 text-sm font-medium text-sage opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
							View Details <ArrowRight className="h-4 w-4" />
						</span>
					</div>
				</div>
			</Link>
		</Reveal>
	);
}
