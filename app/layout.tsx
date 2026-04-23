import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist_Mono } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const defaultDescription =
  "Software developer shipping full-stack web apps — React, Next.js, Node, and Django — from planning to production.";

export const metadata: Metadata = {
  title: "Prasad Gurav — Software developer",
  description: defaultDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="font-sans flex min-h-full flex-col text-base font-normal leading-relaxed">
        {children}
      </body>
    </html>
  );
}
