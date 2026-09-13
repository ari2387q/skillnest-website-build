import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollReveal from "@/components/scroll-reveal"
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
      <section className="py-28 bg-linear-to-br from-amber-50 to-white w-full">
        <div className="w-full px-8 lg:px-20 xl:px-32 2xl:px-48 text-center">
          <ScrollReveal delay={0} direction="up">
            <div className="text-6xl mb-6">{course.icon}</div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6">{course.title}</h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">{course.subtitle}</p>
          </ScrollReveal>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="w-full px-8 lg:px-20 xl:px-32 2xl:px-48">
          <ScrollReveal delay={0} direction="up">
            <div className="flex justify-center mb-24">
              <img src={course.image || "/placeholder.svg"} alt={course.title} className="w-full h-auto max-h-[500px] object-cover rounded-3xl shadow-2xl" />
            </div>
          </ScrollReveal>
          <div className="space-y-24 max-w-5xl mx-auto">
            <ScrollReveal delay={0} direction="up">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Course Overview</h2>
                <p className="text-xl text-gray-700 leading-relaxed">{course.overview}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0} direction="up">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">What You Will Gain</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {course.benefits.map((benefit: string, i: number) => (
                    <div key={i} className="flex gap-4 p-5 bg-amber-50 rounded-xl border border-amber-200 shadow-sm">
                      <span className="text-2xl text-amber-600">★</span>
                      <span className="text-lg text-gray-800">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0} direction="up">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">Detailed Curriculum</h2>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                  {course.curriculum.map((item: string, i: number) => (
                    <div key={i} className="flex items-start gap-4 p-2">
                      <span className="text-xl text-amber-600 font-bold w-6 shrink-0">{i + 1}.</span>
                      <span className="text-lg text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0} direction="up">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Who Should Enroll?</h2>
                <p className="text-xl text-gray-700 leading-relaxed">{course.targetAudience}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}