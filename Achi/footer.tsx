// src/components/Footer.tsx
import React from 'react';
import { Linkedin, Instagram, ArrowUp, Download } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleDownloadResume = () => {
    // In a real application, you would link to your actual resume file
    const resumeUrl = "/resume.pdf";
    
    // Create an anchor element and trigger download
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = "john_developer_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className="bg-primary text-primary-foreground pt-12 pb-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0 animate-fade-in">
            <a href="#home" className="text-2xl font-display font-bold text-white">
              Dev<span className="text-secondary">Founder</span>
            </a>
            <p className="mt-2 max-w-md text-primary-foreground/80">
              Building innovative solutions and leading successful tech ventures.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-secondary transition-colors transform hover:scale-125 duration-300"
                aria-label="Instagram Profile"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-secondary transition-colors transform hover:scale-125 duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <button
                onClick={handleDownloadResume}
                className="text-primary-foreground/80 hover:text-secondary transition-colors transform hover:scale-125 duration-300"
                aria-label="Download Resume"
              >
                <Download size={20} />
              </button>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-primary-foreground/80 hover:text-secondary transition-colors transform hover:translate-y-[-5px] duration-300"
              aria-label="Scroll to top"
            >
              <span>Back to top</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row justify-between items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-primary-foreground/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} John Developer. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-primary-foreground/60 hover:text-secondary text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-secondary text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
