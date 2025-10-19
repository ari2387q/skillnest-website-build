import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { courseContent } from "@/lib/course-data"
import { notFound } from "next/navigation"

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = courseContent[params.slug as keyof typeof courseContent]

  if (!course) {
    notFound()
  }

  return (
    <main>
      <Navigation />
      <section className="py-16 bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="text-5xl mb-4">{course.icon}</div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">{course.title}</h1>
            <p className="text-xl text-gray-600">{course.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Course Image */}
          <div className="mb-12">
            <img
              src={course.image || "/placeholder.svg"}
              alt={course.title}
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Overview */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Course Overview</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">{course.overview}</p>
          </div>

          {/* Key Benefits */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Benefits</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {course.benefits.map((benefit, i) => (
                <div key={i} className="flex gap-3 p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <span className="text-2xl">✓</span>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Curriculum */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What You'll Learn</h2>
            <div className="space-y-3">
              {course.curriculum.map((item, i) => (
                <div key={i} className="flex gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <span className="text-amber-600 font-bold">{i + 1}.</span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Who Should Enroll */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Who Should Enroll?</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{course.targetAudience}</p>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Future?</h3>
            <p className="text-lg mb-6">Enroll now and start your journey to success</p>
            <button className="px-8 py-3 bg-white text-amber-600 rounded-full hover:bg-gray-100 transition font-bold">
              Enroll Now
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
