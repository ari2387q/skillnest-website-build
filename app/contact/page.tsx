"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navigation />

      <section className="flex-1 flex items-center justify-center bg-gradient-to-br from-amber-50 to-white dark:from-slate-900 dark:to-slate-950 transition-colors py-32 px-6 sm:px-8 lg:px-10">
        <div className="max-w-6xl w-full flex flex-col items-center">
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Get In Touch
          </h1>
          <br></br>
          <p className="text-2xl text-gray-600 dark:text-gray-400 mb-16 leading-relaxed text-center">
            We'd love to hear from you. Reach out to us through the following contact information.
          </p>
          <br></br>
          <section className="flex flex-wrap justify-center gap-12">
          <div className="flex flex-wrap justify-center gap-12">
            {/* Phone */}
            <div className="flex flex-col items-start gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-amber-600 dark:text-amber-400">P</span>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-lg">Phone</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-base">+91 8891571233</p>
              <p className="text-gray-600 dark:text-gray-400 text-base">+91 9706108462</p>
            </div>

            {/* Website */}
            <div className="flex flex-col items-start gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-amber-600 dark:text-amber-400">W</span>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-lg">Website</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-base">skillnest.org.in</p>
            </div>

            {/* Email */}
            <div className="flex flex-col items-start gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-amber-600 dark:text-amber-400">E</span>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-lg">Email</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-base">info@skillnest.org.in</p>
            </div>

            {/* Address */}
            <div className="flex flex-col items-start gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-amber-600 dark:text-amber-400">A</span>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-lg">Address</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-base">SkillNest,Barpeta Road,Assam</p>
              
            </div>
          </div>
          </section>
          <br></br>
          {/* Business Hours */}
          <div className="mt-16 p-8 bg-amber-50 dark:bg-slate-800 rounded-xl border border-amber-200 dark:border-slate-700 transition-colors text-center max-w-3xl">
            <h3 className="font-bold text-gray-900 dark:text-white mb-6 text-lg">Standard Time</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-base">Monday - Sunday: 8:00 AM - 8:00 PM</p>
            <p className="text-gray-600 dark:text-gray-400 text-base">Timing will change as per requirement</p>
          </div>
        </div>
      </section>
      <br></br>
      <Footer />
    </main>
  )
}
