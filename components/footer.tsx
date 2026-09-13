import ScrollReveal from "@/components/scroll-reveal"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white w-full">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-24 pb-12 flex flex-col items-center">
        
        <ScrollReveal delay={0} direction="up" className="w-full">
          <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-20">

            {/* Brand */}
            <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
              <Link href="/" className="inline-block transition-transform hover:scale-105 active:scale-95">
                <img
                  src="/skillnest logo.jpg"
                  alt="SkillNest Logo"
                  className="h-24 w-auto rounded-xl object-contain"
                />
              </Link>
              <p className="text-slate-300 text-base leading-relaxed max-w-sm">
                Empowering Communication, Confidence &amp; Skills. Transform your future with world-class education and expert mentorship.
              </p>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
              <h4 className="font-bold mb-6 text-sm tracking-widest uppercase text-slate-50">Quick Links</h4>
              <ul className="space-y-4 text-slate-300">
                <li>
                  <Link href="/" className="hover:text-amber-400 hover:translate-x-1 inline-block transition-all text-base">Home</Link>
                </li>
                <li>
                  <Link href="/courses/spoken-english" className="hover:text-amber-400 hover:translate-x-1 inline-block transition-all text-base">
                    Courses &amp; Facilities
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-amber-400 hover:translate-x-1 inline-block transition-all text-base">Contact</Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
              <h4 className="font-bold mb-6 text-sm tracking-widest uppercase text-slate-50">Contact Us</h4>
              <ul className="space-y-4 text-slate-300 text-base">
                <li className="flex items-center gap-4 justify-center md:justify-start">
                  <span className="w-10 h-10 rounded-full bg-slate-800 text-amber-400 flex items-center justify-center text-sm font-bold shadow-inner">P</span>
                  <span>+91 8891571233</span>
                </li>
                <li className="flex items-center gap-4 justify-center md:justify-start">
                  <span className="w-10 h-10 rounded-full bg-slate-800 text-amber-400 flex items-center justify-center text-sm font-bold shadow-inner">P</span>
                  <span>+91 9706108462</span>
                </li>
                <li className="flex items-center gap-4 justify-center md:justify-start">
                  <span className="w-10 h-10 rounded-full bg-slate-800 text-amber-400 flex items-center justify-center text-sm font-bold shadow-inner">E</span>
                  <span>info@skillnest.org.in</span>
                </li>
                <li className="flex items-center gap-4 justify-center md:justify-start">
                  <span className="w-10 h-10 rounded-full bg-slate-800 text-amber-400 flex items-center justify-center text-sm font-bold shadow-inner">W</span>
                  <span>skillnest.org.in</span>
                </li>
              </ul>
            </div>

          </div>
        </ScrollReveal>

        {/* Bottom bar */}
        <ScrollReveal delay={100} direction="up" className="w-full">
          <div className="w-full border-t border-slate-800 pt-10 flex flex-col items-center space-y-3 text-center">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} SkillNest. All rights reserved.
            </p>
            <p className="text-slate-500 text-xs max-w-2xl leading-relaxed">
              The content on this website is for informational and educational purposes only. We do not collect any personal user data.
            </p>
          </div>
        </ScrollReveal>

      </div>
    </footer>
  )
}