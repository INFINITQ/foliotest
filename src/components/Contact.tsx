import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "abhishekpareekjp17@gmail.com",
      link: "mailto:abhishekpareekjp17@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "WhatsApp",
      value: "+91 9414806786",
      link: "https://wa.me/919414806786"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "KH413, Infront Of RadhaKirshna Temple, Manoharpura, Jagatpura",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      link: "https://github.com/abhishekpareek"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/abhishek-pareek-/"
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
    <section id="contact" className="py-20 bg-gray-50">
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
              Get In <span className="text-orange-500">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to collaborate on your next project? Let's create something amazing together.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Connect</h3>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start space-x-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow duration-300"
                        whileHover={{ x: 5 }}
                      >
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 flex-shrink-0">
                          {info.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{info.title}</h4>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-gray-600 hover:text-orange-500 transition-colors duration-200 interactive break-words"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-gray-600 break-words">{info.value}</p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Follow Me</h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center transition-colors duration-200 interactive"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200 resize-none"
                      required
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2 interactive"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;