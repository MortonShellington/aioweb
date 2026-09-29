"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

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
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 items-center">
        <div />

        <Link href="/" className="flex items-center gap-2 sm:gap-3 group justify-self-center min-w-0 max-w-full">
          <img src="/aion-icon-logo.png" alt="Aion Logo" className="w-10 h-10 rounded-2xl object-cover transition-transform group-hover:scale-105 shadow-sm flex-shrink-0" />
          <div className="flex flex-col justify-center min-w-0">
            <span className="sm:hidden text-base font-bold tracking-wide text-white group-hover:text-aion-cyan transition-colors leading-tight whitespace-nowrap">Aion</span>
            <span className="hidden sm:block text-xl font-bold tracking-wide text-white group-hover:text-aion-cyan transition-colors leading-tight whitespace-nowrap">Aion Services SA</span>
            <span className="text-[10px] text-aion-cyan hidden lg:block">Institutional Digital Asset Trading</span>
          </div>
        </Link>

        <div className="justify-self-end flex-shrink-0">
          <Link href="/#contact" className="inline-flex items-center justify-center px-4 sm:px-6 py-2.5 rounded-full bg-aion-cyan/10 border border-aion-cyan/20 text-aion-cyan hover:bg-aion-cyan hover:text-aion-nav transition-all font-medium shadow-[0_0_20px_rgba(0,240,255,0.15)] hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] whitespace-nowrap">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
