"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronDown, Moon, Sun, Menu, X } from "lucide-react"

const courses = [
  { name: "Spoken English Training", slug: "spoken-english" },
  { name: "Public Speaking & Personality Development", slug: "public-speaking" },
  { name: "Soft Skills & Motivation Training", slug: "soft-skills" },
  { name: "IQ Development", slug: "iq-development" },
  { name: "Tuition (Class 4 to 10)", slug: "tuition" },
  { name: "SSC Coaching", slug: "ssc-coaching" },
  { name: "Introduction to AI", slug: "introduction-to-ai" },
  { name: "Hostel & Transportation Facilities", slug: "hostel-facilities" },
]

export default function Navigation() {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileCoursesOpen, setIsMobileCoursesOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const theme = localStorage.getItem("theme") || "light"
    const isDarkMode = theme === "dark"
    setIsDark(isDarkMode)
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !isDark
    setIsDark(newDarkMode)
    if (newDarkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  if (!mounted) return null

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700 shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 font-bold text-2xl">
            <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center text-white font-bold">
              S
            </div>
            <span className="text-gray-900 dark:text-white">SkillNest</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-12">
            <Link
              href="/"
              className="text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition font-medium text-lg"
            >
              Home
            </Link>

            {/* Courses Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition font-medium text-lg"
                onMouseEnter={() => setIsCoursesOpen(true)}
                onMouseLeave={() => setIsCoursesOpen(false)}
              >
                Courses
                <ChevronDown size={18} className={`transition ${isCoursesOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Dropdown Menu */}
              {isCoursesOpen && (
                <div
                  className="absolute left-0 mt-2 w-96 bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-gray-200 dark:border-slate-700 py-4 transition-colors"
                  onMouseEnter={() => setIsCoursesOpen(true)}
                  onMouseLeave={() => setIsCoursesOpen(false)}
                >
                  {courses.map((course) => (
                    <Link
                      key={course.slug}
                      href={`/courses/${course.slug}`}
                      className="block px-6 py-4 hover:bg-amber-50 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition text-base"
                    >
                      {course.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition font-medium text-lg"
            >
              Contact
            </Link>

            <Link
              href="/payment"
              className="text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition font-medium text-lg"
            >
              Payment
            </Link>
          </div>

          {/* Dark Mode Toggle & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 transition"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 transition"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <Link
              href="/contact"
              className="hidden md:inline-block px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full transition font-semibold text-base"
            >
              Get Started
            </Link>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 border-t border-gray-200 dark:border-slate-700">
            <div className="flex flex-col gap-4 pt-6">
              <Link
                href="/"
                className="px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-gray-50 dark:hover:bg-slate-800 rounded-lg transition font-medium text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Courses Dropdown */}
              <div>
                <button
                  onClick={() => setIsMobileCoursesOpen(!isMobileCoursesOpen)}
                  className="w-full px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-gray-50 dark:hover:bg-slate-800 rounded-lg transition font-medium text-base flex items-center justify-between"
                >
                  Courses
                  <ChevronDown size={18} className={`transition ${isMobileCoursesOpen ? "rotate-180" : ""}`} />
                </button>

                {/* Mobile Courses List */}
                {isMobileCoursesOpen && (
                  <div className="mt-2 ml-4 flex flex-col gap-2 border-l-2 border-amber-500 pl-4">
                    {courses.map((course) => (
                      <Link
                        key={course.slug}
                        href={`/courses/${course.slug}`}
                        className="py-2 text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition text-sm"
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
                className="px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-gray-50 dark:hover:bg-slate-800 rounded-lg transition font-medium text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>

              <Link
                href="/payment"
                className="px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-gray-50 dark:hover:bg-slate-800 rounded-lg transition font-medium text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Payment
              </Link>

              <Link
                href="/contact"
                className="px-4 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-lg transition font-semibold text-base text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
