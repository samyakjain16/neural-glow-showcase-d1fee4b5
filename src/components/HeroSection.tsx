
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, CircuitBoard, Code, Database, Network, Terminal } from 'lucide-react';

const HeroSection = () => {
  const particlesRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!particlesRef.current) return;
    
    const container = particlesRef.current;
    const colors = ['#8B5CF6', '#0EA5E9', '#22D3EE'];
    const sizes = [1, 2, 3];
    const particleCount = 30;
    
    // Clear existing particles
    container.innerHTML = '';
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      const size = sizes[Math.floor(Math.random() * sizes.length)];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      particle.className = 'particle animate-particles';
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.background = color;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.opacity = (Math.random() * 0.6 + 0.2).toString();
      particle.style.animationDuration = `${Math.random() * 25 + 15}s`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      
      container.appendChild(particle);
    }
  }, []);
  
  return (
    <section className="relative min-h-screen flex items-center pt-16 pb-20 overflow-hidden neural-bg">
      <div ref={particlesRef} className="particles" />
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="mb-4">
              <span className="block font-normal text-white/80">Hi, I'm</span>
              <span className="gradient-text">AI Engineer</span>
            </h1>
            
            <p className="text-xl md:text-2xl mt-8 mb-8 text-white/80 max-w-xl">
              Building intelligent systems that understand, learn, and transform businesses through cutting-edge AI solutions.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-ai-purple to-ai-blue hover:opacity-90 transition-opacity">
                <Link to="/#projects">
                  View My Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="border-white/20 hover:bg-white/5">
                <Link to="/#contact">
                  Get In Touch
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-6 animate-float">
              <IconCard icon={<Brain className="h-6 w-6 text-ai-purple" />} title="AI Integration" />
              <IconCard icon={<Network className="h-6 w-6 text-ai-blue" />} title="Neural Networks" delay="0.2s" />
              <IconCard icon={<Code className="h-6 w-6 text-ai-cyan" />} title="LLM Development" delay="0.3s" />
              <IconCard icon={<Database className="h-6 w-6 text-ai-purple" />} title="Data Processing" delay="0.1s" />
              <IconCard className="col-span-2" icon={<Terminal className="h-6 w-6 text-ai-blue" />} title="Custom AI Solutions" delay="0.4s" />
              <IconCard className="col-span-2" icon={<CircuitBoard className="h-6 w-6 text-ai-cyan" />} title="Intelligent Systems" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const IconCard = ({ 
  icon, 
  title, 
  delay = "0s",
  className = "",
}: { 
  icon: React.ReactNode; 
  title: string; 
  delay?: string;
  className?: string;
}) => (
  <div 
    className={`glass-card p-4 flex items-center gap-3 animate-pulse-gentle ${className}`}
    style={{ animationDelay: delay }}
  >
    <div className="rounded-full bg-white/10 p-2 flex-shrink-0">
      {icon}
    </div>
    <span className="font-medium">{title}</span>
  </div>
);

export default HeroSection;
