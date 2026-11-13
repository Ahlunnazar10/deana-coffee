"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { useInquiries } from "../lib/inquiries";
import { products } from "../lib/data";
import { cn, btn } from "./ui";

const schema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter"),
  email: z.string().email("Email tidak valid"),
  company: z.string().min(2, "Nama perusahaan wajib diisi"),
  product: z.string().min(1, "Pilih produk"),
  volume: z.string().min(1, "Pilih volume"),
  message: z.string().min(10, "Tulis minimal 10 karakter"),
});

type FormData = z.infer<typeof schema>;

const volumes = ["< 100 kg", "100–500 kg", "1 MT", "5 MT", "10+ MT"];

const steps = [
  { label: "Data Klien", keys: ["name", "email", "company"] },
  { label: "Kebutuhan", keys: ["product", "volume"] },
  { label: "Pesan", keys: ["message"] },
];

export default function InquiryForm({
  defaultProduct,
  compact = false,
}: {
  defaultProduct?: string;
  compact?: boolean;
}) {
  const { add } = useInquiries();
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    setError,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { product: defaultProduct ?? products[0].name },
  });

  const stepKeys = steps[step].keys;

  async function validateStep(i: number, all = false) {
    const result = await handleSubmit(
      (data) => {
        if (all || i === steps.length - 1) {
          add({
            guestName: data.name,
            guestEmail: data.email,
            companyName: data.company,
            volume: data.volume,
            message: data.message,
            productName: data.product,
          });
          setDone(true);
        } else {
          setStep(i + 1);
        }
      },
      (errs) => {
        if (!all) {
          for (const k of stepKeys) {
            const fieldErr = (errs as Record<string, unknown>)[k];
            if (fieldErr) {
              const msg = Array.isArray(fieldErr)
                ? fieldErr[0]?.message
                : (fieldErr as { message?: string })?.message;
              setError(k as never, { message: msg });
            }
          }
        }
      }
    )({
      validationMode: "all",
      criteria: stepKeys,
    } as never);
    return result;
  }

  if (done) {
    return (
      <div className="rounded-3xl border border-sage/30 bg-cream p-10 text-center">
        <CheckCircle2 className="mx-auto mb-4 h-14 w-14 text-sage" />
        <h3 className="font-display text-2xl">Inquiry Terkirim</h3>
        <p className="mt-2 text-sm text-muted">
          Terima kasih. Tim sales Deana akan menghubungi Anda dalam 1×24 jam
          kerja.
        </p>
      </div>
    );
  }

  const inputCls = (err?: string) =>
    cn(
      "w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-sage",
      err ? "border-red-400" : "border-cream-deep"
    );

  function renderField(k: string) {
    const err = errors[k as keyof FormData]?.message;
    switch (k) {
      case "name":
        return (
          <Field label="Nama Lengkap" error={err}>
            <input {...register("name")} className={inputCls(err)} placeholder="Nama Anda" />
          </Field>
        );
      case "email":
        return (
          <Field label="Email" error={err}>
            <input {...register("email")} type="email" className={inputCls(err)} placeholder="nama@perusahaan.com" />
          </Field>
        );
      case "company":
        return (
          <Field label="Nama Perusahaan *" error={err}>
            <input {...register("company")} className={inputCls(err)} placeholder="PT / Co. Anda" />
          </Field>
        );
      case "product":
        return (
          <Field label="Produk yang diminati" error={err}>
            <select {...register("product")} className={inputCls(err)}>
              {products.map((p) => (
                <option key={p.slug}>{p.name}</option>
              ))}
            </select>
          </Field>
        );
      case "volume":
        return (
          <Field label="Estimasi Volume" error={err}>
            <select {...register("volume")} className={inputCls(err)}>
              {volumes.map((v) => (
                <option key={v}>{v}</option>
              ))}
            </select>
          </Field>
        );
      case "message":
        return (
          <Field label="Pesan / Keterangan" error={err}>
            <textarea {...register("message")} rows={4} className={inputCls(err)} placeholder="Kebutuhan, target negara tujuan, timing pengiriman…" />
          </Field>
        );
      default:
        return null;
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (step < steps.length - 1) void validateStep(step);
        else void validateStep(step, true);
      }}
      className={cn(
        "rounded-3xl border border-cream-deep bg-background p-6 sm:p-8",
        compact && "p-4 sm:p-6"
      )}
    >
      <div className="mb-8 flex items-center gap-2">
        {steps.map((s, i) => (
          <div key={`${i}-${s.label}`} className="flex flex-1 flex-col gap-2">
            <div
              className={cn(
                "h-1.5 rounded-full transition-colors",
                i <= step ? "bg-sage" : "bg-cream-deep"
              )}
            />
            <span
              className={cn(
                "text-xs font-medium",
                i <= step ? "text-sage" : "text-muted"
              )}
            >
              {i + 1}. {s.label}
            </span>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        {stepKeys.map((k) => renderField(k))}
      </div>

      <div className="mt-8 flex items-center justify-between">
        {step > 0 ? (
          <button
            type="button"
            onClick={() => setStep((s) => s - 1)}
            className={btn.ghost}
          >
            <ChevronLeft className="h-4 w-4" /> Kembali
          </button>
        ) : (
          <span />
        )}
        <button type="submit" className={btn.primary}>
          {step === steps.length - 1 ? (
            "Kirim Inquiry"
          ) : (
            <>
              Lanjut <ChevronRight className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold tracking-wide text-muted uppercase">
        {label}
      </label>
      {children}
      {error ? (
        <p className="mt-1.5 text-xs font-medium text-red-500">{error}</p>
      ) : null}
    </div>
  );
}
