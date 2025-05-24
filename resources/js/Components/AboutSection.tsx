
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "./ui/button";

const AboutSection = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-20 bg-blue-gradient text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="rounded-2xl overflow-hidden bg-white p-2 card-shadow max-w-md mx-auto">
              <img 
                src="/images/profile.JPG" 
                alt="About Me" 
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
          
          <div className="md:w-1/2 space-y-6 animate-fade-in">
            <h3 className="text-xl font-medium text-blue-100">{t('aboutme')}</h3>
            <h2 className="text-3xl md:text-4xl font-bold">{t('whoami')}</h2>
            <p className="text-blue-50 leading-relaxed">
              {t('whoamidesc')}
             </p>
            
            <div className="flex flex-wrap gap-16 my-10">
              <div>
                <h3 className="text-3xl font-bold">600+</h3>
                <p className="text-blue-100">{t('projectscompleted')}</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold">50+</h3>
                <p className="text-blue-100">{t('happyclients')}</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold">8+</h3>
                <p className="text-blue-100">{t('yearsofexperience')}</p>
              </div>
            </div>
            
            <Button className="bg-white text-portfolio-blue hover:bg-blue-50 px-8">
              {t('downloadcv')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
