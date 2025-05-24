
import {  Link } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
 
import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import { Card, CardContent } from "@/Components/ui/card";
import LanguageProgressBar from "@/Components/LanguageProgressBar";
import ProjectVideoPreview from "@/Components/ProjectVideoPreview";
import RelatedProjects from "@/Components/RelatedProjects";
 
import { useLanguage } from "../contexts/LanguageContext";
 import { Project, ProjectWithLanguages } from "@/data/props";
 
const ProjectDetailPage = ({ project,relatedProjects }: {project:ProjectWithLanguages,relatedProjects:Project[]}) => {
 
  console.log(project);
   const { t } = useLanguage();
  
  

  if (!project) {
    return (
      <div className="min-h-screen">
        
        <div className="container mx-auto py-20 px-4 text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Link href="/projects">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('backToProjects')}
            </Button>
          </Link>
        </div>
       
      </div>
    );
  }

  return (
    <div className="min-h-screen">
   
      
      {/* Project Header */}
      <div className="pt-20 bg-blue-gradient text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <Link href="/projects" className="flex items-center text-white/80 hover:text-white mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t('backToProjects')}
              </Link>
              <h1 className="text-3xl md:text-5xl font-bold">{project.title}</h1>
            </div>
            {project.project_url && (
              <a href={project.project_url} target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-portfolio-blue hover:bg-gray-100 mt-4 md:mt-0">
                  {t('visitWebsite')}
                </Button>
              </a>
            )}
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            <Badge className="bg-white/20 text-white">{project.category.name}</Badge>
            {project.tags.map((tag, index) => (
              <Badge key={index} className="bg-white/10 text-white">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Project Description */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">{t('description')}</h2>
              <div className="prose max-w-none">
                <p className="text-gray-700">{project.description}</p>
              </div>
            </div>
            
            {/* Project Features */}
            {project.features && (
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-4">{t('projectFeatures')}</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-portfolio-blue mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Video Preview */}
            {project.video_url && (
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-4">{t('videoPreview')}</h2>
                <ProjectVideoPreview videoUrl={project.video_url} title={project.title} />
              </div>
            )}
          </div>
          
          {/* Sidebar */}
          <div>
            {/* Project Details Card */}
            <Card className="mb-8 shadow-md border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">{t('projectDetails')}</h3>
                <div className="space-y-4">
                  {project.client_name && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t('clientName')}:</span>
                      <span className="font-medium">{project.client_name}</span>
                    </div>
                  )}
                  {project.completion_date && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t('completionDate')}:</span>
                      <span className="font-medium">{project.completion_date}</span>
                    </div>
                  )}
                  {project.category && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Category:</span>
                      <span className="font-medium">{project.category.name}</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
            
            {/* Technologies Used */}
            <Card className="shadow-md border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">{t('technologies')}</h3>
                {project.languages.map((language, index) => (
                  <LanguageProgressBar key={index} language={language} />
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Related Projects   */}
        {relatedProjects &&  <RelatedProjects projects={relatedProjects} /> }
        
      </div>
      
 
    </div>
  );
};

export default ProjectDetailPage;
