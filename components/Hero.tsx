'use client'
import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="accueil" className="relative pt-20 pb-32 px-6 md:px-12 lg:px-24 overflow-hidden bg-gradient-to-br from-white to-green-50">
      {/* Cercles décoratifs animés */}
      <motion.div 
        className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-green-100 mix-blend-multiply opacity-70"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
          y: [0, 20, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute top-1/2 left-1/4 w-48 h-48 rounded-full bg-green-100 mix-blend-multiply opacity-50"
        animate={{ 
          scale: [1, 1.4, 1],
          x: [0, 40, 0],
          y: [0, -40, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Badge animé */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="absolute -top-12 -left-6 bg-green-500 text-white py-2 px-4 rounded-full text-sm font-medium shadow-lg"
          >
            <motion.span
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block"
            >
              🇨🇲 100% Camerounaise
            </motion.span>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Découvrez <span className="text-green-600 relative">
              JapapApp
              <motion.span 
                className="absolute bottom-1 left-0 w-full h-1 bg-green-400"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.9, duration: 0.6 }}
              />
            </span>, votre solution mobile camerounaise
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-600 mb-8 max-w-lg"
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
              className="bg-green-600 text-white py-3 px-8 rounded-full font-medium text-center hover:bg-green-700 transition-colors shadow-lg shadow-green-200 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(34, 197, 94, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Télécharger maintenant
            </motion.a>
            
            <motion.a 
              href="#fonctionnalités"
              className="border border-green-600 text-green-600 py-3 px-8 rounded-full font-medium text-center hover:bg-green-50 transition-colors flex items-center justify-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Découvrir les fonctionnalités
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                viewBox="0 0 20 20" 
                fill="currentColor"
                initial={{ x: 0 }}
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </motion.svg>
            </motion.a>
          </motion.div>

          {/* Stats chiffres clés */}
          <motion.div 
            className="flex flex-wrap gap-8 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <div className="flex flex-col">
              <motion.span 
                className="text-2xl font-bold text-green-600"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.9, duration: 0.4 }}
              >
                50K+
              </motion.span>
              <span className="text-sm text-gray-500">Téléchargements</span>
            </div>
            <div className="flex flex-col">
              <motion.span 
                className="text-2xl font-bold text-green-600"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ delay: 1.0, duration: 0.4 }}
              >
                4.8/5
              </motion.span>
              <span className="text-sm text-gray-500">Note moyenne</span>
            </div>
            <div className="flex flex-col">
              <motion.span 
                className="text-2xl font-bold text-green-600"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ delay: 1.1, duration: 0.4 }}
              >
                100%
              </motion.span>
              <span className="text-sm text-gray-500">Satisfaction</span>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative h-96 md:h-full"
        >
          {/* Contour SVG animé */}
          <svg className="absolute w-full h-full top-0 left-0 -z-10">
            <motion.ellipse 
              cx="50%" 
              cy="50%" 
              rx="45%" 
              ry="55%" 
              fill="none" 
              stroke="url(#hero-gradient)" 
              strokeWidth="2"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{ opacity: 1, pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="hero-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22c55e" />
                <stop offset="50%" stopColor="#16a34a" />
                <stop offset="100%" stopColor="#22c55e" />
              </linearGradient>
            </defs>
          </svg>
        
          <div className="relative h-full flex justify-center">
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="relative w-64 h-full z-20"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl h-full w-full border border-gray-100">
                <div className="w-full h-8 bg-gray-100 flex items-center">
                  <div className="w-3 h-3 rounded-full bg-red-400 ml-3"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400 ml-1"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400 ml-1"></div>
                </div>
                <div className="w-full h-full flex items-center justify-center bg-gray-50 p-4">
                  <div className="flex flex-col gap-4 w-full h-full">
                    <div className="w-full h-4 bg-green-100 rounded-full"></div>
                    <div className="w-3/4 h-4 bg-green-100 rounded-full"></div>
                    <div className="w-full h-32 bg-green-200 rounded-lg mt-2"></div>
                    <div className="w-full flex justify-between mt-2">
                      <div className="w-1/3 h-8 bg-green-300 rounded-md"></div>
                      <div className="w-1/3 h-8 bg-green-400 rounded-md"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Badge flottant */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute -right-16 bottom-32 bg-white px-4 py-2 rounded-lg shadow-lg"
              >
                <motion.div
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex items-center gap-2">
                    <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">Simple à utiliser</span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              className="absolute -right-4 top-20 w-56 z-10"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl h-72 border border-gray-100">
                <div className="w-full h-6 bg-gray-100 flex items-center">
                  <div className="w-2 h-2 rounded-full bg-red-400 ml-2"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-400 ml-1"></div>
                  <div className="w-2 h-2 rounded-full bg-green-400 ml-1"></div>
                </div>
                <div className="w-full h-full flex items-center justify-center bg-gray-50 p-3">
                  <div className="flex flex-col gap-3 w-full h-full">
                    <div className="w-full h-24 bg-green-200 rounded-lg"></div>
                    <div className="w-full h-3 bg-green-100 rounded-full"></div>
                    <div className="w-3/4 h-3 bg-green-100 rounded-full"></div>
                    <div className="w-full flex gap-2 mt-2">
                      <div className="w-1/2 h-6 bg-green-300 rounded-md"></div>
                      <div className="w-1/2 h-6 bg-green-400 rounded-md"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Badge flottant */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="absolute -left-12 top-16 bg-white px-4 py-2 rounded-lg shadow-lg"
              >
                <motion.div
                  animate={{ rotate: [0, -5, 0, 5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex items-center gap-2">
                    <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
                    </svg>
                    <span className="font-medium">Ultra rapide</span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}