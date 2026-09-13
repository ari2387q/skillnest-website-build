import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollReveal from "@/components/scroll-reveal"
import Button from "@/components/button"
import { courseContent } from "@/lib/course-data"
import { notFound } from "next/navigation"

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const course = courseContent[slug as keyof typeof courseContent]
  if (!course) notFound()

  return (
    <main>
      <Navigation />

      {/* ── Hero Header ───────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-white to-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <ScrollReveal delay={0} direction="up">
            <div className="text-6xl mb-5 leading-none">{course.icon}</div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              {course.title}
            </h1>
            <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed mb-8">
              {course.subtitle}
            </p>
            <Button href="/contact" size="lg">Enroll Now</Button>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Main Content ──────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">

          {/* Course Image */}
          <ScrollReveal delay={0} direction="up">
            <img
              src={course.image || "/placeholder.svg"}
              alt={course.title}
              className="w-full h-60 md:h-72 object-cover rounded-2xl shadow-lg mb-16"
            />
          </ScrollReveal>

          {/* Content sections with dividers */}
          <div className="divide-y divide-gray-100">

            {/* Overview */}
            <ScrollReveal delay={0} direction="up">
              <div className="py-12 text-center">
                <p className="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-3">About This Course</p>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Overview</h2>
                <p className="text-base text-gray-600 leading-loose max-w-2xl mx-auto">{course.overview}</p>
              </div>
            </ScrollReveal>

            {/* Benefits */}
            <ScrollReveal delay={0} direction="up">
              <div className="py-12">
                <div className="text-center mb-8">
                  <p className="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-3">What You Get</p>
                  <h2 className="text-2xl font-bold text-gray-900">What You Will Gain</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  {course.benefits.map((benefit: string, i: number) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-amber-50 rounded-xl border border-amber-100 hover:border-amber-300 hover:shadow-sm transition">
                      <span className="text-amber-500 font-bold mt-0.5 shrink-0">★</span>
                      <span className="text-sm text-gray-700 leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Curriculum */}
            <ScrollReveal delay={0} direction="up">
              <div className="py-12">
                <div className="text-center mb-8">
                  <p className="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-3">Topics Covered</p>
                  <h2 className="text-2xl font-bold text-gray-900">Detailed Curriculum</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-3">
                  {course.curriculum.map((item: string, i: number) => (
                    <div key={i} className="flex items-start gap-3 py-2 border-b border-gray-50">
                      <span className="text-amber-500 font-bold shrink-0 w-6 text-sm">{i + 1}.</span>
                      <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Who Should Enroll */}
            <ScrollReveal delay={0} direction="up">
              <div className="py-12 text-center">
                <p className="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-3">Is This For You?</p>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Who Should Enroll?</h2>
                <p className="text-base text-gray-600 leading-loose max-w-2xl mx-auto">{course.targetAudience}</p>
              </div>
            </ScrollReveal>

          </div>

          {/* Bottom CTA */}
          <ScrollReveal delay={0} direction="up">
            <div className="mt-8 pt-12 border-t border-gray-100 flex flex-col sm:flex-row gap-4 items-center justify-center text-center">
              <p className="text-gray-600 text-base">Ready to transform your future?</p>
              <Button href="/contact" size="lg">Get In Touch</Button>
            </div>
          </ScrollReveal>

        </div>
      </section>

      <Footer />
    </main>
  )
}