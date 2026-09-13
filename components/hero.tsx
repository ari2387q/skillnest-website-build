import ScrollReveal from "@/components/scroll-reveal"

export default function Hero() {
  return (
    <section className="relative bg-white dark:bg-slate-950 pt-32 pb-24 transition-colors overflow-hidden">
      <div className="w-full px-8 lg:px-20 xl:px-32 2xl:px-48">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <ScrollReveal className="space-y-8" delay={0} direction="up">
            <span className="text-amber-600 dark:text-amber-400 font-semibold text-sm tracking-widest uppercase">
              Welcome to SkillNest
            </span>
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight text-gray-900 dark:text-white">
              Empower Your <span className="text-amber-500">Future</span>
            </h1>
            <p className="text-lg xl:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
              Transform your life through world-class education, expert mentorship, and practical skill development. <br />
              Achieve independence, success, and meaningful career growth at any age.
            </p>
          </ScrollReveal>

          {/* Right Image */}
          <ScrollReveal className="flex justify-center lg:justify-end" delay={150} direction="right">
            <img
              src="/professional-education-learning-illustration-moder.jpg"
              alt="Education Illustration"
              className="w-full max-w-lg h-auto rounded-3xl shadow-xl"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

