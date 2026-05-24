export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6">
          Health Tracking for Chronic Conditions
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Build Visual Timelines of<br />Your Symptoms
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Stop forgetting symptoms before appointments. Create chronological timelines with photos and notes — then export to PDF for your doctor.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Start Tracking — $9/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Free for up to 3 timelines. No credit card required to start.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-3 gap-6 mb-20 text-center">
        {[
          { icon: '📅', title: 'Chronological Timeline', desc: 'Log symptoms with dates and times in order' },
          { icon: '📷', title: 'Photo Attachments', desc: 'Attach photos to each symptom entry' },
          { icon: '📄', title: 'PDF Export', desc: 'Share a clean report with your doctor' },
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-3xl mb-3">{f.icon}</div>
            <div className="text-white font-semibold text-sm mb-1">{f.title}</div>
            <div className="text-[#8b949e] text-xs">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$9</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited symptom timelines',
              'Photo uploads per entry',
              'PDF export for doctor visits',
              'Caregiver sharing access',
              'Secure cloud storage',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff]">✓</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
          <p className="text-[#8b949e] text-xs mt-3">Cancel anytime</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Is my health data private and secure?',
              a: 'Yes. All data is encrypted at rest and in transit. We never sell or share your health information with third parties.',
            },
            {
              q: 'Can I use it for free?',
              a: 'You can create up to 3 symptom timelines for free with no credit card required. Upgrade to Pro for unlimited timelines.',
            },
            {
              q: 'What does the PDF export look like?',
              a: 'The PDF is a clean, chronological report with your symptom entries, dates, notes, and photos — formatted for easy reading by medical professionals.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-white font-semibold mb-2">{item.q}</div>
              <div className="text-[#8b949e] text-sm">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm">
        © {new Date().getFullYear()} Patient Symptom Timeline Builder. All rights reserved.
      </footer>
    </main>
  )
}
