
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Brain, CircuitBoard, Code, ExternalLink, FileCode, Github, MessageSquare, Network, Robot } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Project data (this would typically come from an API or database)
const projectsData = [
  {
    id: 1,
    title: "AI Content Generator",
    description: "Natural language generation tool that creates high-quality content based on simple prompts.",
    longDescription: "This AI-powered content generator leverages state-of-the-art language models to create human-like text across various formats and styles. The system can generate blog posts, marketing copy, product descriptions, and creative writing that matches specific brand voices and tones.",
    icon: <Brain className="h-10 w-10 text-ai-purple" />,
    categories: ["LLM", "NLP", "Web App"],
    technologies: ["Python", "PyTorch", "Transformer models", "React", "Node.js", "MongoDB"],
    challenges: [
      "Implementing effective prompt engineering techniques to guide the AI's output",
      "Optimizing model performance for real-time text generation",
      "Creating a user-friendly interface for non-technical users",
      "Ensuring content quality and factual accuracy"
    ],
    solutions: [
      "Developed a custom fine-tuned GPT model for specific content domains",
      "Implemented content filtering and fact-checking systems",
      "Created an intuitive UI with real-time preview and editing capabilities",
      "Built a feedback system to continuously improve model outputs"
    ],
    results: [
      "50% reduction in content creation time for marketing teams",
      "93% user satisfaction rating from content creators",
      "Implementation in 12+ companies across different industries"
    ],
    images: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
    ],
    links: {
      demo: "https://example.com/demo",
      github: "https://github.com/example/project",
      case_study: "https://example.com/case-study"
    },
    gradient: "from-purple-500/20 to-indigo-500/20"
  },
  {
    id: 2,
    title: "Computer Vision System",
    description: "Real-time object detection and recognition system for security applications.",
    longDescription: "A sophisticated computer vision system designed for security and surveillance applications. This system can detect, track, and identify objects and people in real-time video feeds with high accuracy, even in challenging lighting conditions and environments.",
    icon: <Robot className="h-10 w-10 text-ai-blue" />,
    categories: ["Computer Vision", "Deep Learning", "Python"],
    technologies: ["Python", "TensorFlow", "OpenCV", "YOLO", "Raspberry Pi", "AWS"],
    challenges: [
      "Achieving high accuracy in varied lighting conditions",
      "Processing video feeds in real-time on edge devices",
      "Reducing false positives in complex environments",
      "Integrating with existing security infrastructure"
    ],
    solutions: [
      "Implemented a custom-trained YOLO model for specific detection requirements",
      "Optimized inference for edge deployment on Raspberry Pi devices",
      "Created a dynamic confidence threshold system based on environmental factors",
      "Developed a flexible API for integration with various security platforms"
    ],
    results: [
      "99.2% detection accuracy in benchmark tests",
      "Processing speed of 30+ FPS on edge devices",
      "Successful deployment in 5 commercial facilities",
      "85% reduction in false alarm rates"
    ],
    images: [
      "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
    ],
    links: {
      demo: "https://example.com/demo",
      github: "https://github.com/example/project",
      case_study: "https://example.com/case-study"
    },
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: 3,
    title: "Intelligent Chatbot",
    description: "Context-aware conversational AI for customer support and engagement.",
    longDescription: "An advanced conversational AI system that provides intelligent customer support across multiple channels. The chatbot understands context, maintains conversation history, and can seamlessly handle complex customer inquiries with minimal human intervention.",
    icon: <MessageSquare className="h-10 w-10 text-ai-cyan" />,
    categories: ["NLP", "API Integration", "React"],
    technologies: ["Python", "BERT", "React", "Node.js", "Redis", "AWS Lambda"],
    challenges: [
      "Maintaining conversation context over extended interactions",
      "Integrating with multiple backend systems and knowledge bases",
      "Handling sentiment and emotional context appropriately",
      "Providing smooth handoff to human agents when needed"
    ],
    solutions: [
      "Implemented a context management system using transformer-based models",
      "Created a unified API layer for accessing disparate knowledge sources",
      "Integrated sentiment analysis to adapt response tone and escalation paths",
      "Developed an intelligent routing system for human agent handoff"
    ],
    results: [
      "72% of customer inquiries resolved without human intervention",
      "Average response time reduced from 15 minutes to under 30 seconds",
      "Customer satisfaction scores improved by 28%",
      "Deployed across 3 languages and 5 business verticals"
    ],
    images: [
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      "https://images.unsplash.com/photo-1518770660439-4636190af475"
    ],
    links: {
      demo: "https://example.com/demo",
      github: "https://github.com/example/project",
      case_study: "https://example.com/case-study"
    },
    gradient: "from-cyan-500/20 to-teal-500/20"
  },
  {
    id: 4,
    title: "Data Analysis Platform",
    description: "Automated insights generation from complex datasets using machine learning.",
    longDescription: "A comprehensive data analysis platform that automatically discovers and visualizes meaningful patterns and insights from complex datasets. The system combines statistical analysis with machine learning to provide actionable business intelligence without requiring data science expertise.",
    icon: <Network className="h-10 w-10 text-ai-purple" />,
    categories: ["ML", "Data Visualization", "Python"],
    technologies: ["Python", "scikit-learn", "D3.js", "PostgreSQL", "Flask", "Docker"],
    challenges: [
      "Processing and analyzing highly diverse data formats and sources",
      "Generating insights that are meaningful and actionable for business users",
      "Creating intuitive visualizations for complex data relationships",
      "Balancing automation with user control and customization"
    ],
    solutions: [
      "Built a flexible data ingestion system supporting 15+ data formats",
      "Implemented an ensemble of ML algorithms for comprehensive analysis",
      "Designed an interactive visualization system with drill-down capabilities",
      "Developed a user-friendly interface for configuring analysis parameters"
    ],
    results: [
      "Average analysis time reduced from 2 weeks to 4 hours",
      "Successfully analyzed datasets up to 500GB in size",
      "Identified key business optimizations worth $1.2M annually for a retail client",
      "Deployed to 8 enterprise customers within 6 months of launch"
    ],
    images: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    ],
    links: {
      demo: "https://example.com/demo",
      github: "https://github.com/example/project",
      case_study: "https://example.com/case-study"
    },
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    id: 5,
    title: "Code Optimization Tool",
    description: "AI-powered system that analyzes and optimizes code for better performance.",
    longDescription: "An intelligent code analysis and optimization tool that helps developers write more efficient, maintainable, and secure code. The system can identify performance bottlenecks, potential bugs, security vulnerabilities, and suggest improvements through AI-powered static analysis.",
    icon: <Code className="h-10 w-10 text-ai-blue" />,
    categories: ["ML", "Static Analysis", "JavaScript"],
    technologies: ["Python", "JavaScript", "TensorFlow", "AST Parsing", "Node.js", "Redis"],
    challenges: [
      "Analyzing code syntax and semantics across multiple programming languages",
      "Providing optimization suggestions that maintain code functionality",
      "Balancing between performance, readability, and security considerations",
      "Integrating seamlessly with existing development workflows"
    ],
    solutions: [
      "Developed language-specific parsers for Python, JavaScript, and Java",
      "Created a neural network trained on code quality metrics and benchmarks",
      "Implemented a suggestion ranking system based on impact vs. effort",
      "Built plugins for VS Code, IntelliJ, and GitHub"
    ],
    results: [
      "Average 22% performance improvement in optimized codebases",
      "Identified 145 potential security vulnerabilities across client projects",
      "Reduced technical debt by 35% in a large legacy system",
      "Adopted by 5,000+ developers within 3 months of launch"
    ],
    images: [
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    ],
    links: {
      demo: "https://example.com/demo",
      github: "https://github.com/example/project",
      case_study: "https://example.com/case-study"
    },
    gradient: "from-blue-500/20 to-indigo-500/20"
  },
  {
    id: 6,
    title: "Recommendation Engine",
    description: "Personalized recommendation system based on user behavior and preferences.",
    longDescription: "A sophisticated recommendation engine that delivers highly personalized product, content, and service suggestions based on user behavior, preferences, and contextual information. The system continuously learns and adapts to changing user interests and market trends.",
    icon: <CircuitBoard className="h-10 w-10 text-ai-cyan" />,
    categories: ["ML", "Recommendation", "Python"],
    technologies: ["Python", "TensorFlow", "Collaborative Filtering", "FastAPI", "Redis", "AWS"],
    challenges: [
      "Handling the cold-start problem for new users and items",
      "Balancing between exploitation of known preferences and exploration of new options",
      "Processing large-scale user behavior data in near real-time",
      "Ensuring recommendation diversity while maintaining relevance"
    ],
    solutions: [
      "Implemented a hybrid recommendation approach combining collaborative filtering and content-based methods",
      "Developed an exploration strategy with dynamic weighting based on user engagement",
      "Built a real-time feature processing pipeline using Kafka and Spark",
      "Created a diversity-aware recommendation algorithm with configurable parameters"
    ],
    results: [
      "32% increase in user engagement metrics for an e-commerce client",
      "Recommendations processing time reduced from minutes to milliseconds",
      "15% improvement in conversion rates across all client implementations",
      "Successfully scaled to handle 10M+ daily active users"
    ],
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
      "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b"
    ],
    links: {
      demo: "https://example.com/demo",
      github: "https://github.com/example/project",
      case_study: "https://example.com/case-study"
    },
    gradient: "from-teal-500/20 to-green-500/20"
  }
];

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const projectId = parseInt(id || "1");
  
  // Find the project with the matching id
  const project = projectsData.find(p => p.id === projectId);
  
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
            <p className="mb-6">The project you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/#projects">View All Projects</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-4">
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

const FeatureCard = ({ title, items, icon }: { title: string; items: string[]; icon: React.ReactNode }) => (
  <div className="glass-card p-6">
    <div className="flex items-center gap-3 mb-6">
      <div className="rounded-full bg-white/10 p-2">
        {icon}
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
    
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-2">
          <span className="text-ai-purple mt-1">•</span>
          <span className="text-white/80">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default ProjectDetail;
