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
            <div className="relative group">
              <button
                className="flex items-center gap-2 text-gray-700 hover:text-amber-600 transition font-medium text-lg"
                onMouseEnter={() => setIsCoursesOpen(true)}
                onMouseLeave={() => setIsCoursesOpen(false)}
              >
                Courses & Facilities
                <ChevronDown size={18} className={`transition ${isCoursesOpen ? "rotate-180" : ""}`} />
              </button>

              {isCoursesOpen && (
                <div
                  className="absolute left-0 mt-2 w-96 bg-white rounded-xl shadow-2xl border border-gray-200 py-4 transition-colors"
                  onMouseEnter={() => setIsCoursesOpen(true)}
                  onMouseLeave={() => setIsCoursesOpen(false)}
                >
                  {courses.map((course) => (
                    <Link
                      key={course.slug}
                      href={`/courses/${course.slug}`}
                      className="block px-6 py-4 hover:bg-amber-50 text-gray-700 hover:text-amber-600 transition text-base"
                    >
                      {course.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="text-gray-700 hover:text-amber-600 transition font-medium text-lg"
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
