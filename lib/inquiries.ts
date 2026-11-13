"use client";

import { useEffect, useState } from "react";
import { sampleInquiries } from "./data";
import type { Inquiry, InquiryStatus } from "./types";

type PersistedInquiry = Omit<Inquiry, "id" | "status" | "createdAt">;

const KEY = "deana-inquiries";
const STATUS_KEY = "deana-inquiry-statuses";

export function useInquiries() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);

  useEffect(() => {
    const fresh: PersistedInquiry[] = JSON.parse(
      localStorage.getItem(KEY) ?? "[]"
    );
    const statuses: Record<string, InquiryStatus> = JSON.parse(
      localStorage.getItem(STATUS_KEY) ?? "{}"
    );
    const local = fresh.map((i, n) => ({
      ...i,
      id: `local-${n}`,
      status: statuses[`local-${n}`] ?? "new",
      createdAt: "2026-11-13",
      adminNotes: undefined,
    }));
    setInquiries([...sampleInquiries, ...local]);
  }, []);

  function add(data: PersistedInquiry) {
    const id = `local-${Date.now()}`;
    const fresh: PersistedInquiry[] = JSON.parse(
      localStorage.getItem(KEY) ?? "[]"
    );
    fresh.push(data);
    localStorage.setItem(KEY, JSON.stringify(fresh));
    const statuses: Record<string, InquiryStatus> = JSON.parse(
      localStorage.getItem(STATUS_KEY) ?? "{}"
    );
    statuses[id] = "new";
    localStorage.setItem(STATUS_KEY, JSON.stringify(statuses));
    setInquiries((prev) => [
      ...prev,
      { ...data, id, status: "new", createdAt: "2026-11-13" },
    ]);
  }

  function updateStatus(id: string, status: InquiryStatus, adminNotes?: string) {
    const statuses: Record<string, InquiryStatus> = JSON.parse(
      localStorage.getItem(STATUS_KEY) ?? "{}"
    );
    statuses[id] = status;
    localStorage.setItem(STATUS_KEY, JSON.stringify(statuses));
    setInquiries((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, status, adminNotes: adminNotes ?? i.adminNotes } : i
      )
    );
  }

  return { inquiries, add, updateStatus };
}
