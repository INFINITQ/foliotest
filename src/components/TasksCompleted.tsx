import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, Code, Globe, Camera, MessageSquare, MapPin, Container, Wrench } from 'lucide-react';

const TasksCompleted: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const taskCategories = [
    {
      title: "Python Automation",
      icon: <Code className="w-6 h-6" />,
      tasks: [
        {
          title: "WhatsApp Messaging",
          description: "Automated WhatsApp message sending using Python libraries for bulk communication"
        },
        {
          title: "Email Automation",
          description: "Built email sending system with Python SMTP for automated notifications"
        },
        {
          title: "SMS Integration",
          description: "Implemented SMS sending functionality using Python APIs for text messaging"
        },
        {
          title: "Voice Call System",
          description: "Created automated calling system using Python telephony libraries"
        },
        {
          title: "Google Search Automation",
          description: "Developed web scraping tool to search Google and extract results programmatically"
        },
        {
          title: "Website Data Extraction",
          description: "Built comprehensive web scraper to download and parse entire website data"
        }
      ]
    },
    {
      title: "Image Processing",
      icon: <Camera className="w-6 h-6" />,
      tasks: [
        {
          title: "Digital Image Creation",
          description: "Generated custom digital images using Python imaging libraries and algorithms"
        },
        {
          title: "Face Swapping",
          description: "Implemented face detection and swapping between two images using computer vision"
        }
      ]
    },
    {
      title: "JavaScript Development",
      icon: <Globe className="w-6 h-6" />,
      tasks: [
        {
          title: "Camera Integration",
          description: "Built photo capture functionality using JavaScript MediaDevices API"
        },
        {
          title: "Email API Integration",
          description: "Implemented email sending through JavaScript using REST APIs"
        },
        {
          title: "Photo Email System",
          description: "Created system to capture photos and automatically send via email"
        },
        {
          title: "Video Recording",
          description: "Developed video recording on button click with email delivery functionality"
        },
        {
          title: "WhatsApp Integration",
          description: "Built WhatsApp messaging system using JavaScript and web APIs"
        },
        {
          title: "SMS API System",
          description: "Implemented SMS sending functionality through JavaScript API integration"
        }
      ]
    },
    {
      title: "Location Services",
      icon: <MapPin className="w-6 h-6" />,
      tasks: [
        {
          title: "Geolocation Tracking",
          description: "Implemented real-time location tracking using browser geolocation APIs"
        },
        {
          title: "Google Maps Integration",
          description: "Built live location display system with Google Maps API integration"
        }
      ]
    },
    {
      title: "Docker & DevOps",
      icon: <Container className="w-6 h-6" />,
      tasks: [
        {
          title: "ML Model Containerization",
          description: "Deployed Linear Regression model inside Docker container for scalable ML"
        },
        {
          title: "Flask App Deployment",
          description: "Containerized Flask web application using Docker for consistent deployment"
        },
        {
          title: "Python Project Container",
          description: "Created Docker container for menu-based Python project with interactive CLI"
        },
        {
          title: "Docker-in-Docker Setup",
          description: "Implemented nested Docker containers (DIND) for advanced containerization"
        },
        {
          title: "Browser in Container",
          description: "Successfully installed and ran Firefox browser inside Docker environment"
        },
        {
          title: "Media Player Container",
          description: "Configured VLC media player to run inside Docker with GUI support"
        },
        {
          title: "Apache Server Setup",
          description: "Deployed and configured Apache web server inside Docker container"
        }
      ]
    },
    {
      title: "Automation & CI/CD",
      icon: <Wrench className="w-6 h-6" />,
      tasks: [
        {
          title: "Jenkins Automation",
          description: "Set up Jenkins CI/CD pipeline for automated build and deployment processes"
        }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="tasks" className="py-20 bg-white">
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
              Tasks <span className="text-orange-500">Completed</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A comprehensive collection of technical tasks and mini-projects demonstrating hands-on expertise
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {taskCategories.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.tasks.map((task, taskIndex) => (
                      <motion.div
                        key={taskIndex}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, delay: categoryIndex * 0.1 + taskIndex * 0.05 }}
                      >
                        <CheckCircle className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{task.title}</h4>
                          <p className="text-gray-600 text-sm">{task.description}</p>
                        </div>
                      </motion.div>
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

export default TasksCompleted;