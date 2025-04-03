import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: "🔒",
    title: "Sécurité renforcée",
    description: "Vos données sont protégées par les standards de sécurité les plus élevés du marché."
  },
  {
    icon: "⚡",
    title: "Performance rapide",
    description: "Une application optimisée pour fonctionner même avec une connexion internet limitée."
  },
  {
    icon: "🌍",
    title: "100% Camerounaise",
    description: "Conçue avec une compréhension approfondie des besoins locaux et des spécificités camerounaises."
  },
  {
    icon: "💰",
    title: "Économisez du temps et de l'argent",
    description: "Des solutions pratiques qui vous font gagner en efficacité au quotidien."
  },
  {
    icon: "🔄",
    title: "Mises à jour régulières",
    description: "Notre équipe améliore constamment l'application avec de nouvelles fonctionnalités."
  },
  {
    icon: "🤝",
    title: "Service client réactif",
    description: "Une équipe locale disponible pour vous aider et répondre à vos questions."
  }
];

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="fonctionnalités" className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Pourquoi choisir JapapApp?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Découvrez les fonctionnalités innovantes qui font de JapapApp l'application incontournable au Cameroun.</p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-green-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;