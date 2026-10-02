"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Activity, Shield, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";

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

  const [formData, setFormData] = useState({ name: "", email: "", telegram: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const updateForm = (key: string, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setSubmitError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Submission failed');
      setIsSubmitted(true);
    } catch (err: any) {
      setSubmitError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center">

      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-6 pt-44 pb-24 md:pt-56 md:pb-32 flex flex-col items-center text-center">
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
            Digital Asset Derivatives
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white max-w-4xl leading-[1.1] mb-6"
          >
            A Proprietary Trading Firm for Digital Asset Markets
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-aion-muted max-w-2xl leading-relaxed mb-10"
          >
            Aion trades a multi-strategy derivatives book across centralized and decentralized venues — giving institutions and token treasuries access to our desk without giving up control of their assets.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <Link href="/about" className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass border border-white/10 text-white font-semibold hover:bg-white/5 hover:border-aion-cyan/30 transition-all">
              About Us <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stat Bar */}
      <section className="w-full border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5">
            {[
              { label: "Trading Venues", value: "6+" },
              { label: "Global Monitoring", value: "24/7" },
              { label: "Trading Structure", value: "Principal Capital" },
              { label: "Notional Capacity", value: "$500M+" }
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

      {/* A Multi-Strategy Trading Desk */}
      <section className="w-full max-w-7xl mx-auto px-6 py-32">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">A Multi-Strategy Trading Desk</h2>
          <p className="text-aion-muted text-lg max-w-2xl mx-auto">Aion runs a proprietary digital asset trading book working with multiple institutional counterparties. Our alpha is algorithmic, industry-specific, partnership-enabled, and research-oriented.</p>
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
              desc: "Aion strategically executes across many disparate markets and liquidity venues, automatically surfacing the best route for any given trade."
            },
            {
              icon: <Shield className="w-8 h-8 text-aion-cyan" />,
              title: "Institutional Infrastructure",
              desc: "We only work with the most battle tested institutions across custody, liquidity, and cyber security operations."
            },
            {
              icon: <TrendingUp className="w-8 h-8 text-aion-green" />,
              title: "Principal Trading",
              desc: "We trade with our own capital. Treasuries and institutions engage Aion as a counterparty, not a service vendor."
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

        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex px-4 py-2 rounded-full border border-aion-cyan/20 bg-aion-cyan/10 text-aion-cyan text-sm mb-6">
              The Desk
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Our Proprietary Trading Desk Features
            </h2>
            <p className="text-aion-muted text-lg leading-relaxed mb-8">
              Aion operates a multi-strategy derivatives book spanning options, arbitrage, and liquidity strategies. Strategy details are shared directly with qualified counterparties during the review process — not published here.
            </p>

            <div className="space-y-4">
              {[
                "Institutional-grade risk controls",
                "Custody segregation across venues",
                "Direct access via qualification"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl glass-panel">
                  <div className="w-8 h-8 rounded-full bg-aion-cyan/20 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-aion-cyan" />
                  </div>
                  <span className="text-white font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full max-w-3xl mx-auto px-6 py-32 scroll-mt-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-[40px] p-8 md:p-16 relative overflow-hidden border-aion-cyan/30"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.15),transparent_60%)] pointer-events-none" />

          <div className="relative z-10">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center py-16"
              >
                <div className="w-24 h-24 rounded-full bg-aion-green/10 flex items-center justify-center mb-8 border border-aion-green/20 shadow-[0_0_40px_rgba(34,255,136,0.15)] relative">
                  <div className="absolute inset-0 rounded-full bg-aion-green/20 animate-ping opacity-50" />
                  <CheckCircle2 className="w-12 h-12 text-aion-green relative z-10" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Message Sent</h2>
                <p className="text-aion-muted text-lg max-w-md mx-auto leading-relaxed">
                  Thanks for reaching out — our team will get back to you shortly.
                </p>
              </motion.div>
            ) : (
              <>
                <div className="text-center mb-10">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Aion</h2>
                  <p className="text-lg text-aion-muted max-w-xl mx-auto">
                    Get in touch with our team.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-aion-muted mb-2">Name</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={e => updateForm('name', e.target.value)}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-aion-cyan focus:bg-white/[0.05] transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-aion-muted mb-2">Email</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={e => updateForm('email', e.target.value)}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-aion-cyan focus:bg-white/[0.05] transition-all"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-aion-muted mb-2">Telegram</label>
                    <input
                      type="text"
                      value={formData.telegram}
                      onChange={e => updateForm('telegram', e.target.value)}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-aion-cyan focus:bg-white/[0.05] transition-all"
                      placeholder="@username"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-aion-muted mb-2">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={e => updateForm('message', e.target.value)}
                      rows={5}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-aion-cyan focus:bg-white/[0.05] transition-all resize-none"
                      placeholder="How can we help?"
                    />
                  </div>

                  {submitError && (
                    <p className="text-red-400 text-sm text-center">{submitError}</p>
                  )}

                  <div className="flex justify-center pt-4">
                    <motion.button
                      whileHover={{ scale: isLoading ? 1 : 1.02 }}
                      whileTap={{ scale: isLoading ? 1 : 0.98 }}
                      onClick={handleSubmit}
                      disabled={isLoading}
                      className="flex items-center gap-2 px-10 py-4 rounded-full bg-aion-cyan text-aion-nav font-bold text-lg hover:bg-white shadow-[0_0_30px_rgba(0,240,255,0.3)] hover:shadow-[0_0_40px_rgba(0,240,255,0.5)] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                          </svg>
                          Sending…
                        </>
                      ) : 'Send Message'}
                    </motion.button>
                  </div>
                </div>
              </>
            )}
          </div>
        </motion.div>
      </section>

    </div>
  );
}
