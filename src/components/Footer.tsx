import Link from "next/link";

export default function Footer() {
  return (
    <footer className="steel-bg text-white/80">
      <div className="max-w-7xl mx-auto px-5 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center justify-center h-9 w-9 rounded-sm bg-brand-red text-white font-black text-lg">JR</span>
            <span className="font-black tracking-tight text-white text-xl">&amp;CO<span className="text-brand-red">.</span></span>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-white/70">
            Veteran-owned, family-operated commercial and residential roofing serving the entire
            state of Arkansas since 1986. Over 40 years of getting it right the first time.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4">Get In Touch</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="tel:4795342952" className="hover:text-white">(479) 534-2952</a></li>
            <li><a href="tel:8335726872" className="hover:text-white">833-JRCO-USA</a></li>
            <li>Serving all of Arkansas</li>
            <li>Bentonville &middot; Fayetteville &middot; Rogers</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} JR &amp; Co. Roofing. All rights reserved.</p>
          <p>Veteran-Owned &middot; Established 1986 &middot; Licensed &amp; Insured</p>
        </div>
      </div>
    </footer>
  );
}
