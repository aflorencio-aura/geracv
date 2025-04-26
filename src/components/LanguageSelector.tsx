
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { Languages } from "lucide-react";

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 right-4 flex items-center gap-2">
      <Languages className="h-4 w-4" />
      <Button
        variant={language === 'pt' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('pt')}
      >
        PT
      </Button>
      <Button
        variant={language === 'en' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('en')}
      >
        EN
      </Button>
      <Button
        variant={language === 'es' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('es')}
      >
        ES
      </Button>
    </div>
  );
};

export default LanguageSelector;
