import React from 'react';
import { Mail, Linkedin, Github as GitHub, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-dark-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-accent-500">J</span>aya Prakash Narayana
              <span className="block text-sm font-normal text-dark-400 mt-1">
                Data Analyst & AI Enthusiast
              </span>
            </h3>
            <p className="text-dark-300 mb-6 max-w-md">
              Thank you for visiting my portfolio. I'm passionate about data science, AI, and solving complex problems through data analysis.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:Jayaprakashn0089@gmail.com"
                className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-white hover:bg-primary-600 transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a 
                href="http://www.linkedin.com/in/jayaprakashng"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-white hover:bg-primary-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-white hover:bg-primary-600 transition-colors"
                aria-label="GitHub"
              >
                <GitHub size={18} />
              </a>
            </div>
          </div>
          
          <div className="md:text-right">
            <h3 className="text-xl font-bold mb-4">Contact Me</h3>
            <p className="text-dark-300 mb-2">
              Feel free to reach out for collaborations or just a chat about data science and AI.
            </p>
            <a 
              href="mailto:Jayaprakashn0089@gmail.com"
              className="text-primary-400 hover:text-primary-300 transition-colors"
            >
              Jayaprakashn0089@gmail.com
            </a>
          </div>
        </div>
        
        <div className="border-t border-dark-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-dark-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Jaya Prakash Narayana Gangineni. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-dark-800 hover:bg-primary-600 transition-colors text-white"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;