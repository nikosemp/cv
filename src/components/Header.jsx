import { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pastFirstPage, setPastFirstPage] = useState(false);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [typingComplete, setTypingComplete] = useState(false);

  const phrase = 'Hello World';

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
        // Reset after 3 seconds to repeat the animation
        setTimeout(() => {
          setIsDeleting(true);
          setTypingComplete(false);
        }, 3000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, typingSpeed, typingComplete]);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      // Check if scrolled past navbar height
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Check if scrolled past first page
      const windowHeight = window.innerHeight;
      if (offset > windowHeight * 0.8) {
        setPastFirstPage(true);
      } else {
        setPastFirstPage(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      
      const handleClickOutside = (e) => {
        if (e.target.classList.contains('mobile-menu-overlay')) {
          setIsMenuOpen(false);
        }
      };
      
      document.addEventListener('click', handleClickOutside);
      
      return () => {
        document.body.style.overflow = '';
        document.removeEventListener('click', handleClickOutside);
      };
    }
  }, [isMenuOpen]);

  // Handle navigation click
  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    // Smooth scroll to the section
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Determine the navbar class based on scroll position
  let navbarClass = 'bg-transparent';
  if (scrolled && pastFirstPage) {
    navbarClass = 'solid-navbar';
  }

  // Navigation items
  const navItems = ['Home', 'About', 'Projects', 'Skills', 'Contact'];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarClass} ${
      scrolled ? 'py-3 shadow-lg' : 'py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-white flex items-center">
          <span className="text-3xl mr-2 glow-text">⬤</span>
          <span className="tracking-tight min-w-[150px]">
            {text}
            <span className={`animate-pulse ${typingComplete ? 'opacity-0' : ''}`}>|</span>
          </span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, item.toLowerCase())}
              className={`relative px-4 py-2 font-medium text-sm uppercase tracking-wider transition-colors ${
                scrolled ? 'text-white' : 'text-white hover:text-gray-200'
              }`}
            >
              {item}
            </a>
          ))}
          {/* <a 
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className={`ml-4 px-5 py-2 font-medium text-sm uppercase tracking-wider rounded-full transition-colors ${
              pastFirstPage 
                ? 'bg-white/20 text-white hover:bg-white/30'
                : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20'
            }`}
          >
            Hire Me
          </a> */}
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 text-white focus:outline-none z-60"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col justify-center items-center">
            <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
            <span className={`block h-0.5 w-6 bg-white my-0.5 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
          </div>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/90 backdrop-blur-md z-40"
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className="bg-black/50 rounded-xl p-8 w-4/5 max-w-sm mx-auto" 
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col space-y-8">
                {navItems.map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => handleNavClick(e, item.toLowerCase())}
                    className="block text-white text-2xl font-medium text-center hover:text-gray-300 transition-colors"
                  >
                    {item}
                  </a>
                ))}
                {/* <a 
                  href="#contact"
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className="block mx-auto mt-4 px-8 py-3 glass-container text-white font-medium rounded-full hover:bg-white/10 transition-colors"
                >
                  Hire Me
                </a> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 