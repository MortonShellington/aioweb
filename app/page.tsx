"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Activity, Shield, TrendingUp, Network, ArrowRight } from "lucide-react";

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
            Next-Gen Institutional Infrastructure
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white max-w-4xl leading-[1.1] mb-6"
          >
            Structured Liquidity & Yield for Digital Asset Treasuries
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-aion-muted max-w-2xl leading-relaxed mb-10"
          >
            Cross-venue execution. Optimized token liquidity. Institutional-grade yield structures — without dumping your assets.
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
              Explore Strategies
            </Link>
          </motion.div>

          {/* Abstract 3D Hero Graphic */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="mt-20 w-full max-w-5xl relative rounded-[32px] overflow-hidden shadow-[0_0_50px_rgba(0,240,255,0.1)] border border-white/5"
          >
            <img 
              src="/aion-diagram.png" 
              alt="Aion Yield and Liquidity Concept Diagram" 
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5">
            {[
              { label: "Tier-1 Counterparties", value: "10+" },
              { label: "Global Monitoring", value: "24/7" },
              { label: "Yield Improvement", value: "Up to 8%" },
              { label: "Capital Supported", value: "$500M+" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center px-4"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-aion-muted uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="w-full max-w-7xl mx-auto px-6 py-32">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Built for Token Treasuries</h2>
          <p className="text-aion-muted text-lg max-w-2xl mx-auto">We solve the liquidity paradox for digital asset foundations, allowing you to monetize your treasury without applying downward pressure to your market.</p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: <Activity className="w-8 h-8 text-aion-cyan" />,
              title: "Cross-Venue Execution",
              desc: "Strategic order flow routing across centralized and decentralized venues to improve organic market depth."
            },
            {
              icon: <Shield className="w-8 h-8 text-aion-cyan" />,
              title: "Institutional Guardrails",
              desc: "Execution parameters bound by strict risk controls and transparent performance reporting."
            },
            {
              icon: <TrendingUp className="w-8 h-8 text-aion-green" />,
              title: "Treasury-Backed Yield",
              desc: "Covered option structures enabling token treasuries to generate revenue from their native assets."
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="glass-card p-8 rounded-[32px] group hover:border-aion-cyan/30 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-aion-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-aion-cyan/10 transition-all duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-aion-muted leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Strategies Overview */}
      <section className="w-full relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-aion-card/50" />
        <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-[radial-gradient(ellipse_at_top_right,rgba(0,240,255,0.05),transparent_50%)]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex px-4 py-2 rounded-full border border-aion-cyan/20 bg-aion-cyan/10 text-aion-cyan text-sm mb-6">
              Core Strategies
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Institutional Market Structure Solutions
            </h2>
            <p className="text-aion-muted text-lg leading-relaxed mb-8">
              Aion delivers sophisticated infrastructure historically reserved for traditional finance. We partner with Tier-1 foundations to professionalize their token's market structure.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "Arbitrage Volume Accelerator",
                "Cross-Exchange Liquidity Optimization",
                "European-Style Covered Options"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl glass-panel">
                  <div className="w-8 h-8 rounded-full bg-aion-cyan/20 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-aion-cyan" />
                  </div>
                  <span className="text-white font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Link href="/strategies" className="inline-flex items-center gap-2 text-aion-cyan hover:text-white transition-colors font-medium text-lg">
              View Detailed Strategies <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Abstract Strategy Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px]"
          >
            <div className="absolute inset-0 glass-card rounded-[40px] border border-aion-cyan/20 p-8 flex flex-col justify-between overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-aion-cyan/10 blur-[80px] rounded-full group-hover:bg-aion-cyan/20 transition-colors duration-700" />

              <div>
                <div className="text-aion-cyan text-sm font-medium mb-2">TARGET STRUCTURE</div>
                <div className="text-3xl font-bold text-white">Yield + Liquidity</div>
              </div>

              <div className="w-full h-48 relative mt-8">
                {/* Simulated Chart/Graph using CSS */}
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20" />
                <div className="absolute bottom-0 left-0 w-[1px] h-full bg-white/20" />

                {/* Curve */}
                <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path
                    d="M 0 100 C 20 80, 40 90, 60 40 C 80 -10, 100 20, 100 20"
                    fill="none"
                    stroke="#00F0FF"
                    strokeWidth="2"
                    className="drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]"
                  />
                  <path
                    d="M 0 100 C 30 90, 50 60, 70 80 C 90 100, 100 50, 100 50"
                    fill="none"
                    stroke="#22FF88"
                    strokeWidth="2"
                    className="drop-shadow-[0_0_8px_rgba(34,255,136,0.5)]"
                  />
                </svg>
              </div>

              <div className="mt-8 flex items-center justify-between p-4 glass-panel rounded-2xl">
                <div>
                  <div className="text-xs text-aion-muted">Status</div>
                  <div className="text-sm text-aion-green font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-aion-green animate-pulse" /> Active Deployments
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-aion-muted">Monitored Assets</div>
                  <div className="text-sm text-white font-medium">Token Treasuries</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
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
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Ready to Professionalize Your Token?</h2>
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
