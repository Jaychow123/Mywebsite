import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Code, Database, BarChart3, Brain } from 'lucide-react';
import { skillCategories } from '../constants';

const getIconForCategory = (title: string) => {
  switch (title) {
    case 'Programming & Querying':
      return <Code className="w-6 h-6" />;
    case 'Cloud & Data Platforms':
      return <Database className="w-6 h-6" />;
    case 'Data Visualization & Analysis':
      return <BarChart3 className="w-6 h-6" />;
    case 'Machine Learning':
      return <Brain className="w-6 h-6" />;
    default:
      return <Code className="w-6 h-6" />;
  }
};

const Skills: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="skills" className="py-20 bg-dark-50 dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">
            Skills & Tools
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </div>

        <div 
          ref={ref} 
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className={`transition-all duration-700 delay-${index * 100} transform ${
                inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] h-full border border-dark-100 dark:border-dark-700">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mr-4">
                    {getIconForCategory(category.title)}
                  </div>
                  <h3 className="text-xl font-bold text-dark-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="text-dark-700 dark:text-dark-300 text-sm font-medium">
                          {skill}
                        </span>
                        <span className="text-dark-500 dark:text-dark-400 text-sm">
                          {80 + Math.floor(Math.random() * 20)}%
                        </span>
                      </div>
                      <div className="w-full bg-dark-200 dark:bg-dark-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full" 
                          style={{ width: `${80 + Math.floor(Math.random() * 20)}%`, 
                                  animationDelay: `${skillIndex * 0.1}s` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;