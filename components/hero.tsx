export default function Hero() {
  return (
    <section className="relative bg-white dark:bg-slate-950 pt-40 pb-48 transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-12">
            <div className="space-y-8">
              <span className="text-amber-600 dark:text-amber-400 font-semibold text-sm tracking-widest uppercase">
                Welcome to SkillNest
              </span>
              <h1 className="text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight">
                Empower Your <span className="text-amber-500">Future</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl font-light">
                Transform your life through world-class education, expert mentorship, and practical skill development.
                Achieve independence, success, and meaningful career growth at any age.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <button className="px-12 py-5 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition font-semibold text-lg shadow-lg hover:shadow-xl">
                Explore Our Courses
              </button>
              <button className="px-12 py-5 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-full hover:border-amber-500 hover:text-amber-600 dark:hover:text-amber-400 transition font-semibold text-lg">
                Get in Touch
              </button>
            </div>
          </div>

          {/* Right Image - Centered */}
          <div className="hidden lg:flex justify-center items-center">
            <img
              src="/professional-education-learning-illustration-moder.jpg"
              alt="Education and learning illustration"
              className="w-full max-w-md h-auto rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
