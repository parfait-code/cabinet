'use client'
import React from 'react';
import { motion } from 'framer-motion';

export default function Hero(){
  return (
    <section id="accueil" className="pt-20 pb-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Découvrez <span className="text-green-600">JapapApp</span>, votre solution mobile camerounaise
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Une application conçue pour les Camerounais, par des Camerounais. Simplifiez votre quotidien avec JapapApp.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <motion.a 
              href="#download"
              className="bg-green-600 text-white py-3 px-8 rounded-full font-medium text-center hover:bg-green-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Télécharger maintenant
            </motion.a>
            
            <motion.a 
              href="#fonctionnalités"
              className="border border-green-600 text-green-600 py-3 px-8 rounded-full font-medium text-center hover:bg-green-50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Découvrir les fonctionnalités
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative h-96 md:h-full"
        >
          <div className="relative h-full flex justify-center">
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="relative w-64 h-full"
            >
              <div className="bg-gray-200 rounded-3xl overflow-hidden shadow-2xl h-full w-full">
                <div className="w-full h-full flex items-center justify-center bg-gray-300">
                  <span className="text-gray-600 font-medium">Capture d'écran de JapapApp</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              className="absolute -right-4 top-20 w-56"
            >
              <div className="bg-gray-200 rounded-3xl overflow-hidden shadow-xl h-72">
                <div className="w-full h-full flex items-center justify-center bg-gray-300">
                  <span className="text-gray-600 font-medium">Interface JapapApp</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};