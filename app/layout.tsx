import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Aion - Structured Liquidity & Yield",
  description: "Cross-venue execution. Optimized token liquidity. Institutional-grade yield structures.",
  icons: {
    icon: "/aion-icon-logo.png",
    shortcut: "/aion-icon-logo.png",
    apple: "/aion-icon-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-aion-bg text-aion-text min-h-screen flex flex-col relative`}>
        {/* Glow Effects */}
        <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-aion-cyan/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-aion-cyan/5 blur-[120px] rounded-full pointer-events-none" />
        
        <Navbar />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
