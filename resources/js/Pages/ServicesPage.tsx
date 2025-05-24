
 
import ServicesSection from "@/Components/ServicesSection";
import { Service } from "@/data/props";

const ServicesPage = ({services}:{services:Service[]}) => {
  return (
    <div className="min-h-screen">
      
      <div className="pt-20 bg-blue-gradient text-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center">Services I Provide</h1>
          <p className="text-xl text-center mt-4 max-w-3xl mx-auto">
            Comprehensive web design and development solutions to help your business grow online.
          </p>
        </div>
      </div>
      <ServicesSection services={services} />
     
    </div>
  );
};

export default ServicesPage;
