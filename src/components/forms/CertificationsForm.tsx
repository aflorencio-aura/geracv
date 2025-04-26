
import React from 'react';
import { useResume } from '@/context/ResumeContext';
import { useLanguage } from '@/context/LanguageContext';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trash, Plus } from 'lucide-react';
import { createEmptyCertification } from '@/lib/resume-utils';

const CertificationsForm = () => {
  const { resume, updateCertifications, addCertification, removeCertification } = useResume();
  const { t } = useLanguage();
  
  const handleAddCertification = () => {
    addCertification(createEmptyCertification());
  };
  
  const handleRemoveCertification = (id: string) => {
    removeCertification(id);
  };
  
  const handleChange = (id: string, field: string, value: string) => {
    const updatedCertifications = resume.certifications.map((cert) =>
      cert.id === id ? { ...cert, [field]: value } : cert
    );
    updateCertifications(updatedCertifications);
  };
  
  return (
    <Card className="animate-fade-in">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-primary">{t('resume.forms.certifications.title')}</CardTitle>
        <Button 
          onClick={handleAddCertification} 
          variant="outline" 
          size="sm" 
          className="flex items-center gap-1"
        >
          <Plus className="h-4 w-4" /> {t('resume.forms.certifications.addButton')}
        </Button>
      </CardHeader>
      <CardContent>
        {resume.certifications.length === 0 ? (
          <div className="text-center py-4 text-muted-foreground">
            {t('resume.forms.certifications.noCertifications')}
          </div>
        ) : (
          <div className="space-y-6">
            {resume.certifications.map((certification, index) => (
              <div 
                key={certification.id} 
                className="grid grid-cols-1 gap-4 pb-4 border-b last:border-b-0 animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">{t('resume.forms.certifications.certification')} #{index + 1}</h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleRemoveCertification(certification.id)}
                    className="h-8 w-8 text-destructive"
                  >
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    value={certification.name}
                    onChange={(e) => handleChange(certification.id, 'name', e.target.value)}
                    placeholder={t('resume.forms.certifications.namePlaceholder')}
                  />
                  
                  <Input
                    value={certification.issuer}
                    onChange={(e) => handleChange(certification.id, 'issuer', e.target.value)}
                    placeholder={t('resume.forms.certifications.issuerPlaceholder')}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="month"
                    value={certification.date}
                    onChange={(e) => handleChange(certification.id, 'date', e.target.value)}
                    placeholder={t('resume.forms.certifications.date')}
                  />
                  
                  <Input
                    type="url"
                    value={certification.url || ''}
                    onChange={(e) => handleChange(certification.id, 'url', e.target.value)}
                    placeholder={t('resume.forms.certifications.urlPlaceholder')}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CertificationsForm;
