
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { toast } from "sonner";

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally connect to a backend service
    toast.success("Message sent successfully! I'll get back to you soon.");
  };
  
  return (
    <section id="contact" className="py-20 relative neural-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4 gradient-text inline-block">Get In Touch</h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Have a project in mind or want to collaborate? Reach out!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-white/80">Name</label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    required 
                    className="bg-white/5 border-white/10 focus:border-ai-purple" 
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-white/80">Email</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Your email" 
                    required 
                    className="bg-white/5 border-white/10 focus:border-ai-purple" 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-white/80">Subject</label>
                <Input 
                  id="subject" 
                  placeholder="Subject of your message" 
                  required 
                  className="bg-white/5 border-white/10 focus:border-ai-purple" 
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-white/80">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Your message" 
                  required 
                  rows={5} 
                  className="bg-white/5 border-white/10 focus:border-ai-purple resize-none" 
                />
              </div>
              
              <Button type="submit" className="w-full bg-gradient-to-r from-ai-purple to-ai-blue hover:opacity-90 transition-opacity">
                Send Message
              </Button>
            </form>
          </div>
          
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <ContactItem icon={<Mail />} title="Email" detail="contact@aiportfolio.com" link="mailto:contact@aiportfolio.com" />
              <ContactItem icon={<Phone />} title="Phone" detail="+1 (555) 123-4567" link="tel:+15551234567" />
              <ContactItem icon={<MapPin />} title="Location" detail="San Francisco, CA" />
              
              <div className="pt-6 border-t border-white/10">
                <h4 className="text-lg font-medium mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  <SocialButton icon={<Github />} href="https://github.com" label="GitHub" />
                  <SocialButton icon={<Linkedin />} href="https://linkedin.com" label="LinkedIn" />
                  <SocialButton icon={<Twitter />} href="https://twitter.com" label="Twitter" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ 
  icon, 
  title, 
  detail, 
  link 
}: { 
  icon: React.ReactNode; 
  title: string; 
  detail: string; 
  link?: string;
}) => (
  <div className="flex items-start gap-4">
    <div className="rounded-full bg-white/10 p-2 mt-1">
      {icon}
    </div>
    <div>
      <h4 className="font-medium text-white">{title}</h4>
      {link ? (
        <a href={link} className="text-white/70 hover:text-ai-purple transition-colors">
          {detail}
        </a>
      ) : (
        <p className="text-white/70">{detail}</p>
      )}
    </div>
  </div>
);

const SocialButton = ({ icon, href, label }: { icon: React.ReactNode; href: string; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-ai-purple hover:to-ai-blue flex items-center justify-center transition-all"
    aria-label={label}
  >
    {icon}
  </a>
);

export default ContactSection;
