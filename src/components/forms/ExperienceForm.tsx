
import React from 'react';
import { useResume } from '@/context/ResumeContext';
import { useLanguage } from '@/context/LanguageContext';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trash, Plus } from 'lucide-react';
import { createEmptyExperience } from '@/lib/resume-utils';

const ExperienceForm = () => {
  const { resume, updateExperience, addExperience, removeExperience } = useResume();
  const { t } = useLanguage();
  
  const handleAddExperience = () => {
    addExperience(createEmptyExperience());
  };
  
  const handleRemoveExperience = (id: string) => {
    removeExperience(id);
  };
  
  const handleChange = (id: string, field: string, value: string | boolean) => {
    const updatedExperience = resume.experience.map((exp) =>
      exp.id === id ? { ...exp, [field]: value } : exp
    );
    updateExperience(updatedExperience);
  };
  
  return (
    <Card className="animate-fade-in">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-primary">{t('resume.forms.experience.title')}</CardTitle>
        <Button 
          onClick={handleAddExperience} 
          variant="outline" 
          size="sm" 
          className="flex items-center gap-1"
        >
          <Plus className="h-4 w-4" /> {t('resume.forms.experience.addButton')}
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        {resume.experience.length === 0 ? (
          <div className="text-center py-4 text-muted-foreground">
            {t('resume.forms.experience.noExperience')}
          </div>
        ) : (
          resume.experience.map((exp, index) => (
            <div 
              key={exp.id} 
              className="pb-4 border-b last:border-b-0 space-y-4 animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-medium">{t('resume.forms.experience.experience')} #{index + 1}</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleRemoveExperience(exp.id)}
                  className="h-8 w-8 text-destructive"
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>{t('resume.forms.experience.company')}</Label>
                  <Input
                    value={exp.company}
                    onChange={(e) => handleChange(exp.id, 'company', e.target.value)}
                    placeholder={t('resume.forms.experience.companyPlaceholder')}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label>{t('resume.forms.experience.position')}</Label>
                  <Input
                    value={exp.position}
                    onChange={(e) => handleChange(exp.id, 'position', e.target.value)}
                    placeholder={t('resume.forms.experience.positionPlaceholder')}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>{t('resume.forms.experience.location')}</Label>
                <Input
                  value={exp.location || ''}
                  onChange={(e) => handleChange(exp.id, 'location', e.target.value)}
                  placeholder={t('resume.forms.experience.locationPlaceholder')}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>{t('resume.forms.experience.startDate')}</Label>
                  <Input
                    type="month"
                    value={exp.startDate}
                    onChange={(e) => handleChange(exp.id, 'startDate', e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label>{t('resume.forms.experience.endDate')}</Label>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        checked={exp.currentlyWorking}
                        onCheckedChange={(checked) => 
                          handleChange(exp.id, 'currentlyWorking', Boolean(checked))
                        }
                      />
                      <label className="text-sm font-medium cursor-pointer">
                        {t('resume.forms.experience.currentJob')}
                      </label>
                    </div>
                  </div>
                  <Input
                    type="month"
                    value={exp.endDate}
                    onChange={(e) => handleChange(exp.id, 'endDate', e.target.value)}
                    disabled={exp.currentlyWorking}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>{t('resume.forms.experience.description')}</Label>
                <Textarea
                  value={exp.description}
                  onChange={(e) => handleChange(exp.id, 'description', e.target.value)}
                  placeholder={t('resume.forms.experience.descriptionPlaceholder')}
                  rows={4}
                />
              </div>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  );
};

export default ExperienceForm;
