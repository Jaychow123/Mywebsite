import React from 'react';
import { useInView } from 'react-intersection-observer';
import { GraduationCap } from 'lucide-react';
import { education } from '../constants';

const Education: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="education" className="py-20 bg-white dark:bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </div>

        <div 
          ref={ref} 
          className="relative grid md:grid-cols-2 gap-8"
        >
          <div className="md:col-span-2 mb-8 md:mb-12 relative z-10">
            <div className={`transition-all duration-700 delay-100 transform ${
              inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-1 rounded-2xl shadow-xl">
                <div className="bg-white dark:bg-dark-900 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-primary-50 dark:bg-dark-800 rounded-xl flex items-center justify-center">
                    <img 
                      src={new URL('../assets/graduation.jpg', import.meta.url).href}
                      alt="Graduation" 
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <div className="inline-flex items-center px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium mb-4">
                      <GraduationCap size={16} className="mr-2" /> Highest Education
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-dark-900 dark:text-white mb-2">
                      {education[0].degree}
                    </h3>
                    <p className="text-dark-600 dark:text-dark-300 mb-2">
                      {education[0].institution}
                    </p>
                    <p className="text-dark-500 dark:text-dark-400 text-sm mb-3">
                      {education[0].location}
                    </p>
                    <div className="inline-block bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 px-3 py-1 rounded-full text-sm font-semibold">
                      CGPA: {education[0].cgpa}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {education.slice(1).map((item, index) => (
            <div 
              key={index}
              className={`transition-all duration-700 delay-${200 + index * 100} transform ${
                inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] h-full border border-dark-100 dark:border-dark-700">
                <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-3">
                  {item.degree}
                </h3>
                <p className="text-dark-600 dark:text-dark-300 mb-2">
                  {item.institution}
                </p>
                <p className="text-dark-500 dark:text-dark-400 text-sm mb-3">
                  {item.location}
                </p>
                <div className="inline-block bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm font-medium">
                  CGPA: {item.cgpa}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;