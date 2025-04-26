
import { v4 as uuidv4 } from 'uuid';
import { Resume, Education, Experience, Skill, Language, Certification, SocialLink } from '@/types/resume';

// Generate unique ID
export const generateId = () => uuidv4();

// Initial/empty state for a new resume
export const getEmptyResume = (): Resume => ({
  personalInfo: {
    fullName: '',
    jobTitle: '',
    email: '',
    phone: '',
    address: '',
    summary: '',
  },
  education: [],
  experience: [],
  skills: [],
  languages: [],
  certifications: [],
  socialLinks: [],
});

// Create empty items for forms
export const createEmptyEducation = (): Education => ({
  id: generateId(),
  institution: '',
  degree: '',
  field: '',
  startDate: '',
  endDate: '',
  description: '',
});

export const createEmptyExperience = (): Experience => ({
  id: generateId(),
  company: '',
  position: '',
  location: '',
  startDate: '',
  endDate: '',
  currentlyWorking: false,
  description: '',
});

export const createEmptySkill = (): Skill => ({
  id: generateId(),
  name: '',
  level: 3,
});

export const createEmptyLanguage = (): Language => ({
  id: generateId(),
  name: '',
  proficiency: 'Intermediate',
});

export const createEmptyCertification = (): Certification => ({
  id: generateId(),
  name: '',
  issuer: '',
  date: '',
  url: '',
});

export const createEmptySocialLink = (): SocialLink => ({
  id: generateId(),
  platform: 'LinkedIn',
  url: '',
});

// Export resume as PDF
export const exportAsPDF = async (elementId: string, fileName: string) => {
  try {
    const { default: html2pdf } = await import('html2pdf.js');
    
    const element = document.getElementById(elementId);
    if (!element) throw new Error("Element not found");
    
    const opt = {
      margin: [10, 10, 10, 10],
      filename: `${fileName}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    
    html2pdf().from(element).set(opt).save();
    return true;
  } catch (error) {
    console.error('Failed to export PDF:', error);
    return false;
  }
};

// Language proficiency options
export const languageProficiencyOptions = [
  'Beginner',
  'Elementary',
  'Intermediate', 
  'Advanced',
  'Fluent',
  'Native'
];

// Social media platform options
export const socialPlatformOptions = [
  'LinkedIn',
  'GitHub',
  'Portfolio',
  'Twitter',
  'Other'
];
