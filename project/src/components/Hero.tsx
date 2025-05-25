import React, { useState, useEffect } from 'react';
import { Github as GitHub, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20 pb-16 relative bg-gradient-to-br from-primary-50 to-white dark:from-dark-900 dark:to-dark-950">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-dark-900 dark:text-white leading-tight">
              Jaya Prakash Narayana{' '}
              <span className="text-primary-600 dark:text-primary-400 block md:inline">Gangineni</span>
            </h1>
            
            <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4 mb-6">
              <a 
                href="mailto:Jayaprakashn0089@gmail.com" 
                className="flex items-center text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <Mail size={18} className="mr-2" /> 
                <span className="text-sm">Jayaprakashn0089@gmail.com</span>
              </a>
              <a 
                href="http://www.linkedin.com/in/jayaprakashng" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <Linkedin size={18} className="mr-2" /> 
                <span className="text-sm">jayaprakashng</span>
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <GitHub size={18} className="mr-2" /> 
                <span className="text-sm">jayaprakashng</span>
              </a>
            </div>
            
            <div className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg mb-8 transform transition-all hover:scale-[1.02] border border-dark-100 dark:border-dark-700">
              <h2 className="text-xl font-semibold mb-3 text-dark-900 dark:text-white">AI Enthusiast & Data Analyst</h2>
              <p className="text-dark-700 dark:text-dark-300 mb-3 leading-relaxed">
                I'm an AI-enthusiast and data analyst passionate about uncovering insights from complex datasets.
              </p>
              <p className="text-dark-700 dark:text-dark-300 mb-3 leading-relaxed">
                I love querying with SQL and Python and crafting clear, impactful visualizations.
              </p>
              <p className="text-dark-700 dark:text-dark-300 leading-relaxed">
                With around 2 years of professional experience, I solve real-world problems through data.
              </p>
            </div>
            
            <a 
              href="#education" 
              className="inline-flex items-center px-5 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors shadow-md hover:shadow-lg"
            >
              Explore My Profile <ChevronDown size={18} className="ml-2 animate-bounce" />
            </a>
          </div>
          
          <div 
            className={`relative transition-all duration-1000 delay-500 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-dark-800 transform rotate-2 hover:rotate-0 transition-all duration-300">
              <img 
                src={new URL('../assets/profile.jpg', import.meta.url).href}
                alt="Jaya Prakash Narayana Gangineni" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-accent-500 opacity-20 blur-xl"></div>
            <div className="absolute -top-4 -left-4 w-40 h-40 rounded-full bg-primary-500 opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <a 
          href="#education" 
          className="flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-dark-800 shadow-md hover:shadow-lg text-primary-600 dark:text-primary-400 animate-bounce"
        >
          <ChevronDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;