export const metadata = {
  title: 'Risk Disclosures | Aion Services SA',
  description: 'Risk Disclosures for Aion Services SA.',
};

export default function RisksPage() {
  return (
    <div className="flex-grow flex flex-col items-center pt-32 pb-24 px-6 relative">
      <div className="absolute top-1/4 right-0 w-[40%] h-[40%] bg-aion-cyan/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl w-full text-left mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Risk Disclosures</h1>
        <div className="text-aion-cyan text-sm flex gap-4">
          <span><strong>Last Updated:</strong> May 15, 2026</span>
        </div>
      </div>

      <div className="max-w-4xl w-full glass-card rounded-[32px] p-8 md:p-12 mb-16">
        <div className="space-y-10 text-aion-muted leading-relaxed prose prose-invert max-w-none">
          <section>
            <p className="text-lg">
              Engaging with Aion’s strategies involves significant risks. Please read this disclosure carefully before submitting a qualification request.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4">Key Risks</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">1. Market Risk</h3>
                <p>Digital asset prices are highly volatile. Strategies involving covered options or liquidity provision may result in losses.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2">2. Liquidity Risk</h3>
                <p>There is no guarantee that sufficient liquidity will be available across venues. Market conditions can change rapidly.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2">3. Counterparty Risk</h3>
                <p>We work with tier-1 counterparties, but there is always a risk of default or operational failure by third parties.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2">4. Smart Contract & Technology Risk</h3>
                <p>Any on-chain components carry risks of bugs, exploits, or protocol failures.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2">5. Regulatory Risk</h3>
                <p>The regulatory environment for digital assets is evolving and uncertain. New laws or enforcement actions could adversely affect your project or our services.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2">6. Execution Risk</h3>
                <p>Cross-venue strategies may not achieve expected outcomes due to slippage, latency, or venue-specific issues.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2">7. No Guarantees</h3>
                <p>Past performance is not indicative of future results. We do not guarantee any specific yield, liquidity improvement, or outcome.</p>
              </div>
            </div>
          </section>

          <section className="pt-8 border-t border-white/10 mt-8">
            <h2 className="text-2xl font-bold text-white mb-4">Qualification Does Not Equal Suitability</h2>
            <p>
              Acceptance into our program does not mean the strategies are suitable for your specific situation. You should consult your own legal, tax, and financial advisors.
            </p>
            <p className="mt-4 uppercase tracking-wide text-sm border-l-2 border-aion-cyan pl-4 py-1">
              By proceeding, you acknowledge that you understand these risks and are participating at your own risk.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
