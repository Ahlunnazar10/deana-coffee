"use client";

import { MessageCircle } from "lucide-react";
import { waHref } from "../lib/wa";
import { cn } from "./ui";

export default function WhatsAppWidget({
  productName,
  className,
}: {
  productName?: string;
  className?: string;
}) {
  return (
    <a
      href={waHref(productName)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp"
      className={cn(
        "group fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lift transition-all duration-200 hover:scale-110",
        className
      )}
    >
      <MessageCircle className="h-7 w-7" />
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-foreground px-3 py-1.5 text-xs font-medium text-background opacity-0 transition-opacity group-hover:opacity-100">
        Chat WhatsApp
      </span>
    </a>
  );
}
