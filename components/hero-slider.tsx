"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { btn } from "./ui";

const slides = [
	{
		id: 1,
		tagline: "PT Deana Kaia Nusantara · Indonesian Specialty Coffee Exporter",
		headline: [
			{ text: "Indonesian Specialty" },
			{ text: "Green Coffee Beans", emphasis: true },
		],
		description:
			"Direct from smallholder farmers in West Java and Aceh Gayo. Micro-lots and consistent single-origin lots with SCA scores 84+.",
		cta1: { label: "Order Green Samples", href: "/inquiry" },
		cta2: { label: "View Current Offer List", href: "/products" },
		badges: [
			{ icon: "📋", text: "NIB Licensed" },
			{ icon: "☕", text: "SCA 84+" },
			{ icon: "🤝", text: "Direct Trade" },
			{ icon: "📦", text: "Free Samples" },
		],
		stats: [
			{ value: "4", label: "Origins" },
			{ value: "100%", label: "Traceable" },
			{ value: "NIB", label: "Legal" },
		],
		bgImage:
			"https://images.pexels.com/photos/38412662/pexels-photo-38412662.jpeg?auto=compress&cs=tinysrgb&w=1920",
	},
	{
		id: 2,
		tagline: "Quality · Responsibility · Traceability · Partnership · Pride",
		headline: [
			{ text: "From Farm Gate" },
			{ text: "to Your Roastery", emphasis: true },
		],
		description:
			"Controlled fermentation, in-house cupping, GrainPro-packaged — every shipment ships with full traceability documentation.",
		cta1: { label: "Our Coffee", href: "/products" },
		cta2: { label: "Export & Quality", href: "#export" },
		badges: [
			{ icon: "🌿", text: "Sustainable" },
			{ icon: "📊", text: "QC Strict" },
			{ icon: "🔍", text: "Traceable" },
			{ icon: "🚢", text: "FOB / CIF" },
		],
		stats: [
			{ value: "4", label: "Varieties" },
			{ value: "100%", label: "Traceable" },
			{ value: "4", label: "Processing Methods" },
		],
		bgImage:
			"https://images.pexels.com/photos/4157763/pexels-photo-4157763.jpeg?auto=compress&cs=tinysrgb&w=1920",
	},
	{
		id: 3,
		tagline: "Your Long-Term Indonesian Coffee Partner",
		headline: [
			{ text: "Trusted Partner" },
			{ text: "for Roasters", emphasis: true },
		],
		description:
			"From 5 bag LCL samples to 18-ton FCL containers. Ready to ship with all documentation handled.",
		cta1: { label: "Request Samples", href: "/inquiry" },
		cta2: { label: "About Us", href: "#about" },
		badges: [
			{ icon: "✅", text: "Specialty Grade" },
			{ icon: "📜", text: "NIB Licensed" },
			{ icon: "🌱", text: "Sustainable" },
			{ icon: "💯", text: "Consistent" },
		],
		stats: [
			{ value: "3+", label: "Years" },
			{ value: "24/7", label: "Support" },
			{ value: "100%", label: "Commitment" },
		],
		bgImage:
			"https://images.pexels.com/photos/3680132/pexels-photo-3680132.jpeg?auto=compress&cs=tinysrgb&w=1920",
	},
];

export default function HeroSlider() {
	const [current, setCurrent] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrent((prev) => (prev + 1) % slides.length);
		}, 6000);
		return () => clearInterval(timer);
	}, []);

	const slide = slides[current];

	return (
		<section className="relative flex h-svh items-center overflow-hidden">
			{/* Stacked background images for crossfade + zoom */}
			<div className="absolute inset-0">
				{slides.map((s, i) => (
					<div
						key={s.id}
						className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
							i === current ? "opacity-100" : "opacity-0"
						}`}
					>
						<img
							key={i === current ? `active-${current}` : `idle-${i}`}
							src={s.bgImage}
							alt="Coffee background"
							className={`h-full w-full object-cover ${
								i === current ? "animate-hero-zoom" : ""
							}`}
						/>
					</div>
				))}
				<div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-transparent" />
			</div>

			{/* Content */}
			<div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10">
				<div className="max-w-2xl">
					<p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#C3C2A6]">
						{slide.tagline}
					</p>

					<h1 className="font-display font-bold text-4xl leading-[1.08] text-white sm:text-5xl lg:text-6xl">
						{slide.headline.map((h, i) => (
							<span key={i}>
								{h.emphasis ? (
									<span className="text-[#c3c2a6]">{h.text}</span>
								) : (
									h.text
								)}
								{i < slide.headline.length - 1 ? <br /> : null}
							</span>
						))}
					</h1>

					<p className="mt-4 max-w-lg text-base leading-relaxed text-white/70">
						{slide.description}
					</p>

					<div className="mt-6 flex flex-wrap items-center gap-3">
						<Link href={slide.cta1.href} className={btn.primary}>
							{slide.cta1.label} <ArrowRight className="h-4 w-4" />
						</Link>
						<Link href={slide.cta2.href} className={btn.outline}>
							{slide.cta2.label}
						</Link>
					</div>

					{/* Badges */}
					<div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
						{slide.badges.map((b) => (
							<div
								key={b.text}
								className="flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-2.5 py-3 backdrop-blur-sm"
							>
								<span className="text-xs">{b.icon}</span>
								<span className="text-[11px] font-medium text-white/90">
									{b.text}
								</span>
							</div>
						))}
					</div>

					{/* Stats */}
					<div className="mt-5 flex gap-6">
						{slide.stats.map((s) => (
							<div key={s.label}>
								<p className="font-display text-2xl text-[#C3C2A6] sm:text-3xl">
									{s.value}
								</p>
								<p className="text-[10px] font-medium uppercase tracking-wider text-white/50">
									{s.label}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Slider Indicators */}
			<div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
				{slides.map((_, i) => (
					<button
						key={i}
						onClick={() => setCurrent(i)}
						className={`h-2 rounded-full transition-all duration-300 ${
							i === current
								? "w-8 bg-sage-light"
								: "w-2 bg-white/40 hover:bg-white/60"
						}`}
						aria-label={`Go to slide ${i + 1}`}
					/>
				))}
			</div>
		</section>
	);
}
