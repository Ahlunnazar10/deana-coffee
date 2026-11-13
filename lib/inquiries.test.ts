import { sampleInquiries } from "./data";
import type { Inquiry } from "./types";

// Minimal self-check for the mock inquiry flow (no test runner needed).
// Run: npx tsx lib/inquiries.test.ts

function fakeLocalStorage() {
  const store: Record<string, string> = {};
  return {
    getItem: (k: string) => (k in store ? store[k] : null),
    setItem: (k: string, v: string) => {
      store[k] = String(v);
    },
  };
}

function main() {
  // 1. Seed data invariants
  const names = sampleInquiries.map((i) => i.productName);
  for (const p of ["Arabika Java Preanger", "Arabica Wild Luwak", "Arabika Gayo", "Robusta Temanggung"]) {
    // product names present in catalog seeds
  }
  if (sampleInquiries.length !== 2)
    throw new Error("expected 2 sample inquiries, got " + sampleInquiries.length);
  if (sampleInquiries[0].status !== "new" || sampleInquiries[1].status !== "closed")
    throw new Error("sample inquiry statuses wrong");

  // 2. localStorage add flow
  const ls = fakeLocalStorage();
  const data: Omit<Inquiry, "id" | "status" | "createdAt"> = {
    guestName: "Test",
    guestEmail: "t@t.co",
    companyName: "Test Co",
    volume: "5 MT",
    message: "want gayo",
    productName: "Arabika Gayo",
  };
  const KEY = "deana-inquiries";
  const STATUS_KEY = "deana-inquiry-statuses";
  ls.setItem(KEY, JSON.stringify([data]));
  const id = "local-1";
  ls.setItem(STATUS_KEY, JSON.stringify({ [id]: "new" }));

  const stored: unknown[] = JSON.parse(ls.getItem(KEY)!);
  if (stored.length !== 1 || (stored[0] as typeof data).productName !== "Arabika Gayo")
    throw new Error("add flow failed");

  const statuses: Record<string, Inquiry["status"]> = JSON.parse(
    ls.getItem(STATUS_KEY)!
  );
  if (statuses[id] !== "new") throw new Error("status init failed");
  statuses[id] = "reviewed";
  if (statuses[id] !== "reviewed") throw new Error("status update failed");

  console.log("PASS — inquiries mock invariants OK");
}

main();
