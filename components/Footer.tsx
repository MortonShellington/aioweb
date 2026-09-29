import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-aion-nav/80 py-16 px-6 relative mt-auto">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-aion-bg/80 pointer-events-none" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 items-start relative z-10">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <img src="/aion-icon-logo.png" alt="Aion Logo" className="w-10 h-10 rounded-2xl object-cover shadow-sm" />
            <div>
              <h3 className="text-xl font-bold tracking-wide text-white">Aion</h3>
              <p className="text-xs text-aion-cyan">Institutional Digital Asset Trading</p>
            </div>
          </div>
          <p className="text-aion-muted leading-relaxed max-w-sm mb-6">
            A proprietary trading firm operating across digital asset derivatives markets.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold mb-2">Quick Links</h4>
          <Link href="/" className="text-sm text-aion-muted hover:text-white transition-colors">Home</Link>
          <Link href="/strategies" className="text-sm text-aion-muted hover:text-white transition-colors">The Desk</Link>
          <Link href="/qualification" className="text-sm text-aion-muted hover:text-white transition-colors">Qualification</Link>
          <Link href="/about" className="text-sm text-aion-muted hover:text-white transition-colors">About Us</Link>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold mb-2">Legal & Compliance</h4>
          <Link href="/terms" className="text-sm text-aion-muted hover:text-white transition-colors">Terms of Service</Link>
          <Link href="/privacy" className="text-sm text-aion-muted hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/risks" className="text-sm text-aion-muted hover:text-white transition-colors">Risk Disclosures</Link>
          <Link href="/cookie-policy" className="text-sm text-aion-muted hover:text-white transition-colors">Cookie Policy</Link>
        </div>

        <div className="text-aion-muted text-sm leading-relaxed">
          <h4 className="text-white font-bold mb-4">Corporate Headquarters</h4>
          <p>P.H. Ocean Business Plaza, 14th Floor, Office 1407</p>
          <p>Aquilino de la Guardia Street and 47th Street</p>
          <p>Marbella, Panama City, Panama</p>

          <p className="mt-8 text-xs text-white/30">
            &copy; {new Date().getFullYear()} Aion Services SA. All rights reserved.<br />
            Aion trades with its own capital. Trading involves market risk and counterparty engagements are limited to qualified parties.
          </p>
        </div>
      </div>
    </footer>
  );
}
