"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
    setMounted(true);
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
  }

  if (!mounted)
    return (
      <button
        aria-label="Toggle theme"
        className="rounded-full border border-cream-deep p-2.5 text-muted"
      >
        <Sun className="h-4 w-4" />
      </button>
    );

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="rounded-full border border-cream-deep p-2.5 text-muted transition-colors hover:border-sage hover:text-sage"
    >
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
