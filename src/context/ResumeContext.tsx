
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Resume } from '@/types/resume';
import { getEmptyResume } from '@/lib/resume-utils';
import { useToast } from "@/components/ui/use-toast";

interface ResumeContextType {
  resume: Resume;
  updatePersonalInfo: (info: Partial<Resume['personalInfo']>) => void;
  updateEducation: (educations: Resume['education']) => void;
  updateExperience: (experiences: Resume['experience']) => void;
  updateSkills: (skills: Resume['skills']) => void;
  updateLanguages: (languages: Resume['languages']) => void;
  updateCertifications: (certifications: Resume['certifications']) => void;
  updateSocialLinks: (socialLinks: Resume['socialLinks']) => void;
  resetResume: () => void;
  addEducation: (education: Resume['education'][0]) => void;
  removeEducation: (id: string) => void;
  addExperience: (experience: Resume['experience'][0]) => void;
  removeExperience: (id: string) => void;
  addSkill: (skill: Resume['skills'][0]) => void;
  removeSkill: (id: string) => void;
  addLanguage: (language: Resume['languages'][0]) => void;
  removeLanguage: (id: string) => void;
  addCertification: (certification: Resume['certifications'][0]) => void;
  removeCertification: (id: string) => void;
  addSocialLink: (socialLink: Resume['socialLinks'][0]) => void;
  removeSocialLink: (id: string) => void;
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export const ResumeProvider = ({ children }: { children: ReactNode }) => {
  const [resume, setResume] = useState<Resume>(getEmptyResume());
  const { toast } = useToast();

  const updatePersonalInfo = (info: Partial<Resume['personalInfo']>) => {
    setResume(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, ...info }
    }));
  };

  const updateEducation = (educations: Resume['education']) => {
    setResume(prev => ({ ...prev, education: educations }));
  };

  const updateExperience = (experiences: Resume['experience']) => {
    setResume(prev => ({ ...prev, experience: experiences }));
  };

  const updateSkills = (skills: Resume['skills']) => {
    setResume(prev => ({ ...prev, skills: skills }));
  };

  const updateLanguages = (languages: Resume['languages']) => {
    setResume(prev => ({ ...prev, languages: languages }));
  };

  const updateCertifications = (certifications: Resume['certifications']) => {
    setResume(prev => ({ ...prev, certifications: certifications }));
  };

  const updateSocialLinks = (socialLinks: Resume['socialLinks']) => {
    setResume(prev => ({ ...prev, socialLinks: socialLinks }));
  };

  const resetResume = () => {
    setResume(getEmptyResume());
    toast({
      title: "Resume reset",
      description: "Your resume has been reset to a blank state.",
    });
  };

  // Helper functions for adding/removing items
  const addEducation = (education: Resume['education'][0]) => {
    setResume(prev => ({
      ...prev,
      education: [...prev.education, education]
    }));
  };

  const removeEducation = (id: string) => {
    setResume(prev => ({
      ...prev,
      education: prev.education.filter(edu => edu.id !== id)
    }));
  };

  const addExperience = (experience: Resume['experience'][0]) => {
    setResume(prev => ({
      ...prev,
      experience: [...prev.experience, experience]
    }));
  };

  const removeExperience = (id: string) => {
    setResume(prev => ({
      ...prev,
      experience: prev.experience.filter(exp => exp.id !== id)
    }));
  };

  const addSkill = (skill: Resume['skills'][0]) => {
    setResume(prev => ({
      ...prev,
      skills: [...prev.skills, skill]
    }));
  };

  const removeSkill = (id: string) => {
    setResume(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill.id !== id)
    }));
  };

  const addLanguage = (language: Resume['languages'][0]) => {
    setResume(prev => ({
      ...prev,
      languages: [...prev.languages, language]
    }));
  };

  const removeLanguage = (id: string) => {
    setResume(prev => ({
      ...prev,
      languages: prev.languages.filter(lang => lang.id !== id)
    }));
  };

  const addCertification = (certification: Resume['certifications'][0]) => {
    setResume(prev => ({
      ...prev,
      certifications: [...prev.certifications, certification]
    }));
  };

  const removeCertification = (id: string) => {
    setResume(prev => ({
      ...prev,
      certifications: prev.certifications.filter(cert => cert.id !== id)
    }));
  };

  const addSocialLink = (socialLink: Resume['socialLinks'][0]) => {
    setResume(prev => ({
      ...prev,
      socialLinks: [...prev.socialLinks, socialLink]
    }));
  };

  const removeSocialLink = (id: string) => {
    setResume(prev => ({
      ...prev,
      socialLinks: prev.socialLinks.filter(link => link.id !== id)
    }));
  };

  return (
    <ResumeContext.Provider value={{
      resume,
      updatePersonalInfo,
      updateEducation,
      updateExperience,
      updateSkills,
      updateLanguages,
      updateCertifications,
      updateSocialLinks,
      resetResume,
      addEducation,
      removeEducation,
      addExperience,
      removeExperience,
      addSkill,
      removeSkill,
      addLanguage,
      removeLanguage,
      addCertification,
      removeCertification,
      addSocialLink,
      removeSocialLink
    }}>
      {children}
    </ResumeContext.Provider>
  );
};

export const useResume = () => {
  const context = useContext(ResumeContext);
  if (context === undefined) {
    throw new Error('useResume must be used within a ResumeProvider');
  }
  return context;
};
