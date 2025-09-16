import photo2 from '../assets/ttt.png';
import { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'Tic-Tac-Toe Game',
      category: 'app',
      image: photo2,
      description: 'A simple tic tac toe game created with React',
      technologies: ['React', 'Vite'],
      link: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'app',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80',
      description: 'A productivity app that helps users manage their tasks and projects.',
      technologies: ['React Native', 'Firebase', 'Redux'],
      link: '#'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1755&q=80',
      description: 'A responsive portfolio website built with React and Tailwind CSS.',
      technologies: ['React', 'Tailwind CSS', 'Vite'],
      link: '#'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      category: 'app',
      image: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1751&q=80',
      description: 'A weather dashboard that displays current weather and forecasts.',
      technologies: ['JavaScript', 'OpenWeather API', 'Chart.js'],
      link: '#'
    },
    {
      id: 5,
      title: 'Social Media Dashboard',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1715&q=80',
      description: 'A dashboard for managing and analyzing social media accounts.',
      technologies: ['React', 'Node.js', 'Express', 'Social Media APIs'],
      link: '#'
    },
    {
      id: 6,
      title: 'Fitness Tracker',
      category: 'app',
      image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
      description: 'A fitness tracking app that helps users monitor their workouts and progress.',
      technologies: ['React Native', 'Firebase', 'HealthKit API'],
      link: '#'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 glow-text">My Projects</h2>
          <div className="w-16 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects. I've worked on a variety of applications, from web to mobile.
          </p>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            <button 
              onClick={() => setActiveFilter('all')}
              className={`px-6 py-2 rounded-full glass-container ${activeFilter === 'all' ? 'bg-white/20' : ''}`}
            >
              All
            </button>
            <button 
              onClick={() => setActiveFilter('web')}
              className={`px-6 py-2 rounded-full glass-container ${activeFilter === 'web' ? 'bg-white/20' : ''}`}
            >
              Web
            </button>
            <button 
              onClick={() => setActiveFilter('app')}
              className={`px-6 py-2 rounded-full glass-container ${activeFilter === 'app' ? 'bg-white/20' : ''}`}
            >
              App
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="glass-container rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-fill transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 glass-container text-white text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className="inline-block px-6 py-2 glass-container text-white font-semibold rounded-full hover:bg-white/10 transition duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 