
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface PreviewToggleProps {
  showPreview: boolean;
  togglePreview: () => void;
}

export const PreviewToggle = ({ showPreview, togglePreview }: PreviewToggleProps) => {
  const { t } = useLanguage();
  
  return (
    <div className="mb-6 md:hidden">
      <Button 
        onClick={togglePreview} 
        className="w-full"
        variant="outline"
      >
        <Eye className="h-4 w-4 mr-2" /> 
        {showPreview ? t('resume.header.preview') : t('resume.header.hidePreview')}
      </Button>
    </div>
  );
};
