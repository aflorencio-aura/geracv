
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useLanguage } from "@/context/LanguageContext";
import PersonalInfoForm from "@/components/forms/PersonalInfoForm";
import EducationForm from "@/components/forms/EducationForm";
import ExperienceForm from "@/components/forms/ExperienceForm";
import SkillsForm from "@/components/forms/SkillsForm";
import LanguagesForm from "@/components/forms/LanguagesForm";
import CertificationsForm from "@/components/forms/CertificationsForm";
import SocialLinksForm from "@/components/forms/SocialLinksForm";

interface ResumeFormTabsProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
}

export const ResumeFormTabs = ({ activeTab, setActiveTab }: ResumeFormTabsProps) => {
  const { t } = useLanguage();

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-4 md:grid-cols-7 w-full h-auto">
          <TabsTrigger value="personal" className="text-xs md:text-sm py-2">{t('resume.tabs.personal')}</TabsTrigger>
          <TabsTrigger value="education" className="text-xs md:text-sm py-2">{t('resume.tabs.education')}</TabsTrigger>
          <TabsTrigger value="experience" className="text-xs md:text-sm py-2">{t('resume.tabs.experience')}</TabsTrigger>
          <TabsTrigger value="skills" className="text-xs md:text-sm py-2">{t('resume.tabs.skills')}</TabsTrigger>
          <TabsTrigger value="languages" className="text-xs md:text-sm py-2">{t('resume.tabs.languages')}</TabsTrigger>
          <TabsTrigger value="certifications" className="text-xs md:text-sm py-2">{t('resume.tabs.certifications')}</TabsTrigger>
          <TabsTrigger value="social" className="text-xs md:text-sm py-2">{t('resume.tabs.social')}</TabsTrigger>
        </TabsList>
        
        <ScrollArea className="h-[calc(100vh-15rem)] md:h-[calc(100vh-12rem)]">
          <div className="p-4">
            <TabsContent value="personal">
              <PersonalInfoForm />
            </TabsContent>
            
            <TabsContent value="education">
              <EducationForm />
            </TabsContent>
            
            <TabsContent value="experience">
              <ExperienceForm />
            </TabsContent>
            
            <TabsContent value="skills">
              <SkillsForm />
            </TabsContent>
            
            <TabsContent value="languages">
              <LanguagesForm />
            </TabsContent>
            
            <TabsContent value="certifications">
              <CertificationsForm />
            </TabsContent>
            
            <TabsContent value="social">
              <SocialLinksForm />
            </TabsContent>
          </div>
        </ScrollArea>
      </Tabs>
    </div>
  );
};
