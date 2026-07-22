"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, CheckCircle2, Info } from "lucide-react";

export default function QualificationPage() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    projectName: "",
    ticker: "",
    contractAddress: "",
    email: "",
    telegram: "",
    volume: "",
    treasurySize: "",
    venues: [] as string[],
    primaryGoal: ""
  });

  const updateForm = (key: string, value: any) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const toggleVenue = (item: string) => {
    setFormData(prev => {
      const array = prev.venues;
      if (array.includes(item)) {
        return { ...prev, venues: array.filter(i => i !== item) };
      }
      return { ...prev, venues: [...array, item] };
    });
  };

  const nextStep = () => setStep(s => Math.min(s + 1, 3));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleSubmit = async () => {
    setIsLoading(true);
    setSubmitError(null);
    try {
      const res = await fetch('/api/qualify', {
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
    <div className="flex-grow flex flex-col items-center pt-32 pb-24 px-6 relative min-h-screen">
      <div className="absolute top-1/4 right-1/4 w-[40%] h-[40%] bg-aion-cyan/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-3xl w-full text-center mb-12 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Counterparty Qualification</h1>
        <p className="text-lg text-aion-muted max-w-2xl mx-auto">
          Provide your project's market profile. Our quantitative team will review your parameters to determine fit as a counterparty to the desk.
        </p>
      </div>

      <div className="w-full max-w-2xl glass-card rounded-[32px] p-8 md:p-12 relative z-10 border border-white/10 shadow-2xl">
        
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
            <h2 className="text-3xl font-bold text-white mb-4">Assessment Received</h2>
            <p className="text-aion-muted text-lg max-w-md mx-auto mb-8 leading-relaxed">
              Your market structure profile has been securely transmitted. Qualified counterparties will be contacted by our execution desk within <span className="text-white font-medium">48 hours</span> to schedule a strategic review.
            </p>
            <button 
              onClick={() => window.location.href = '/'}
              className="px-8 py-3 rounded-xl bg-white text-aion-nav font-bold hover:bg-aion-cyan hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all"
            >
              Return to Home
            </button>
          </motion.div>
        ) : (
          <>
            {/* Progress Bar */}
            <div className="mb-10">
              <div className="flex justify-between items-center mb-4 text-sm font-medium">
                <span className="text-aion-cyan">Step {step} of 3</span>
                <span className="text-aion-muted">
                  {step === 1 ? "Project Details" : step === 2 ? "Market Metrics" : "Strategic Objectives"}
                </span>
              </div>
              <div className="w-full h-2 bg-[#121f3d] rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-aion-cyan to-[#00b0ff]"
                  initial={{ width: "0%" }}
                  animate={{ width: `${(step / 3) * 100}%` }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>
            </div>

            {/* Form Steps */}
            <div className="min-h-[380px]">
              <AnimatePresence mode="wait">
                {/* STEP 1: Basic Info */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-aion-muted mb-2">Project Name</label>
                        <input 
                          type="text" 
                          value={formData.projectName}
                          onChange={e => updateForm('projectName', e.target.value)}
                          className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-aion-cyan focus:bg-white/[0.05] transition-all"
                          placeholder="e.g. Aion Network"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-aion-muted mb-2">Token Ticker</label>
                        <input 
                          type="text" 
                          value={formData.ticker}
                          onChange={e => updateForm('ticker', e.target.value)}
                          className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-aion-cyan focus:bg-white/[0.05] transition-all"
                          placeholder="e.g. AION"
                        />
                      </div>
                    </div>


                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-aion-muted mb-2">Contact Email</label>
                        <input 
                          type="email" 
                          value={formData.email}
                          onChange={e => updateForm('email', e.target.value)}
                          className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-aion-cyan focus:bg-white/[0.05] transition-all"
                          placeholder="name@project.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-aion-muted mb-2">Telegram / Signal</label>
                        <input 
                          type="text" 
                          value={formData.telegram}
                          onChange={e => updateForm('telegram', e.target.value)}
                          className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-aion-cyan focus:bg-white/[0.05] transition-all"
                          placeholder="@username"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: Market Metrics */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-aion-muted mb-2">24h Trading Volume</label>
                        <select 
                          value={formData.volume}
                          onChange={e => updateForm('volume', e.target.value)}
                          className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-aion-cyan appearance-none"
                        >
                          <option value="" disabled>Select Range...</option>
                          <option value="<100k">Under $100K</option>
                          <option value="100k-1m">$100K - $1M</option>
                          <option value="1m-10m">$1M - $10M</option>
                          <option value=">10m">$10M+</option>
                        </select>
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <label className="block text-sm font-medium text-aion-muted">Treasury Size</label>
                          <div className="group relative">
                            <Info className="w-4 h-4 text-aion-muted cursor-help hover:text-white transition-colors" />
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-aion-nav border border-white/10 rounded-xl text-xs text-aion-muted opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 shadow-xl">
                              Why we ask: Determines capacity for structured options and yield-generation execution.
                            </div>
                          </div>
                        </div>
                        <select 
                          value={formData.treasurySize}
                          onChange={e => updateForm('treasurySize', e.target.value)}
                          className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-aion-cyan appearance-none"
                        >
                          <option value="" disabled>Select Size...</option>
                          <option value="<10m">Under $10M</option>
                          <option value="10m-50m">$10M - $50M</option>
                          <option value="50m-200m">$50M - $200M</option>
                          <option value=">200m">$200M+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-aion-muted mb-4">Current Venues</label>
                      <div className="flex flex-wrap gap-3">
                        {['Binance', 'Coinbase', 'Bybit', 'OKX', 'KuCoin', 'Bitget', 'MEXC', 'Kraken', 'Aster', 'Hyperliquid', 'Uniswap', 'PancakeSwap', 'Raydium', 'Other'].map(venue => (
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            key={venue}
                            onClick={() => toggleVenue(venue)}
                            className={`px-5 py-2.5 rounded-full border text-sm font-medium transition-colors ${
                              formData.venues.includes(venue) 
                                ? 'bg-aion-cyan/10 border-aion-cyan/50 text-aion-cyan shadow-[0_0_15px_rgba(0,240,255,0.1)]' 
                                : 'bg-white/[0.03] border-white/10 text-white/70 hover:border-white/30 hover:bg-white/[0.05] hover:text-white'
                            }`}
                          >
                            {venue}
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: Goals */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <label className="block text-sm font-medium text-aion-muted mb-2">Primary Objective</label>
                    <div className="grid gap-4">
                      {[
                        { id: 'liquidity', title: 'Enhance Market Liquidity', desc: 'Improve order book depth and tighten spreads across venues.' },
                        { id: 'yield', title: 'Generate Treasury Yield', desc: 'Deploy structured strategies to earn yield on native assets.' },
                        { id: 'both', title: 'Comprehensive Structure', desc: 'Both liquidity enhancement and yield generation.' }
                      ].map(goal => (
                        <motion.button
                          key={goal.id}
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                          onClick={() => updateForm('primaryGoal', goal.id)}
                          className={`text-left p-5 rounded-2xl border transition-all ${
                            formData.primaryGoal === goal.id 
                              ? 'bg-aion-cyan/10 border-aion-cyan shadow-[0_0_20px_rgba(0,240,255,0.1)]' 
                              : 'bg-white/[0.03] border-white/10 hover:border-white/20'
                          }`}
                        >
                          <div className={`font-semibold text-lg mb-1 ${formData.primaryGoal === goal.id ? 'text-aion-cyan' : 'text-white'}`}>
                            {goal.title}
                          </div>
                          <div className="text-aion-muted text-sm">{goal.desc}</div>
                        </motion.button>
                      ))}
                    </div>

                    <div className="pt-4">
                      <p className="text-sm text-aion-muted text-center">
                        Qualified teams hear back within 48 hours for a strategic review.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="mt-10 flex items-center justify-between pt-6 border-t border-white/10">
              <button 
                onClick={prevStep}
                disabled={step === 1}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-colors ${
                  step === 1 ? 'text-white/10 cursor-not-allowed' : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                <ChevronLeft className="w-5 h-5" /> Back
              </button>
              
              {step < 3 ? (
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={nextStep}
                  className="flex items-center gap-2 px-8 py-3 rounded-xl bg-white text-aion-nav font-bold hover:bg-aion-cyan hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all"
                >
                  Continue <ChevronRight className="w-5 h-5" />
                </motion.button>
              ) : (
                <div className="flex flex-col items-end gap-2">
                  {submitError && (
                    <p className="text-red-400 text-xs text-right max-w-xs">{submitError}</p>
                  )}
                  <motion.button 
                    whileHover={{ scale: isLoading ? 1 : 1.02 }}
                    whileTap={{ scale: isLoading ? 1 : 0.98 }}
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="flex items-center gap-2 px-8 py-3 rounded-xl bg-aion-cyan text-aion-nav font-bold hover:bg-white shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Sending…
                      </>
                    ) : 'Submit Application'}
                  </motion.button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
