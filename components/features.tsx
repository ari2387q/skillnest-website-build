import ScrollReveal from "@/components/scroll-reveal"

export default function Features() {
  const features = [
    {
      title: "Comprehensive Curriculum",
      description: "From communication skills to technical training, we cover everything needed for modern success.",
      image: "/curriculum-education-learning-materials.jpg",
    },
    {
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of real-world experience and proven track records.",
      image: "/professional-instructor-teaching-mentor.jpg",
    },
    {
      title: "Flexible Learning",
      description: "Study at your own pace with flexible schedules designed for working professionals and students.",
      image: "/flexible-learning-schedule-time-management.jpg",
    },
    {
      title: "Career Support",
      description: "Get guidance on job placement, interview preparation, and career advancement strategies.",
      image: "/career-support-job-placement-professional.jpg",
    },
    {
      title: "Modern Facilities",
      description: "Access state-of-the-art classrooms, hostel facilities, and transportation for seamless learning.",
      image: "/modern-facilities-classroom-infrastructure.jpg",
    },
    {
      title: "Proven Results",
      description: "Join thousands of successful graduates who have achieved their career goals with SkillNest.",
      image: "/success-achievement-results-graduates.jpg",
    },
  ]

  return (
    <section className="py-32 bg-white dark:bg-slate-950 transition-colors w-full">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section Header */}
        <div className="text-center space-y-8 max-w-3xl mx-auto mb-24">
          <ScrollReveal delay={0} direction="up">
            <span className="inline-block text-amber-600 dark:text-amber-400 font-bold text-sm tracking-widest uppercase bg-amber-50 dark:bg-amber-900/30 px-4 py-1.5 rounded-full mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
              Why Choose SkillNest?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={150} direction="up">
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
              We combine quality education with practical implementation to ensure your success
            </p>
          </ScrollReveal>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
          {features.map((feature, i) => (
            <ScrollReveal key={i} delay={(i % 3) * 100} direction="up">
              <div className="group flex flex-col p-6 rounded-[2rem] bg-gray-50 dark:bg-slate-800/50 border border-gray-100 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="overflow-hidden rounded-2xl mb-6 w-full shadow-sm">
                  <img
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>
                <div className="flex flex-col text-center px-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}