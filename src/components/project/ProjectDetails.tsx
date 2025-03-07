
import React from 'react';
import { Project } from '@/data/projectsData';

interface ProjectDetailsProps {
  project: Project;
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
      <div className="glass-card p-6">
        <h2 className="text-2xl font-bold mb-6">Project Images</h2>
        <div className="grid grid-cols-1 gap-4">
          {project.images.map((image, index) => (
            <div key={index} className="aspect-video w-full overflow-hidden rounded-lg">
              <img 
                src={image} 
                alt={`${project.title} screenshot ${index + 1}`} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
      
      <div className="glass-card p-6">
        <h2 className="text-2xl font-bold mb-6">Technologies Used</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {project.technologies.map((tech, index) => (
            <div 
              key={index} 
              className="bg-white/5 py-3 px-4 rounded-lg text-center hover:bg-white/10 transition-colors"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
