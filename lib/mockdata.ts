import chefs from "../public/Wallpaper/chefs.jpg"
import university from "../public/Wallpaper/university.jpg"
import orphanage from '../public/Wallpaper/orphanage.jpg'
import fintech from '../public/Wallpaper/fintech.jpg'

export interface ProjectData {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveLink: string;
  codeLink: string;
}

export const projectsData = [
  {
    id: 1,
    title: 'Fintech Payment Gateway',
    description: 'A secure payment processing platform handling thousands of transactions daily.',
    tech: ['React Native', 'Node.js', 'PostgreSQL', 'Stripe API'],
    image: {fintech}, 
    liveLink: 'https://github.com/mathewsoniala/Trustloop_contributions',
    codeLink: 'https://github.com/mathewsoniala/Trustloop_contributions',
  },
  {
    id: 2,
    title: 'University Fee Management System',
    description: 'Analytics dashboard for online stores with real-time inventory and sales tracking.',
    tech: ['Next.js','CSS', 'Prisma', 'mySQL'],
    image: {university},
    liveLink: 'https://github.com/mathewsoniala/University-Fee-Management-System',
    codeLink: 'https://github.com/mathewsoniala/University-Fee-Management-System',
  },
  {
    id: 3,
    title: 'Orphanage Management System',
    description: 'Cross-platform mobile app for fintech clients - includes biometric login and QR payments.',
    tech: ['Next.js', 'prisma', 'Node.js', 'mySQL'],
    image: {orphanage},
    liveLink: 'https://github.com/mathewsoniala/armourorphanage',
    codeLink: 'https://github.com/mathewsoniala/armourorphanage',
  },
  {
    id: 4,
    title: 'RESTful API for SaaS Platform',
    description: 'Scalable backend API supporting user auth, role-based access, and file uploads.',
    tech: ['React', 'Prisma', 'mySQL', 'Node.js'],
    image: {chefs},
    liveLink: 'https://github.com/mathewsoniala/CartyChefs',
    codeLink: 'https://github.com/mathewsoniala/CartyChefs',
  },
]