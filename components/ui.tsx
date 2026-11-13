"use client";

import Link from "next/link";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

export function cn(...args: Parameters<typeof clsx>) {
  return twMerge(clsx(...args));
}

export const btn = {
  primary:
    "inline-flex items-center justify-center gap-2 rounded-full bg-sage px-7 py-3.5 text-sm font-semibold text-white shadow-lift transition-all duration-200 hover:-translate-y-0.5 hover:bg-sage-dark active:translate-y-0",
  outline:
    "inline-flex items-center justify-center gap-2 rounded-full border-2 border-sage px-7 py-3.5 text-sm font-semibold text-sage transition-all duration-200 hover:-translate-y-0.5 hover:bg-sage hover:text-white active:translate-y-0",
  ghost:
    "inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-sage",
};

export function SectionTitle({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="mb-3 text-xs font-bold tracking-[0.25em] text-sage uppercase">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl leading-tight sm:text-5xl">
        {title}
      </h2>
      {sub ? <p className="mt-4 text-lg text-muted">{sub}</p> : null}
    </div>
  );
}

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-cream-deep px-3 py-1 text-xs font-semibold tracking-wide text-sage">
      {children}
    </span>
  );
}

export function PageHeader({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
}) {
  return (
    <section className="border-b border-cream-deep bg-cream py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <Reveal>
          <p className="mb-3 text-xs font-bold tracking-[0.25em] text-sage uppercase">
            {eyebrow}
          </p>
          <h1 className="font-display text-5xl sm:text-6xl">{title}</h1>
          {sub ? <p className="mt-4 text-lg text-muted">{sub}</p> : null}
        </Reveal>
      </div>
    </section>
  );
}

export { Link as RLink };
