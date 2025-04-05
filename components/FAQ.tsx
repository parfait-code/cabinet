'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

const faqItems = [
  {
    question: "Comment télécharger JapapApp?",
    answer: "JapapApp est disponible sur Google Play Store pour les appareils Android et sur l'App Store pour les appareils iOS. Il vous suffit de rechercher 'JapapApp' et de cliquer sur 'Installer'."
  },
  {
    question: "JapapApp fonctionne-t-elle hors connexion?",
    answer: "Certaines fonctionnalités de JapapApp sont disponibles hors ligne, mais une connexion internet est recommandée pour profiter de l'ensemble des services proposés."
  },
  {
    question: "L'application est-elle gratuite?",
    answer: "Oui, JapapApp est totalement gratuite à télécharger et à utiliser. Certaines fonctionnalités premium peuvent être disponibles via des achats in-app."
  },
  {
    question: "Comment contacter le support client?",
    answer: "Vous pouvez contacter notre équipe de support directement depuis l'application en allant dans 'Paramètres > Aide et Support', ou par email à support@japapapp.cm."
  },
  {
    question: "JapapApp est-elle sécurisée?",
    answer: "Absolument! La sécurité de vos données est notre priorité. Nous utilisons des protocoles de cryptage avancés pour protéger toutes vos informations personnelles."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Animation du contour lumineux
  const glowVariants = {
    initial: {
      opacity: 0,
      pathLength: 0
    },
    animate: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse" as const  
      }
    }
  };

  return (
    <section id="faq" className="relative py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-white to-green-50 overflow-hidden">
      {/* Cercles décoratifs */}
      <motion.div 
        className="absolute top-1/4 -left-20 w-40 h-40 rounded-full bg-green-100 mix-blend-multiply opacity-50"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 15, 0],
          y: [0, -15, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 -right-20 w-64 h-64 rounded-full bg-green-200 mix-blend-multiply opacity-40"
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, -20, 0],
          y: [0, 20, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-green-600 font-medium bg-green-50 py-1 px-4 rounded-full text-sm inline-block mb-3 shadow-sm border border-green-100">
            Assistance
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Questions fréquentes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Tout ce que vous devez savoir sur JapapApp pour une utilisation optimale de l&apos;application.</p>
        </motion.div>
        
        <div className="space-y-5">
          {faqItems.map((item, index) => (
            <motion.div 
              key={index}
              className="relative bg-white rounded-xl overflow-hidden shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ boxShadow: "0 10px 25px -5px rgba(34, 197, 94, 0.15)" }}
            >
              {/* Contour lumineux animé */}
              <div className="absolute inset-0 pointer-events-none">
                <svg className="absolute inset-0 w-full h-full">
                  <motion.rect
                    width="100%"
                    height="100%"
                    rx="12"
                    ry="12"
                    fill="none"
                    stroke={openIndex === index ? "url(#glow-gradient)" : "transparent"}
                    strokeWidth="1.5"
                    variants={glowVariants}
                    initial="initial"
                    animate={openIndex === index ? "animate" : "initial"}
                  />
                  <defs>
                    <linearGradient id="glow-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(34, 197, 94, 0)" />
                      <stop offset="50%" stopColor="rgba(34, 197, 94, 0.8)" />
                      <stop offset="100%" stopColor="rgba(34, 197, 94, 0)" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <button
                className="w-full py-5 px-6 flex justify-between items-center text-left transition-colors"
                onClick={() => toggleQuestion(index)}
              >
                <div className="flex items-center">
                  <motion.div 
                    className={`flex items-center justify-center w-8 h-8 rounded-full mr-4 ${openIndex === index ? 'bg-green-500 text-white' : 'bg-green-100 text-green-500'}`}
                    transition={{ duration: 0.3 }}
                  >
                    {openIndex !== index ? <ChevronDownIcon className="h-5 w-5"/> : <ChevronUpIcon className="h-5 w-5"/> }
                  </motion.div>
                  <span className={`font-medium text-lg ${openIndex === index ? 'text-green-600' : 'text-gray-800'}`}>
                    {item.question}
                  </span>
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="py-5 px-6 pl-16 text-gray-600 border-t border-gray-100">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        {item.answer}
                      </motion.div>
                      
                      {/* Lien ou action supplémentaire selon la question */}
                      {index === 0 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className="mt-4"
                        >
                          <a href="#download" className="text-green-600 font-medium flex items-center hover:text-green-700 transition-colors">
                            Télécharger maintenant
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </a>
                        </motion.div>
                      )}
                      
                      {index === 3 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className="mt-4"
                        >
                          <a href="mailto:support@japapapp.cm" className="text-green-600 font-medium flex items-center hover:text-green-700 transition-colors">
                            Contacter le support
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </a>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Section Contact Supplémentaire */}
        <motion.div 
          className="mt-16 bg-green-50 rounded-2xl p-8 border border-green-100 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="absolute right-0 bottom-0 opacity-10">
            <svg width="180" height="180" viewBox="0 0 24 24" fill="currentColor" className="text-green-600">
              <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z" />
            </svg>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Une question sans réponse ?</h3>
            <p className="text-gray-600 mb-5">Notre équipe de support est disponible pour vous aider avec n&apos;importe quelle question.</p>
            
            <motion.a 
              href="mailto:support@japapapp.cm"
              className="inline-flex items-center justify-center bg-green-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contacter le support
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;