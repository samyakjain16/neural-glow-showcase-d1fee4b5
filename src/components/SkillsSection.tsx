
import React from 'react';
import { Brain, CircuitBoard, Code, Database, FileCode, Github, Layers, Network, Server } from 'lucide-react';

const skills = [
  {
    category: "AI & Machine Learning",
    items: [
      { name: "Deep Learning", level: 90 },
      { name: "Natural Language Processing", level: 95 },
      { name: "Computer Vision", level: 85 },
      { name: "Reinforcement Learning", level: 80 },
      { name: "LLM Fine-tuning", level: 90 },
    ],
    icon: <Brain className="h-6 w-6 text-ai-purple" />
  },
  {
    category: "Programming Languages",
    items: [
      { name: "Python", level: 95 },
      { name: "JavaScript/TypeScript", level: 85 },
      { name: "C++", level: 70 },
      { name: "Java", level: 75 },
      { name: "SQL", level: 80 },
    ],
    icon: <Code className="h-6 w-6 text-ai-blue" />
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "TensorFlow/Keras", level: 90 },
      { name: "PyTorch", level: 95 },
      { name: "Transformers", level: 85 },
      { name: "Scikit-learn", level: 90 },
      { name: "React", level: 80 },
    ],
    icon: <Layers className="h-6 w-6 text-ai-cyan" />
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "AWS", level: 85 },
      { name: "Docker", level: 80 },
      { name: "Git", level: 90 },
      { name: "MLflow", level: 75 },
      { name: "Kubernetes", level: 70 },
    ],
    icon: <Server className="h-6 w-6 text-ai-purple" />
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4 gradient-text inline-block">Skills & Expertise</h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Technical proficiency across AI, programming, and systems integration
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="glass-card p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="rounded-full bg-white/10 p-2">
                  {skillGroup.icon}
                </div>
                <h3 className="text-xl font-medium">{skillGroup.category}</h3>
              </div>
              
              <div className="space-y-4">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-white/90">{skill.name}</span>
                      <span className="text-white/60">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-ai-purple to-ai-blue h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
