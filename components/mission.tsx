import ScrollReveal from "@/components/scroll-reveal"

export default function Mission() {
  return (
    <section className="py-40 bg-gray-50 dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="space-y-32">

          {/* Header — full viewport height, centered */}
          <div className="flex items-center justify-center min-h-[80vh] py-12">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <ScrollReveal delay={0} direction="up">
                <h2 className="text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                  Our Mission &amp; Vision
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={150} direction="up">
                <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                  We believe that quality education and skill development should be accessible to everyone,
                  regardless of age or background.
                </p>
              </ScrollReveal>
            </div>
          </div>

          {/* Mission & Vision Cards */}
          <div className="grid lg:grid-cols-2 gap-16">
            <ScrollReveal className="flex flex-col items-center space-y-8" delay={0} direction="left">
              <img
                src="/mission-goal-target-professional-business.jpg"
                alt="Our mission illustration"
                className="w-full max-w-xs h-56 object-cover rounded-2xl shadow-lg"
              />
              <div className="space-y-4 text-center">
                <h3 className="text-4xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed font-light">
                  To empower individuals with world-class education and practical skills that enable them to secure
                  meaningful employment, build successful careers, and achieve financial independence. We combine
                  high-quality faculty expertise with modern teaching methodologies to create transformative learning
                  experiences.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal className="flex flex-col items-center space-y-8" delay={150} direction="right">
              <img
                src="/vision-future-success-growth-professional-developm.jpg"
                alt="Our vision illustration"
                className="w-full max-w-xs h-56 object-cover rounded-2xl shadow-lg"
              />
              <div className="space-y-4 text-center">
                <h3 className="text-4xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed font-light">
                  To create a world where every individual, regardless of their starting point, can access quality
                  education and develop the skills needed to succeed. We envision a future where our learners become
                  confident, independent professionals who contribute meaningfully to society.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Key Values */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Expert Faculty", desc: "Highly qualified instructors with industry experience" },
              { title: "Modern Methods", desc: "Innovative teaching techniques and tools" },
              { title: "Quality Education", desc: "Comprehensive curriculum designed for success" },
              { title: "Career Growth", desc: "Pathways to employment and independence" },
            ].map((value, i) => (
              <ScrollReveal key={i} delay={i * 100} direction="up">
                <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 hover:shadow-lg transition h-full">
                  <h4 className="font-bold text-gray-900 dark:text-white text-xl mb-3">{value.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm font-light">{value.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}