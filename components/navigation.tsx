"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import Button from "@/components/button"

const courses = [
  { name: "Spoken English Training", slug: "spoken-english" },
  { name: "Public Speaking & Personality Development", slug: "public-speaking" },
  { name: "Soft Skills & Motivation Training", slug: "soft-skills" },
  { name: "IQ Development", slug: "iq-development" },
  { name: "Tuition (Class 4 to 10)", slug: "tuition" },
  { name: "Playschool & Nursery", slug: "playschool" },
  { name: "SSC Coaching", slug: "ssc-coaching" },
  { name: "Introduction to AI", slug: "introduction-to-ai" },
  { name: "Hostel & Transportation Facilities for School Students", slug: "hostel-facilities" },
]

export default function Navigation() {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileCoursesOpen, setIsMobileCoursesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-gray-200/60 shadow-lg"
        : "bg-white dark:bg-slate-950 border-b border-gray-200 shadow-sm"
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 font-bold text-2xl flex-shrink-0">
            <img
              src="/skillnest logo.jpg"
              alt="SkillNest Logo"
              className="h-16 w-auto rounded-lg object-cover"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-12">
            <Link
              href="/"
              className="text-gray-700 hover:text-amber-600 transition font-medium text-lg"
            >
              Home
            </Link>

            {/* Courses Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsCoursesOpen(true)}
              onMouseLeave={() => setIsCoursesOpen(false)}
            >
              <button
                className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-amber-500 dark:hover:text-amber-400 transition font-medium text-lg py-2"
                aria-expanded={isCoursesOpen}
              >
                Courses &amp; Facilities
                <ChevronDown size={18} className={`transition-transform duration-300 ${isCoursesOpen ? "rotate-180 text-amber-500" : ""}`} />
              </button>

              {isCoursesOpen && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[640px] z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                >
                  <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-gray-100 dark:border-slate-800 p-6">
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100 dark:border-slate-800">
                      <span className="text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">
                        Our Learning Programs
                      </span>
                      <Link 
                        href="/contact" 
                        className="text-xs font-semibold text-gray-500 hover:text-amber-500 transition"
                        onClick={() => setIsCoursesOpen(false)}
                      >
                        Need guidance? Contact us &rarr;
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {courses.map((course) => (
                        <Link
                          key={course.slug}
                          href={`/courses/${course.slug}`}
                          className="group flex items-center justify-between p-3.5 rounded-2xl hover:bg-amber-50/70 dark:hover:bg-slate-800/80 border border-transparent hover:border-amber-200/60 dark:hover:border-slate-700 transition-all duration-200"
                          onClick={() => setIsCoursesOpen(false)}
                        >
                          <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition">
                            {course.name}
                          </span>
                          <span className="text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold pl-2">
                            &rarr;
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="text-gray-700 dark:text-gray-200 hover:text-amber-500 dark:hover:text-amber-400 transition font-medium text-lg"
            >
              Contact
            </Link>

            
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="hidden md:block">
              <Button href="/contact" size="md">Get Started</Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 border-t border-gray-200">
            <div className="flex flex-col gap-4 pt-6">
              <Link
                href="/"
                className="px-4 py-3 text-gray-700 hover:text-amber-600 hover:bg-gray-50 rounded-lg transition font-medium text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Courses Dropdown */}
              <div>
                <button
                  onClick={() => setIsMobileCoursesOpen(!isMobileCoursesOpen)}
                  className="w-full px-4 py-3 text-gray-700 hover:text-amber-600 hover:bg-gray-50 rounded-lg transition font-medium text-base flex items-center justify-between"
                >
                  Courses
                  <ChevronDown size={18} className={`transition ${isMobileCoursesOpen ? "rotate-180" : ""}`} />
                </button>

                {isMobileCoursesOpen && (
                  <div className="mt-2 ml-4 flex flex-col gap-2 border-l-2 border-amber-500 pl-4">
                    {courses.map((course) => (
                      <Link
                        key={course.slug}
                        href={`/courses/${course.slug}`}
                        className="py-2 text-gray-600 hover:text-amber-600 transition text-sm"
                        onClick={() => {
                          setIsMobileMenuOpen(false)
                          setIsMobileCoursesOpen(false)
                        }}
                      >
                        {course.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                className="px-4 py-3 text-gray-700 hover:text-amber-600 hover:bg-gray-50 rounded-lg transition font-medium text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>

              <Button
                href="/contact"
                size="md"
                className="w-full justify-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
