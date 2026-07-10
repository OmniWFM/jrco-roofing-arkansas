import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact & Free Inspection",
  description:
    "Schedule a free, no-obligation roof inspection with JR & Co. serving all of Arkansas. Call (479) 534-2952 or request service online.",
};

export default function Contact() {
  return (
    <>
      <section className="relative steel-bg text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-ink/95 via-brand-ink/85 to-brand-charcoal/70" />
        <div className="relative max-w-7xl mx-auto px-5 pt-40 pb-24 md:pt-48">
          <span className="text-sm font-bold uppercase tracking-widest text-brand-red">
            Get In Touch
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-black tracking-tight max-w-3xl">
            Schedule Your <span className="gradient-text">Free Inspection.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-white/75 text-lg leading-relaxed">
            Whether it&apos;s a commercial building or your family home, we&apos;ll come out, take a
            look and give you a straight answer — no cost, no obligation.
          </p>
        </div>
      </section>

      <section className="bg-brand-fog py-24">
        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Reveal>
              <h2 className="text-2xl font-black text-brand-ink">Talk to a real person.</h2>
              <p className="mt-3 text-brand-ash leading-relaxed">
                Prefer to call? We&apos;re happy to answer questions and get you on the schedule.
              </p>

              <div className="mt-8 space-y-5">
                <a
                  href="tel:4795342952"
                  className="flex items-center gap-4 rounded-xl bg-white p-5 shadow-sm border border-black/5 hover:shadow-lg transition-all"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-md bg-brand-red/10 text-brand-red font-black">
                    &#9742;
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-wide text-brand-ash">
                      Arkansas Local
                    </span>
                    <span className="block font-black text-brand-ink">(479) 534-2952</span>
                  </span>
                </a>
                <a
                  href="tel:8335726872"
                  className="flex items-center gap-4 rounded-xl bg-white p-5 shadow-sm border border-black/5 hover:shadow-lg transition-all"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-md bg-brand-red/10 text-brand-red font-black">
                    &#9742;
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-wide text-brand-ash">
                      Toll Free
                    </span>
                    <span className="block font-black text-brand-ink">833-JRCO-USA</span>
                  </span>
                </a>
                <div className="rounded-xl bg-white p-5 shadow-sm border border-black/5">
                  <span className="block text-xs font-bold uppercase tracking-wide text-brand-ash">
                    Service Area
                  </span>
                  <span className="mt-1 block font-black text-brand-ink">
                    All of Arkansas
                  </span>
                  <span className="mt-1 block text-sm text-brand-ash">
                    Emphasis on NWA — Bentonville, Fayetteville, Springdale, Rogers
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-3">
            <Reveal delay={120}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
