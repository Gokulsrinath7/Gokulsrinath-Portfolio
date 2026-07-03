export interface Skill {
  name: string;
  category: 'Language' | 'Framework' | 'Library' | 'API & Core' | 'Tool & Method';
  proficiency: number; // 0 to 100 for visual indicator
  experienceYears: number;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  client?: string;
  details: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  year?: string;
  badgeColor: string;
  id?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  specialization?: string;
}

export interface Language {
  name: string;
  proficiency: 'Native' | 'Fluent' | 'Conversational' | 'Basic';
}
