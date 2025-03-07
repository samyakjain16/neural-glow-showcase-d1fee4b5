
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { projectsData } from '@/data/projectsData';

interface ProjectNavigationProps {
  projectId: number;
}

const ProjectNavigation = ({ projectId }: ProjectNavigationProps) => {
  return (
    <div className="mt-12 flex justify-between items-center">
      <div>
        {projectId > 1 && (
          <Button asChild variant="outline" className="border-white/20 hover:bg-white/5">
            <Link to={`/project/${projectId - 1}`}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Previous Project
            </Link>
          </Button>
        )}
      </div>
      
      <div>
        {projectId < projectsData.length && (
          <Button asChild variant="outline" className="border-white/20 hover:bg-white/5">
            <Link to={`/project/${projectId + 1}`}>
              Next Project <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProjectNavigation;
