
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
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe API'],
    image: 'https://via.placeholder.com/400x240?text=Payment+Gateway', 
    liveLink: '#',
    codeLink: '#',
  },
  {
    id: 2,
    title: 'E-commerce SaaS Dashboard',
    description: 'Analytics dashboard for online stores with real-time inventory and sales tracking.',
    tech: ['Next.js', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
    image: 'https://via.placeholder.com/400x240?text=Ecommerce+Dashboard',
    liveLink: '#',
    codeLink: '#'
  },
  {
    id: 3,
    title: 'Mobile Banking App (React Native)',
    description: 'Cross-platform mobile app for fintech clients - includes biometric login and QR payments.',
    tech: ['React Native', 'Expo', 'Node.js', 'MongoDB'],
    image: 'https://via.placeholder.com/400x240?text=Mobile+App',
    liveLink: '#',
    codeLink: '#',
  },
  {
    id: 4,
    title: 'RESTful API for SaaS Product',
    description: 'Scalable backend API supporting user auth, role-based access, and file uploads.',
    tech: ['Python', 'Django', 'PostgreSQL', 'Docker'],
    image: 'https://via.placeholder.com/400x240?text=API+Project',
    liveLink: '#',
    codeLink: '#',
  },
]