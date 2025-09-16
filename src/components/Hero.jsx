import { useState, useEffect } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [typingComplete, setTypingComplete] = useState(false);

  const phrase = 'Web Developer';

  useEffect(() => {
    if (typingComplete && !isDeleting) return;
    
    const handleTyping = () => {
      setText(isDeleting 
        ? phrase.substring(0, text.length - 1) 
        : phrase.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 75 : 150);

      if (!isDeleting && text === phrase) {
        setTypingComplete(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, typingSpeed, typingComplete]);

  return (
    <section id="home" className="w-full min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center w-full max-w-4xl glass-container py-12 px-6 md:px-12">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 glow-text">
            Hello, I'm <span className="text-gray-300">Nick</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-white mb-8 h-12 float">
            I'm a <span className="text-gray-300">{text}</span>
            <span className={`animate-pulse ${typingComplete ? 'opacity-0' : ''}`}>|</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            I build beautiful, responsive websites and applications with modern technologies.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#projects" 
              className="px-8 py-3 glass-container text-white font-semibold rounded-full hover:bg-white/10 transition duration-300 transform hover:scale-105"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 glass-container text-white font-semibold rounded-full hover:bg-white/10 transition duration-300 transform hover:scale-105"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 