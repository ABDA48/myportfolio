
import { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
 
import { Button } from "@/Components/ui/button";
 
import ProjectFilters from "@/Components/ProjectFilters";
import { Category, Project } from "@/data/props";

// Available category filters
 

const ProjectsPage = ({projectsData,categories}:{projectsData:Project[],categories:Category[]}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  // Filter projects based on search term and category
  useEffect(() => {
    let filtered = [...projectsData];

    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (project) => project.category.name === selectedCategory
      );
    }

    if (searchTerm.trim()) {
      const lower = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(lower) ||
          project.tags.some((tag) => tag.toLowerCase().includes(lower))
      );
    }

    setFilteredProjects(filtered);
  }, [searchTerm, selectedCategory, projectsData]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 bg-blue-gradient text-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center">My Projects</h1>
          <p className="text-xl text-center mt-4 max-w-3xl mx-auto">
            Explore my portfolio of work across different platforms and industries.
          </p>
        </div>
      </div>
      
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <ProjectFilters 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            categories={categories.map(cat => cat.name)} 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group relative overflow-hidden rounded-xl card-shadow animate-fade-in"
                >
                  <img
                    src={`/storage/${project.image}`}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white font-bold text-xl">{project.title}</h3>
                    <p className="text-gray-300 mb-2">{project.category.name}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        variant="default"
                        size="sm"
                        className="bg-portfolio-blue hover:bg-portfolio-darkblue text-white px-4"
                      >
                        <Link href={`/projects/${project.id}`}>Preview</Link>
                      </Button>
                      <Button 
                        variant="outline"
                        size="sm"
                        className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 px-4"
                      >
                        <Link href={`/projects/${project.id}`}>Details</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-xl text-gray-500">No projects found matching your criteria.</p>
                <Button 
                  className="mt-4 bg-portfolio-blue hover:bg-portfolio-darkblue text-white"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
      
 
    </div>
  );
};

export default ProjectsPage;
