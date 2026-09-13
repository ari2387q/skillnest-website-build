"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollReveal from "@/components/scroll-reveal"
import Button from "@/components/button"

export default function ContactPage() {
  const contacts = [
    { label: "P", title: "Phone", lines: ["+91 8891571233", "+91 9706108462"] },
    { label: "W", title: "Website", lines: ["skillnest.org.in"] },
    { label: "E", title: "Email", lines: ["info@skillnest.org.in"] },
    { label: "A", title: "Address", lines: ["Dabaliapara, Barpeta", "PIN-781316, Assam"] },
  ]

  return (
    <main className="flex flex-col min-h-screen">
      <Navigation />

      <section className="flex-1 flex items-center justify-center bg-gradient-to-br from-amber-50 via-white to-white dark:from-slate-900 dark:to-slate-950 transition-colors py-24 px-6">
        <div className="max-w-4xl w-full mx-auto">

          <ScrollReveal delay={0} direction="up">
            <div className="text-center mb-16">
              <span className="inline-block text-amber-600 dark:text-amber-400 font-semibold text-sm tracking-widest uppercase bg-amber-100/50 dark:bg-amber-900/30 px-4 py-1.5 rounded-full mb-4">
                Contact Us
              </span>
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6">Get In Touch</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl mx-auto">
                We would love to hear from you. Reach out to us through the following contact information.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {contacts.map((item, i) => (
              <ScrollReveal key={i} delay={i * 80} direction="up">
                <div className="flex flex-col gap-3 p-8 bg-white dark:bg-slate-800 rounded-3xl border border-gray-100 dark:border-slate-700 shadow-[0_2px_10px_0_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/50 rounded-2xl flex items-center justify-center shrink-0">
                      <span className="text-lg font-bold text-amber-600 dark:text-amber-400">{item.label}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-xl">{item.title}</h3>
                  </div>
                  <div className="pl-1">
                    {item.lines.map((line, j) => (
                      <p key={j} className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">{line}</p>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0} direction="up">
            <div className="p-10 bg-amber-50 dark:bg-slate-800/50 rounded-3xl border border-amber-100 dark:border-slate-700 text-center shadow-sm">
              <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">Standard Hours</h3>
              <p className="text-gray-700 dark:text-gray-300 text-base mb-2">Monday - Sunday: 8:00 AM – 8:00 PM</p>
              <p className="text-amber-600 dark:text-amber-400 text-sm font-medium">Timing may change as per requirement</p>
            </div>
          </ScrollReveal>

        </div>
      </section>

      <Footer />
    </main>
  )
}