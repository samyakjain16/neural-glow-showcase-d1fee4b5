
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, CircuitBoard, Code, FileCode, MessageSquare, Network, Bot } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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

// Get all unique categories
const allCategories = Array.from(
  new Set(projects.flatMap(project => project.categories))
);

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const filteredProjects = selectedCategory
    ? projects.filter(project => project.categories.includes(selectedCategory))
    : projects;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="mb-4 gradient-text inline-block">All Projects</h1>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Explore my portfolio of AI and machine learning projects
            </p>
          </div>
          
          <div className="mb-10">
            <h2 className="text-xl font-medium mb-4">Filter by category:</h2>
            <div className="flex flex-wrap gap-3">
              <Button 
                variant={!selectedCategory ? "default" : "outline"}
                size="sm"
                className={!selectedCategory ? "bg-gradient-to-r from-ai-purple to-ai-blue" : "border-white/20"}
                onClick={() => setSelectedCategory(null)}
              >
                All
              </Button>
              
              {allCategories.map((category) => (
                <Button 
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  className={selectedCategory === category ? "bg-gradient-to-r from-ai-purple to-ai-blue" : "border-white/20"}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl mb-2">No projects found</h3>
              <p className="text-white/70 mb-6">Try selecting a different category.</p>
              <Button variant="outline" className="border-white/20" onClick={() => setSelectedCategory(null)}>
                Show All Projects
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
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

export default ProjectsPage;
