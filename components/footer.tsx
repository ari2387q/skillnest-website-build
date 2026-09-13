import ScrollReveal from "@/components/scroll-reveal"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-24 pb-12">
        <ScrollReveal delay={0} direction="up">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-20">

            {/* Brand */}
            <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
              <Link href="/" className="inline-block transition-transform hover:scale-105 active:scale-95">
                <img
                  src="/skillnest logo.jpg"
                  alt="SkillNest Logo"
                  className="h-16 w-auto rounded-xl object-cover shadow-sm bg-white p-1"
                />
              </Link>
              <p className="text-slate-400 text-base leading-relaxed max-w-sm font-light">
                Empowering Communication, Confidence &amp; Skills. Transform your future with world-class education and expert mentorship.
              </p>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3 flex flex-col items-center md:items-start text-center md:text-left">
              <h4 className="font-semibold mb-6 text-sm tracking-widest uppercase text-slate-100">Quick Links</h4>
              <ul className="space-y-4 text-slate-400 font-light">
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
              <h4 className="font-semibold mb-6 text-sm tracking-widest uppercase text-slate-100">Contact Us</h4>
              <ul className="space-y-4 text-slate-400 text-base font-light">
                <li className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="w-8 h-8 rounded-full bg-slate-800 text-amber-400 flex items-center justify-center text-xs font-bold">P</span>
                  +91 8891571233
                </li>
                <li className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="w-8 h-8 rounded-full bg-slate-800 text-amber-400 flex items-center justify-center text-xs font-bold">P</span>
                  +91 9706108462
                </li>
                <li className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="w-8 h-8 rounded-full bg-slate-800 text-amber-400 flex items-center justify-center text-xs font-bold">E</span>
                  info@skillnest.org.in
                </li>
                <li className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="w-8 h-8 rounded-full bg-slate-800 text-amber-400 flex items-center justify-center text-xs font-bold">W</span>
                  skillnest.org.in
                </li>
              </ul>
            </div>

          </div>
        </ScrollReveal>

        {/* Bottom bar */}
        <ScrollReveal delay={100} direction="up">
          <div className="border-t border-slate-800 pt-8 flex flex-col items-center space-y-3 text-center">
            <p className="text-slate-500 text-sm leading-relaxed font-light">
              © {new Date().getFullYear()} SkillNest. All rights reserved.
            </p>
            <p className="text-slate-500 text-xs leading-relaxed max-w-2xl font-light">
              The content on this website is for informational and educational purposes only. We do not collect any personal user data.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  )
}