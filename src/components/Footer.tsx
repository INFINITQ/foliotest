import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h3 className="text-3xl font-bold mb-4">
              <span className="text-orange-500">A</span>bhishek Pareek
            </h3>
            <p className="text-gray-300 max-w-md mx-auto">
              Design-Driven Developer creating digital experiences that bridge technology and creativity.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border-t border-gray-800 pt-8"
          >
            <div className="flex items-center justify-center space-x-2 text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-orange-500" />
              <span>by Abhishek Pareek © {currentYear}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;