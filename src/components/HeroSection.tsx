import React from 'react';
import { Brain, Code, CircuitBoard, Network } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const HeroSection: React.FC = () => {
  const services: Service[] = [
    {
      title: "AI Consulting",
      description: "Strategic guidance on implementing AI solutions for your specific business needs",
      icon: <Brain className="w-10 h-10 text-primary" />
    },
    {
      title: "Custom AI Development",
      description: "Tailored AI solutions designed and built specifically for your unique challenges",
      icon: <Code className="w-10 h-10 text-primary" />
    },
    {
      title: "ML Model Training",
      description: "Expert development and training of machine learning models using your data",
      icon: <CircuitBoard className="w-10 h-10 text-primary" />
    },
    {
      title: "AI Integration",
      description: "Seamless integration of AI capabilities into your existing systems and workflows",
      icon: <Network className="w-10 h-10 text-primary" />
    }
  ];

  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Transforming Businesses with AI Solutions
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We help companies leverage the power of artificial intelligence to drive innovation, 
          optimize operations, and gain competitive advantages.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
          >
            <div className="mb-4">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
