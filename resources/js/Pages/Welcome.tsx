import AboutSection from '@/Components/AboutSection';
import BlogSection from '@/Components/BlogSection';
import ContactSection from '@/Components/ContactSection';
 
import HeroSection from '@/Components/HeroSection';
 
import ProjectsSection from '@/Components/ProjectsSection';
import ServicesSection from '@/Components/ServicesSection';
import TestimonialsSection from '@/Components/TestimonialsSection';
import { BlogPost, Project } from '@/data/props';
import { Service } from '@/data/props';
import { Category } from '@/data/props';

  import { Head } from '@inertiajs/react';
  
  
  interface WelcomeProps {
    projects: Project[]
    services: Service[]
    categories: Category[],
    blogs:BlogPost[]
  }

export default function Welcome({projects,services,categories,blogs}: WelcomeProps) {
   

    return (
        <>
          <Head title="Home" />
          <HeroSection/>
          <ServicesSection services={services} />
      <ProjectsSection projects={projects} />
      <AboutSection />
      <TestimonialsSection />
      <BlogSection  blogPosts={blogs}/>
      <ContactSection />
     
        </>
    );
}
