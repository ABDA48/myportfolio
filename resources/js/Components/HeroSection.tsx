
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "./ui/button";

const HeroSection = () => {
  const { t } = useLanguage();
  return (
    <section className="min-h-screen pt-24 pb-20 flex items-center overflow-hidden bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2 space-y-6 md:pr-10 animate-fade-in">
            <div className="inline-block bg-blue-100 text-portfolio-blue px-4 py-2 rounded-full text-sm font-medium mb-4">
              {t('heroHello')} 👋
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              {t('im')} <span className="text-portfolio-blue">{t('heroName')}</span>,
              <br />
              <span>{t('heroTitle')}</span>
              <br />
              <span>{t('heroSubtitle')}</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-lg">
            {t('heroDescription')}
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="bg-portfolio-blue hover:bg-portfolio-darkblue text-white px-8 py-6 rounded-lg">
                {t('heroButton')}
              </Button>
              <Button variant="outline" className="border-portfolio-blue text-portfolio-blue hover:bg-blue-50 px-8 py-6 rounded-lg">
                {t('heroWhatsapp')}
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
            <div className="relative">
              <div className="bg-blue-gradient rounded-full w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex items-center justify-center mx-auto overflow-hidden">
                <img 
                  src="/images/profile.JPG"
                  alt="Professional Portrait" 
                  className="rounded-full object-cover w-[290px] h-[290px] md:w-[380px] md:h-[380px]"
                />
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4 bg-white rounded-full py-2 px-6 shadow-lg">
                <span className="text-sm font-medium text-gray-600">{t('heroTitle')} {t('heroSubtitle')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
