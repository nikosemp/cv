import React from 'react';

const Skills = () => {
  const technologies = [
    {
      name: 'HTML',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      color: '#E34F26',
      animationDelay: '0s'
    },
    {
      name: 'CSS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      color: '#1572B6',
      animationDelay: '1s'
    },
    {
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      color: '#F7DF1E',
      animationDelay: '2s'
    },
    {
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      color: '#61DAFB',
      animationDelay: '3s'
    },
    {
      name: 'Next.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      color: '#000000',
      animationDelay: '4s'
    },
    {
      name: 'Node.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      color: '#339933',
      animationDelay: '5s'
    },
    {
      name: 'Express',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      color: '#000000',
      animationDelay: '6s'
    },
    {
      name: 'MongoDB',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      color: '#47A248',
      animationDelay: '7s'
    },
    {
      name: 'Tailwind CSS',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
      color: '#38B2AC',
      animationDelay: '8s'
    },
/*     {
      name: 'Vite',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg',
      color: '#646CFF',
      animationDelay: '9s'
    }, */
    {
      name: 'Git',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      color: '#F05032',
      animationDelay: '9s'
    }
  ];

  return (
    <section id="skills" className="py-20 min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 glow-text">My Tech Stack</h2>
          <div className="w-16 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            These are the technologies I work with to bring ideas to life.
          </p>
        </div>
        
        <div className="tech-icons-container">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-16 md:gap-20 lg:gap-24">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="tech-icon-wrapper flex justify-center"
                style={{
                  animationDelay: tech.animationDelay,
                }}
              >
                <div className="tech-icon float flex flex-col items-center justify-center hover:scale-110 transition-all duration-300 bg-transparent">
                  <img 
                    src={tech.icon} 
                    alt={tech.name} 
                    className="w-16 h-16 md:w-20 md:h-20 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]"
                    style={{ filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))' }}
                  />
                  <span className="mt-3 text-white font-medium">{tech.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Additional floating particles specific to the skills section */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="skill-particle skill-particle1"></div>
        <div className="skill-particle skill-particle2"></div>
        <div className="skill-particle skill-particle3"></div>
      </div>
    </section>
  );
};

export default Skills; 