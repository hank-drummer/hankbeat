import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-primary/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="text-2xl font-bold text-white hover:text-accent-light transition-colors duration-300">
              郝汉 | Hank
            </Link>
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            {[
              { to: '/teaching', text: '教学' },
              { to: '/performances', text: '演出' },
              { to: '/artexam', text: '艺考' },
              { to: '/about', text: '关于' },
              { to: '/contact', text: '联系我' }
            ].map((item, index) => (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link 
                  to={item.to} 
                  className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
                >
                  {item.text}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-accent-dark to-accent group-hover:w-full transition-all duration-300"></span>
                </Link>
              </motion.div>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4"
            >
              <div className="flex flex-col space-y-4">
                {[
                  { to: '/teaching', text: '教学' },
                  { to: '/performances', text: '演出' },
                  { to: '/artexam', text: '艺考' },
                  { to: '/about', text: '关于' },
                  { to: '/contact', text: '联系我' }
                ].map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="text-gray-300 hover:text-white transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.text}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;