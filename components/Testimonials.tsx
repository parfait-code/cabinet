'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Fabrice Kamdem",
    role: "Entrepreneur, Douala",
    content: "JapapApp a révolutionné ma façon de gérer mes activités au quotidien. Une véritable innovation camerounaise dont je ne peux plus me passer!",
    avatar: "FK"
  },
  {
    id: 2,
    name: "Carine Mballa",
    role: "Étudiante, Yaoundé",
    content: "Simple, intuitive et parfaitement adaptée à nos réalités. JapapApp comprend vraiment les besoins des jeunes camerounais.",
    avatar: "CM"
  },
  {
    id: 3,
    name: "Jean-Paul Nkolo",
    role: "Professeur, Bafoussam",
    content: "Une application qui valorise notre savoir-faire local. Je suis fier de voir que nous pouvons créer des solutions technologiques de cette qualité au Cameroun.",
    avatar: "JN"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="témoignages" className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Ce qu'en disent nos utilisateurs</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Des milliers de Camerounais ont déjà adopté JapapApp. Découvrez leurs expériences.</p>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-lg"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-green-600 flex items-center justify-center text-white text-xl font-bold">
                  {testimonials[currentIndex].avatar}
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 text-lg md:text-xl italic mb-6">"{testimonials[currentIndex].content}"</p>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">{testimonials[currentIndex].name}</h4>
                    <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center mt-8 gap-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-green-600" : "bg-gray-300"
                }`}
                aria-label={`Voir témoignage ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 pointer-events-auto"
              aria-label="Témoignage précédent"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 pointer-events-auto"
              aria-label="Témoignage suivant"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;