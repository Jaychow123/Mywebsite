import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Cloud } from 'lucide-react';
import { cloudBadges } from '../constants';

const CloudBadges: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="badges" className="py-20 bg-dark-50 dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">
            Google Cloud Skill Badges
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
          <p className="text-dark-600 dark:text-dark-400 mt-6 max-w-2xl mx-auto">
            Earned certifications demonstrating proficiency across Google Cloud technologies,
            with focus on data analytics, machine learning, and infrastructure management.
          </p>
        </div>

        <div 
          ref={ref} 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {cloudBadges.map((badge, index) => (
            <div 
              key={index}
              className={`transition-all duration-500 delay-${index * 50} transform ${
                inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="bg-white dark:bg-dark-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] h-full border border-dark-100 dark:border-dark-700 group">
                <div className="h-36 overflow-hidden">
                  <img 
                    src={badge.image} 
                    alt={badge.title}
                    className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-start gap-2">
                    <div className="pt-1">
                      <Cloud size={16} className="text-primary-600 dark:text-primary-400" />
                    </div>
                    <h3 className="text-sm font-semibold text-dark-900 dark:text-white leading-tight">
                      {badge.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CloudBadges;