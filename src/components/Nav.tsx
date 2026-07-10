"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-ink/90 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="inline-flex items-center justify-center h-9 w-9 rounded-sm bg-brand-red text-white font-black text-lg leading-none">
            JR
          </span>
          <span className="font-black tracking-tight text-white text-xl">
            &amp;CO
            <span className="text-brand-red">.</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-white/80 hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:4795342952"
            className="rounded-sm bg-brand-red px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-reddark transition-colors"
          >
            (479) 534-2952
          </a>
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-white" />
            <span className="block h-0.5 w-6 bg-white" />
            <span className="block h-0.5 w-6 bg-white" />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-brand-ink/95 backdrop-blur-md border-t border-white/10">
          <div className="px-5 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-white/90 font-semibold"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:4795342952"
              className="rounded-sm bg-brand-red px-5 py-3 text-center font-bold text-white"
            >
              Call (479) 534-2952
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
