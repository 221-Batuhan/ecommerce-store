// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "../context/CartContext";
import { ToastProvider } from "../context/ToastContext";
import Navbar from "components/Navbar"; 
import CartDebug from "components/CartDebug";
import ToastContainer from "components/ToastContainer";
import BackToTop from "components/BackToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "A Clothing - Premium Fashion & Apparel",
  description: "Discover the latest trends in fashion. Shop premium clothing, accessories, and footwear for men and women.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ToastProvider>
          <CartProvider>
            <Navbar /> {/* ✅ client-only */}
            <main>{children}</main>
            <CartDebug /> {/* optional */}
            <ToastContainer />
            <BackToTop />
          </CartProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
