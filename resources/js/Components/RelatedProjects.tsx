
import { Link } from "@inertiajs/react";
 
import { Card, CardContent } from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import { useLanguage } from "../contexts/LanguageContext";
import { Project } from "@/data/props";

 
 

const RelatedProjects = ({ projects }: {projects:Project[]}) => {
  const { t } = useLanguage();
  
  
  
  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold mb-6">{t('relatedProjects')}</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map(project => (
          <Link href={`/projects/${project.id}`} key={project.id}>
            <Card className="h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden border-0 shadow-md">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <Badge className="absolute top-3 right-3 bg-portfolio-blue">{project.category.name}</Badge>
              </div>
              <CardContent className="p-4">
                <h4 className="font-bold text-lg mb-1 line-clamp-1">{project.title}</h4>
                <p className="text-gray-600 text-sm line-clamp-2">{project.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedProjects;
