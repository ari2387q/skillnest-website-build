import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { courseContent } from "@/lib/course-data"
import { notFound } from "next/navigation"

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const course = courseContent[slug as keyof typeof courseContent]

  if (!course) {
    notFound()
  }

  return (
    <main>
      <Navigation />
      
      {/* --- HEADER SECTION: Centered and Spacious --- */}
      <section className="py-24 bg-linear-to-br from-amber-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> 
          <div className="space-y-4">
            <div className="text-6xl mb-4">{course.icon}</div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              {course.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">{course.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-24"> 
            <img
              src={course.image || "/placeholder.svg"}
              alt={course.title}
              className="w-full h-auto max-h-125 object-cover rounded-3xl shadow-2xl" 
            />
          </div>

          <div className="space-y-24"> 
            <div className="text-center"> 
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Course Overview
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mx-auto max-w-4xl">
                {course.overview}
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">
                What You Will Gain
              </h2>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {course.benefits.map((benefit, i) => (
                  <div
                    key={i}
                    className="flex gap-4 p-5 bg-amber-50 rounded-xl border border-amber-200 shadow-sm"
                  >
                    <span className="text-2xl text-amber-600">★</span>
                    <span className="text-lg text-gray-800">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">
                Detailed Curriculum
              </h2>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto">
                {course.curriculum.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-2">
                    <span className="text-xl text-amber-600 font-bold w-6 shrink-0">
                      {i + 1}.
                    </span> 
                    <span className="text-lg text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Who Should Enroll?
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mx-auto max-w-4xl">
                {course.targetAudience}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
