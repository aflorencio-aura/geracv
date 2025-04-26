
import { useState, useEffect } from 'react';
import { useResume } from '@/context/ResumeContext';
import { useLanguage } from '@/context/LanguageContext';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PersonalInfoForm = () => {
  const { resume, updatePersonalInfo } = useResume();
  const { t } = useLanguage();
  const [formData, setFormData] = useState(resume.personalInfo);

  useEffect(() => {
    setFormData(resume.personalInfo);
  }, [resume.personalInfo]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    updatePersonalInfo({ [name]: value });
  };

  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle className="text-primary">{t('resume.forms.personal.title')}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">{t('resume.forms.personal.fullName')}</Label>
            <Input
              id="fullName"
              name="fullName"
              placeholder={t('resume.forms.personal.fullNamePlaceholder')}
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="jobTitle">{t('resume.forms.personal.jobTitle')}</Label>
            <Input
              id="jobTitle"
              name="jobTitle"
              placeholder={t('resume.forms.personal.jobTitlePlaceholder')}
              value={formData.jobTitle}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">{t('resume.forms.personal.email')}</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder={t('resume.forms.personal.emailPlaceholder')}
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">{t('resume.forms.personal.phone')}</Label>
            <Input
              id="phone"
              name="phone"
              placeholder={t('resume.forms.personal.phonePlaceholder')}
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">{t('resume.forms.personal.address')}</Label>
          <Input
            id="address"
            name="address"
            placeholder={t('resume.forms.personal.addressPlaceholder')}
            value={formData.address || ''}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="summary">{t('resume.forms.personal.summary')}</Label>
          <Textarea
            id="summary"
            name="summary"
            placeholder={t('resume.forms.personal.summaryPlaceholder')}
            rows={4}
            value={formData.summary}
            onChange={handleChange}
            className="resize-none"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonalInfoForm;
