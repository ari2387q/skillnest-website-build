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

      <section className="flex-1 flex flex-col items-center justify-center py-20 px-6 w-full bg-gradient-to-br from-amber-50 via-white to-white dark:from-slate-900 dark:to-slate-950">
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center">

          <ScrollReveal delay={0} direction="up" className="w-full flex flex-col items-center text-center mb-16">
            <span className="inline-block text-amber-600 dark:text-amber-400 font-semibold text-sm tracking-widest uppercase bg-amber-100/50 dark:bg-amber-900/30 px-4 py-1.5 rounded-full mb-6">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">Get In Touch</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl text-center">
              We would love to hear from you. Reach out to us through the following contact information.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-8 w-full max-w-4xl mb-16">
            {contacts.map((item, i) => (
              <ScrollReveal key={i} delay={i * 80} direction="up" className="w-full">
                <div className="flex flex-col items-center text-center p-8 bg-white dark:bg-slate-800 rounded-3xl border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full">
                  <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/50 rounded-2xl flex items-center justify-center mb-6">
                    <span className="text-2xl font-bold text-amber-600 dark:text-amber-400">{item.label}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-xl mb-3">{item.title}</h3>
                  <div className="flex flex-col gap-1">
                    {item.lines.map((line, j) => (
                      <p key={j} className="text-gray-600 dark:text-gray-400 text-base">{line}</p>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0} direction="up" className="w-full max-w-2xl">
            <div className="p-8 bg-amber-50 dark:bg-slate-800/50 rounded-3xl border border-amber-100 dark:border-slate-700 text-center shadow-sm w-full flex flex-col items-center">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4 text-xl">Standard Hours</h3>
              <p className="text-gray-700 dark:text-gray-300 text-base mb-2">Monday - Sunday: 8:00 AM – 8:00 PM</p>
              <p className="text-amber-600 dark:text-amber-400 text-xs font-semibold uppercase tracking-wider">Timing may change as per requirement</p>
            </div>
          </ScrollReveal>

        </div>
      </section>

      <Footer />
    </main>
  )
}