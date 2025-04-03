'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

  return (
    <section id="faq" className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Questions fréquentes</h2>
          <p className="text-lg text-gray-600">Tout ce que vous devez savoir sur JapapApp.</p>
        </motion.div>
        
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div 
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <button
                className="w-full py-4 px-6 flex justify-between items-center text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                onClick={() => toggleQuestion(index)}
              >
                <span className="font-medium text-gray-800">{item.question}</span>
                <span className="text-green-600">
                  {openIndex === index ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="py-4 px-6 bg-white text-gray-600">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;