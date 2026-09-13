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
    <main className="min-h-screen bg-gray-50 dark:bg-slate-950 flex flex-col transition-colors">
      <Navigation />

      {/* Hero Header */}
      <section className="pt-36 pb-24 bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800 flex-none w-full">
        <div className="w-full max-w-4xl mx-auto px-6 flex flex-col items-center justify-center text-center">
          <ScrollReveal delay={0} direction="up" className="flex flex-col items-center w-full">
            <span className="inline-block text-amber-600 dark:text-amber-400 font-bold text-xs sm:text-sm tracking-widest uppercase bg-amber-100/60 dark:bg-amber-900/30 px-5 py-2 rounded-full mb-6">
              SkillNest Program
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6 text-center">
              {course.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl text-center mb-10 leading-relaxed font-light">
              {course.subtitle}
            </p>
            <Button href="/contact" size="lg">Enroll Now</Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-24 bg-gray-50 dark:bg-slate-950 flex-1 w-full">
        <div className="w-full max-w-5xl mx-auto px-6 sm:px-8 flex flex-col items-center space-y-20">
          
          {/* Main Course Photo */}
          <ScrollReveal delay={0} direction="up" className="w-full flex justify-center">
            <img
              src={course.image || "/placeholder.svg"}
              alt={course.title}
              className="w-full max-w-4xl h-72 md:h-96 object-cover rounded-3xl shadow-xl border border-gray-100 dark:border-slate-800"
            />
          </ScrollReveal>

          {/* Section 1: Overview Card */}
          <ScrollReveal delay={0} direction="up" className="w-full">
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-gray-100 dark:border-slate-800 p-10 md:p-14 shadow-sm text-center flex flex-col items-center">
              <span className="inline-block text-amber-600 dark:text-amber-400 font-bold tracking-widest uppercase text-xs sm:text-sm mb-4 bg-amber-50 dark:bg-amber-900/30 px-5 py-2 rounded-full">
                About This Course
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Course Overview
              </h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-loose max-w-3xl text-center">
                {course.overview}
              </p>
            </div>
          </ScrollReveal>

          {/* Section 2: Benefits Card */}
          <ScrollReveal delay={0} direction="up" className="w-full">
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-gray-100 dark:border-slate-800 p-10 md:p-14 shadow-sm flex flex-col items-center text-center">
              <span className="inline-block text-amber-600 dark:text-amber-400 font-bold tracking-widest uppercase text-xs sm:text-sm mb-4 bg-amber-50 dark:bg-amber-900/30 px-5 py-2 rounded-full">
                What You Get
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                What You Will Gain
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl">
                {course.benefits.map((benefit: string, i: number) => (
                  <div key={i} className="flex items-start gap-4 p-6 bg-gray-50 dark:bg-slate-800/50 rounded-2xl border border-gray-100 dark:border-slate-700 text-left">
                    <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-base font-bold">★</span>
                    </div>
                    <span className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Section 3: Curriculum Card */}
          <ScrollReveal delay={0} direction="up" className="w-full">
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-gray-100 dark:border-slate-800 p-10 md:p-14 shadow-sm flex flex-col items-center text-center">
              <span className="inline-block text-amber-600 dark:text-amber-400 font-bold tracking-widest uppercase text-xs sm:text-sm mb-4 bg-amber-50 dark:bg-amber-900/30 px-5 py-2 rounded-full">
                Topics Covered
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                Detailed Curriculum
              </h2>
              
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 w-full max-w-4xl">
                {course.curriculum.map((item: string, i: number) => (
                  <div key={i} className="flex items-center gap-5 p-4 rounded-2xl bg-gray-50/60 dark:bg-slate-800/40 border border-gray-100/80 dark:border-slate-800 text-left">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-500 text-white font-bold text-base shrink-0 shadow-md">
                      {i + 1}
                    </span>
                    <span className="text-base md:text-lg text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Section 4: Target Audience & Enrollment CTA */}
          <ScrollReveal delay={0} direction="up" className="w-full">
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-gray-100 dark:border-slate-800 p-10 md:p-14 shadow-sm flex flex-col items-center text-center">
              <span className="inline-block text-amber-600 dark:text-amber-400 font-bold tracking-widest uppercase text-xs sm:text-sm mb-4 bg-amber-50 dark:bg-amber-900/30 px-5 py-2 rounded-full">
                Is This For You?
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Who Should Enroll?
              </h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-loose max-w-3xl text-center mb-12">
                {course.targetAudience}
              </p>
              
              <div className="bg-amber-50 dark:bg-slate-800/60 rounded-3xl p-10 md:p-14 w-full max-w-3xl flex flex-col items-center text-center border border-amber-100 dark:border-slate-700 space-y-4">
                <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
                  Ready to transform your future?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg pb-4 max-w-md">
                  Join thousands of ambitious learners who have accelerated their career with SkillNest.
                </p>
                <Button href="/contact" size="lg">Get In Touch</Button>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      <Footer />
    </main>
  )
}
