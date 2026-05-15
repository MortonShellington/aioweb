"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex-grow flex flex-col items-center pt-32 pb-24 px-6 relative">
      <div className="absolute top-1/4 right-0 w-[40%] h-[40%] bg-aion-cyan/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl w-full text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About Aion Services SA</h1>
        <p className="text-xl text-aion-muted">
          Institutional liquidity infrastructure bridging traditional financial engineering with digital asset ecosystems.
        </p>
      </div>

      <div className="max-w-4xl w-full glass-card rounded-[32px] p-8 md:p-16 mb-16">
        <div className="space-y-8 text-lg text-aion-muted leading-relaxed">
          <p>
            Aion Services SA operates at the intersection of quantitative trading and institutional treasury management. We provide sophisticated market structure solutions to Tier-1 digital asset foundations, protocol treasuries, and major token projects.
          </p>
          <p>
            The digital asset market frequently suffers from the "liquidity paradox" — projects possess significant on-paper wealth in their native token, but lack the structural liquidity required to monetize it without causing outsized market impact.
          </p>
          <p>
            We deploy infrastructure historically reserved for traditional finance, such as covered options strategies and multi-venue arbitrage acceleration, allowing our counterparties to achieve execution excellence and generate organic yield.
          </p>
        </div>
      </div>

      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-8 mb-16">
        <div className="glass-panel p-8 rounded-2xl border border-white/5">
          <h3 className="text-xl font-bold text-white mb-4">Panama Headquarters</h3>
          <p className="text-aion-muted">
            P.H. Ocean Business Plaza, 14th Floor, Office 1407<br />
            Aquilino de la Guardia Street and 47th Street<br />
            Marbella, Panama City, Panama
          </p>
        </div>
        <div className="glass-panel p-8 rounded-2xl border border-white/5 flex flex-col justify-center items-start">
          <h3 className="text-xl font-bold text-white mb-4">Work With Us</h3>
          <Link href="/qualification" className="inline-flex items-center gap-2 text-aion-cyan hover:text-white transition-colors font-medium">
            Start Qualification Process <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
