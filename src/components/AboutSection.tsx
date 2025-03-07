
import React from 'react';
import { Brain, Code, Database, FileCode, Network, Server } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative neural-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4 gradient-text inline-block">About Me</h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Passionate AI Engineer dedicated to creating innovative solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="mb-4 text-2xl">Building the future with AI</h3>
            <p className="text-white/80 mb-6">
              I'm an AI Engineer with expertise in building and integrating cutting-edge AI solutions. My work focuses on 
              developing intelligent systems that can understand, learn, and adapt to complex problems.
            </p>
            <p className="text-white/80 mb-6">
              With experience in machine learning, natural language processing, and computer vision, I create solutions 
              that bridge the gap between theoretical AI research and practical business applications.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <ExperienceCard
                icon={<Brain className="h-5 w-5 text-ai-purple" />}
                title="Machine Learning"
                description="Expert in building and deploying ML models"
              />
              <ExperienceCard
                icon={<FileCode className="h-5 w-5 text-ai-blue" />}
                title="NLP & LLMs"
                description="Specialized in language model fine-tuning"
              />
              <ExperienceCard
                icon={<Database className="h-5 w-5 text-ai-cyan" />}
                title="Data Engineering"
                description="Designing robust data pipelines for AI"
              />
              <ExperienceCard
                icon={<Network className="h-5 w-5 text-ai-purple" />}
                title="AI Integration"
                description="Seamless AI integration with existing systems"
              />
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative flex justify-center">
            <div className="glass-card gradient-border p-1">
              <div className="aspect-square w-full max-w-md bg-gradient-to-br from-ai-purple/10 to-ai-blue/10 flex items-center justify-center">
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-40 h-40 rounded-full bg-ai-purple/20 animate-pulse-gentle" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute w-32 h-32 rounded-full bg-ai-blue/20 animate-pulse-gentle"></div>
                  <div className="absolute w-24 h-24 rounded-full bg-ai-cyan/20 animate-pulse-gentle" style={{ animationDelay: '1s' }}></div>
                  <Brain className="h-12 w-12 text-white relative z-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
}) => (
  <div className="glass-card p-4">
    <div className="flex items-start gap-3">
      <div className="rounded-full bg-white/10 p-2 flex-shrink-0 mt-1">
        {icon}
      </div>
      <div>
        <h4 className="font-medium text-base">{title}</h4>
        <p className="text-white/70 text-sm">{description}</p>
      </div>
    </div>
  </div>
);

export default AboutSection;
