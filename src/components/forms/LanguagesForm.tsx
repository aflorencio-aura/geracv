
import React from 'react';
import { useResume } from '@/context/ResumeContext';
import { useLanguage } from '@/context/LanguageContext';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trash, Plus } from 'lucide-react';
import { createEmptyLanguage, languageProficiencyOptions } from '@/lib/resume-utils';

const LanguagesForm = () => {
  const { resume, updateLanguages, addLanguage, removeLanguage } = useResume();
  const { t } = useLanguage();
  
  const handleAddLanguage = () => {
    addLanguage(createEmptyLanguage());
  };
  
  const handleRemoveLanguage = (id: string) => {
    removeLanguage(id);
  };
  
  const handleNameChange = (id: string, value: string) => {
    const updatedLanguages = resume.languages.map((lang) =>
      lang.id === id ? { ...lang, name: value } : lang
    );
    updateLanguages(updatedLanguages);
  };
  
  const handleProficiencyChange = (id: string, value: string) => {
    const updatedLanguages = resume.languages.map((lang) =>
      lang.id === id ? { ...lang, proficiency: value } : lang
    );
    updateLanguages(updatedLanguages);
  };
  
  return (
    <Card className="animate-fade-in">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-primary">{t('resume.forms.languages.title')}</CardTitle>
        <Button 
          onClick={handleAddLanguage} 
          variant="outline" 
          size="sm" 
          className="flex items-center gap-1"
        >
          <Plus className="h-4 w-4" /> {t('resume.forms.languages.addButton')}
        </Button>
      </CardHeader>
      <CardContent>
        {resume.languages.length === 0 ? (
          <div className="text-center py-4 text-muted-foreground">
            {t('resume.forms.languages.noLanguages')}
          </div>
        ) : (
          <div className="space-y-4">
            {resume.languages.map((language, index) => (
              <div 
                key={language.id} 
                className="flex items-center gap-4 animate-slide-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex-1">
                  <Input
                    value={language.name}
                    onChange={(e) => handleNameChange(language.id, e.target.value)}
                    placeholder={t('resume.forms.languages.languagePlaceholder')}
                  />
                </div>
                <div className="w-1/3">
                  <Select
                    value={language.proficiency}
                    onValueChange={(value) => handleProficiencyChange(language.id, value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={t('resume.forms.languages.level')} />
                    </SelectTrigger>
                    <SelectContent>
                      {languageProficiencyOptions.map((level) => (
                        <SelectItem key={level} value={level}>
                          {level}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleRemoveLanguage(language.id)}
                  className="h-8 w-8 text-destructive"
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default LanguagesForm;
