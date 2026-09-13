import ScrollReveal from "@/components/scroll-reveal"

export default function Mission() {
  return (
    <section className="py-48 bg-gray-50 dark:bg-slate-900 transition-colors">
      <div className="w-full px-8 lg:px-20 xl:px-32 2xl:px-48">
        <div className="space-y-32">
          {/* Header */}
          <div className="w-full min-h-screen flex items-center justify-center px-4">
            <div className="text-center space-y-8 max-w-4xl mx-auto">
              <ScrollReveal delay={0} direction="up">
                <h2 className="text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white leading-tight">
                  Our Mission &amp; Vision
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={150} direction="up">
                <p className="text-2xl text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                  We believe that quality education and skill development should be accessible to everyone, regardless of
                  age or background.
                </p>
              </ScrollReveal>
            </div>
          </div>

          {/* Mission & Vision Cards with Images */}
          <div className="grid lg:grid-cols-2 gap-24">
            {/* Mission */}
            <ScrollReveal className="space-y-10 flex flex-col items-center" delay={0} direction="left">
              <img
                src="/mission-goal-target-professional-business.jpg"
                alt="Our mission illustration"
                className="w-full max-w-sm h-auto rounded-3xl shadow-lg"
              />
              <div className="space-y-6 pt-8 text-center">
                <h3 className="text-5xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-light">
                  To empower individuals with world-class education and practical skills that enable them to secure
                  meaningful employment, build successful careers, and achieve financial independence. We combine
                  high-quality faculty expertise with modern teaching methodologies to create transformative learning
                  experiences.
                </p>
              </div>
            </ScrollReveal>

            {/* Vision */}
            <ScrollReveal className="space-y-10 flex flex-col items-center" delay={150} direction="right">
              <img
                src="/vision-future-success-growth-professional-developm.jpg"
                alt="Our vision illustration"
                className="w-full max-w-sm h-auto rounded-3xl shadow-lg"
              />
              <div className="space-y-6 pt-8 text-center">
                <h3 className="text-5xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-light">
                  To create a world where every individual, regardless of their starting point, can access quality
                  education and develop the skills needed to succeed. We envision a future where our learners become
                  confident, independent professionals who contribute meaningfully to society.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Key Values */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 pt-20">
            {[
              { title: "Expert Faculty", desc: "Highly qualified instructors with industry experience" },
              { title: "Modern Methods", desc: "Innovative teaching techniques and tools" },
              { title: "Quality Education", desc: "Comprehensive curriculum designed for success" },
              { title: "Career Growth", desc: "Pathways to employment and independence" },
            ].map((value, i) => (
              <ScrollReveal key={i} delay={i * 100} direction="up">
                <div className="space-y-9 p-12 bg-white dark:bg-slate-800 rounded-5xl border border-gray-200 dark:border-slate-700 hover:shadow-xl transition h-full">
                  <h4 className="font-bold text-gray-900 dark:text-white text-4xl">{value.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg font-light">{value.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
