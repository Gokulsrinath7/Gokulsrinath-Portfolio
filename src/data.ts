import { Skill, Experience, Certification, Education, Language } from './types';

export const PERSONAL_INFO = {
  name: 'GOKULSRINATH G',
  title: 'Senior Front End Developer',
  subtitle: 'Specializing in Angular, TypeScript, & Reactive Architecture',
  email: 'gokulsrinath651@gmail.com',
  phone: '+91 88258 63017',
  location: 'Chennai, India',
  summary: 'Front-End Developer with 4+ years of professional experience in Angular, TypeScript, and RxJS, building scalable, high-performance, user-friendly web applications. Skilled in reusable components, performance optimization, reactive programming, and REST API integration. Adept at collaborating in Agile teams to deliver clean, maintainable solutions in the financial and banking sector.',
};

export const SKILLS: Skill[] = [
  // Languages
  { name: 'TypeScript', category: 'Language', proficiency: 92, experienceYears: 4 },
  { name: 'JavaScript (ES6+)', category: 'Language', proficiency: 95, experienceYears: 4 },
  { name: 'HTML 5 & CSS 3', category: 'Language', proficiency: 95, experienceYears: 4 },
  { name: 'SCSS / Sass', category: 'Language', proficiency: 88, experienceYears: 4 },

  // Frameworks
  { name: 'Angular (v10+ to 14+)', category: 'Framework', proficiency: 94, experienceYears: 4 },
  { name: 'Angular Material', category: 'Framework', proficiency: 90, experienceYears: 4 },

  // Libraries
  { name: 'RxJS & Observables', category: 'Library', proficiency: 93, experienceYears: 4 },
  { name: 'Reactive Forms', category: 'Library', proficiency: 92, experienceYears: 4 },

  // API & Core
  { name: 'RESTful API Integration', category: 'API & Core', proficiency: 90, experienceYears: 4 },
  { name: 'JSON Data Processing', category: 'API & Core', proficiency: 95, experienceYears: 4 },
  { name: 'Lazy Loading', category: 'API & Core', proficiency: 88, experienceYears: 4 },
  { name: 'Component-Based Architecture', category: 'API & Core', proficiency: 92, experienceYears: 4 },
  { name: 'Code Optimization', category: 'API & Core', proficiency: 87, experienceYears: 4 },

  // Tools & Methods
  { name: 'Visual Studio Code', category: 'Tool & Method', proficiency: 95, experienceYears: 4 },
  { name: 'Git & Version Control', category: 'Tool & Method', proficiency: 88, experienceYears: 4 },
  { name: 'Agile / Scrum Methodologies', category: 'Tool & Method', proficiency: 85, experienceYears: 4 },
  { name: 'Responsive Design & UI/UX', category: 'Tool & Method', proficiency: 90, experienceYears: 4 },
  { name: 'Cross-Browser Compatibility', category: 'Tool & Method', proficiency: 89, experienceYears: 4 },
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Leading Digital & Fintech Consulting Firm',
    role: 'Front-end Developer',
    period: 'DEC 2021 - PRESENT',
    location: 'Chennai, India',
    client: 'City Union Bank, Central Bank of India, TNSC Bank',
    details: [
      'Working as a Front-End Developer on the City Union Bank project, building scalable and high-performance web applications using Angular (v10+).',
      'Developed feature-rich Angular applications using best coding practices, optimization techniques, and browser caching.',
      'Designed and implemented responsive, mobile-first user interfaces ensuring seamless experience across devices and screen sizes.',
      'Built reusable Angular components, modules, and services following component-based and modular architecture.',
      'Integrated RESTful APIs and handled JSON data to develop dynamic, data-driven applications and banking dashboards.',
      'Implemented role-based access control (RBAC) using Angular route guards and services for secure user management.',
      'Developed complex banking modules such as fund transfer, transaction history, and user profile features.',
      'Used RxJS and Observables to manage asynchronous operations and data streams efficiently.',
      'Migrated legacy applications to Angular 14, improving performance, scalability, and maintainability.',
      'Applied lazy loading and other performance optimization techniques to enhance application performance.',
      'Worked with Git for version control and collaborated in Agile/Scrum environments.',
      'Participated in sprint planning, code reviews, and UI/UX discussions to deliver high-quality solutions.',
      'Utilized extensive experience with Reactive Forms, form validation, Angular lifecycle hooks, and change detection strategies.',
      'Ensured cross-browser compatibility and followed best practices for clean, maintainable, and scalable code.'
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'AWS Certified Solutions Architect - Associate',
    issuer: 'Amazon Web Services (AWS)',
    year: '2023',
    badgeColor: 'from-amber-500 to-orange-600',
    id: 'AWS-ASA'
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    year: '2022',
    badgeColor: 'from-blue-500 to-indigo-600',
    id: 'AWS-CCP'
  },
  {
    title: 'Robotics Automation Certification',
    issuer: 'Advanced Tech Academy / Industry Certified',
    year: '2022',
    badgeColor: 'from-cyan-500 to-teal-600',
    id: 'ROB-AUTO'
  },
  {
    title: 'HTML5 Specialist Certification',
    issuer: 'W3Schools / Industry Certified',
    year: '2021',
    badgeColor: 'from-orange-400 to-red-500',
    id: 'HTML5-SPEC'
  },
  {
    title: 'Web Design & Development',
    issuer: 'Certified Professional Course',
    year: '2021',
    badgeColor: 'from-purple-500 to-pink-600',
    id: 'WEB-DEV'
  }
];

export const EDUCATIONS: Education[] = [
  {
    degree: 'M.B.A. SYSTEM MANAGEMENT',
    institution: 'Madras University',
    period: '2022 - 2024',
    specialization: 'Information Systems & Operations Management'
  },
  {
    degree: 'B.E. COMPUTER SCIENCE AND ENGINEERING',
    institution: 'SRM Easwari Engineering College',
    period: '2017 - 2021',
    specialization: 'Software Engineering & Core Computing'
  }
];

export const LANGUAGES: Language[] = [
  { name: 'Tamil', proficiency: 'Native' },
  { name: 'English', proficiency: 'Fluent' }
];
