"use client";
import HeroSlider from "../components/hero-slider";
import Link from "next/link";
import Image from "next/image";
import {
	ArrowRight,
	CheckCircle2,
	ChevronDown,
	Coffee,
	FileText,
	Leaf,
	MessageCircle,
	Package,
	ShieldCheck,
	Truck,
	MapPin,
	Sprout,
	Droplets,
	BarChart3,
	Star,
} from "lucide-react";
import {
	blogPosts,
	products,
	testimonials,
	harvestCalendar,
	qcSteps,
	complianceDocs,
} from "../lib/data";
import { Badge, Reveal, SectionTitle, btn } from "../components/ui";
import ProductCard from "../components/product-card";
import BlogCard from "../components/blog-card";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { waHref } from "../lib/wa";

export default function Home() {
	return (
		<>
			<HeroSlider />
			<Marquee />
			<FarmStory />
			<About />
			<BestSellers />
			<ProductsPreview />
			<QualityControl />
			<HarvestCalendarSection />
			<ExportReadiness />
			<Testimonials />
			<FAQ />
			<SampleRequest />
		</>
	);
}

function Marquee() {
	const items = [
		"Single Origin",
		"SCA 84+",
		"Traceable",
		"Direct Trade",
		"FOB / CIF",
		"GrainPro",
		"LCL / FCL",
		"100 kg MOQ",
	];
	return (
		<div className="marquee-mask overflow-hidden border-y border-cream-deep bg-cream py-5">
			<div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
				{[...items, ...items].map((t, i) => (
					<span
						key={`${t}-${i}`}
						className="flex items-center gap-10 text-sm font-bold tracking-widest text-muted uppercase"
					>
						{t}
						<img
							src="/icons/coffee-beans.png"
							className="h-6"
							alt="Coffee Beans"
						/>
					</span>
				))}
			</div>
		</div>
	);
}
function About() {
	return (
		<section
			id="about"
			className="min-h-screen flex flex-col justify-center mx-auto max-w-7xl px-6 py-24"
		>
			<div className="grid items-center gap-16 lg:grid-cols-2">
				<Reveal>
					<div className="relative aspect-6/5 overflow-hidden rounded-[2.5rem]">
						<Image
							src="https://images.pexels.com/photos/38412662/pexels-photo-38412662.jpeg?auto=compress&cs=tinysrgb&w=1200"
							alt="Coffee farm in Indonesia"
							fill
							sizes="(max-width: 1024px) 100vw, 50vw"
							className="object-cover"
						/>
					</div>
				</Reveal>
				<Reveal delay={0.1}>
					<SectionTitle
						eyebrow="About Us"
						title="PT Deana Kaia Nusantara"
						sub="A licensed Indonesian specialty green coffee exporter. NIB registered, government-trained on wild Luwak handling, and committed to direct trade that benefits both roasters and farmers."
					/>
					<div className="grid grid-cols-3 gap-4">
						{(
							[
								{ n: "4", l: "Origins" },
								{ n: "140+", l: "Farmers" },
								{ n: "8 MT", l: "Monthly Cap." },
							] as const
						).map((s) => (
							<div
								key={s.l}
								className="rounded-2xl border border-cream-deep bg-background p-5 text-center"
							>
								<p className="font-display text-3xl text-sage">{s.n}</p>
								<p className="mt-1 text-xs font-medium tracking-wide text-muted uppercase">
									{s.l}
								</p>
							</div>
						))}
					</div>
					<div className="mt-8 flex flex-wrap gap-3">
						{[
							"NIB Licensed",
							"Q-Grader Certified",
							"Single Origin",
							"B2B Exporter",
						].map((c) => (
							<Badge key={c}>{c}</Badge>
						))}
					</div>
				</Reveal>
			</div>
		</section>
	);
}
function BestSellers() {
	const bestSellers = products.filter((p) => p.featured);
	return (
		<section className="bg-cream min-h-screen flex flex-col justify-center py-10">
			<div className="mx-auto max-w-8xl px-6">
				<div className="mx-auto max-w-4xl text-center">
					<p className="mb-2 text-xs font-bold tracking-[0.25em] text-sage uppercase">
						Best Sellers
					</p>
					<h2 className="font-display text-3xl leading-tight sm:text-4xl">
						Our most requested origins
					</h2>
					<p className="mt-2 text-sm text-muted">
						Java Preanger and Wild Luwak — the two lots our international buyers
						order first.
					</p>
				</div>
				<div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
					{bestSellers.map((p, i) => (
						<ProductCard key={p.slug} product={p} index={i} featured={true} />
					))}
				</div>
			</div>
		</section>
	);
}

