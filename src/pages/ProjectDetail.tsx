
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { projectsData } from '@/data/projectsData';
import ProjectNotFound from '@/components/project/ProjectNotFound';
import ProjectHeader from '@/components/project/ProjectHeader';
import ProjectDetails from '@/components/project/ProjectDetails';
import ProjectFeatures from '@/components/project/ProjectFeatures';
import ProjectNavigation from '@/components/project/ProjectNavigation';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const projectId = parseInt(id || "1");
  
  // Find the project with the matching id
  const project = projectsData.find(p => p.id === projectId);
  
  if (!project) {
    return <ProjectNotFound />;
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-4">
          <ProjectHeader project={project} />
          <ProjectDetails project={project} />
          <ProjectFeatures project={project} />
          <ProjectNavigation projectId={projectId} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
