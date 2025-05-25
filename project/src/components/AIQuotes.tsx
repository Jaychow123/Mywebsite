import React from 'react';
import { useInView } from 'react-intersection-observer';
import { aiQuotes } from '../constants';

const AIQuotes: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="quotes" className="py-20 bg-white dark:bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">
            AI Insights from Leaders
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
          <p className="text-dark-600 dark:text-dark-400 mt-6 max-w-3xl mx-auto">
            Perspectives on artificial intelligence from industry leaders and visionaries
            who have shaped our understanding of this transformative technology.
          </p>
        </div>

        <div 
          ref={ref} 
          className="grid md:grid-cols-2 gap-8"
        >
          {aiQuotes.map((item, index) => (
            <div 
              key={index}
              className={`transition-all duration-700 delay-${index * 100} transform ${
                inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] h-full border border-dark-100 dark:border-dark-700 relative">
                <div className="absolute top-6 left-6 text-7xl text-primary-200 dark:text-primary-900/30 font-serif">"</div>
                
                <blockquote className="relative z-10">
                  <p className="text-dark-700 dark:text-dark-300 italic leading-relaxed mb-6 pt-4 relative z-10">
                    {item.quote}
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-primary-200 dark:border-primary-800">
                      <img 
                        src={item.image} 
                        alt={item.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-dark-900 dark:text-white">
                        {item.author}
                      </p>
                      <p className="text-sm text-dark-500 dark:text-dark-400">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIQuotes;