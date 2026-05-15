"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function StrategiesPage() {
  return (
    <div className="flex-grow flex flex-col items-center pt-32 pb-24 px-6 relative">
      <div className="absolute top-1/4 left-0 w-[40%] h-[40%] bg-aion-cyan/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl w-full mb-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Institutional Market Structure</h1>
        <p className="text-xl text-aion-muted">
          Aion operates sophisticated execution strategies designed to solve the structural challenges faced by digital asset foundations and protocol treasuries.
        </p>
      </div>

      <div className="max-w-5xl w-full grid gap-12">
        {/* Strategy 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-[32px] p-8 md:p-12 border-l-4 border-l-aion-cyan relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-aion-cyan/10 blur-[80px] rounded-full" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-4">Arbitrage Volume Accelerator</h2>
            <p className="text-lg text-aion-muted mb-8 leading-relaxed max-w-3xl">
              Strategic order flow execution designed to improve liquidity, activate real trading activity, and strengthen market structure across centralized and decentralized venues.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Cross-exchange execution routing",
                "Multi-round arbitrage order flow",
                "Real liquidity participation",
                "Managed execution & risk controls"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-aion-cyan" />
                  <span className="text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Strategy 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-[32px] p-8 md:p-12 border-l-4 border-l-aion-green relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-aion-green/10 blur-[80px] rounded-full" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-4">Treasury-Backed Yield Structures</h2>
            <p className="text-lg text-aion-muted mb-8 leading-relaxed max-w-3xl">
              Covered European-style options strategies enabling token treasuries to generate structured revenue without relying on routine discretionary market sales.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Inventory-backed covered calls",
                "European-style option structures",
                "Counterparty market maker network",
                "Treasury-aligned monetization"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-aion-green" />
                  <span className="text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-20">
        <Link href="/qualification" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-aion-nav font-bold hover:bg-aion-cyan transition-colors">
          Determine Your Eligibility <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
