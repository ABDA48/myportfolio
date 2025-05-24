
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Service } from "@/data/props";

const serviceItems = [
  {
    icon: "💻",
    title: "UI/UX Design",
    description:
      "Creating intuitive, engaging user interfaces and experiences that delight your customers and keep them coming back.",
    price: "1 000 000 "
  },
  {
    icon: "🌐",
    title: "Website Design & Development",
    description:
      "Building responsive websites that look great on any device and are optimized for speed and performance.",
    price: "1 000 000  "
  },
  {
    icon: "📱",
    title: "Application Development",
    description:
      "Developing custom applications that solve your unique business challenges and streamline operations.",
    price: "1 000 000 "
  },
  {
    icon: "🧠",
    title: "AI Experiences & Chatbots",
    description:
      "Building interactive AI features like LLM-powered chatbots, voice assistants, and personalized experiences that make your platform smarter and more engaging.",
  },
  {
    icon: "⚙️",
    title: "Automation & Workflow Integration",
    description:
      "Streamlining your business with tools like Make (Integromat), Zapier, and custom logic to automate customer handling, emails, task flows, and system integrations.",
    price: "1 000 000  "
  },
  {
    icon: "📊",
    title: "Custom Dashboards & Analytics",
    description:
      "Creating real-time dashboards and analytics tools to monitor performance, track user behavior, and make smarter decisions based on visualized insights.",
    price: "1 000 000 "
  },
];


const ServicesSection = ({services}:{services:Service[]}) => {
  const { t } = useLanguage();
  return (
    <section id="services" className="py-20 bg-portfolio-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-portfolio-blue font-medium mb-2">Services</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('servicedesc')}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden relative group bg-white card-shadow">
                <div className="absolute w-1 h-0 bg-portfolio-blue group-hover:h-full top-0 left-0 transition-all duration-300"></div>
                <CardHeader>
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <CardTitle className="text-xl font-bold">{service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                  {service.price ? (
    <span className="inline-block bg-portfolio-blue text-white px-3 py-1 text-sm rounded-md mt-2">
      {service.price} Ar
    </span>
  ) : (
    <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 text-sm rounded-md mt-2">
      {t('contactusforpricing')}
    </span>)}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
