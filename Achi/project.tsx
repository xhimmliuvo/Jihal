// src/components/Projects.tsx
import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'web', name: 'Web App' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'startup', name: 'Startup' }
  ];
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A fully-featured e-commerce platform with user authentication, product management, and payment processing.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
      category: "web",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A mobile app for managing tasks, projects, and team collaboration with real-time updates.",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
      category: "mobile",
      technologies: ["React Native", "Firebase", "Redux"],
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "HealthTech Startup",
      description: "Co-founded a healthcare technology startup that streamlines patient management for clinics.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "startup",
      technologies: ["Vue.js", "Django", "PostgreSQL", "AWS"],
      link: "#",
      github: "#"
    },
    {
      id: 4,
      title: "AI Content Generator",
      description: "A web application that leverages AI to generate unique content for marketing and social media.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=1401&q=80",
      category: "web",
      technologies: ["Next.js", "OpenAI API", "TailwindCSS", "Vercel"],
      link: "#",
      github: "#"
    },
    {
      id: 5,
      title: "Fitness Tracking App",
      description: "A mobile application for tracking workouts, nutrition, and progress with personalized recommendations.",
      image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80",
      category: "mobile",
      technologies: ["Flutter", "Firebase", "HealthKit", "Google Fit"],
      link: "#",
      github: "#"
    },
    {
      id: 6,
      title: "EdTech Platform",
      description: "Founded an education technology platform connecting students with tutors for personalized learning.",
      image: "https://images.unsplash.com/photo-1610484826967-09c5720778c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "startup",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      link: "#",
      github: "#"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="bg-muted/50 section-padding">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">My Work</h2>
          <div className="w-20 h-1 bg-secondary mb-6"></div>
          <p className="text-muted-foreground max-w-2xl">
            A showcase of my projects, startups, and contributions that demonstrate my technical expertise and entrepreneurial vision.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-4 py-2 rounded-full transition-colors ${
                filter === category.id 
                  ? 'bg-secondary text-secondary-foreground' 
                  : 'bg-white text-muted-foreground hover:bg-muted'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg overflow-hidden shadow-sm card-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-primary">{project.title}</h3>
                  <span className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground">
                    {project.category === 'web' ? 'Web App' : project.category === 'mobile' ? 'Mobile' : 'Startup'}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-secondary transition-colors"
                      aria-label="View source code"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-secondary transition-colors"
                      aria-label="Visit live site"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
