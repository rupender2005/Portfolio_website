import { motion, useScroll, useSpring } from 'framer-motion';
import './index.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', background: '#09090b', color: '#e4e4e7', minHeight: '100vh' }}>
      
      <motion.div
        style={{
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          originX: 0,
          background: '#d97706',
          zIndex: 999,
        }}
      />

      <Navbar />
      
      {/* 🚀 THE FIX: This <main> tag centers all your content on wide screens! */}
      <main style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
      
    </div>
  );
}