import ScrollReveal from "@/components/scroll-reveal"

export default function Mission() {
  return (
    <section className="py-32 bg-gray-50 dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="space-y-28">

          {/* Section Header */}
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <ScrollReveal delay={0} direction="up">
              <span className="inline-block text-amber-600 dark:text-amber-400 font-bold text-sm tracking-widest uppercase bg-amber-100/60 dark:bg-amber-900/30 px-5 py-2 rounded-full mb-3">
                Our Purpose
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
                Our Mission &amp; Vision
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={150} direction="up">
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto text-center">
                We believe that quality education and skill development should be accessible to everyone,
                regardless of age or background.
              </p>
            </ScrollReveal>
          </div>

          {/* Mission & Vision Cards */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <ScrollReveal className="flex flex-col items-center p-10 md:p-14 bg-white dark:bg-slate-800 rounded-3xl border border-gray-100 dark:border-slate-700 shadow-sm space-y-8" delay={0} direction="up">
              <img
                src="/mission-goal-target-professional-business.jpg"
                alt="Our mission illustration"
                className="w-full max-w-xs h-60 object-cover rounded-2xl shadow-md"
              />
              <div className="space-y-4 text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-center">
                  To empower individuals with world-class education and practical skills that enable them to secure
                  meaningful employment, build successful careers, and achieve financial independence. We combine
                  high-quality faculty expertise with modern teaching methodologies to create transformative learning
                  experiences.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal className="flex flex-col items-center p-10 md:p-14 bg-white dark:bg-slate-800 rounded-3xl border border-gray-100 dark:border-slate-700 shadow-sm space-y-8" delay={150} direction="up">
              <img
                src="/vision-future-success-growth-professional-developm.jpg"
                alt="Our vision illustration"
                className="w-full max-w-xs h-60 object-cover rounded-2xl shadow-md"
              />
              <div className="space-y-4 text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-center">
                  To create a world where every individual, regardless of their starting point, can access quality
                  education and develop the skills needed to succeed. We envision a future where our learners become
                  confident, independent professionals who contribute meaningfully to society.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Key Values */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Expert Faculty", desc: "Highly qualified instructors with industry experience" },
              { title: "Modern Methods", desc: "Innovative teaching techniques and interactive tools" },
              { title: "Quality Education", desc: "Comprehensive curriculum designed for tangible success" },
              { title: "Career Growth", desc: "Pathways to employment, confidence, and independence" },
            ].map((value, i) => (
              <ScrollReveal key={i} delay={i * 100} direction="up">
                <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl border border-gray-100 dark:border-slate-700 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col items-center justify-center">
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/40 rounded-2xl flex items-center justify-center mb-5 text-amber-600 dark:text-amber-400 font-bold text-xl">
                    ★
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-xl mb-3 text-center">{value.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm text-center">{value.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}