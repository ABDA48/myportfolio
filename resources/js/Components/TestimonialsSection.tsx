
import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const testimonials = [
  {
    id: 1,
    content:
      "Working with this developer was an absolute pleasure. They understood our requirements perfectly and delivered a website that exceeded our expectations. The attention to detail and user experience considerations were exceptional.",
    name: "Leslie Alexander",
    position: "CEO, Marketing Agency",
    avatar: "/images/avatar.jpg",
  },
  {
    id: 2,
    content:
      "I've worked with many designers in the past, but none have been as creative and responsive as this one. They took my vague idea and turned it into a stunning website that perfectly represents my brand.",
    name: "Michael Johnson",
    position: "Founder, Tech Startup",
    avatar: "/images/avatar.jpg",
  },
  {
    id: 3,
    content:
      "The redesign of our e-commerce platform resulted in a 40% increase in conversions. The developer's understanding of user behavior and conversion optimization made all the difference.",
    name: "Sarah Williams",
    position: "Marketing Director",
    avatar: "/images/avatar.jpg",
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useLanguage();
  return (
    <section className="py-20 bg-portfolio-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-portfolio-blue font-medium mb-2">{t('testimonials')}</h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('testimonialimpact')}
            <br />
            <span className="text-portfolio-blue">{t('testimonialsdesc')}</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="bg-white card-shadow">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center">
                <div className="flex mb-4 text-amber-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 text-lg text-center italic mb-6">
                  "{testimonials[activeIndex].content}"
                </p>
                
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden">
                    <img
                      src={testimonials[activeIndex].avatar}
                      alt={testimonials[activeIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900">{testimonials[activeIndex].name}</h4>
                    <p className="text-sm text-gray-500">{testimonials[activeIndex].position}</p>
                  </div>
                </div>
                
                <div className="flex justify-center mt-8 gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        activeIndex === index ? "bg-portfolio-blue w-6" : "bg-gray-300"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
