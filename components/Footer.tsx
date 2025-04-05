'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRightIcon, FacebookIcon, InstagramIcon, LinkedinIcon, LocateIcon, MailIcon, PhoneIcon, TwitterIcon } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const navLinks = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'Fonctionnalités', href: '#fonctionnalités' },
    { name: 'Télécharger', href: '#download' },
    { name: 'À propos', href: '#apropos' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { 
      name: 'Facebook', 
      href: '#', 
      icon: FacebookIcon
    },
    { 
      name: 'Twitter', 
      href: '#', 
      icon: TwitterIcon
    },
    { 
      name: 'Instagram', 
      href: '#', 
      icon: InstagramIcon
    },
    { 
      name: 'LinkedIn', 
      href: '#', 
      icon: LinkedinIcon
    },
  ];

  // Animations pour les différentes sections
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8" id="download">
      {/* Forme décorative en haut du footer */}
      <div className="relative">
        <svg 
          className="absolute -top-20 left-0 w-full"
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 100"
          fill="none"
        >
          <path 
            d="M0,0 C240,95 480,125 720,95 C960,65 1200,95 1440,65 L1440,100 L0,100 Z" 
            fill="#111827"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto z-10 px-6 md:px-12 lg:px-24">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Logo et description */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-white flex items-center">
                <span className="text-green-400">JapapApp</span>
              </h2>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Une application conçue pour les Camerounais, par des Camerounais. Notre mission est de simplifier votre quotidien avec des solutions technologiques adaptées à vos besoins spécifiques.
            </p>
            
            {/* Boutons de téléchargement */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image src='/playstore.svg' alt='playstore logo' width={32} height={32} className="w-8 h-8 mr-3" />
                <div>
                  <div className="text-xs">TÉLÉCHARGER SUR</div>
                  <div className="text-sm font-bold">Google Play</div>
                </div>
              </motion.a>
              
              <motion.a
                href="https://apps.apple.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-gray-800 text-white px-4 py-3 rounded-lg hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image src='/apple.svg' alt='apple logo' width={32} height={32} className="w-8 h-8 mr-3" />
                <div>
                  <div className="text-xs">TÉLÉCHARGER SUR</div>
                  <div className="text-sm font-bold">App Store</div>
                </div>
              </motion.a>
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-green-400 transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={link.name}
                >
                  <link.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Liens rapides */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-6 text-white relative inline-block">
              Liens rapides
              <motion.span 
                className="absolute bottom-0 left-0 h-1 bg-green-500"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors flex items-center"
                  >
                    <ChevronRightIcon className='w-3 h-3 mr-2 text-green-500'/>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-6 text-white relative inline-block">
              Contact
              <motion.span 
                className="absolute bottom-0 left-0 h-1 bg-green-500"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <LocateIcon className='w-5 h-5 mr-3 text-green-500'/>
                <span className="text-gray-400">
                  Douala, Akwa Nord<br />
                  Cameroun
                </span>
              </li>
              <li className="flex items-center">
                <MailIcon className='w-5 h-5 mr-3 text-green-500'/>
                <span className="text-gray-400">info@japapapp.cm</span>
              </li>
              <li className="flex items-center">
                <PhoneIcon className='w-5 h-5 mr-3 text-green-500'/>
                <span className="text-gray-400">+237 691 234 567</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Newsletter */}
        <motion.div 
          className="mt-12 py-8 border-t border-gray-800"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-md">
            <h3 className="text-xl font-semibold mb-4 text-white">Abonnez-vous à notre newsletter</h3>
            <p className="text-gray-400 mb-4">Recevez nos dernières mises à jour et offres directement dans votre boîte mail.</p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Votre adresse email" 
                className="bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 flex-grow"
                required
              />
              <motion.button 
                type="submit"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                whileHover={{ scale: 1.05, backgroundColor: "#15803d" }}
                whileTap={{ scale: 0.95 }}
              >
                S&apos;abonner
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p>&copy; {currentYear} JapapApp. Tous droits réservés.</p>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;