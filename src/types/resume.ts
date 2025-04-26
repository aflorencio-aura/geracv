
export interface PersonalInfo {
  fullName: string;
  jobTitle: string;
  email: string;
  phone: string;
  address?: string;
  summary: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location?: string;
  startDate: string;
  endDate: string;
  currentlyWorking?: boolean;
  description: string;
}

export interface Skill {
  id: string;
  name: string;
  level?: number;
}

export interface Language {
  id: string;
  name: string;
  proficiency: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  url?: string;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
}

export interface Resume {
  personalInfo: PersonalInfo;
  education: Education[];
  experience: Experience[];
  skills: Skill[];
  languages: Language[];
  certifications: Certification[];
  socialLinks: SocialLink[];
}
