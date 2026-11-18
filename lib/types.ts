export type SpecRow = { key: string; value: string };

export type Product = {
  name: string;
  slug: string;
  category: "Arabica" | "Robusta";
  origin: string;
  priceUsdPerKg: number;
  description: string;
  specifications: SpecRow[];
  images: string[];
  videoUrl: string;
  featured?: boolean;
};

export type BlogPost = {
  title: string;
  slug: string;
  content: string;
  coverImage: string;
  category: "Tinjauan Pasar" | "Teknik Roasting" | "Cerita Petani";
  author: string;
  publishedAt: string;
};

export type Testimonial = {
  name: string;
  company: string;
  country: string;
  role: string;
  quote: string;
  logo: string;
};

export type InquiryStatus = "new" | "reviewed" | "closed";

export type Inquiry = {
  id: string;
  guestName: string;
  guestEmail: string;
  companyName: string;
  volume: string;
  message: string;
  productName: string;
  status: InquiryStatus;
  adminNotes?: string;
  createdAt: string;
};

export type User = {
  name: string;
  email: string;
  role: "admin" | "buyer";
  company: string;
  whatsapp: string;
  verified: boolean;
};

export type HarvestEntry = {
  region: string;
  mainCrop: string;
  flyCrop: string;
};

export type QCStep = {
  n: string;
  title: string;
  desc: string;
  icon: string;
};

export type ComplianceDoc = {
  name: string;
  desc: string;
  icon: string;
};
