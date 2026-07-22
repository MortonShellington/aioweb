"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function StrategiesPage() {
  return (
    <div className="flex-grow flex flex-col items-center pt-32 pb-24 px-6 relative">
      <div className="absolute top-1/4 left-0 w-[40%] h-[40%] bg-aion-cyan/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl w-full mb-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">The Desk</h1>
        <p className="text-xl text-aion-muted">
          Aion is a proprietary trading firm — we trade our own capital across a multi-strategy derivatives book, spanning options, arbitrage, and liquidity strategies across centralized and decentralized venues.
        </p>
      </div>

      <div className="max-w-5xl w-full grid gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-[32px] p-8 md:p-12 border-l-4 border-l-aion-cyan relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-aion-cyan/10 blur-[80px] rounded-full" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-4">How We Work</h2>
            <p className="text-lg text-aion-muted mb-8 leading-relaxed max-w-3xl">
              We don't publish our book. Token treasuries and institutions engage Aion as a counterparty, not as customers of a packaged product — specific strategy detail, sizing, and structure are shared directly with qualified counterparties as part of the review process.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Custody segregation across venues",
                "Cross-venue execution & clearing",
                "Documented risk controls",
                "24/7 monitoring"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-aion-cyan" />
                  <span className="text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-[32px] p-8 md:p-12 border-l-4 border-l-aion-green relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-aion-green/10 blur-[80px] rounded-full" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-4">Infrastructure</h2>
            <p className="text-lg text-aion-muted mb-8 leading-relaxed max-w-3xl">
              Our book runs across a network of institutional custody, execution, and derivatives venues — giving us the reach to trade and settle across both centralized and decentralized markets.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                "BitGo", "Fireblocks", "FalconX", "Deribit", "Binance", "Bitnomial"
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
