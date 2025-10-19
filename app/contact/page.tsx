"use client"

import type React from "react"
import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for contacting us! We'll get back to you soon.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <main>
      <Navigation />

      <section className="py-32 bg-gradient-to-br from-amber-50 to-white dark:from-slate-900 dark:to-slate-950 transition-colors">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-8">Get In Touch</h1>
          <p className="text-2xl text-gray-600 dark:text-gray-400 leading-relaxed">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      <section className="py-32 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid md:grid-cols-2 gap-20">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-4 text-lg">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:border-amber-500 dark:bg-slate-800 dark:text-white text-base transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-4 text-lg">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:border-amber-500 dark:bg-slate-800 dark:text-white text-base transition"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-4 text-lg">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:border-amber-500 dark:bg-slate-800 dark:text-white text-base transition"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-4 text-lg">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:border-amber-500 dark:bg-slate-800 dark:text-white text-base transition"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-lg transition font-semibold text-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">Contact Information</h2>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-amber-600 dark:text-amber-400">P</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-base mb-2">8891571233</p>
                    <p className="text-gray-600 dark:text-gray-400 text-base">9706108462</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-amber-600 dark:text-amber-400">W</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">Website</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-base">skillnest.org.in</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-amber-600 dark:text-amber-400">E</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">Email</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-base">info@skillnest.org.in</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-amber-600 dark:text-amber-400">A</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">Address</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-base">SkillNest Learning Center</p>
                    <p className="text-gray-600 dark:text-gray-400 text-base">
                      Empowering Communication, Confidence & Skills
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-12 p-8 bg-amber-50 dark:bg-slate-800 rounded-xl border border-amber-200 dark:border-slate-700 transition-colors">
                <h3 className="font-bold text-gray-900 dark:text-white mb-6 text-lg">Business Hours</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-base">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-base">Saturday: 10:00 AM - 4:00 PM</p>
                <p className="text-gray-600 dark:text-gray-400 text-base">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
