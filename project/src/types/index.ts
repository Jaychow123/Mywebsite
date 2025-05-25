export interface NavLink {
  id: string;
  title: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  cgpa: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Certification {
  title: string;
  issuer: string;
}

export interface CloudBadge {
  title: string;
  image: string;
}

export interface AIQuote {
  quote: string;
  author: string;
  role: string;
  image: string;
}