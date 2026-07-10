import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Roofing Services",
  description:
    "Commercial and residential roofing services across Arkansas: TPO, PVC, EPDM, metal, coatings, shingle, tile, repair, architectural cladding and solar. Free inspections.",
};

const systems = [
  { n: "TPO", d: "Energy-efficient single-ply membrane, ideal for flat commercial roofs." },
  { n: "PVC", d: "Durable, chemical-resistant membrane for demanding environments." },
  { n: "EPDM", d: "Long-lasting rubber roofing with proven weather performance." },
  { n: "Metal", d: "Standing seam & architectural metal built to last decades." },
  { n: "BUR / Mod", d: "Built-up and modified bitumen systems for heavy-duty protection." },
  { n: "Coatings", d: "Restoration coatings that extend the life of an existing roof." },
  { n: "Shingles", d: "Architectural asphalt shingles for residential homes." },
  { n: "Tile", d: "Classic tile roofing with premium curb appeal and longevity." },
];

const services = [
  {
    title: "Commercial & Industrial Roofing",
    body: "With more than four decades installing roofs across every market sector, our team delivers the best value and solutions regardless of a project's complexity. We serve hospitality, education, federal, multi-family, aviation, churches, retail, healthcare, technology, food processing, warehousing, manufacturing and more.",
    icon: "M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6",
  },
  {
    title: "Residential Roofing",
    body: "Your roof protects what matters most. Our trained crews install shingle, metal and tile systems built to stand up to Arkansas weather — done right, on schedule, and backed by a company that has been family-run since 1986.",
    icon: "M3 12l9-8 9 8M5 10v10h14V10",
  },
  {
    title: "Repair & Service",
    body: "Leaks, storm damage and wear don't wait. Our service team responds fast with expert repairs and preventative maintenance programs that protect your investment and head off costly interior damage.",
    icon: "M14 6l4 4M4 20l6-6M14 6l4-4 4 4-4 4-4-4z",
  },
  {
    title: "Architectural Cladding",
    body: "Modern exterior cladding systems that combine durability with a clean, professional appearance — engineered and installed by the same skilled in-house crews that handle our roofing work.",
    icon: "M4 4h16v16H4zM4 9h16M9 4v16",
  },
  {
    title: "Solar Roof Systems",
    body: "Pair your new roof with rooftop solar to cut long-term energy costs. We handle the roofing and solar integration together so everything works as one weather-tight system.",
    icon: "M12 3v2M12 19v2M5 12H3M21 12h-2M6 6l1.5 1.5M16.5 16.5L18 18M6 18l1.5-1.5M16.5 7.5L18 6M12 8a4 4 0 100 8 4 4 0 000-8z",
  },
  {
    title: "Metal & Sheet Metal",
    body: "Custom sheet metal fabrication, flashing and standing seam metal roofing. Precision detailing that keeps water out and finishes a roof the right way.",
    icon: "M4 6h16M4 12h16M4 18h16",
  },
];

export default function Services() {
  return (
    <>
      <section className="relative steel-bg text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-ink/95 via-brand-ink/85 to-brand-charcoal/70" />
        <div className="relative max-w-7xl mx-auto px-5 pt-40 pb-24 md:pt-48">
          <span className="text-sm font-bold uppercase tracking-widest text-brand-red">
            Industrial &amp; Commercial Roofing
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-black tracking-tight max-w-3xl">
            Roofing Systems <span className="gradient-text">Built to Last.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-white/75 text-lg leading-relaxed">
            JR &amp; Co. is certified to install, repair and maintain a wide range of commercial and
            residential roof systems. Every project starts with a free, no-obligation inspection and
            evaluation report.
          </p>
          <a
            href="tel:4795342952"
            className="mt-8 inline-block rounded-sm bg-brand-red px-8 py-4 font-bold text-white hover:bg-brand-reddark transition-colors"
          >
            Request Service — (479) 534-2952
          </a>
        </div>
      </section>

      {/* SYSTEMS */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-5">
          <Reveal className="max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-widest text-brand-red">
              Roof Systems We Install
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-black tracking-tight text-brand-ink">
              The Right System For Your Building
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {systems.map((s, i) => (
              <Reveal key={s.n} delay={i * 60}>
                <div className="h-full rounded-lg border border-black/5 bg-brand-fog p-6 hover:border-brand-red/40 hover:shadow-lg transition-all">
                  <div className="text-2xl font-black text-brand-red">{s.n}</div>
                  <p className="mt-2 text-sm text-brand-ash leading-relaxed">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE DETAIL */}
      <section className="bg-brand-fog py-24">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="group h-full rounded-xl bg-white p-8 shadow-sm border border-black/5 hover:shadow-xl transition-all">
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
                  <h3 className="mt-5 text-xl font-black text-brand-ink">{s.title}</h3>
                  <p className="mt-3 text-brand-ash leading-relaxed">{s.body}</p>
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
              Not sure what your roof needs?
            </h2>
            <p className="mt-5 mx-auto max-w-2xl text-white/75 text-lg">
              We'll come out, inspect it and give you a straight answer — free, with no obligation.
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
