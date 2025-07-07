import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Award, Briefcase, Users } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      role: "Intern",
      company: "LinuxWorld Informatics Pvt. Ltd",
      duration: "May 29, 2025 - Jul 29, 2025",
      location: "Remote",
      type: "Internship",
      skills: ["GenAI", "Cloud Computing", "Machine Learning", "Neural Network", "NLP", "Redhat Linux", "AWS", "DevOps", "Web Dev", "App Dev", "Git and Github"],
      achievements: [
        "Worked as an intern at LinuxWorld Informatics and created multiple projects",
        "Applied all skills taught during the internship program",
        "Gained hands-on experience with enterprise-level technologies"
      ]
    },
    {
      role: "AI DataSet Creator",
      company: "Shipd by Datacurve",
      duration: "Jun 11, 2024 - May 24, 2025",
      location: "Remote",
      type: "Professional Experience",
      skills: ["DSA", "Software Engineering", "Python", "C++"],
      achievements: [
        "Created various types of highly polished datasets based on client requirements",
        "Worked on DSA, software engineering, and Chain-of-thoughts datasets",
        "Delivered polished outputs that were used to train various AI models",
        "Collaborated directly with clients to understand specific dataset requirements"
      ]
    },
    {
      role: "Graphics Co-Lead",
      company: "Microsoft Learn Student Ambassador",
      duration: "Feb 1, 2025 - Apr 30, 2025",
      location: "BIT Mesra",
      type: "Leadership",
      skills: ["Graphic Designing", "Social Media Management", "Adobe Premier Pro", "Adobe Photoshop"],
      achievements: [
        "Created stunning designs for social media platforms",
        "Promoted workshops conducted by the club through visual content",
        "Led graphics team in creating engaging promotional materials"
      ]
    },
    {
      role: "Senior Core Team Member",
      company: "Techverse",
      duration: "Sep 1, 2024 - Apr 30, 2025",
      location: "BIT Mesra",
      type: "Leadership",
      skills: ["Graphic Designing", "Management", "Operations", "Adobe Photoshop", "Adobe Premier Pro", "Canva"],
      achievements: [
        "Ensured smooth execution of workshops and events",
        "Managed all promotional activities and designing tasks",
        "Refined overall club operations and maintained quality standards",
        "Coordinated with team members to deliver projects on time"
      ]
    },
    {
      role: "Junior Coordinator",
      company: "Technical Committee",
      duration: "Sep 1, 2024 - Apr 30, 2025",
      location: "BIT Mesra",
      type: "Leadership",
      skills: ["Graphic Designing", "Adobe Premier Pro", "Adobe After Effects", "Adobe Photoshop", "Communication", "Teamwork", "Management"],
      achievements: [
        "Worked primarily in the graphics team of the technical committee",
        "Crafted UI designs for websites and prepared Instagram posts",
        "Managed and ensured smooth execution of technical fest activities",
        "Collaborated with committee members to produce constructive outputs"
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Internship': return 'bg-blue-100 text-blue-800';
      case 'Leadership': return 'bg-purple-100 text-purple-800';
      case 'Professional Experience': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Internship': return <Briefcase className="w-5 h-5" />;
      case 'Leadership': return <Users className="w-5 h-5" />;
      case 'Professional Experience': return <Award className="w-5 h-5" />;
      default: return <Briefcase className="w-5 h-5" />;
    }
  };

  return (
    <section id="experience" className="py-20 bg-white">
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
              Professional <span className="text-orange-500">Experience</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              My journey through internships, leadership roles, and professional experiences
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="relative bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.role}</h3>
                      <p className="text-xl text-orange-500 font-semibold mb-3">{exp.company}</p>
                      <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2 ${getTypeColor(exp.type)}`}>
                        {getTypeIcon(exp.type)}
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-gray-900">Key Achievements</h4>
                    {exp.achievements.map((achievement, achIndex) => (
                      <motion.div
                        key={achIndex}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + achIndex * 0.1 }}
                      >
                        <Award className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">{achievement}</p>
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

export default Experience;