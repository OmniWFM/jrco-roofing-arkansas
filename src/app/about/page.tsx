import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";

export const metadata: Metadata = {
  title: "About JR & Co.",
  description:
    "Established in 1986, JR & Co. grew from a family-owned roofing business into a leading veteran-owned construction company known for excellence and integrity — now serving Arkansas.",
};

const timeline = [
  {
    year: "1986",
    title: "The Beginning",
    body: "It all started in the small town of Le Mars, Iowa when John (JR) and Kristi Schuller established JR Roofing. For over a decade the business steadily grew in size and reputation for quality roofing services.",
  },
  {
    year: "2000",
    title: "Move to the Big City",
    body: "With fully developed capabilities, JR moved the company to Kansas City — a much larger metro market with regional access to Missouri, Iowa, Nebraska and Kansas.",
  },
  {
    year: "Today",
    title: "A Leading Construction Company",
    body: "JR & Co. has grown into a leading roofing, cladding and glass company known for excellence and integrity — still family-run, now serving communities across Arkansas and beyond.",
  },
];

export default function About() {
  return (
    <>
      <section className="relative steel-bg text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-ink/95 via-brand-ink/85 to-brand-charcoal/70" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-brand-red/20 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-5 pt-40 pb-24 md:pt-48">
          <span className="text-sm font-bold uppercase tracking-widest text-brand-red">
            Meet the JR &amp; Co. Family
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-black tracking-tight max-w-3xl">
            A Relentless Pursuit to <span className="gradient-text">Build the Best Tomorrow.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-white/75 text-lg leading-relaxed">
            Established in 1986, we've grown from a small family-owned enterprise into a leading
            construction company known for excellence and integrity. Our purpose is simple — build
            the best tomorrow for our team, our clients and our brand.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="steel-bg border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
          <Counter end={1986} suffix="" label="Founded" />
          <Counter end={40} suffix="+" label="Years Experience" />
          <Counter end={14} suffix="+" label="Office Locations" />
          <Counter end={100} suffix="%" label="Veteran-Owned" />
        </div>
      </section>

      {/* PURPOSE */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <span className="text-sm font-bold uppercase tracking-widest text-brand-red">
              Our Purpose
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-black tracking-tight text-brand-ink">
              Roofing. Cladding. Glass.
            </h2>
            <p className="mt-5 text-brand-ash leading-relaxed">
              Our team is our greatest asset. Experienced professionals across leadership,
              estimating, service, operations and shared services work collaboratively to deliver
              exceptional results on every project — large or small.
            </p>
            <p className="mt-4 text-brand-ash leading-relaxed">
              With over 40 years in roofing, you can trust our veteran-owned family company to get
              your roof installed, repaired or serviced right the first time.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-sm bg-brand-red px-8 py-4 font-bold text-white hover:bg-brand-reddark transition-colors"
            >
              Work With Us
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid gap-4">
              {[
                { t: "Excellence", d: "Expert craftsmanship and daily quality control on every job." },
                { t: "Integrity", d: "We do what we say — and we stand behind our work." },
                { t: "Safety", d: "Extensive training and dedicated on-site supervision." },
                { t: "Family", d: "Family-owned since 1986 and still relentless about the details." },
              ].map((v) => (
                <div
                  key={v.t}
                  className="rounded-lg border border-black/5 bg-brand-fog p-6 hover:border-brand-red/30 hover:shadow-lg transition-all"
                >
                  <div className="font-black text-brand-ink">{v.t}</div>
                  <p className="mt-1 text-sm text-brand-ash">{v.d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* HISTORY TIMELINE */}
      <section className="bg-brand-fog py-24">
        <div className="max-w-4xl mx-auto px-5">
          <Reveal>
            <span className="text-sm font-bold uppercase tracking-widest text-brand-red">
              Our History
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-black tracking-tight text-brand-ink">
              Four Decades in the Making
            </h2>
          </Reveal>
          <div className="mt-12 space-y-8">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 100}>
                <div className="flex gap-6">
                  <div className="flex-none">
                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-brand-red text-white font-black text-sm text-center leading-tight">
                      {t.year}
                    </div>
                  </div>
                  <div className="rounded-xl bg-white p-6 shadow-sm border border-black/5 flex-1">
                    <h3 className="text-lg font-black text-brand-ink">{t.title}</h3>
                    <p className="mt-2 text-brand-ash leading-relaxed">{t.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="steel-bg text-white">
        <div className="max-w-5xl mx-auto px-5 py-24 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">
              Experience you can build on.
            </h2>
            <p className="mt-5 mx-auto max-w-2xl text-white/75 text-lg">
              Let us prove not only why experience matters, but how we can help protect what matters
              most to you.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="rounded-sm bg-brand-red px-8 py-4 font-bold text-white hover:bg-brand-reddark transition-colors"
              >
                Get a Free Consultation
              </Link>
              <a
                href="tel:4795342952"
                className="rounded-sm border border-white/25 px-8 py-4 font-bold text-white hover:bg-white/10 transition-colors"
              >
                Call (479) 534-2952
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
