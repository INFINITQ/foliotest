import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Programming",
      skills: [
        { name: "Python", level: 90 },
        { name: "C++", level: 85 },
        { name: "DSA", level: 80 },
        { name: "JavaScript", level: 75 },
        { name: "Git & GitHub", level: 90 },
      ]
    },
    {
      title: "AI/ML & GenAI",
      skills: [
        { name: "GenAI", level: 88 },
        { name: "Machine Learning", level: 85 },
        { name: "Neural Networks", level: 82 },
        { name: "NLP", level: 80 },
        { name: "Computer Vision", level: 78 },
      ]
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS Cloud", level: 85 },
        { name: "RedHat Linux", level: 80 },
        { name: "DevOps", level: 75 },
        { name: "Cloud Computing", level: 82 },
        { name: "Version Control", level: 90 },
      ]
    },
    {
      title: "Design & Creative",
      skills: [
        { name: "Adobe Photoshop", level: 95 },
        { name: "Adobe Premiere Pro", level: 90 },
        { name: "Adobe After Effects", level: 88 },
        { name: "Graphic Designing", level: 92 },
        { name: "Canva", level: 85 },
      ]
    }
  ];

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

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Technical <span className="text-orange-500">Skills</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A comprehensive toolkit spanning programming, AI/ML, cloud technologies, and creative design
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors duration-300"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{category.title}</h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700 font-medium">{skill.name}</span>
                          <span className="text-orange-500 font-semibold">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div
                            className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;