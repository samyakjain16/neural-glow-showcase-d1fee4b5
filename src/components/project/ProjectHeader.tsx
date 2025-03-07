
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, FileCode } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Project } from '@/data/projectsData';

interface ProjectHeaderProps {
  project: Project;
}

const ProjectHeader = ({ project }: ProjectHeaderProps) => {
  return (
    <>
      <Link 
        to="/#projects" 
        className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Projects
      </Link>
      
      <div className={`glass-card bg-gradient-to-br ${project.gradient} p-8 mb-12`}>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="rounded-lg bg-white/10 w-20 h-20 flex items-center justify-center flex-shrink-0">
            {project.icon}
          </div>
          
          <div>
            <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-white/80 mb-6">{project.longDescription}</p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {project.categories.map((category, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 rounded-full bg-white/10 text-sm"
                >
                  {category}
                </span>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              {project.links.demo && (
                <Button asChild variant="default" className="bg-gradient-to-r from-ai-purple to-ai-blue hover:opacity-90">
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                    View Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              )}
              
              {project.links.github && (
                <Button asChild variant="outline" className="border-white/20 hover:bg-white/5">
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> View Code
                  </a>
                </Button>
              )}
              
              {project.links.case_study && (
                <Button asChild variant="outline" className="border-white/20 hover:bg-white/5">
                  <a href={project.links.case_study} target="_blank" rel="noopener noreferrer">
                    <FileCode className="mr-2 h-4 w-4" /> Case Study
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectHeader;
