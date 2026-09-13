import Link from "next/link"
import ScrollReveal from "@/components/scroll-reveal"

export default function CoursesPreview() {
  const courses = [
    { slug: "spoken-english", name: "Spoken English Training", icon: "💬", description: "Master fluent English communication with confidence and clarity." },
    { slug: "public-speaking", name: "Public Speaking & Personality Development", icon: "🎤", description: "Develop powerful presentation skills and magnetic personality." },
    { slug: "soft-skills", name: "Soft Skills & Motivation Training", icon: "⭐", description: "Build essential interpersonal skills and unlock your potential." },
    { slug: "iq-development", name: "IQ Development", icon: "🧠", description: "Enhance cognitive abilities and analytical thinking skills." },
    { slug: "tuition", name: "Tuition (Class 4 to 10)", icon: "📖", description: "Comprehensive academic support for school students." },
    { slug: "playschool", name: "Playschool & Nursery", icon: "🎈", description: "Nurturing early childhood development in a fun learning environment." },
    { slug: "ssc-coaching", name: "SSC Coaching", icon: "🚀", description: "Expert preparation for SSC examinations with proven strategies." },
    { slug: "introduction-to-ai", name: "Introduction to AI", icon: "🤖", description: "Explore the future with artificial intelligence fundamentals." },
    { slug: "hostel-facilities", name: "Hostel & Transportation Facilities", icon: "🏠", description: "Comfortable accommodation and reliable transport services." },
  ]

  return (
    <section className="py-20 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        <ScrollReveal delay={0} direction="up">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Our Courses</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore our diverse range of courses designed to empower you at every stage of your journey
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <ScrollReveal key={course.slug} delay={(i % 3) * 80} direction="up">
              <Link
                href={`/courses/${course.slug}`}
                className="group flex flex-col h-full bg-gray-50 dark:bg-slate-800 p-6 rounded-2xl border border-gray-200 dark:border-slate-700 hover:border-amber-400 hover:shadow-lg transition"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition">{course.icon}</div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2 group-hover:text-amber-600 transition">
                  {course.name}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{course.description}</p>
              </Link>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}