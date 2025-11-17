export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-slate-950 text-white py-24 transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid md:grid-cols-4 gap-16 mb-16">
          {/* Brand */}
          <div>
            <div className=" flex items-center justify-center gap-3 font-bold text-2xl mb-6">
              <img src="/skillnest logo.jpg" alt="SkillNest Logo" className="w-25 h-20 pt-4" />
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
                  Courses & Facilities
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-amber-400 transition text-base">
                  Contact
                </a>
              </li>
              
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-8 text-lg">Contact Us</h4>
            <ul className="space-y-2 text-gray-400 text-base">
              <li>Phone: +91 8891571233</li>
              <li>Phone: +91 9706108462</li>
              <li>Email: info@skillnest.org.in</li>
              <li>Website: skillnest.org.in</li>
            </ul>
          </div>

          {/* Follow Us */}
          
        </div>

        <div className="w-full bg-gray-100 text-gray-700 text-center py-7 flex items-center justify-center">
  <div className="text-sm ">
    © 2025 SkillNest. All rights reserved. <br />
    The content on this website is for informational and educational purposes only. We do not collect any personal user data. For inquiries, please contact us via the Contact page.
  </div>
</div>
      </div>
    </footer>
  )
}
