import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Award } from 'lucide-react';
import { certifications } from '../constants';

const Certifications: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </div>

        <div 
          ref={ref} 
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className={`transition-all duration-500 delay-${index * 100} transform ${
                inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] h-full border border-dark-100 dark:border-dark-700 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary-500/10 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-300"></div>
                
                <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 inline-block mb-4">
                  <Award className="w-6 h-6" />
                </div>
                
                <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-3">
                  {cert.title}
                </h3>
                
                <p className="text-dark-600 dark:text-dark-400 text-sm">
                  Issued by <span className="font-medium text-dark-800 dark:text-dark-300">{cert.issuer}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;