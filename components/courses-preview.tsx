import Link from "next/link"

export default function CoursesPreview() {
  const courses = [
    {
      slug: "spoken-english",
      name: "Spoken English Training",
      icon: "💬",
      description: "Master fluent English communication with confidence and clarity.",
    },
    {
      slug: "public-speaking",
      name: "Public Speaking & Personality Development",
      icon: "🎤",
      description: "Develop powerful presentation skills and magnetic personality.",
    },
    {
      slug: "soft-skills",
      name: "Soft Skills & Motivation Training",
      icon: "⭐",
      description: "Build essential interpersonal skills and unlock your potential.",
    },
    {
      slug: "iq-development",
      name: "IQ Development",
      icon: "🧠",
      description: "Enhance cognitive abilities and analytical thinking skills.",
    },
    {
      slug: "tuition",
      name: "Tuition (Class 4 to 10)",
      icon: "📖",
      description: "Comprehensive academic support for school students.",
    },
    {
      slug: "ssc-coaching",
      name: "SSC Coaching",
      icon: "🚀",
      description: "Expert preparation for SSC examinations with proven strategies.",
    },
    {
      slug: "introduction-to-ai",
      name: "Introduction to AI",
      icon: "🤖",
      description: "Explore the future with artificial intelligence fundamentals.",
    },
    {
      slug: "hostel-facilities",
      name: "Hostel & Transportation Facilities",
      icon: "🏠",
      description: "Comfortable accommodation and reliable transport services.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Courses</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our diverse range of courses designed to empower you at every stage of your journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <Link
              key={course.slug}
              href={`/courses/${course.slug}`}
              className="group bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:border-amber-500 hover:shadow-lg transition cursor-pointer"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition">{course.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition">
                {course.name}
              </h3>
              <p className="text-sm text-gray-600">{course.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
