import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Users, Calendar } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Web Browser",
      description: "A lightweight, modular, and extensible web browser built with PyQt5 and QtWebEngine. Features include tabbed browsing, bookmarks, history management, downloads, ad-blocking, PDF export, and theming.",
      tags: ["Python", "File Management", "Git & GitHub"],
      type: "Desktop App",
      duration: "May 2025",
      teamSize: 1,
      mentor: null
    },
    {
      title: "Peak-A-Boo",
      description: "An AI chatbot designed for parents, helping them track their baby's milestones, routines, food, and more, all with personalized profiles and reminders.",
      tags: ["Python", "Web Dev", "GenAI", "Git & GitHub"],
      type: "AI Application",
      duration: "Jun 11-13, 2025",
      teamSize: 4,
      mentor: "Mr. Vimal Daga"
    },
    {
      title: "Startup Idea Critique Generator",
      description: "An analytical web app tool that assesses your startup ideas against predefined parameters which are coded and sent as a context, offering constructive feedback to innovators.",
      tags: ["Python", "GenAI", "Web Dev"],
      type: "Web Application",
      duration: "Jun 8-9, 2025",
      teamSize: 4,
      mentor: "Mr. Vimal Daga"
    },
    {
      title: "Air WhiteBoard",
      description: "A real-time application that lets you draw directly on camera view with just a finger — transforming air into a canvas, with multiple functionalities and gestures.",
      tags: ["Python", "Computer Vision"],
      type: "Computer Vision",
      duration: "Jun 6, 2025",
      teamSize: 4,
      mentor: "Mr. Vimal Daga"
    },
    {
      title: "Message-It-Out",
      description: "An interactive app powered by Gemini to respond to messages based on mood and relationship context, providing personalized communication assistance.",
      tags: ["Python", "API", "GenAI"],
      type: "AI Application",
      duration: "Jun 4-5, 2025",
      teamSize: 4,
      mentor: "Mr. Vimal Daga"
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

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'AI Application': return 'bg-blue-100 text-blue-800';
      case 'Computer Vision': return 'bg-purple-100 text-purple-800';
      case 'Web Application': return 'bg-green-100 text-green-800';
      case 'Desktop App': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
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
              Featured <span className="text-orange-500">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A showcase of my work spanning AI/ML development, computer vision, and innovative applications
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 interactive"
                  whileHover={{ y: -10, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(project.type)}`}>
                      {project.type}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">{project.description}</p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-2" />
                      {project.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-2" />
                      Team Size: {project.teamSize}
                    </div>
                    {project.mentor && (
                      <div className="text-sm text-gray-500">
                        <span className="font-medium">Mentor:</span> {project.mentor}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-orange-100 text-orange-800 rounded-md text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <motion.button
                      className="flex items-center space-x-2 text-orange-500 hover:text-orange-600 transition-colors duration-200 interactive"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-5 h-5" />
                      <span>Code</span>
                    </motion.button>
                    <motion.button
                      className="flex items-center space-x-2 text-orange-500 hover:text-orange-600 transition-colors duration-200 interactive"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Demo</span>
                    </motion.button>
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

export default Projects;