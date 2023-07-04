"use client";
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";

export default function Providers({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}
