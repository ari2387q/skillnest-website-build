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
    <section className="py-32 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section Header */}
        <div className="flex items-center justify-center min-h-[70vh] py-12">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <ScrollReveal delay={0} direction="up">
              <h2 className="text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                Why Choose SkillNest?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={150} direction="up">
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                We combine quality education with practical implementation to ensure your success
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, i) => (
            <ScrollReveal key={i} delay={(i % 3) * 100} direction="up">
              <div className="group flex flex-col items-center text-center space-y-5 h-full">
                <div className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition w-full">
                  <img
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    className="w-full h-52 object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="space-y-2 px-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm font-light">
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