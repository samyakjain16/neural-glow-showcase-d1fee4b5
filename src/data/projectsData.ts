
import { ReactNode } from 'react';
import { Brain, CircuitBoard, Code, MessageSquare, Network, Bot } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  icon: ReactNode;
  categories: string[];
  technologies: string[];
  challenges: string[];
  solutions: string[];
  results: string[];
  images: string[];
  links: {
    demo?: string;
    github?: string;
    case_study?: string;
  };
  gradient: string;
}

// Project data (this would typically come from an API or database)
export const projectsData: Project[] = [
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
    icon: <Bot className="h-10 w-10 text-ai-blue" />,
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
