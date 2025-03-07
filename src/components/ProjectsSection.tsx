
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, CircuitBoard, Code, FileCode, MessageSquare, Network, Bot } from 'lucide-react';
import { Button } from "@/components/ui/button";

// Project data
const projects = [
  {
    id: 1,
    title: "AI Content Generator",
    description: "Natural language generation tool that creates high-quality content based on simple prompts.",
    icon: <Brain className="h-10 w-10 text-ai-purple" />,
    categories: ["LLM", "NLP", "Web App"],
    gradient: "from-purple-500/20 to-indigo-500/20"
  },
  {
    id: 2,
    title: "Computer Vision System",
    description: "Real-time object detection and recognition system for security applications.",
    icon: <Bot className="h-10 w-10 text-ai-blue" />,
    categories: ["Computer Vision", "Deep Learning", "Python"],
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: 3,
    title: "Intelligent Chatbot",
    description: "Context-aware conversational AI for customer support and engagement.",
    icon: <MessageSquare className="h-10 w-10 text-ai-cyan" />,
    categories: ["NLP", "API Integration", "React"],
    gradient: "from-cyan-500/20 to-teal-500/20"
  },
  {
    id: 4,
    title: "Data Analysis Platform",
    description: "Automated insights generation from complex datasets using machine learning.",
    icon: <Network className="h-10 w-10 text-ai-purple" />,
    categories: ["ML", "Data Visualization", "Python"],
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    id: 5,
    title: "Code Optimization Tool",
    description: "AI-powered system that analyzes and optimizes code for better performance.",
    icon: <Code className="h-10 w-10 text-ai-blue" />,
    categories: ["ML", "Static Analysis", "JavaScript"],
    gradient: "from-blue-500/20 to-indigo-500/20"
  },
  {
    id: 6,
    title: "Recommendation Engine",
    description: "Personalized recommendation system based on user behavior and preferences.",
    icon: <CircuitBoard className="h-10 w-10 text-ai-cyan" />,
    categories: ["ML", "Recommendation", "Python"],
    gradient: "from-teal-500/20 to-green-500/20"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4 gradient-text inline-block">AI Projects</h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Innovative AI solutions designed to solve real-world problems
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="border-white/20 hover:bg-white/5">
            <Link to="/projects">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  return (
    <Link to={`/project/${project.id}`} className="block">
      <div className={`glass-card bg-gradient-to-br ${project.gradient} p-6 h-full flex flex-col glowing-border transition-all hover:translate-y-[-5px]`}>
        <div className="mb-4">
          <div className="rounded-lg bg-white/10 w-16 h-16 flex items-center justify-center mb-4">
            {project.icon}
          </div>
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-white/70 mb-4">{project.description}</p>
        </div>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.categories.map((category, index) => (
              <span 
                key={index} 
                className="text-xs px-2 py-1 rounded-full bg-white/10"
              >
                {category}
              </span>
            ))}
          </div>
          
          <div className="text-ai-purple flex items-center gap-1 text-sm font-medium">
            View Details <ArrowRight className="h-3 w-3" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectsSection;
