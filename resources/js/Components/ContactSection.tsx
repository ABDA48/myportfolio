
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const ContactSection = () => {
  const { t } = useLanguage();
  return (
    <section id="contact" className="py-20 bg-portfolio-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-portfolio-blue font-medium mb-2">{t('contact')}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('contacttitle')}</h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            {t('contactdesc')}
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl p-8 card-shadow">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('yourname')}
                </label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="w-full"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                {t('subject')}
              </label>
              <Input
                id="subject"
                placeholder="Project Discussion"
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                {t('message')}
              </label>
              <Textarea
                id="message"
                placeholder="Tell me about your project..."
                className="w-full min-h-[150px]"
              />
            </div>
            <Button className="w-full bg-portfolio-blue hover:bg-portfolio-darkblue text-white">
              {t('sendmessage')}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
