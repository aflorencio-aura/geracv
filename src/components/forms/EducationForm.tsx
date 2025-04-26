
import React, { useState } from 'react';
import { useResume } from '@/context/ResumeContext';
import { useLanguage } from '@/context/LanguageContext';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trash, Plus } from 'lucide-react';
import { createEmptyEducation } from '@/lib/resume-utils';

const EducationForm = () => {
  const { resume, updateEducation, addEducation, removeEducation } = useResume();
  const { t } = useLanguage();
  
  const handleAddEducation = () => {
    addEducation(createEmptyEducation());
  };
  
  const handleRemoveEducation = (id: string) => {
    removeEducation(id);
  };
  
  const handleChange = (id: string, field: string, value: string) => {
    const updatedEducation = resume.education.map((edu) =>
      edu.id === id ? { ...edu, [field]: value } : edu
    );
    updateEducation(updatedEducation);
  };
  
  return (
    <Card className="animate-fade-in">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-primary">{t('resume.forms.education.title')}</CardTitle>
        <Button 
          onClick={handleAddEducation} 
          variant="outline" 
          size="sm" 
          className="flex items-center gap-1"
        >
          <Plus className="h-4 w-4" /> {t('resume.forms.education.addButton')}
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        {resume.education.length === 0 ? (
          <div className="text-center py-4 text-muted-foreground">
            {t('resume.forms.education.noEducation')}
          </div>
        ) : (
          resume.education.map((edu, index) => (
            <div 
              key={edu.id} 
              className="pb-4 border-b last:border-b-0 space-y-4 animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-medium">{t('resume.forms.education.education')} #{index + 1}</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleRemoveEducation(edu.id)}
                  className="h-8 w-8 text-destructive"
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor={`institution-${edu.id}`}>{t('resume.forms.education.institution')}</Label>
                  <Input
                    id={`institution-${edu.id}`}
                    value={edu.institution}
                    onChange={(e) => handleChange(edu.id, 'institution', e.target.value)}
                    placeholder={t('resume.forms.education.institutionPlaceholder')}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor={`degree-${edu.id}`}>{t('resume.forms.education.degree')}</Label>
                  <Input
                    id={`degree-${edu.id}`}
                    value={edu.degree}
                    onChange={(e) => handleChange(edu.id, 'degree', e.target.value)}
                    placeholder={t('resume.forms.education.degreePlaceholder')}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor={`field-${edu.id}`}>{t('resume.forms.education.field')}</Label>
                <Input
                  id={`field-${edu.id}`}
                  value={edu.field}
                  onChange={(e) => handleChange(edu.id, 'field', e.target.value)}
                  placeholder={t('resume.forms.education.fieldPlaceholder')}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor={`startDate-${edu.id}`}>{t('resume.forms.education.startDate')}</Label>
                  <Input
                    id={`startDate-${edu.id}`}
                    type="month"
                    value={edu.startDate}
                    onChange={(e) => handleChange(edu.id, 'startDate', e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor={`endDate-${edu.id}`}>{t('resume.forms.education.endDate')}</Label>
                  <Input
                    id={`endDate-${edu.id}`}
                    type="month"
                    value={edu.endDate}
                    onChange={(e) => handleChange(edu.id, 'endDate', e.target.value)}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor={`description-${edu.id}`}>{t('resume.forms.education.description')}</Label>
                <Textarea
                  id={`description-${edu.id}`}
                  value={edu.description || ''}
                  onChange={(e) => handleChange(edu.id, 'description', e.target.value)}
                  placeholder={t('resume.forms.education.descriptionPlaceholder')}
                  rows={3}
                />
              </div>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  );
};

export default EducationForm;
