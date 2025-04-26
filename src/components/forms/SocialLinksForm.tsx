
import React from 'react';
import { useResume } from '@/context/ResumeContext';
import { useLanguage } from '@/context/LanguageContext';
import { Input } from '@/components/ui/input';
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
import { createEmptySocialLink, socialPlatformOptions } from '@/lib/resume-utils';

const SocialLinksForm = () => {
  const { resume, updateSocialLinks, addSocialLink, removeSocialLink } = useResume();
  const { t } = useLanguage();
  
  const handleAddSocialLink = () => {
    addSocialLink(createEmptySocialLink());
  };
  
  const handleRemoveSocialLink = (id: string) => {
    removeSocialLink(id);
  };
  
  const handlePlatformChange = (id: string, value: string) => {
    const updatedLinks = resume.socialLinks.map((link) =>
      link.id === id ? { ...link, platform: value } : link
    );
    updateSocialLinks(updatedLinks);
  };
  
  const handleUrlChange = (id: string, value: string) => {
    const updatedLinks = resume.socialLinks.map((link) =>
      link.id === id ? { ...link, url: value } : link
    );
    updateSocialLinks(updatedLinks);
  };
  
  return (
    <Card className="animate-fade-in">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-primary">{t('resume.forms.social.title')}</CardTitle>
        <Button 
          onClick={handleAddSocialLink} 
          variant="outline" 
          size="sm" 
          className="flex items-center gap-1"
        >
          <Plus className="h-4 w-4" /> {t('resume.forms.social.addButton')}
        </Button>
      </CardHeader>
      <CardContent>
        {resume.socialLinks.length === 0 ? (
          <div className="text-center py-4 text-muted-foreground">
            {t('resume.forms.social.noLinks')}
          </div>
        ) : (
          <div className="space-y-4">
            {resume.socialLinks.map((link, index) => (
              <div 
                key={link.id} 
                className="flex items-center gap-4 animate-slide-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-1/3">
                  <Select
                    value={link.platform}
                    onValueChange={(value) => handlePlatformChange(link.id, value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={t('resume.forms.social.platform')} />
                    </SelectTrigger>
                    <SelectContent>
                      {socialPlatformOptions.map((platform) => (
                        <SelectItem key={platform} value={platform}>
                          {platform}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-1">
                  <Input
                    type="url"
                    value={link.url}
                    onChange={(e) => handleUrlChange(link.id, e.target.value)}
                    placeholder={t('resume.forms.social.urlPlaceholder')}
                  />
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleRemoveSocialLink(link.id)}
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

export default SocialLinksForm;
