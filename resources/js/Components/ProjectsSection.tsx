
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "./ui/button";
import { Link } from "@inertiajs/react";
import { Project } from "@/data/props";

 

const ProjectsSection = ({projects}: {projects: Project[]}) => {
  const { t } = useLanguage();
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <p className="text-portfolio-blue font-medium mb-2">Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('projectdesc')}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl card-shadow animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <img
                src={`/storage/${project.image}`}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white font-bold text-xl">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.category.name}</p>
                <div className="flex gap-2">
                  <Button 
                    variant="default"
                    size="sm"
                    className="bg-portfolio-blue hover:bg-portfolio-darkblue text-white px-4"
                  >
                    <Link href={`/projects/${project.id}`}>{t('preview')}</Link>
                  </Button>
                  <Button 
                    variant="outline"
                    size="sm"
                    className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 px-4"
                  >
                    <Link href={`/projects/${project.id}`}>{t('details')}</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href={`/projects`}>
            <Button className="bg-portfolio-blue hover:bg-portfolio-darkblue text-white px-8">
              {t('viewallprojects')}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
