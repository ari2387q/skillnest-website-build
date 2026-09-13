# SkillNest - Educational Platform Website

## Overview

**SkillNest** is a modern, professionally designed educational platform website built to showcase comprehensive skill development courses including Spoken English Training, Public Speaking, Personality Development, IQ Development, Tuition, Playschool, SSC Coaching, and AI Introduction. The platform emphasizes quality education, expert mentorship, and practical skill development.

> **Project Status**: This project was developed as part of an educational startup initiative that has since concluded. The Vercel deployment remains active for demonstration and portfolio purposes.

## 🎯 Key Features

- **Responsive Design**: Fully responsive across all device sizes (mobile, tablet, desktop)
- **Modern UI/UX**: Tailored with Tailwind CSS for a clean, professional aesthetic
- **Dynamic Course Pages**: Individual course detail pages with curriculum, benefits, and enrollment CTAs
- **Scroll Animations**: Smooth scroll reveal animations for enhanced user engagement
- **SEO Optimized**: Proper metadata, semantic HTML, and Next.js best practices
- **Dark Mode Support**: Built-in theme switching with seamless light/dark mode transitions
- **Accessibility**: WCAG compliant with proper contrast ratios and semantic markup
- **Performance Optimized**: Optimized images, lazy loading, and efficient component architecture

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 14+](https://nextjs.org/) - React meta-framework with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe development
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **UI Components**: [Radix UI](https://www.radix-ui.com/) - Accessible component primitives
- **Animations**: Custom CSS animations with scroll reveal effects
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful icon library

### Backend & Services
- **Authentication**: Firebase Admin SDK (prepared for backend integration)
- **API Routes**: Next.js API routes for contact and enrollment forms
- **Image Optimization**: Cloudinary integration for image handling

### Development Tools
- **Package Manager**: npm
- **Build Tool**: Next.js built-in build system
- **Linting**: ESLint configuration
- **Type Checking**: TypeScript compiler

### Deployment
- **Hosting**: [Vercel](https://vercel.com/) - Optimized for Next.js applications
- **Live URL**: Available on Vercel platform

## 📁 Project Structure

```
skillnest-website-build/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with theme provider
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Global styles
│   ├── api/                     # API routes
│   │   ├── contact/route.ts     # Contact form endpoint
│   │   ├── enroll/route.ts      # Enrollment endpoint
│   │   └── health/route.ts      # Health check endpoint
│   ├── contact/page.tsx         # Contact page
│   ├── courses/
│   │   └── [slug]/page.tsx      # Dynamic course detail pages
│   └── payment/page.tsx         # Payment page
│
├── components/                   # Reusable React components
│   ├── navigation.tsx           # Header navigation with dropdown
│   ├── hero.tsx                 # Hero section with CTA
│   ├── mission.tsx              # Mission & vision section
│   ├── features.tsx             # Features showcase grid
│   ├── courses-preview.tsx      # Featured courses
│   ├── footer.tsx               # Footer with links
│   ├── button.tsx               # Custom button component
│   ├── scroll-reveal.tsx        # Scroll animation wrapper
│   └── theme-provider.tsx       # Dark mode theme context
│
├── lib/                          # Utilities and data
│   ├── course-data.ts           # Course content and metadata
│   ├── firebaseAdmin.ts         # Firebase configuration
│   └── utils.ts                 # Helper functions
│
├── public/                       # Static assets
│   └── *.{jpg,png,svg}          # Course and brand images
│
├── styles/                       # Additional stylesheets (if needed)
│
├── tsconfig.json                # TypeScript configuration
├── next.config.mjs              # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── postcss.config.mjs           # PostCSS configuration
└── components.json              # Component library config
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd skillnest-website-build
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env.local file with necessary configurations
   NEXT_PUBLIC_FIREBASE_API_KEY=your_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
   # ... other Firebase and service configurations
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```
   Visit [http://localhost:3000](http://localhost:3000) to view the application.

## 📦 Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run ESLint
npm run lint

# Type checking
npx tsc --noEmit
```

## 🎨 Design Highlights

### Color Scheme
- **Primary**: Amber (#F59E0B) - Energetic and professional
- **Dark Mode**: Slate-950 - Modern dark theme
- **Accents**: Gray scale for hierarchy and contrast

### Typography
- **Headings**: Bold, up to 7xl for hero sections
- **Body**: Balanced line height and letter spacing for readability
- **Font**: Inter from Google Fonts

### Layout & Spacing
- **Max Width**: 7xl (80rem) for optimal content width
- **Responsive Padding**: `px-6 sm:px-8 lg:px-12`
- **Consistent Gaps**: 16-32px for grid layouts
- **Vertical Rhythm**: 24-40px for section spacing

## 🌐 Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Home page with hero, features, mission |
| `/courses/[slug]` | Individual course detail pages |
| `/contact` | Contact form page |
| `/payment` | Payment integration page |
| `/api/contact` | Contact form submission endpoint |
| `/api/enroll` | Course enrollment endpoint |
| `/api/health` | Health check endpoint |

## 🔒 Security & Best Practices

- ✅ TypeScript for type safety
- ✅ Environment variable protection
- ✅ API route validation
- ✅ CORS configuration ready
- ✅ Input sanitization prepared
- ✅ Responsive image optimization
- ✅ SEO metadata included

## 📊 Performance Optimizations

- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic route-based code splitting
- **CSS Optimization**: Tailwind's tree-shaking for minimal bundle size
- **Font Optimization**: Google Fonts with Next.js font optimization
- **Scroll Animations**: GPU-accelerated CSS transitions
- **Minimal JavaScript**: Server-side rendering where possible

## 🌙 Theme Support

The application includes built-in dark mode support:
- Automatic theme detection based on system preferences
- Manual theme toggle via theme provider
- Persistent theme preference storage
- Smooth transitions between themes

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (base styles)
- **Tablet**: 640px - 1024px (sm: and md: breakpoints)
- **Desktop**: 1024px+ (lg: and xl: breakpoints)

## 🔄 Recent Improvements

- ✅ Fixed layout and centering issues across all components
- ✅ Optimized footer 3-column grid layout
- ✅ Responsive navigation logo sizing
- ✅ Enhanced button spacing and visibility
- ✅ Improved features section grid distribution
- ✅ Significant padding and spacing enhancements for better UX
- ✅ Consistent horizontal and vertical rhythm

## 📝 Git Workflow

The project maintains a clean git history with descriptive commit messages:
```bash
git log --oneline
# Latest commits include layout fixes and spacing improvements
```

## 🔐 API Endpoints

### Contact Form
- **POST** `/api/contact`
- Handles contact form submissions with validation

### Course Enrollment
- **POST** `/api/enroll`
- Processes course enrollment requests

### Health Check
- **GET** `/api/health`
- Returns API status for monitoring

## 🚀 Deployment

### Vercel Deployment
The project is optimized for Vercel deployment:

```bash
# Deploy to Vercel
vercel deploy

# View deployment
vercel --prod
```

**Current Deployment**: [https://skillnest-vercel-deployment-url.vercel.app](https://vercel.com/)

## 📚 Course Content Structure

Each course includes:
- Title and subtitle
- Comprehensive overview
- Key benefits (itemized)
- Detailed curriculum with numbered topics
- Target audience description
- Call-to-action buttons for enrollment

Course data is centrally managed in `lib/course-data.ts` for easy updates.

## 🎓 Courses Offered

1. **Spoken English Training** - Communication and fluency development
2. **Public Speaking & Personality Development** - Confidence building
3. **Soft Skills & Motivation Training** - Professional development
4. **IQ Development** - Cognitive enhancement
5. **Tuition (Class 4 to 10)** - Academic support
6. **Playschool & Nursery** - Early childhood education
7. **SSC Coaching** - Competitive exam preparation
8. **Introduction to AI** - Technology and innovation
9. **Hostel & Transportation Facilities** - Student accommodation services

## 📞 Contact & Support

- **Email**: info@skillnest.org.in
- **Phone**: +91 8891571233, +91 9706108462
- **Website**: skillnest.org.in

## 📄 License

This project is proprietary and confidential. All rights reserved.

## 🤝 Contributing

While this project is concluded, the codebase serves as a reference for:
- Next.js best practices
- Tailwind CSS implementation
- React component architecture
- Responsive design patterns
- TypeScript usage in production applications

## 📌 Version

**Current Version**: 1.0.0  
**Last Updated**: September 2024

---

**Built with ❤️ using modern web technologies**  
*For portfolio demonstration and educational reference purposes*
