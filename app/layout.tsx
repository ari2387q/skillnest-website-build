import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SkillNest - Empowering Communication, Confidence & Skills",
  description: "Transform your future with SkillNest's comprehensive skill development courses",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-slate-950 text-gray-900 dark:text-gray-50 transition-colors`}>
        <ThemeProvider>
          <header className="w-full">
            {/* Import and use your Navigation component here */}
          </header>

          <main className="max-w-screen-xl mx-auto px-4">
            {children}
          </main>

          <footer className="w-full">
            {/* Import and use your Footer component here */}
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