function ProductsPreview() {
	return (
		<section className="bg-cream min-h-screen flex flex-col justify-center py-10">
			<div className="mx-auto max-w-7xl px-6">
				<p className="mb-2 text-xs font-bold tracking-[0.25em] text-sage uppercase">
					Full Catalog
				</p>
				<h2 className="font-display text-3xl leading-tight sm:text-4xl">
					Four origins, four stories
				</h2>
				<p className="mt-2 text-sm text-muted">
					Every lot ships with a cupping report, moisture reading, and full
					traceability documentation.
				</p>
				<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{products.map((p, i) => (
						<ProductCard key={p.slug} product={p} index={i} featured={false} />
					))}
				</div>
				<div className="mt-6 text-center">
					<Link
						href="/products"
						className="inline-flex items-center gap-2 rounded-full bg-sage px-8 py-3 text-sm font-bold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-sage-dark hover:shadow-lg"
					>
						View Full Catalog
						<ArrowRight className="h-4 w-4" />
					</Link>
				</div>
			</div>
		</section>
	);
}
function FarmStory() {
	const items = [
		{
			icon: <img src="/icons/traceability.png" className="" alt="" />,
			title: "Full Traceability",
			desc: "Every bag tracked to its origin farm, washing station, and processing date. Transparency you can verify.",
		},
		{
			icon: <img src="/icons/partnership.png" className="" alt="Partnership" />,
			title: "Smallholder Partnerships",
			desc: "140+ certified farmers across 4 origins. We build long-term relationships, not transactional trades.",
		},
		{
			icon: <img src="/icons/luwak.png" className="" alt="Luwak" />,
			title: "Ethical Wild Luwak",
			desc: "Government-trained collectors following strict ethical protocols — no caging, only natural foraging.",
		},
		{
			icon: (
				<img
					src="/icons/consistent.png"
					className=""
					alt="Consistent Quality"
				/>
			),
			title: "Consistent Quality",
			desc: "In-house Q-Grader cupping every lot. SCA scores 84+. Moisture controlled to 10.5–12% before packing.",
		},
	];
	return (
		<section className="min-h-screen flex flex-col justify-center mx-auto max-w-7xl px-6 py-24">
			<SectionTitle
				eyebrow="Our Story"
				title="From farm to your cup"
				sub="We work directly with smallholder cooperatives in West Java, Aceh, and Central Java. Every bean carries a story you can trace back to the tree."
			/>
			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{items.map((it, i) => (
					<Reveal key={it.title} delay={i * 0.08}>
						<div className="h-full p-6 text-center">
							<div className="mb-4 inline-flex h-20 w-20 items-center justify-center   ">
								{it.icon}
							</div>
							<h3 className="font-display text-lg font-bold text-[#596B58]">
								{it.title}
							</h3>
							<p className="mt-2 text-sm leading-relaxed text-muted">
								{it.desc}
							</p>
						</div>
					</Reveal>
				))}
			</div>
		</section>
	);
}
function QualityControl() {
	const steps = [
		{
			title: "Controlled Fermentation",
			desc: "Duration monitored for 24-72 hours depending on process. Temperature and pH tracked continuously to ensure consistency and prevent over-fermentation.",
			img: "/icons/ferment.png",
		},
		{
			title: "Raised Bed Drying",
			desc: "Cherry or parchment dried on raised African beds under controlled shade. Turned every 30 minutes for even moisture reduction to 10.5-12%.",
			img: "/icons/sun.png",
		},
		{
			title: "In-House Cupping",
			desc: "Every lot is cupped by our Q-Grader before approval. We measure moisture with a calibrated meter and check water activity for stability.",
			img: "/icons/cupping.png",
		},
		{
			title: "GrainPro Packing",
			desc: "Green beans are packed in GrainPro or Ecotact liners inside jute bags, sealed to protect against moisture, taint, and quality loss during ocean freight.",
			img: "/icons/packing.png",
		},
	];

	return (
		<section
			id="qc-section"
			className="bg-sage-dark min-h-screen flex flex-col justify-center items-center text-[#e8e6df]"
		>
			<div className="mx-auto max-w-7xl px-6 w-full">
				<p className="mb-2 text-center text-xs font-bold tracking-[0.25em] uppercase text-[#e8e6df]/70">
					QUALITY CONTROL
				</p>
				<h2 className="text-center font-display text-4xl font-semibold leading-tight text-[#e8e6df]">
					From fermentation to shipping
				</h2>
				<p className="mx-auto mt-1 max-w-2xl text-center text-sm leading-relaxed text-[#e8e6df]/60">
					Four controlled stages ensure every bag meets specialty-grade
					standards before it leaves our facility.
				</p>

				{/* Timeline */}
				<div className="mt-10 flex items-start justify-between gap-3 lg:gap-10 lg:px-4">
					{steps.map((step, i) => (
						<div
							key={step.title}
							className="flex flex-col items-center text-center flex-1 min-w-35"
						>
							{/* Icon circle */}
							<div className="relative z-10 mb-3 flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-2 border-[#c3c2a6]/60 bg-[#e8e6df]/10 shadow-lg lg:h-20 lg:w-20">
								<Image
									src={step.img}
									alt={step.title}
									width={28}
									height={28}
									className="h-12 w-12"
								/>
							</div>
							<span className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-[#c3c2a6]">
								Step {String(i + 1).padStart(2, "0")}
							</span>
							<h3 className="mb-1.5 text-lg font-semibold text-[#e8e6df]">
								{step.title}
							</h3>
							<p className="text-sm leading-relaxed text-[#e8e6df]/65 ">
								{step.desc}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

function HarvestCalendarSection() {
	return (
		<section className="bg-cream py-24">
			<div className="mx-auto max-w-7xl px-6">
				<SectionTitle
					eyebrow="Harvest Calendar"
					title="Plan your procurement cycle"
					sub="Each origin has a main crop and fly crop window. We recommend locking in contracts before the main season for best availability."
				/>
				<div className="overflow-hidden rounded-2xl border border-cream-deep">
					<div className="grid grid-cols-4 gap-0 border-b border-cream-deep bg-background">
						<div className="border-r border-cream-deep px-6 py-4 text-sm font-bold text-muted">
							Origin
						</div>
						<div className="border-r border-cream-deep px-6 py-4 text-sm font-bold text-sage">
							Main Crop
						</div>
						<div className="border-r border-cream-deep px-6 py-4 text-sm font-bold text-sage">
							Fly Crop
						</div>
						<div className="px-6 py-4 text-sm font-bold text-muted">
							Best For
						</div>
					</div>
					{harvestCalendar.map((h, i) => (
						<div
							key={h.region}
							className="grid grid-cols-4 gap-0 border-b border-cream-deep last:border-b-0 bg-background"
						>
							<div className="border-r border-cream-deep px-6 py-4 text-sm font-medium">
								{h.region}
							</div>
							<div className="border-r border-cream-deep px-6 py-4 text-sm text-sage">
								{h.mainCrop}
							</div>
							<div className="border-r border-cream-deep px-6 py-4 text-sm text-muted">
								{h.flyCrop}
							</div>
							<div className="px-6 py-4 text-sm text-muted">
								{i === 0
									? "Washed & semi-wash profiles"
									: i === 1
										? "Full-wash, honey, natural"
										: i === 2
											? "Rare wild-luwak lots"
											: "Espresso blending"}
							</div>
						</div>
					))}
				</div>
				<p className="mt-6 text-center text-sm text-muted">
					LCL shipments from 100 kg · FCL containers up to 19 MT · FOB or CIF
					terms
				</p>
			</div>
		</section>
	);
}
function ExportReadiness() {
	return (
		<section className="min-h-screen flex flex-col justify-center mx-auto max-w-7xl px-6 py-24">
			<SectionTitle
				eyebrow="Export Readiness"
				title="Everything your customs needs"
				sub="We handle documentation so your shipment clears without delays."
			/>
			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{complianceDocs.map((d, i) => (
					<Reveal key={d.name} delay={i * 0.06}>
						<div className="flex gap-4 rounded-2xl border border-cream-deep bg-background p-8 min-h-40">
							<div>
								<h3 className="text-base font-bold text-sage">{d.name}</h3>
								<p className="mt-1 text-sm leading-relaxed text-muted">
									{d.desc}
								</p>
							</div>
						</div>
					</Reveal>
				))}
			</div>
		</section>
	);
}
function FAQ() {
	const faqs = [
		{
			q: "What is your MOQ for the first order?",
			a: "MOQ starts at 100 kg for Arabica lots and 1 MT for Robusta Temanggung. We also offer 200–500 g green samples via DHL/FedEx for quality evaluation before commitment.",
		},
		{
			q: "What payment and shipping terms do you support?",
			a: "We offer FOB and CIF to major Indonesian ports. Payment is via T/T after QC approval and sampling. Long-term partners can negotiate open-account terms.",
		},
		{
			q: "Do you provide traceability documents per batch?",
			a: "Yes. Every shipment includes a lot-specific cupping report, moisture reading, phytosanitary certificate, certificate of origin, and farm-level traceability records.",
		},
		{
			q: "How do I request green coffee samples?",
			a: "Fill out the sample request form below or reach us on WhatsApp. Samples ship within 3–5 working days via DHL or FedEx — we cover the coffee cost; shipping is billed at cost.",
		},
	];
	return (
		<section className="min-h-screen flex flex-col justify-center mx-auto max-w-2xl px-6 py-24">
			<SectionTitle eyebrow="FAQ" title="Common questions" />
			<div className="flex flex-col gap-4 min-w-2xl">
				{faqs.map((f) => (
					<details
						key={f.q}
						className="group rounded-2xl border border-cream-deep bg-background p-6 open:bg-cream"
					>
						<summary className="flex cursor-pointer items-center justify-between gap-4 text-sm text-sage font-bold list-none">
							{f.q}
							<ChevronDown className="h-5 w-5 shrink-0 text-sage transition-transform group-open:rotate-180" />
						</summary>
						<p className="mt-4 text-sm leading-relaxed text-muted">{f.a}</p>
					</details>
				))}
			</div>
		</section>
	);
}

function Testimonials() {
	const [current, setCurrent] = useState(0);
	const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

	const startTimer = () => {
		timerRef.current = setInterval(() => {
			setCurrent((prev) => (prev + 1) % testimonials.length);
		}, 5000);
	};

	useEffect(() => {
		startTimer();
		return () => {
			if (timerRef.current) clearInterval(timerRef.current);
		};
	}, []);

	const toggleTimer = (playing: boolean) => {
		if (playing) {
			startTimer();
		} else {
			if (timerRef.current) clearInterval(timerRef.current);
		}
	};

	return (
		<section className="bg-sage-dark min-h-screen flex flex-col justify-center text-[#e8e6df]">
			<div className="mx-auto max-w-7xl px-6 w-full">
				{/* Decorative quote mark */}
				<div className="mb-3 flex items-center gap-4">
					<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c3c2a6]">
						What Our Customers Say
					</p>
				</div>
				<div className="grid items-center gap-0 lg:grid-cols-2">
					{/* Left: Rating & Brand */}
					<div>
						<p className="text-xl font-bold tracking-[0.25em] uppercase text-[#c3c2a6]">
							Google Rating
						</p>
						<div className="flex items-baseline gap-2">
							<span className="font-display text-[110px] font-bold text-[#e8e6df]">
								4.8
							</span>
							<div className="flex gap-0.5">
								{[...Array(5)].map((_, i) => (
									<Star
										key={i}
										className={`h-8 w-8 ${
											i < 4
												? "fill-yellow-400 text-yellow-400"
												: "text-[#c3c2a6]/40"
										}`}
									/>
								))}
							</div>
						</div>
						<p className=" text-xl text-[#c3c2a6]/70">5 reviews</p>
					</div>

					{/* Right: Slider */}
					<div className="relative min-h-70">
						<AnimatePresence mode="wait">
							<motion.div
								key={current}
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -20 }}
								transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
								className="rounded-3xl border border-[#c3c2a6]/20 bg-[#e8e6df]/5 p-8 backdrop-blur-sm"
								onMouseEnter={() => toggleTimer(false)}
								onMouseLeave={() => toggleTimer(true)}
							>
								<p className="font-display text-2xl leading-snug text-[#e8e6df] sm:text-3xl">
									"{testimonials[current].quote}"
								</p>
								<div className="mt-8 flex items-center gap-3">
									<Image
										src={testimonials[current].logo}
										alt={`${testimonials[current].company} logo`}
										width={44}
										height={44}
										className="rounded-full ring-2 ring-[#c3c2a6]/30"
									/>
									<div>
										<p className="text-sm font-bold text-[#e8e6df]">
											{testimonials[current].name}
										</p>
										<p className="text-xs text-[#c3c2a6]/70">
											{testimonials[current].company} ·{" "}
											{testimonials[current].country}
										</p>
									</div>
								</div>
							</motion.div>
						</AnimatePresence>

						{/* Dots */}
						<div className="mt-6 flex justify-end gap-2">
							{testimonials.map((_, i) => (
								<button
									key={i}
									onClick={() => {
										setCurrent(i);
										toggleTimer(false);
										setTimeout(() => toggleTimer(true), 6000);
									}}
									className={`h-2.5 rounded-full transition-all duration-300 ${
										i === current
											? "w-8 bg-[#c3c2a6]"
											: "w-2.5 bg-[#c3c2a6]/30 hover:bg-[#c3c2a6]/60"
									}`}
									aria-label={`Go to review ${i + 1}`}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
function SampleRequest() {
	return (
		<section className="mx-auto px-6 py-24">
			<Reveal>
				<div className="relative overflow-hidden min-w-4xl rounded-[2.5rem]">
					{/* Background image */}
					<div
						className="absolute inset-0"
						style={{
							backgroundImage: "url('/images/coffee-bean-bg.jpg')",
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
					/>
					{/* Dark overlay for readability */}
					<div className="absolute inset-0 bg-sage-dark/80" />
					{/* Content */}
					<div className="relative z-10 p-12 text-center sm:p-16">
						<p className="mb-3 text-xs font-bold tracking-[0.25em] uppercase text-[#c3c2a6]">
							Start With a Sample
						</p>
						<h2 className="font-display text-4xl font-bold text-cream">
							Taste before you commit
						</h2>
						<p className="mx-auto mt-4 max-w-xl text-base text-cream/80">
							Request 200–500 g green samples from any lot. Ship worldwide via
							DHL or FedEx within 3–5 working days. No obligation — just great
							coffee in your cup.
						</p>
						<div className="mt-8 flex flex-wrap justify-center gap-4">
							<Link href="/inquiry" className={btn.primary}>
								Submit Sample Request <ArrowRight className="h-4 w-4" />
							</Link>
							<a
								href={waHref()}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
							>
								<img
									src="/icons/wa.svg"
									alt="WhatsApp icon"
									className="h-6 w-6 text-white"
								/>{" "}
								Chat on WhatsApp
							</a>
						</div>
					</div>
				</div>
			</Reveal>
		</section>
	);
}
