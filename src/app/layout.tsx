import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link"; // 🔹 Link bileşeni eklendi

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E-commerce Store",
  description: "My finishing project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* 🔹 Navbar Start */}
        <nav className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            StoreLogo
          </Link>
          <div className="flex gap-4">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/cart" className="hover:underline">
              Cart
            </Link>
          </div>
        </nav>
        {/* 🔹 Navbar End */}

        <main>{children}</main>
      </body>
    </html>
  );
}
