import Link from "next/link";

export const metadata = {
  title: 'Cookie Policy | Aion Services SA',
  description: 'Cookie Policy for Aion Services SA.',
};

export default function CookiePolicyPage() {
  return (
    <div className="flex-grow flex flex-col items-center pt-32 pb-24 px-6 relative">
      <div className="absolute top-1/4 right-0 w-[40%] h-[40%] bg-aion-cyan/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl w-full text-left mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Cookie Policy</h1>
        <div className="text-aion-cyan text-sm flex gap-4">
          <span><strong>Last Updated:</strong> May 15, 2026</span>
        </div>
      </div>

      <div className="max-w-4xl w-full glass-card rounded-[32px] p-8 md:p-12 mb-16">
        <div className="space-y-10 text-aion-muted leading-relaxed prose prose-invert max-w-none">
          <section>
            <p className="text-lg">
              This Cookie Policy explains how Aion uses cookies and similar technologies on <a href="https://www.aion.financial" className="text-aion-cyan hover:underline">https://www.aion.financial</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies?</h2>
            <p>
              Cookies are small text files placed on your device that help us provide a better experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Cookies We Use</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-white/10 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10 text-white">
                    <th className="p-4 font-semibold">Category</th>
                    <th className="p-4 font-semibold">Purpose</th>
                    <th className="p-4 font-semibold">Examples</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-sm">
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-4 text-white font-medium">Necessary</td>
                    <td className="p-4">Enable core website functions</td>
                    <td className="p-4 text-aion-cyan">Session management</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-4 text-white font-medium">Analytics</td>
                    <td className="p-4">Understand traffic and improve site</td>
                    <td className="p-4 text-aion-cyan">Google Analytics (if used)</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-4 text-white font-medium">Functional</td>
                    <td className="p-4">Remember preferences</td>
                    <td className="p-4 text-aion-cyan">Form progress</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Managing Cookies</h2>
            <p>
              Most browsers allow you to control cookies through settings. Note that disabling necessary cookies may affect website functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Third-Party Cookies</h2>
            <p>
              We may use third-party services (e.g., analytics providers) that set their own cookies.
            </p>
            <p className="mt-4">
              For more information on how we handle data, see our <Link href="/privacy" className="text-aion-cyan hover:underline">Privacy Policy</Link>.
            </p>
          </section>

          <section className="pt-8 border-t border-white/10 mt-8">
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p>
              Questions about our cookie usage? Reach out via the <Link href="/qualification" className="text-aion-cyan hover:underline">Qualification page</Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
