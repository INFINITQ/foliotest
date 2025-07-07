import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Brain, Trophy } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Technical Excellence",
      description: "Proficient in Python, C++, DSA, GenAI, and modern cloud technologies"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Creative Design",
      description: "Expert in Adobe Creative Suite, motion graphics, and visual storytelling"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI & Innovation",
      description: "Specialized in GenAI, Machine Learning, Neural Networks, and NLP"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Leadership",
      description: "Microsoft Learn Student Ambassador and active in multiple technical committees"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-orange-500">Me</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              I'm a passionate developer and designer who believes that the best solutions emerge 
              when technical precision meets creative vision. Currently pursuing my BTech in Computer Science 
              & Engineering at BIT Mesra, I've been fortunate to work on diverse projects that span from 
              AI/ML development to motion graphics design.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">2020 - 2021</h4>
                    <p className="text-gray-600">10th Grade - ST. Anselm Pink City School, Jaipur (83%)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">2022 - 2023</h4>
                    <p className="text-gray-600">12th Grade - Malviya Convent School, Jaipur (82.6%)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">2023 - 2027</h4>
                    <p className="text-gray-600">BTech Computer Science & Engineering at BIT Mesra (74.19%)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Mentorship</h4>
                    <p className="text-gray-600">Guided by Mr. Vimal Daga, industry expert in technology and innovation</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 interactive"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500">
                      {highlight.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{highlight.title}</h3>
                  </div>
                  <p className="text-gray-600">{highlight.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;