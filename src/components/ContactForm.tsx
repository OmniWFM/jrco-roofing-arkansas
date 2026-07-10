"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-xl bg-brand-fog border border-black/5 p-10 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-red text-white text-2xl font-black">
          &#10003;
        </div>
        <h3 className="mt-5 text-xl font-black text-brand-ink">Thanks — we&apos;ve got it.</h3>
        <p className="mt-2 text-brand-ash">
          A member of our team will reach out shortly to schedule your free inspection. Need us
          sooner? Call <a href="tel:4795342952" className="font-bold text-brand-red">(479) 534-2952</a>.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="rounded-xl bg-white p-8 shadow-sm border border-black/5 space-y-5"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-bold text-brand-ink mb-1.5">Name</label>
          <input
            required
            type="text"
            className="w-full rounded-md border border-black/10 px-4 py-3 focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-brand-ink mb-1.5">Phone</label>
          <input
            required
            type="tel"
            className="w-full rounded-md border border-black/10 px-4 py-3 focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20"
            placeholder="(479) 000-0000"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-bold text-brand-ink mb-1.5">Email</label>
        <input
          required
          type="email"
          className="w-full rounded-md border border-black/10 px-4 py-3 focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20"
          placeholder="you@email.com"
        />
      </div>
      <div>
        <label className="block text-sm font-bold text-brand-ink mb-1.5">
          Property Type
        </label>
        <select className="w-full rounded-md border border-black/10 px-4 py-3 focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20">
          <option>Commercial / Industrial</option>
          <option>Residential</option>
          <option>Repair / Service Call</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-bold text-brand-ink mb-1.5">
          How can we help?
        </label>
        <textarea
          rows={4}
          className="w-full rounded-md border border-black/10 px-4 py-3 focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20"
          placeholder="Tell us about your roof or project..."
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-md bg-brand-red px-8 py-4 font-bold text-white hover:bg-brand-reddark transition-colors"
      >
        Request My Free Inspection
      </button>
    </form>
  );
}
