
import { useState } from 'react';
import { ResumeProvider } from '@/context/ResumeContext';
import ResumePreview from '@/components/resume/ResumePreview';
import { ResumeHeader } from '@/components/resume/ResumeHeader';
import { ResumeFormTabs } from '@/components/resume/ResumeFormTabs';
import { PreviewToggle } from '@/components/resume/PreviewToggle';
import AdPlaceholder from '@/components/ads/AdPlaceholder';

const ResumeBuilder = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [showPreview, setShowPreview] = useState(false);
  
  const togglePreview = () => {
    setShowPreview(prev => !prev);
  };
  
  return (
    <div className="min-h-screen bg-accent">
      <ResumeHeader showPreview={showPreview} togglePreview={togglePreview} />

      <main className="container mx-auto py-6 px-4">
        {/* Top Ad Space */}
        <AdPlaceholder slot="content" />

        <div className="flex flex-col md:flex-row gap-8">
          <div className={`w-full ${showPreview ? 'md:w-1/2' : 'md:w-3/4'} mx-auto`}>
            <PreviewToggle showPreview={showPreview} togglePreview={togglePreview} />
            
            {!showPreview || window.innerWidth >= 768 ? (
              <ResumeFormTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            ) : null}

            {/* Bottom Ad Space */}
            <AdPlaceholder slot="footer" />
          </div>

          {(showPreview || window.innerWidth >= 768) && (
            <div className={`w-full ${showPreview ? 'md:w-1/2' : 'md:w-1/4'} mx-auto`}>
              <div className="sticky top-24 overflow-auto max-h-[calc(100vh-8rem)]">
                <div className="animate-fade-in">
                  <h2 className="text-lg font-semibold mb-4 text-center">Pré-visualização</h2>
                  <ResumePreview />
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="mt-12 py-6 bg-white border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            Made with ❤️
          </p>
          {/* Footer Ad Space */}
          <AdPlaceholder slot="footer" />
        </div>
      </footer>
    </div>
  );
};

const Index = () => {
  return (
    <ResumeProvider>
      <ResumeBuilder />
    </ResumeProvider>
  );
};

export default Index;
