"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Coffee, LogIn, UserPlus } from "lucide-react";
import { useAuth } from "../../lib/auth";
import { cn, btn } from "../../components/ui";

export default function LoginPage() {
  const router = useRouter();
  const { login, register } = useAuth();
  const [mode, setMode] = useState<"login" | "register">("login");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    password: "",
  });
  const [error, setError] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (mode === "login") {
      const res = login(form.email, form.password);
      if (!res.ok) {
        setError(res.error ?? "Terjadi kesalahan.");
        return;
      }
      router.push(res.user?.role === "admin" ? "/admin" : "/dashboard");
    } else {
      const res = register(form.name, form.email, form.company, form.password);
      if (!res.ok) {
        setError(res.error ?? "Terjadi kesalahan.");
        return;
      }
      router.push("/dashboard");
    }
  }

  const inputCls =
    "w-full rounded-xl border border-cream-deep bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-sage";

  return (
    <div className="mx-auto flex min-h-svh max-w-md flex-col justify-center px-6 py-16">
      <Link
        href="/"
        className="mb-8 flex items-center justify-center gap-2.5"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sage text-white">
          <Coffee className="h-5 w-5" />
        </span>
        <span className="font-display text-2xl">Deana</span>
      </Link>

      <div className="rounded-3xl border border-cream-deep bg-background p-8 shadow-sm">
        <div className="mb-6 flex rounded-full bg-cream p-1">
          {(["login", "register"] as const).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={cn(
                "flex flex-1 items-center justify-center gap-1.5 rounded-full py-2 text-sm font-semibold transition-colors",
                mode === m ? "bg-sage text-white" : "text-muted"
              )}
            >
              {m === "login" ? (
                <>
                  <LogIn className="h-4 w-4" /> Login
                </>
              ) : (
                <>
                  <UserPlus className="h-4 w-4" /> Register
                </>
              )}
            </button>
          ))}
        </div>

        <form onSubmit={submit} className="flex flex-col gap-4">
          {mode === "register" ? (
            <>
              <input
                className={inputCls}
                placeholder="Nama"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <input
                className={inputCls}
                placeholder="Nama Perusahaan"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                required
              />
            </>
          ) : null}
          <input
            className={inputCls}
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <input
            className={inputCls}
            type="password"
            placeholder="Kata sandi"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
          {error ? (
            <p className="text-sm font-medium text-red-500">{error}</p>
          ) : null}
          <button type="submit" className={btn.primary}>
            {mode === "login" ? "Masuk" : "Daftar sebagai Buyer"}
          </button>
        </form>

        <div className="mt-6 rounded-xl bg-cream p-4 text-xs leading-relaxed text-muted">
          <p className="mb-1 font-bold text-sage">Akun demo:</p>
          <p>
            Admin — <code>admin@deanacoffee.id</code> / <code>admin123</code>
          </p>
          <p>
            Buyer — <code>marco@nordicroasters.se</code> / <code>buyer123</code>
          </p>
        </div>
      </div>
    </div>
  );
}
