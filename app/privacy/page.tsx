import Link from "next/link";

export const metadata = {
  title: 'Privacy Policy | Aion Services SA',
  description: 'Privacy Policy for Aion Services SA.',
};

export default function PrivacyPage() {
  return (
    <div className="flex-grow flex flex-col items-center pt-32 pb-24 px-6 relative">
      <div className="absolute top-1/4 right-0 w-[40%] h-[40%] bg-aion-cyan/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl w-full text-left mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Privacy Policy</h1>
        <div className="text-aion-cyan text-sm flex gap-4">
          <span><strong>Last Updated:</strong> May 15, 2026</span>
        </div>
      </div>

      <div className="max-w-4xl w-full glass-card rounded-[32px] p-8 md:p-12 mb-16">
        <div className="space-y-10 text-aion-muted leading-relaxed prose prose-invert max-w-none">
          <section>
            <p className="text-lg">
              Aion Services SA (“Aion,” “we,” “us”) respects your privacy. This Privacy Policy explains how we collect, use, and protect information when you visit <a href="https://aioweb.vercel.app" className="text-aion-cyan hover:underline">https://aioweb.vercel.app</a> or submit a qualification request.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contact Information</strong>: Name, email, company/project name, telegram/discord handle.</li>
              <li><strong>Project Information</strong>: Token ticker, contract address, current trading venues, treasury size, and goals.</li>
              <li><strong>Usage Data</strong>: IP address, browser type, pages visited (via cookies/analytics).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
            <p>We use the information to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Evaluate your qualification request</li>
              <li>Communicate with you about potential partnership</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Sharing of Information</h2>
            <p>We do not sell your personal data. We may share information with:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Service providers (hosting, analytics, email)</li>
              <li>Legal authorities when required by law</li>
              <li>Potential counterparties only with your explicit consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
            <p>
              We implement reasonable administrative, technical, and physical safeguards to protect your information. However, no system is completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
            <p>
              You may request access to, correction of, or deletion of your personal data by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">International Transfers</h2>
            <p>
              Your data may be processed in jurisdictions outside your country, including Panama.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Cookies</h2>
            <p>
              See our <Link href="/cookie-policy" className="text-aion-cyan hover:underline">Cookie Policy</Link> for details.
            </p>
          </section>

          <section className="pt-8 border-t border-white/10 mt-8">
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p>
              For privacy inquiries, please reach out through our <Link href="/qualification" className="text-aion-cyan hover:underline">Qualification form</Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
