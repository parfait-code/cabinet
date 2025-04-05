import React from 'react';
import { motion } from 'framer-motion';

const Features: React.FC = () => {
  const features = [
    {
      title: "Sécurité renforcée",
      description: "Vos données sont protégées par les standards de sécurité les plus élevés du marché."
    },
    {
      title: "Performance rapide",
      description: "Une application optimisée pour fonctionner même avec une connexion internet limitée."
    },
    {
      title: "100% Camerounaise",
      description: "Conçue avec une compréhension approfondie des besoins locaux et des spécificités camerounaises."
    },
    {
      title: "Économisez du temps et de l'argent",
      description: "Des solutions pratiques qui vous font gagner en efficacité au quotidien."
    },
    {
      title: "Mises à jour régulières",
      description: "Notre équipe améliore constamment l'application avec de nouvelles fonctionnalités."
    },
    {
      title: "Service client réactif",
      description: "Une équipe locale disponible pour vous aider et répondre à vos questions."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Fonctionnalités</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez comment notre application peut transformer votre expérience au quotidien.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-xl p-6 shadow-sm overflow-hidden"
              variants={itemVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
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
                    stroke="url(#glow-gradient)"
                    strokeWidth="2"
                    variants={glowVariants}
                    initial="initial"
                    animate="animate"
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

              {/* Icône */}
              <div className="mb-4 flex justify-center">
                <div className="p-3 bg-green-100 rounded-full">
                  <motion.div
                    className="w-8 h-8 text-green-500"
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d={index % 6 === 0 ? "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" : 
                           index % 6 === 1 ? "M13 10V3L4 14h7v7l9-11h-7z" :
                           index % 6 === 2 ? "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" :
                           index % 6 === 3 ? "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" :
                           index % 6 === 4 ? "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" :
                           "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"} 
                      />
                    </svg>
                  </motion.div>
                </div>
              </div>

              {/* Contenu */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>

              {/* Accent de couleur */}
              <motion.div 
                className="absolute bottom-0 left-0 h-1 bg-green-500"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;