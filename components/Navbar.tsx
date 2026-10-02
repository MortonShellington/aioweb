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
      isScrolled ? "glass py-3 border-white/5 shadow-2xl" : "bg-transparent py-5"
    )}>
      <div className="max-w-7xl mx-auto px-6 flex justify-center">
        <Link href="/" className="flex flex-col items-center gap-2 group">
          <img
            src="/aion-icon-logo.png"
            alt="Aion Logo"
            className={cn(
              "rounded-2xl object-cover transition-all duration-300 group-hover:scale-105 shadow-sm",
              isScrolled ? "w-12 h-12" : "w-16 h-16 md:w-20 md:h-20"
            )}
          />
          <div className="flex flex-col items-center text-center">
            <span className={cn(
              "font-bold tracking-wide text-white group-hover:text-aion-cyan transition-all duration-300 leading-tight",
              isScrolled ? "text-xl" : "text-2xl md:text-3xl"
            )}>Aion Services SA</span>
            <span className={cn(
              "text-aion-cyan tracking-wide transition-all duration-300",
              isScrolled ? "text-xs" : "text-sm md:text-base"
            )}>Digital Asset Trading</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}
