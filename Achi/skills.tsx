// src/components/About.tsx
import React from 'react';
import { FileText } from 'lucide-react';
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="bg-muted/50 section-padding">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">About Me</h2>
          <div className="w-20 h-1 bg-secondary mb-6"></div>
          <p className="text-muted-foreground max-w-2xl">
            Discover my journey, experience, and what drives me to create exceptional solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                alt="Working on laptop"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute top-6 -left-6 w-full h-full bg-secondary/20 rounded-lg -z-0"></div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-display font-semibold text-primary">
              Developer, Founder & Developer
            </h3>
            <p className="text-muted-foreground">
              With over 3 years of experience in web development, I've built products that solve real problems and create value. My journey began as a self-taught developer and evolved into founding tech ventures that have made an impact.
            </p>
            <p className="text-muted-foreground">
              I specialize in full-stack development, focusing on creating intuitive user interfaces powered by robust backend systems. My passion lies in translating complex ideas into elegant, user-friendly solutions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-primary mb-2">Education</h4>
                <p className="text-muted-foreground">Matriculation<br />Ukhrul Central School</p>
              </div>
              <div>
                <h4 className="font-medium text-primary mb-2">Location</h4>
                <p className="text-muted-foreground">Ukhrul<br />Ukhrul,Manipur</p>
              </div>
            </div>
            <Button 
              variant="secondary" 
              className="flex items-center space-x-2"
            >
              <FileText size={18} />
              <span>Download Resume</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
