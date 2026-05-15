import Link from "next/link";

export const metadata = {
  title: 'Terms of Service | Aion Services SA',
  description: 'Terms of Service for Aion Services SA.',
};

export default function TermsPage() {
  return (
    <div className="flex-grow flex flex-col items-center pt-32 pb-24 px-6 relative">
      <div className="absolute top-1/4 right-0 w-[40%] h-[40%] bg-aion-cyan/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl w-full text-left mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Terms of Service</h1>
        <div className="text-aion-cyan text-sm flex gap-4">
          <span><strong>Last Updated:</strong> May 15, 2026</span>
          <span><strong>Effective Date:</strong> May 15, 2026</span>
        </div>
      </div>

      <div className="max-w-4xl w-full glass-card rounded-[32px] p-8 md:p-12 mb-16">
        <div className="space-y-10 text-aion-muted leading-relaxed prose prose-invert max-w-none">
          <section>
            <p className="text-lg">
              Welcome to Aion. These Terms of Service (“Terms”) govern your access to and use of the website <a href="https://aioweb.vercel.app" className="text-aion-cyan hover:underline">https://aioweb.vercel.app</a> and any related services provided by Aion Services SA (“Aion,” “we,” “us,” or “our”).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using our website or submitting a qualification request, you agree to be bound by these Terms. If you do not agree, you must not use the Site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Services</h2>
            <p>
              Aion provides information about structured liquidity solutions, cross-venue execution, and treasury yield strategies for digital asset projects. We do not offer investment advice, execute trades for retail users, or provide custodial services through this website.
            </p>
            <p className="mt-4">
              All strategies and performance figures are for informational purposes only and are directed at qualified institutional counterparties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Qualification Process</h2>
            <p>
              Submitting a qualification request does not guarantee acceptance. We reserve the right to accept or reject any project at our sole discretion. Qualified projects will be contacted for further discussion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
            <p>
              All content on the Site, including text, graphics, logos, and illustrations, is the property of Aion or its licensors and protected by copyright and trademark laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Prohibited Conduct</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Use the Site for any illegal purpose</li>
              <li>Misrepresent your project or financial status</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Scrape or data-mine the Site</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Disclaimers</h2>
            <p className="uppercase tracking-wide text-sm border-l-2 border-aion-cyan pl-4 py-1">
              THE SITE AND ALL INFORMATION ARE PROVIDED “AS IS.” WE MAKE NO WARRANTIES, EXPRESS OR IMPLIED, REGARDING ACCURACY, COMPLETENESS, OR SUITABILITY FOR ANY PURPOSE.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Aion shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of the Site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Governing Law</h2>
            <p>
              These Terms shall be governed by the laws of Panama. Any disputes shall be resolved exclusively in the courts of Panama City, Panama.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. We will notify you by posting the new version with an updated “Last Updated” date.
            </p>
          </section>

          <section className="pt-8 border-t border-white/10 mt-8">
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p>
              For questions about these Terms, please contact us via the <Link href="/qualification" className="text-aion-cyan hover:underline">Qualification page</Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
