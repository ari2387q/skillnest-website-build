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
    <section className="py-28 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        <ScrollReveal delay={0} direction="up">
          <div className="text-center mb-16 space-y-4">
            <span className="inline-block text-amber-600 dark:text-amber-400 font-bold text-sm tracking-widest uppercase bg-amber-100/60 dark:bg-amber-900/30 px-5 py-2 rounded-full">
              Explore Programs
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">Our Courses</h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-center leading-relaxed">
              Explore our diverse range of courses designed to empower you at every stage of your journey
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <ScrollReveal key={course.slug} delay={(i % 3) * 80} direction="up">
              <Link
                href={`/courses/${course.slug}`}
                className="group flex flex-col items-center text-center h-full bg-gray-50 dark:bg-slate-900 p-8 rounded-3xl border border-gray-100 dark:border-slate-800 hover:border-amber-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-4xl mb-5 group-hover:scale-110 transition duration-300">{course.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-amber-500 transition text-center">
                  {course.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed text-center font-light">{course.description}</p>
              </Link>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}