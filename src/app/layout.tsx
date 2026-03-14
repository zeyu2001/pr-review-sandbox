import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PR Review Sandbox",
  description: "A small Next.js repository for testing pull request reviews.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
