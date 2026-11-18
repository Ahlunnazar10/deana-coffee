"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Globe, Menu, X } from "lucide-react";
import { cn } from "./ui";

const links = [
	{ label: "Home", href: "/" },
	{ label: "Our Coffee", href: "/products" },
	{ label: "About Us", href: "#about" },
	{ label: "Export & Quality", href: "#export" },
	{ label: "Coffee News", href: "/blog" },
	{ label: "Contact Us", href: "/inquiry" },
];

const transparentPages = ["/"];

export default function Navbar() {
	const pathname = usePathname();
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const isHomePage = transparentPages.includes(pathname);
	// "dark" = dark bg (sage-dark) → white text
	// "light" = light bg (white) → dark text
	// "transparent" = no bg → white text with drop shadow
	const mode: "dark" | "light" | "transparent" =
		scrolled || open ? "dark" : isHomePage ? "transparent" : "light";

	const isDark = mode === "dark";
	const isLight = mode === "light";

	return (
		<header
			className={cn(
				"fixed inset-x-0 top-0 z-50 transition-all duration-300",
				isDark
					? "border-b border-sage/20 bg-sage-dark shadow-lg"
					: isLight
						? "border-b border-cream-deep bg-background"
						: "border-b border-transparent bg-transparent",
			)}
		>
			<nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6">
				<Link href="/" className="flex items-center gap-2.5">
					<img
						src="/images/logos/deana-logo-40x40.png"
						alt="Deana Coffee"
						className="w-full rounded-full object-cover"
					/>
				</Link>

				<div className="hidden items-center gap-7 md:flex">
					{links.map((l) => (
						<Link
							key={l.href}
							href={l.href}
							className={cn(
								"text-sm font-medium transition-colors",
								isDark
									? pathname === l.href
										? "text-[#c3c2a6]"
										: "text-white/80 hover:text-white"
									: isLight
										? pathname === l.href
											? "text-sage"
											: "text-foreground/70 hover:text-sage"
										: pathname === l.href
											? "text-white"
											: "text-white/70 hover:text-white",
							)}
						>
							{l.label}
						</Link>
					))}
				</div>

				<div className="hidden items-center gap-3 md:flex">
					<button
						className={cn(
							"inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300",
							isDark
								? "border-white/20 text-white hover:border-sage-light hover:text-[#c3c2a6]"
								: isLight
									? "border-sage/30 text-sage hover:border-sage hover:bg-sage hover:text-white"
									: "border-white/40 text-white hover:bg-white hover:text-sage-dark",
						)}
						aria-label="Switch language"
					>
						<Globe className="h-4 w-4" />
						ID
					</button>
				</div>

				<button
					className={cn(
						"p-2 transition-colors duration-300 md:hidden",
						isDark || !isLight ? "text-white" : "text-foreground",
					)}
					onClick={() => setOpen((v) => !v)}
					aria-label="Menu"
				>
					{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
				</button>
			</nav>

			{open ? (
				<div
					className={cn(
						"border-t px-6 py-4 md:hidden transition-colors duration-300",
						isDark
							? "border-white/10 bg-sage-dark/95"
							: isLight
								? "border-cream-deep bg-background"
								: "border-white/10 bg-transparent",
					)}
				>
					<div className="flex flex-col gap-1">
						{links.map((l) => (
							<Link
								key={l.href}
								href={l.href}
								onClick={() => setOpen(false)}
								className={cn(
									"rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-300",
									isDark
										? "text-white/80 hover:bg-white/10 hover:text-white"
										: isLight
											? "text-foreground/70 hover:bg-cream hover:text-sage"
											: "text-white/70 hover:bg-white/10 hover:text-white",
									pathname === l.href &&
										(isDark
											? "bg-sage-light/20 text-[#c3c2a6]"
											: isLight
												? "bg-sage/10 text-sage"
												: "bg-white/10 text-white"),
								)}
							>
								{l.label}
							</Link>
						))}
						<div
							className={cn(
								"mt-3 flex items-center gap-3 border-t pt-3 transition-colors duration-300",
								isDark
									? "border-white/10"
									: isLight
										? "border-cream-deep"
										: "border-white/20",
							)}
						>
							<button
								className={cn(
									"inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300",
									isDark
										? "border-white/20 text-white hover:border-sage-light hover:text-[#c3c2a6]"
										: isLight
											? "border-sage/30 text-sage hover:border-sage hover:bg-sage hover:text-white"
											: "border-white/40 text-white hover:bg-white hover:text-sage-dark",
								)}
							>
								<Globe className="h-4 w-4" />
								ID
							</button>
						</div>
					</div>
				</div>
			) : null}
		</header>
	);
}
