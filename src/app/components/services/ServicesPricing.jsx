import { ArrowRight, Calendar, DollarSign, Handshake, TrendingUp } from 'lucide-react';

export default function ServicesPricing() {
  return (
    <section className="px-4 md:px-6 lg:px-8 py-24 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-20 right-0 w-72 h-72 bg-accent-lime/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-accent-lime/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-accent-lime/15 border border-accent-lime/40 text-black rounded-full text-sm font-extrabold mb-6">
            <Handshake className="w-4 h-4" />
            <span>HOW IT WORKS</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-black mb-5">
            Built on <span className="text-accent-lime">Trust</span> & Transparency
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
            No surprises. No hidden fees. Just honest collaboration and results that speak for themselves.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Card 1 — No Hidden Costs */}
          <div className="group relative bg-black rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-lime/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-accent-lime/15 border border-accent-lime/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent-lime group-hover:border-accent-lime transition-all duration-300">
                <DollarSign className="w-7 h-7 text-accent-lime group-hover:text-black transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-3 group-hover:text-accent-lime transition-colors duration-300">No Hidden Costs</h3>
              <p className="text-white/50 leading-relaxed font-medium mb-6 group-hover:text-white/70 transition-colors duration-300">
                All costs are discussed upfront with detailed proposals and clear milestones. You'll always know exactly what you're paying for.
              </p>
              <ul className="space-y-3">
                {["Detailed project breakdown", "Clear deliverables list", "No surprise charges"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300">
                    <span className="w-5 h-5 rounded-full bg-accent-lime/20 border border-accent-lime/40 flex items-center justify-center flex-shrink-0">
                      <span className="w-1.5 h-1.5 bg-accent-lime rounded-full" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 2 — Value-Based Pricing (Featured) */}
          <div className="group relative bg-accent-lime rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 overflow-hidden shadow-2xl shadow-accent-lime/20">
            <div className="absolute top-4 right-4 px-3 py-1 bg-black text-accent-lime rounded-full text-xs font-extrabold flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              <span>RECOMMENDED</span>
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-black/15 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-black" />
              </div>
              <h3 className="text-2xl font-extrabold text-black mb-3">Value-Based Pricing</h3>
              <p className="text-black/70 leading-relaxed font-medium mb-6">
                Pricing based on ROI and value delivered to your business — not just hours. Your growth is my success metric.
              </p>
              <ul className="space-y-3">
                {["ROI-focused approach", "Business goal alignment", "Long-term partnership"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-black/80 font-medium">
                    <span className="w-5 h-5 rounded-full bg-black/15 flex items-center justify-center flex-shrink-0">
                      <span className="w-1.5 h-1.5 bg-black rounded-full" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 3 — Flexible Payment */}
          <div className="group relative bg-black rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-lime/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-accent-lime/15 border border-accent-lime/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent-lime group-hover:border-accent-lime transition-all duration-300">
                <Handshake className="w-7 h-7 text-accent-lime group-hover:text-black transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-3 group-hover:text-accent-lime transition-colors duration-300">Flexible Payment</h3>
              <p className="text-white/50 leading-relaxed font-medium mb-6 group-hover:text-white/70 transition-colors duration-300">
                Multiple payment options and milestone-based payments for larger projects. Pay as we progress through each phase.
              </p>
              <ul className="space-y-3">
                {["Milestone-based payments", "Multiple payment methods", "Easy invoicing"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300">
                    <span className="w-5 h-5 rounded-full bg-accent-lime/20 border border-accent-lime/40 flex items-center justify-center flex-shrink-0">
                      <span className="w-1.5 h-1.5 bg-accent-lime rounded-full" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-black rounded-3xl p-10 md:p-14 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent-lime/8 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-lime/5 rounded-full blur-2xl" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Ready to Discuss Your <span className="text-accent-lime">Project?</span>
            </h3>
            <p className="text-lg text-white/60 leading-relaxed font-medium mb-10">
              Every project is unique. I'll provide a detailed custom quote based on your specific requirements, timeline, and business goals during our discovery call.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#quote" className="px-10 py-5 bg-accent-lime text-black rounded-xl font-extrabold hover:shadow-2xl hover:shadow-accent-lime/30 hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-3">
                <Calendar className="w-5 h-5" />
                <span>Schedule Discovery Call</span>
              </a>
              <a href="#quote" className="px-10 py-5 border-2 border-white/20 text-white rounded-xl font-extrabold hover:border-accent-lime hover:text-accent-lime transition-all duration-300 inline-flex items-center justify-center gap-3">
                <span>Get Instant Quote</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
