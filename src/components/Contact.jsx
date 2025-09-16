import { useState, useEffect } from 'react';
import DOMPurify from 'dompurify';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');

  // Validate form inputs
  const validateInput = (name, value) => {
    let error = '';
    
    switch (name) {
      case 'name':
        if (value.trim().length < 2) {
          error = 'Name must be at least 2 characters';
        } else if (value.trim().length > 50) {
          error = 'Name must be less than 50 characters';
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
          error = 'Name should only contain letters and spaces';
        }
        break;
        
      case 'email':
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Please enter a valid email address';
        }
        break;
        
      case 'subject':
        if (value.trim().length < 2) {
          error = 'Subject must be at least 2 characters';
        } else if (value.trim().length > 100) {
          error = 'Subject must be less than 100 characters';
        }
        break;
        
      case 'message':
        if (value.trim().length < 10) {
          error = 'Message must be at least 10 characters';
        } else if (value.trim().length > 1000) {
          error = 'Message must be less than 1000 characters';
        }
        break;
        
      default:
        break;
    }
    
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Sanitize input
    const sanitizedValue = DOMPurify.sanitize(value);
    
    // Update form data with sanitized value
    setFormData(prevData => ({
      ...prevData,
      [name]: sanitizedValue
    }));
    
    // Validate input and update errors
    const error = validateInput(name, sanitizedValue);
    setFormErrors(prevErrors => ({
      ...prevErrors,
      [name]: error
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};
    
    // Validate all fields
    Object.keys(formData).forEach(key => {
      const error = validateInput(key, formData[key]);
      newErrors[key] = error;
      if (error) {
        isValid = false;
      }
    });
    
    setFormErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all fields before submission
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setSubmitMessage("Thank you for your message! I'll be in touch shortly.");
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setFormErrors({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  // Add CSP meta tag
  useEffect(() => {
    // Create a Content Security Policy meta tag
    const cspMeta = document.createElement('meta');
    cspMeta.httpEquiv = 'Content-Security-Policy';
    cspMeta.content = "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' https://images.unsplash.com https://cdn.jsdelivr.net https://upload.wikimedia.org https://cdn.worldvectorlogo.com; connect-src 'self';";
    
    // Add it to the document head
    document.head.appendChild(cspMeta);
    
    // Clean up function
    return () => {
      document.head.removeChild(cspMeta);
    };
  }, []);

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 glow-text">Get In Touch</h2>
          <div className="w-16 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out to me using the form below.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <div className="glass-container p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-white mb-8 text-center">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start ml-14">
                  <div className="flex-shrink-0 glass-container p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h4 className="text-md font-semibold text-white">Phone</h4>
                    <p className="text-gray-300">+30 6986639719</p>
                  </div>
                </div>
                
                <div className="flex items-start ml-14">
                  <div className="flex-shrink-0 glass-container p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h4 className="text-md font-semibold text-white">Email</h4>
                    <p className="text-gray-300">nikosemp@hotmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start ml-14">
                  <div className="flex-shrink-0 glass-container p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h4 className="text-md font-semibold text-white">Location</h4>
                    <p className="text-gray-300">Chania, Crete, Greece</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="text-md font-semibold text-white mb-4 text-center">Follow Me</h4>
                <div className="flex space-x-6 justify-center">
                  <a href="#" rel="noopener noreferrer" className="glass-container p-3 rounded-full hover:bg-white/10 transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/nikos-giannakas/" target="_blank" rel="noopener noreferrer" className="glass-container p-3 rounded-full hover:bg-white/10 transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                    </svg>
                  </a>
                  <a href="https://github.com/nikosemp" target="_blank" rel="noopener noreferrer" className="glass-container p-3 rounded-full hover:bg-white/10 transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <div className="glass-container p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-white mb-6">Send Me a Message</h3>
              
              {submitMessage && (
                <div className={`mb-6 p-4 rounded-md ${submitStatus === 'success' ? 'bg-green-100/20 text-green-400' : 'bg-red-100/20 text-red-400'}`}>
                  {submitMessage}
                </div>
              )}
              
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 glass-container border ${formErrors.name ? 'border-red-500' : 'border-white/10'} rounded-md focus:outline-none focus:ring-2 focus:ring-white/30 text-white`}
                      required
                      maxLength={50}
                      pattern="[A-Za-z\s]+"
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-red-400 text-sm">{formErrors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white mb-2">Your Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 glass-container border ${formErrors.email ? 'border-red-500' : 'border-white/10'} rounded-md focus:outline-none focus:ring-2 focus:ring-white/30 text-white`}
                      required
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-red-400 text-sm">{formErrors.email}</p>
                    )}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-white mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 glass-container border ${formErrors.subject ? 'border-red-500' : 'border-white/10'} rounded-md focus:outline-none focus:ring-2 focus:ring-white/30 text-white`}
                    required
                    maxLength={100}
                  />
                  {formErrors.subject && (
                    <p className="mt-1 text-red-400 text-sm">{formErrors.subject}</p>
                  )}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-white mb-2">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 glass-container border ${formErrors.message ? 'border-red-500' : 'border-white/10'} rounded-md focus:outline-none focus:ring-2 focus:ring-white/30 text-white`}
                    required
                    maxLength={1000}
                  ></textarea>
                  {formErrors.message && (
                    <p className="mt-1 text-red-400 text-sm">{formErrors.message}</p>
                  )}
                  <div className="mt-1 text-gray-400 text-sm text-right">
                    {formData.message.length}/1000
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  className="px-8 py-3 glass-container text-white font-semibold rounded-md hover:bg-white/10 transition duration-300 flex items-center"
                  disabled={isSubmitting || Object.values(formErrors).some(error => error !== '')}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 