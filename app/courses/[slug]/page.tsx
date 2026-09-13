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
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-white border-b border-gray-100 flex-none w-full">
        <div className="w-full max-w-5xl mx-auto px-6 flex flex-col items-center justify-center text-center">
          <ScrollReveal delay={0} direction="up" className="flex flex-col items-center w-full">
            <div className="text-7xl mb-8 drop-shadow-sm">{course.icon}</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-8">
              {course.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl text-center mb-10 leading-relaxed">
              {course.subtitle}
            </p>
            <Button href="/contact" size="lg">Enroll Now</Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50 flex-1 w-full">
        <div className="w-full max-w-5xl mx-auto px-6 flex flex-col items-center">
          
          <ScrollReveal delay={0} direction="up" className="w-full flex justify-center mb-24">
            <img
              src={course.image || "/placeholder.svg"}
              alt={course.title}
              className="w-full max-w-3xl h-64 md:h-80 object-cover rounded-[2rem] shadow-xl"
            />
          </ScrollReveal>

          <div className="bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 md:p-16 w-full max-w-4xl space-y-24">
            
            {/* Overview */}
            <ScrollReveal delay={0} direction="up" className="w-full flex flex-col items-center text-center">
              <span className="inline-block text-amber-500 font-bold tracking-widest uppercase text-sm mb-4 bg-amber-50 px-4 py-1.5 rounded-full">
                About This Course
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Course Overview</h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl">
                {course.overview}
              </p>
            </ScrollReveal>

            {/* Benefits */}
            <ScrollReveal delay={0} direction="up" className="w-full flex flex-col items-center">
              <span className="inline-block text-amber-500 font-bold tracking-widest uppercase text-sm mb-4 bg-amber-50 px-4 py-1.5 rounded-full">
                What You Get
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">What You Will Gain</h2>
              
              <div className="grid md:grid-cols-2 gap-6 w-full max-w-3xl">
                {course.benefits.map((benefit: string, i: number) => (
                  <div key={i} className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-amber-200 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-500 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-base font-bold">?</span>
                    </div>
                    <span className="text-base text-gray-700 leading-relaxed font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Curriculum */}
            <ScrollReveal delay={0} direction="up" className="w-full flex flex-col items-center">
              <span className="inline-block text-amber-500 font-bold tracking-widest uppercase text-sm mb-4 bg-amber-50 px-4 py-1.5 rounded-full">
                Topics Covered
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">Detailed Curriculum</h2>
              
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 w-full max-w-3xl">
                {course.curriculum.map((item: string, i: number) => (
                  <div key={i} className="flex items-center gap-5 p-4 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-500 text-white font-bold text-base shrink-0 shadow-md">
                      {i + 1}
                    </span>
                    <span className="text-base text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Target Audience */}
            <ScrollReveal delay={0} direction="up" className="w-full flex flex-col items-center text-center">
              <span className="inline-block text-amber-500 font-bold tracking-widest uppercase text-sm mb-4 bg-amber-50 px-4 py-1.5 rounded-full">
                Is This For You?
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Who Should Enroll?</h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mb-12">
                {course.targetAudience}
              </p>
              
              <div className="bg-amber-50 rounded-[2rem] p-8 md:p-12 w-full max-w-3xl flex flex-col items-center text-center border border-amber-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to transform your future?</h3>
                <p className="text-gray-600 mb-8">Join thousands of students who have already started their journey.</p>
                <Button href="/contact" size="lg">Get In Touch</Button>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
