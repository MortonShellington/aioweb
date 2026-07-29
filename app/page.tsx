"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="flex flex-col items-center">

      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-6 pt-32 pb-24 md:pt-48 md:pb-32 flex flex-col items-center text-center">
        {/* Background Visual: Abstract Liquidity Network */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0 opacity-40">
          <div className="absolute w-[800px] h-[800px] border border-aion-cyan/20 rounded-full animate-[spin_60s_linear_infinite]">
            <div className="absolute top-1/4 left-0 w-4 h-4 bg-aion-cyan rounded-full shadow-[0_0_20px_#00F0FF]" />
            <div className="absolute bottom-1/4 right-0 w-4 h-4 bg-aion-green rounded-full shadow-[0_0_20px_#22FF88]" />
          </div>
          <div className="absolute w-[600px] h-[600px] border border-aion-green/20 rounded-full animate-[spin_40s_linear_infinite_reverse]">
            <div className="absolute top-0 right-1/4 w-3 h-3 bg-aion-cyan rounded-full shadow-[0_0_15px_#00F0FF]" />
            <div className="absolute bottom-0 left-1/4 w-3 h-3 bg-aion-green rounded-full shadow-[0_0_15px_#22FF88]" />
          </div>
          <div className="absolute inset-0 bg-aion-bg/60 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 w-full flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-aion-cyan/20 bg-aion-cyan/5 text-aion-cyan text-sm font-medium mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(0,240,255,0.1)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-aion-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-aion-cyan"></span>
            </span>
            Institutional Digital Asset Trading Services
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white max-w-4xl leading-[1.1] mb-6"
          >
            Custom Trading Strategies for Token Treasuries
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-aion-muted max-w-2xl leading-relaxed mb-10"
          >
            Aion enables token treasuries to generate significant revenue without selling tokens — we pair our strategies, technology, and network with client token assets. Every strategy executed is customised to the requirements of the treasury operator.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Link href="/qualification" className="w-full sm:w-auto px-8 py-4 rounded-full bg-aion-cyan text-aion-nav font-semibold hover:bg-white transition-all shadow-[0_0_30px_rgba(0,240,255,0.3)] hover:shadow-[0_0_40px_rgba(0,240,255,0.5)]">
              Start Qualification
            </Link>
            <Link href="/strategies" className="w-full sm:w-auto px-8 py-4 rounded-full glass border border-white/10 text-white font-semibold hover:bg-white/5 transition-all">
              The Desk
            </Link>
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
      <section className="w-full max-w-7xl mx-auto px-6 py-32">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex px-4 py-2 rounded-full border border-aion-cyan/20 bg-aion-cyan/10 text-aion-cyan text-sm mb-6">
            What We Do
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            $50B+ in Token Treasury Assets Are Generating Zero Revenue
          </h2>
          <p className="text-aion-muted text-lg leading-relaxed mb-4">
            If you hold a large amount of tokens and are trying to figure out how to earn from your holdings without directly selling, Aion solves this problem — unlocking revenue by custom-tailoring strategies to best leverage your treasury&apos;s token holdings, and paying yield directly back to you.
          </p>
          <p className="text-aion-muted/70 text-sm italic">
            Our strategies are not price dependent and do not seek to profit from price movements.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-20">
          <p className="text-white/90 text-lg leading-relaxed text-center">
            Aion is a proprietary trading firm operating a multi-strategy book across digital asset markets, spanning options, arbitrage, and liquidity provisioning across execution venues.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="text-xl font-semibold text-white mb-6 text-center">Institutional Infrastructure</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {[
              "Multisig security and redundancy",
              "Custody segregation",
              "24/7 monitoring",
              "$1B+ tradable notional capacity",
              "Sophisticated hedging",
              "Multiple market makers"
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex items-center gap-4 p-4 rounded-2xl glass-panel"
              >
                <div className="w-8 h-8 rounded-full bg-aion-cyan/20 flex items-center justify-center flex-shrink-0">
                  <ArrowRight className="w-4 h-4 text-aion-cyan" />
                </div>
                <span className="text-white font-medium">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </section>

      {/* Counterparty Statement */}
      <section className="w-full max-w-5xl mx-auto px-6 py-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-white text-2xl md:text-4xl font-semibold text-center leading-snug max-w-4xl mx-auto"
        >
          Token treasuries and institutions engage Aion as a counterparty, not as customers of a pre-packaged product — specific strategy detail, sizing, and structure are shared directly with qualified counterparties as part of the review process.
        </motion.p>
      </section>

      {/* CTA Section */}
      <section className="w-full max-w-5xl mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-[40px] p-12 md:p-16 text-center relative overflow-hidden border-aion-cyan/30"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.15),transparent_60%)] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Work With Our Desk</h2>
            <p className="text-lg text-aion-muted mb-10">
              Submit your market structure profile for a preliminary assessment. Qualified counterparties will be invited to a strategic review.
            </p>
            <Link href="/qualification" className="inline-block px-10 py-5 rounded-full bg-white text-aion-nav font-bold text-lg hover:bg-aion-cyan hover:shadow-[0_0_40px_rgba(0,240,255,0.6)] transition-all duration-300">
              Begin Qualification Process
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
