'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { MenuIcon } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  // Navigation items
  const navItems = ['Accueil', 'Fonctionnalités', 'Témoignages', 'FAQ', 'Contact'];

  // Gestion du scroll pour afficher/masquer le header
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Détermine si on scrolle vers le haut ou vers le bas
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHeaderVisible(false); // Masque le header si on scrolle vers le bas
      } else {
        setIsHeaderVisible(true); // Affiche le header si on scrolle vers le haut
      }
      
      // Change l'apparence du header quand on scroll
      if (currentScrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Animation variants
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.1
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  const headerVariants = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: -100, opacity: 0 }
  };

  return (
    <motion.header 
      className={`py-4 px-6 md:px-12 lg:px-24 flex justify-between items-center fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md' 
          : 'bg-white/90'
      }`}
      variants={headerVariants}
      initial="visible"
      animate={isHeaderVisible ? "visible" : "hidden"}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="flex items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/" className="font-bold text-2xl text-green-600 flex items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#16A34A" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="relative">
              JapapApp
              <motion.span 
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-green-400"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.2, duration: 0.4 }}
              />
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Menu desktop */}
      <motion.nav 
        className="hidden md:block"
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <ul className="flex space-x-8">
          {navItems.map((item) => (
            <motion.li key={item} variants={itemVariants}>
              <Link 
                href={`#${item.toLowerCase()}`} 
                className="text-gray-700 hover:text-green-600 font-medium relative py-2 group transition-colors"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.nav>

      {/* Bouton de téléchargement pour desktop */}
      <motion.div
        className="hidden md:flex items-center space-x-4"
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.a 
          href="#download"
          className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-full font-medium transition-all shadow-lg shadow-green-200/50 group"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 10px 25px -5px rgba(34, 197, 94, 0.4)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:animate-bounce" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          Télécharger
          <motion.span
            initial={{ width: 0, opacity: 0 }}
            whileHover={{ width: 'auto', opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden ml-1"
          >
            maintenant
          </motion.span>
        </motion.a>
      </motion.div>

      {/* Menu burger pour mobile - plus élégant */}
      <div className="md:hidden">
        <motion.button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-green-50 text-green-600 focus:outline-none"
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={isMobileMenuOpen ? "open" : "closed"}
            variants={{
              open: { rotate: 180 },
              closed: { rotate: 0 }
            }}
            transition={{ duration: 0.4 }}
          >
            {isMobileMenuOpen ? (
              <MenuIcon className="w-6 h-6" />
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </motion.div>
        </motion.button>
      </div>

      {/* Menu mobile avec AnimatePresence pour une transition fluide */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="absolute top-full left-0 right-0 bg-white shadow-xl md:hidden z-50 overflow-hidden rounded-b-2xl"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.ul 
              className="py-4 px-6"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              initial="hidden"
              animate="show"
            >
              {navItems.map((item) => (
                <motion.li 
                  key={item} 
                  className="py-3 border-b border-gray-100 last:border-b-0"
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    show: { y: 0, opacity: 1 }
                  }}
                >
                  <Link 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-700 hover:text-green-600 transition-colors block font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
              <motion.li 
                className="pt-4"
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  show: { y: 0, opacity: 1 }
                }}
              >
                <Link 
                  href="#download" 
                  className="bg-green-600 text-white py-3 px-6 rounded-full font-medium  text-center mt-2 hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Télécharger maintenant
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;