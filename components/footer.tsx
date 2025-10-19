export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-slate-950 text-white py-24 transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid md:grid-cols-4 gap-16 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 font-bold text-2xl mb-6">
              <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center font-bold">S</div>
              <span>SkillNest</span>
            </div>
            <p className="text-gray-400 text-base leading-relaxed">Empowering Communication, Confidence & Skills</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-8 text-lg">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a href="/" className="hover:text-amber-400 transition text-base">
                  Home
                </a>
              </li>
              <li>
                <a href="/courses/spoken-english" className="hover:text-amber-400 transition text-base">
                  Courses
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-amber-400 transition text-base">
                  Contact
                </a>
              </li>
              <li>
                <a href="/payment" className="hover:text-amber-400 transition text-base">
                  Payment
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-8 text-lg">Contact Us</h4>
            <ul className="space-y-4 text-gray-400 text-base">
              <li>Phone: 8891571233</li>
              <li>Phone: 9706108462</li>
              <li>Email: info@skillnest.org.in</li>
              <li>Website: skillnest.org.in</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-bold mb-8 text-lg">Follow Us</h4>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition text-2xl font-bold">
                f
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition text-2xl font-bold">
                X
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition text-2xl font-bold">
                in
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition text-2xl font-bold">
                ig
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-base gap-8">
            <p>&copy; 2025 SkillNest. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-amber-400 transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-amber-400 transition">
                Terms of Service
              </a>
              <a href="#" className="hover:text-amber-400 transition">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
