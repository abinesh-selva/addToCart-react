import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { CartProvider, useCart } from "../context/CartContext";
import CartCounter from "../components/CartCounter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Add To Cart - Boutique Honey Store",
  description: "This is a simple shopping cart system - Fresh, hand-picked honey and sweet delights straight from nature",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-pink-50 via-purple-50 to-indigo-50`}>
        <CartProvider>
          {/* Header */}
          <header className="max-w-7xl mx-auto flex justify-between items-center p-4 bg-white shadow-lg rounded-b-xl">
            <Link href="/" className="text-2xl font-bold text-pink-700 hover:text-pink-800 transition">
              Honey Boutique
            </Link>

            <nav className="flex items-center space-x-6">
              <Link href="/" className="text-gray-700 font-medium hover:text-pink-600 transition">
                Home
              </Link>
              <CartCounter />
            </nav>
          </header>

          {/* Main content */}
          <main className="pt-6">{children}</main>

          {/* Footer */}
          <footer className="mt-16 p-6 text-center text-gray-600 bg-white shadow-inner rounded-t-xl">
            &copy; {new Date().getFullYear()} Honey Boutique. All rights reserved.
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
