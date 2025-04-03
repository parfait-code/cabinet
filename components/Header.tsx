'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <motion.header 
      className="py-4 px-6 md:px-12 lg:px-24 flex justify-between items-center bg-white/80 backdrop-blur-md sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="flex items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/" className="font-bold text-2xl text-green-600">
            JapapApp
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
          {['Accueil', 'Fonctionnalités', 'Témoignages', 'FAQ', 'Contact'].map((item) => (
            <motion.li key={item} variants={itemVariants}>
              <Link href={`#${item.toLowerCase()}`} className="text-gray-700 hover:text-green-600 transition-colors">
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.nav>

      {/* Bouton de téléchargement */}
      <motion.div
        className="hidden md:block"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <a href="#download" className="bg-green-600 text-white py-2 px-6 rounded-full font-medium hover:bg-green-700 transition-colors">
          Télécharger
        </a>
      </motion.div>

      {/* Menu burger pour mobile */}
      <div className="md:hidden">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-gray-700"
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Menu mobile */}
      {isMobileMenuOpen && (
        <motion.div 
          className="absolute top-16 left-0 right-0 bg-white shadow-lg md:hidden z-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <ul className="py-4 px-6">
            {['Accueil', 'Fonctionnalités', 'Témoignages', 'FAQ', 'Contact'].map((item) => (
              <li key={item} className="py-3 border-b border-gray-100">
                <Link 
                  href={`#${item.toLowerCase()}`} 
                  className="text-gray-700 hover:text-green-600 transition-colors block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
            <li className="py-3">
              <a 
                href="#download" 
                className="bg-green-600 text-white py-2 px-6 rounded-full font-medium block text-center mt-2 hover:bg-green-700 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Télécharger
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;