"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
      isScrolled ? "glass py-4 border-white/5 shadow-2xl" : "bg-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <img src="/aion-icon-logo.png" alt="Aion Logo" className="w-10 h-10 rounded-2xl object-cover transition-transform group-hover:scale-105 shadow-sm" />
          <div className="flex flex-col justify-center">
            <span className="text-xl font-bold tracking-wide text-white group-hover:text-aion-cyan transition-colors leading-tight">Aion Services SA</span>
            <span className="text-[10px] text-aion-cyan hidden lg:block">Institutional Digital Asset Trading</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-aion-muted hover:text-white transition-colors">Home</Link>
          <Link href="/qualification" className="text-sm font-medium text-aion-muted hover:text-white transition-colors">Qualification</Link>
          <Link href="/about" className="text-sm font-medium text-aion-muted hover:text-white transition-colors">About</Link>
        </div>

        <div className="hidden md:block">
          <Link href="/qualification" className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-aion-cyan/10 border border-aion-cyan/20 text-aion-cyan hover:bg-aion-cyan hover:text-aion-nav transition-all font-medium shadow-[0_0_20px_rgba(0,240,255,0.15)] hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]">
            Request Access
          </Link>
        </div>

        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 glass border-b border-white/10 p-6 flex flex-col gap-4 md:hidden backdrop-blur-xl bg-aion-nav/95">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-aion-muted hover:text-white">Home</Link>
          <Link href="/qualification" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-aion-muted hover:text-white">Qualification</Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-aion-muted hover:text-white">About</Link>
          <Link href="/qualification" onClick={() => setMobileMenuOpen(false)} className="mt-4 inline-flex items-center justify-center px-6 py-3 rounded-xl bg-aion-cyan text-aion-nav font-medium">
            Request Access
          </Link>
        </div>
      )}
    </nav>
  );
}
