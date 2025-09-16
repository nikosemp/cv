const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 glow-text">About Me</h2>
          <div className="w-16 h-1 bg-white mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-12 section-content">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="w-full h-80 md:h-96 rounded-lg overflow-hidden">
                <img 
                  src="src/assets/photo1.jpg"
                  alt="" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 glass-container"></div>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0">
            <h3 className="text-2xl font-bold text-white mb-4">Who am I?</h3>
            <p className="text-gray-300 mb-6">
              I'm a passionate web developer with experience creating modern and responsive web applications. 
              I specialize in front-end development with React, but I'm also proficient in back-end technologies.
            </p>
            <p className="text-gray-300 mb-6">
              My journey in web development started when I was in college, and since then, I've worked on various projects.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Name:</h4>
                <p className="text-gray-300">Nikos Giannakas</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Email:</h4>
                <p className="text-gray-300">nikosemp@hotmail.com</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Location:</h4>
                <p className="text-gray-300">Chania, Crete, Greece</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Availability:</h4>
                <p className="text-gray-300">Freelance & Full-time</p>
              </div>
            </div>
            <a 
              href="#contact" 
              className="inline-block px-8 py-3 glass-container text-white font-semibold rounded-full hover:bg-white/10 transition duration-300"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 