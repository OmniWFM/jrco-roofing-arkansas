import Link from "next/link";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";

const services = [
  {
    title: "Commercial & Industrial",
    desc: "TPO, PVC, EPDM, metal, BUR/Mod and coatings for warehouses, retail, healthcare, education and more.",
    icon: "M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6",
  },
  {
    title: "Residential Roofing",
    desc: "Shingle, metal and tile roof systems installed by trained crews and built to handle Arkansas weather.",
    icon: "M3 12l9-8 9 8M5 10v10h14V10",
  },
  {
    title: "Repair & Service",
    desc: "Fast leak repair, storm response and preventative maintenance to protect your building year-round.",
    icon: "M14 6l4 4M4 20l6-6M14 6l4-4 4 4-4 4-4-4z",
  },
  {
    title: "Metal & Sheet Metal",
    desc: "Standing seam and architectural metal roofing plus custom sheet metal fabrication and flashing.",
    icon: "M4 6h16M4 12h16M4 18h16",
  },
  {
    title: "Architectural Cladding",
    desc: "Modern exterior cladding systems that combine durability with a clean, professional look.",
    icon: "M4 4h16v16H4zM4 9h16M9 4v16",
  },
  {
    title: "Solar Roof Systems",
    desc: "Rooftop solar installation that pairs with your new roof to cut long-term energy costs.",
    icon: "M12 3v2M12 19v2M5 12H3M21 12h-2M6 6l1.5 1.5M16.5 16.5L18 18M6 18l1.5-1.5M16.5 7.5L18 6M12 8a4 4 0 100 8 4 4 0 000-8z",
  },
];

const areas = [
  "Bentonville",
  "Fayetteville",
  "Springdale",
  "Rogers",
  "Fort Smith",
  "Little Rock",
  "Conway",
  "Jonesboro",
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative steel-bg text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-ink/95 via-brand-ink/85 to-brand-charcoal/70" />
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-red/20 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-5 pt-40 pb-28 md:pt-48 md:pb-36">
          <div className="max-w-3xl animate-fadeUp">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white/80">
              Veteran-Owned &middot; Since 1986
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-black leading-[1.05] tracking-tight">
              Arkansas Roofing,
              <br />
              <span className="gradient-text">Done Right The First Time.</span>
            </h1>
            <p className="mt-6 text-lg text-white/75 max-w-2xl leading-relaxed">
              Commercial and residential roofing you can trust across the entire state of Arkansas.
              Four decades of expert craftsmanship, a relentless focus on safety, and a family that
              stands behind every job.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="rounded-sm bg-brand-red px-8 py-4 text-center font-bold text-white hover:bg-brand-reddark transition-colors"
              >
                Free Roof Inspection
              </Link>
              <a
                href="tel:4795342952"
                className="rounded-sm border border-white/25 px-8 py-4 text-center font-bold text-white hover:bg-white/10 transition-colors"
              >
                Call (479) 534-2952
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="steel-bg border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
          <Counter end={40} suffix="+" label="Years In Roofing" />
          <Counter end={14} suffix="+" label="Locations Nationwide" />
          <Counter end={100} suffix="%" label="In-House Crews" />
          <Counter end={1} suffix="" label="Free Inspection" />
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-5">
          <Reveal className="max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-widest text-brand-red">
              What We Do
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-black tracking-tight text-brand-ink">
              Complete Roofing Solutions for Arkansas
            </h2>
            <p className="mt-4 text-brand-ash leading-relaxed">
              From large-scale commercial systems to the roof over your family&apos;s head, our
              skilled in-house crews handle projects of every size and complexity.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="group h-full rounded-lg border border-black/5 bg-brand-fog p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-brand-red/30">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-brand-red/10 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d={s.icon} />
                    </svg>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-brand-ink">{s.title}</h3>
                  <p className="mt-2 text-sm text-brand-ash leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-bold text-brand-red hover:gap-3 transition-all"
            >
              View all services
              <span aria-hidden>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-brand-fog py-24">
        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <span className="text-sm font-bold uppercase tracking-widest text-brand-red">
              Why JR &amp; Co.
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-black tracking-tight text-brand-ink">
              Experience Matters. Safety Matters. You Matter.
            </h2>
            <p className="mt-5 text-brand-ash leading-relaxed">
              A poor roofing job costs far more than the roof itself &mdash; in interior damage,
              downtime and disruption. That&apos;s why choosing the right contractor is everything.
              With over 40 years in the trade, our veteran-owned family company gets it installed,
              repaired or serviced right the first time.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Highly skilled in-house crews on every job",
                "Free, no-obligation roof inspection & report",
                "Dedicated on-site supervision & daily QC",
                "Serving all of Arkansas with an NWA focus",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-red text-white text-xs font-bold">
                    &#10003;
                  </span>
                  <span className="text-brand-ink font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative rounded-xl steel-bg p-10 text-white shadow-2xl">
              <div className="text-6xl font-black text-brand-red">1986</div>
              <p className="mt-3 text-white/70 leading-relaxed">
                The year John &amp; Kristi Schuller founded JR Roofing. Four decades later, we&apos;re
                a leading construction company known for excellence and integrity &mdash; still
                family-run, still relentless about the details.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
                <div>
                  <div className="text-3xl font-black text-white">Roofing</div>
                  <div className="text-sm text-white/60">Commercial &amp; Residential</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-white">Cladding</div>
                  <div className="text-sm text-white/60">&amp; Glass / Glazing</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <Reveal>
            <span className="text-sm font-bold uppercase tracking-widest text-brand-red">
              Where We Work
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-black tracking-tight text-brand-ink">
              Serving the Entire State of Arkansas
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-brand-ash leading-relaxed">
              With an emphasis on Northwest Arkansas, we bring the same crews and standards to every
              corner of the state.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              {areas.map((a) => (
                <span
                  key={a}
                  className="rounded-full border border-black/10 bg-brand-fog px-5 py-2.5 text-sm font-semibold text-brand-ink hover:border-brand-red hover:text-brand-red transition-colors"
                >
                  {a}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="steel-bg text-white">
        <div className="max-w-5xl mx-auto px-5 py-24 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">
              Ready for a roof you can <span className="gradient-text">trust?</span>
            </h2>
            <p className="mt-5 mx-auto max-w-2xl text-white/75 text-lg">
              Get your free, no-obligation inspection and evaluation report. Let us prove why
              experience matters.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="rounded-sm bg-brand-red px-8 py-4 font-bold text-white hover:bg-brand-reddark transition-colors"
              >
                Schedule Free Inspection
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
