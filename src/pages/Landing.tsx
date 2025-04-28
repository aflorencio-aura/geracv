import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, Check, Download, Users, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSelector from "@/components/LanguageSelector";

const Landing = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-accent/50 to-background">
      <LanguageSelector />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary animate-fade-in">
          {t('hero.title')}
        </h1>
        <h2 className="text-xl md:text-2xl mb-10 text-muted-foreground max-w-3xl mx-auto">
          {t('hero.subtitle')}
        </h2>
        <Link to="/criar-curriculo">
          <Button size="lg" className="text-lg px-8 py-6 shadow-md hover:shadow-lg transition-all">
            {t('hero.button')}
            <FileText className="ml-2" />
          </Button>
        </Link>
      </div>


      {/* SEO Text Block */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-muted-foreground text-lg">{t('seo.text1')}</p>
            <p className="text-muted-foreground text-lg">{t('seo.text2')}</p>
            <p className="text-muted-foreground text-lg">{t('seo.text3')}</p>
          </div>
        </div>
      </div>



      {/* Benefits Section */}
      <div className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">{t('benefits.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="flex flex-col items-center text-center p-8">
                <div className="bg-primary/10 p-4 rounded-full mb-6">
                  <Star className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t('benefits.free.title')}</h3>
                <p className="text-muted-foreground">{t('benefits.free.description')}</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="flex flex-col items-center text-center p-8">
                <div className="bg-primary/10 p-4 rounded-full mb-6">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t('benefits.templates.title')}</h3>
                <p className="text-muted-foreground">{t('benefits.templates.description')}</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="flex flex-col items-center text-center p-8">
                <div className="bg-primary/10 p-4 rounded-full mb-6">
                  <Download className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t('benefits.download.title')}</h3>
                <p className="text-muted-foreground">{t('benefits.download.description')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('cta.title')}</h2>
          <p className="mb-10 text-lg text-muted-foreground max-w-2xl mx-auto">{t('cta.subtitle')}</p>
          <Link to="/criar-curriculo">
            <Button size="lg" className="text-lg px-8 py-6 shadow-md hover:shadow-lg transition-all">
              {t('cta.button')}
              <FileText className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">{t('faq.title')}</h2>
          <div className="max-w-3xl mx-auto space-y-10">
            <Card className="border-none shadow-md hover:shadow-lg transition-all p-1">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{t('faq.q1.question')}</h3>
                <p className="text-muted-foreground">{t('faq.q1.answer')}</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md hover:shadow-lg transition-all p-1">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{t('faq.q2.question')}</h3>
                <p className="text-muted-foreground">{t('faq.q2.answer')}</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md hover:shadow-lg transition-all p-1">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{t('faq.q3.question')}</h3>
                <p className="text-muted-foreground">{t('faq.q3.answer')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
