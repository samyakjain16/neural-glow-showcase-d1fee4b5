
import React from 'react';
import { Brain, Code, Network } from 'lucide-react';
import { Project } from '@/data/projectsData';
import FeatureCard from './FeatureCard';

interface ProjectFeaturesProps {
  project: Project;
}

const ProjectFeatures = ({ project }: ProjectFeaturesProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      <FeatureCard 
        title="Challenges" 
        items={project.challenges} 
        icon={<Code className="h-6 w-6 text-ai-purple" />} 
      />
      
      <FeatureCard 
        title="Solutions" 
        items={project.solutions} 
        icon={<Brain className="h-6 w-6 text-ai-blue" />} 
      />
      
      <FeatureCard 
        title="Results" 
        items={project.results} 
        icon={<Network className="h-6 w-6 text-ai-cyan" />} 
      />
    </div>
  );
};

export default ProjectFeatures;
