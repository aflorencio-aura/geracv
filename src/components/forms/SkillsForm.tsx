
import React from 'react';
import { useResume } from '@/context/ResumeContext';
import { useLanguage } from '@/context/LanguageContext';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trash, Plus } from 'lucide-react';
import { createEmptySkill } from '@/lib/resume-utils';

const SkillsForm = () => {
  const { resume, updateSkills, addSkill, removeSkill } = useResume();
  const { t } = useLanguage();
  
  const handleAddSkill = () => {
    addSkill(createEmptySkill());
  };
  
  const handleRemoveSkill = (id: string) => {
    removeSkill(id);
  };
  
  const handleNameChange = (id: string, value: string) => {
    const updatedSkills = resume.skills.map((skill) =>
      skill.id === id ? { ...skill, name: value } : skill
    );
    updateSkills(updatedSkills);
  };
  
  const handleLevelChange = (id: string, value: number[]) => {
    const updatedSkills = resume.skills.map((skill) =>
      skill.id === id ? { ...skill, level: value[0] } : skill
    );
    updateSkills(updatedSkills);
  };
  
  return (
    <Card className="animate-fade-in">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-primary">{t('resume.forms.skills.title')}</CardTitle>
        <Button 
          onClick={handleAddSkill} 
          variant="outline" 
          size="sm" 
          className="flex items-center gap-1"
        >
          <Plus className="h-4 w-4" /> {t('resume.forms.skills.addButton')}
        </Button>
      </CardHeader>
      <CardContent>
        {resume.skills.length === 0 ? (
          <div className="text-center py-4 text-muted-foreground">
            {t('resume.forms.skills.noSkills')}
          </div>
        ) : (
          <div className="space-y-4">
            {resume.skills.map((skill, index) => (
              <div 
                key={skill.id} 
                className="flex items-center gap-4 animate-slide-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex-1">
                  <Input
                    value={skill.name}
                    onChange={(e) => handleNameChange(skill.id, e.target.value)}
                    placeholder={t('resume.forms.skills.skillPlaceholder')}
                  />
                </div>
                <div className="w-1/3 flex items-center gap-2">
                  <Label className="text-xs whitespace-nowrap">{t('resume.forms.skills.level')}:</Label>
                  <Slider
                    value={[skill.level || 3]}
                    min={1}
                    max={5}
                    step={1}
                    onValueChange={(value) => handleLevelChange(skill.id, value)}
                    className="flex-1"
                  />
                  <span className="text-xs font-medium min-w-[20px] text-center">
                    {skill.level || 3}/5
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleRemoveSkill(skill.id)}
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

export default SkillsForm;
