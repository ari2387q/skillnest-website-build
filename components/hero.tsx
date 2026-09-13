import ScrollReveal from "@/components/scroll-reveal"
import Button from "@/components/button"

export default function Hero() {
  return (
    <section className="relative bg-white dark:bg-slate-950 pt-32 pb-28 transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <ScrollReveal className="space-y-8" delay={0} direction="up">
            <span className="inline-block text-amber-600 dark:text-amber-400 font-semibold text-sm tracking-widest uppercase bg-amber-50 dark:bg-amber-950 px-4 py-1.5 rounded-full">
              Welcome to SkillNest
            </span>
            <h1 className="text-6xl lg:text-7xl font-bold leading-[1.1] text-gray-900 dark:text-white">
              Empower Your <span className="text-amber-500">Future</span>
            </h1>
            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-lg">
              Transform your life through world-class education, expert mentorship, and practical skill development.
              Achieve independence, success, and meaningful career growth at any age.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button href="/contact" size="lg">Get Started Today</Button>
              <Button href="/courses/spoken-english" variant="outline" size="lg">Explore Courses</Button>
            </div>
          </ScrollReveal>

          {/* Right Image */}
          <ScrollReveal className="flex justify-center lg:justify-end" delay={150} direction="right">
            <img
              src="/professional-education-learning-illustration-moder.jpg"
              alt="Education Illustration"
              className="w-full max-w-lg h-auto rounded-3xl shadow-2xl"
            />
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}