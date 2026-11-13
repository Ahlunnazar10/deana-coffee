"use client";

import { useEffect, useState } from "react";
import { demoUsers } from "./data";
import type { User } from "./types";

const KEY = "deana-session";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem(KEY);
    if (raw) setUser(JSON.parse(raw));
    setChecked(true);
  }, []);

  function login(
    email: string,
    password: string
  ): { ok: boolean; user?: User; error?: string } {
    const found = demoUsers.find(
      (u) => u.email.toLowerCase() === email.toLowerCase()
    );
    if (!found || found.password !== password)
      return { ok: false, error: "Email atau kata sandi salah." };
    const { password: _pw, ...rest } = found;
    setUser(rest);
    localStorage.setItem(KEY, JSON.stringify(rest));
    return { ok: true, user: rest };
  }

  function register(
    name: string,
    email: string,
    company: string,
    password: string
  ): { ok: boolean; error?: string } {
    if (demoUsers.some((u) => u.email.toLowerCase() === email.toLowerCase()))
      return { ok: false, error: "Email sudah terdaftar." };
    const newUser: User = {
      name,
      email,
      role: "buyer",
      company,
      whatsapp: "",
      verified: false,
    };
    setUser(newUser);
    localStorage.setItem(KEY, JSON.stringify(newUser));
    return { ok: true };
  }

  function logout() {
    setUser(null);
    localStorage.removeItem(KEY);
  }

  return { user, checked, login, register, logout };
}
