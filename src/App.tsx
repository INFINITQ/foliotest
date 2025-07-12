import React, { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import TasksCompleted from './components/TasksCompleted';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Canvas3D from './components/Canvas3D';
import CursorEffect from './components/CursorEffect';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const { scrollYProgress } = useScroll();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      setScrollProgress(latest);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  useEffect(() => {
    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      <ParticleBackground />
      <CursorEffect />
      <Canvas3D scrollProgress={scrollProgress} />
      
      <Navigation />
      
      <main className="relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Hero />
          <About />
          <Skills />
          <Projects />
          <TasksCompleted />
          <Experience />
          <Contact />
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;