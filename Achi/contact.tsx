// src/components/Contact.tsx
import React from 'react';
import { Phone, MapPin, MessageSquare, Download } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Contact = () => {
  const whatsappNumber = "+12345678900"; // Replace with your actual WhatsApp number
  
  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}`;
    window.open(url, '_blank');
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
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4 animate-fade-in">Get In Touch</h2>
          <div className="w-20 h-1 bg-secondary mb-6"></div>
          <p className="text-muted-foreground max-w-2xl animate-slide-up">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="bg-white/50 backdrop-blur-sm rounded-xl shadow-lg p-8 max-w-2xl mx-auto transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
          <div className="space-y-8">
            <h3 className="text-2xl font-display font-semibold text-primary animate-fade-in">Contact Information</h3>
            <p className="text-muted-foreground animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Feel free to reach out through any of the following channels. I'm always open to discussing new projects, creative ideas, or opportunities.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 transform transition-all duration-300 hover:translate-x-2">
                <Phone className="w-6 h-6 text-secondary mt-1" />
                <div>
                  <h4 className="font-medium text-primary">Phone</h4>
                  <a href="tel:+12345678900" className="text-muted-foreground hover:text-secondary transition-colors">
                    +1 (234) 567-8900
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 transform transition-all duration-300 hover:translate-x-2">
                <MapPin className="w-6 h-6 text-secondary mt-1" />
                <div>
                  <h4 className="font-medium text-primary">Location</h4>
                  <p className="text-muted-foreground">
                    San Francisco, CA
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                variant="secondary" 
                onClick={openWhatsApp}
                className="w-full transform transition-all duration-300 hover:scale-105"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </Button>
              
              <Button 
                variant="outline" 
                onClick={handleDownloadResume}
                className="w-full transform transition-all duration-300 hover:scale-105"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
