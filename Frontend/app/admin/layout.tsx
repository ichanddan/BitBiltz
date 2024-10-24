import "@/styles/globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";
import { fontSans } from "@/config/fonts";
import clsx from "clsx";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={clsx("font-sans antialiased", fontSans.className)}>
      <Providers>{children}</Providers>
    </main>
  );
}
