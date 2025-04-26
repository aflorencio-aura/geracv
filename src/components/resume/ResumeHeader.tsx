
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { exportAsPDF } from "@/lib/resume-utils";
import { useResume } from "@/context/ResumeContext";
import { useLanguage } from "@/context/LanguageContext";
import { Download, Eye, Trash } from "lucide-react";

export const ResumeHeader = ({
  showPreview,
  togglePreview,
}: {
  showPreview: boolean;
  togglePreview: () => void;
}) => {
  const { toast } = useToast();
  const { resume, resetResume } = useResume();
  const { t } = useLanguage();

  const handleExportPDF = async () => {
    const success = await exportAsPDF('resume-container', `${resume.personalInfo.fullName || 'curriculo'}`);
    if (success) {
      toast({
        title: "Sucesso!",
        description: "Seu currículo foi exportado em PDF.",
      });
    } else {
      toast({
        title: "Ops!",
        description: "Houve um problema ao exportar seu currículo. Por favor, tente novamente.",
        variant: "destructive",
      });
    }
  };

  const handleResetResume = () => {
    if (confirm("Tem certeza que deseja limpar todo o currículo? Esta ação não poderá ser desfeita.")) {
      resetResume();
    }
  };

  return (
    <header className="bg-white border-b sticky top-0 z-10">
      <div className="container mx-auto py-4 px-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-primary">{t('resume.header.title')}</h1>
            <p className="text-sm text-muted-foreground">{t('resume.header.subtitle')}</p>
          </div>
          
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="icon"
              onClick={togglePreview}
              className="hidden md:flex"
              title={showPreview ? t('resume.header.preview') : t('resume.header.hidePreview')}
            >
              <Eye className="h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              onClick={handleResetResume}
              className="flex items-center gap-1"
            >
              <Trash className="h-4 w-4" /> {t('resume.header.clear')}
            </Button>
            
            <Button 
              onClick={handleExportPDF}
              className="flex items-center gap-1"
            >
              <Download className="h-4 w-4" /> {t('resume.header.export')}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
