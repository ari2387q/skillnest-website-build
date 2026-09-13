# SkillNest

A modern, professional educational platform website built with Next.js, TypeScript, and Tailwind CSS.

**Status**: This startup has concluded. The website remains deployed on Vercel for demonstration purposes.

## Overview

SkillNest is a comprehensive educational platform offering skill development courses ranging from spoken English training to AI introduction. The application features responsive design, dynamic course management, and seamless user experience.

## Technology Stack

- **Framework**: Next.js 14+ with React
- **Language**: TypeScript
- **Styling**: Tailwind CSS, PostCSS
- **Components**: Radix UI
- **Icons**: Lucide React
- **Backend Integration**: Firebase Admin SDK
- **Deployment**: Vercel

## Project Architecture

\\\mermaid
graph TB
    subgraph App["App Directory"]
        Layout["layout.tsx"]
        Page["page.tsx"]
        Globals["globals.css"]
        API["api/"]
        Courses["courses/[slug]/"]
        Contact["contact/"]
        Payment["payment/"]
    end
    
    subgraph Components["Components"]
        Nav["navigation.tsx"]
        Hero["hero.tsx"]
        Mission["mission.tsx"]
        Features["features.tsx"]
        Footer["footer.tsx"]
        Button["button.tsx"]
        ScrollReveal["scroll-reveal.tsx"]
        Theme["theme-provider.tsx"]
    end
    
    subgraph Library["Library"]
        CourseData["course-data.ts"]
        Firebase["firebaseAdmin.ts"]
        Utils["utils.ts"]
    end
    
    subgraph Assets["Public Assets"]
        Images["*.jpg, *.png, *.svg"]
    end
    
    App --> Components
    App --> Library
    App --> Assets
    Components --> Library
\\\

## Installation

\\\ash
git clone <repository-url>
cd skillnest-website-build

npm install

npm run dev
\\\

## Available Commands

| Command | Purpose |
|---------|---------|
| \
pm run dev\ | Start development server on port 3000 |
| \
pm run build\ | Create optimized production build |
| \
pm start\ | Run production server |
| \
pm run lint\ | Execute ESLint checks |

## Core Features

- Responsive design across all device sizes
- Server-side rendering with Next.js App Router
- Type-safe implementation with TypeScript
- Dark mode support with theme switching
- Smooth scroll animations and transitions
- Dynamic course detail pages with curriculum
- API endpoints for contact and enrollment
- Optimized images and lazy loading
- Accessible markup with semantic HTML

## Routes

| Route | Purpose |
|-------|---------|
| \/\ | Home page |
| \/courses/[slug]\ | Individual course page |
| \/contact\ | Contact page |
| \/payment\ | Payment page |
| \/api/contact\ | Contact form endpoint |
| \/api/enroll\ | Enrollment endpoint |
| \/api/health\ | Health check endpoint |

## Courses

- Spoken English Training
- Public Speaking & Personality Development
- Soft Skills & Motivation Training
- IQ Development
- Tuition (Class 4-10)
- Playschool & Nursery
- SSC Coaching
- Introduction to AI
- Hostel & Transportation Facilities

## Performance

- Next.js optimized image handling
- Automatic code splitting by route
- CSS tree-shaking via Tailwind
- Server-side rendering where applicable
- Minimal JavaScript bundle

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All rights reserved.
