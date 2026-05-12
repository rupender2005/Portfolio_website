import { motion } from 'framer-motion';

export default function Hero() {
  // Parent container handles the stagger effect on page load
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  // Individual item animation: slide up and fade in
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', padding: '60px 40px 40px' }}>
      <motion.div 
        style={{ maxWidth: '660px' }}
        variants={container}
        initial="hidden"
        animate="show" // Note: Using 'animate' instead of 'whileInView' so it plays immediately on page load
      >
        <motion.p variants={item} className="slabel">// hello world</motion.p>
        
        <motion.h1 variants={item} style={{ fontSize: 'clamp(44px,6vw,76px)', fontWeight: 700, lineHeight: 1.05, marginBottom: '14px', fontFamily: "'Courier New', monospace" }}>
          Rupender<br /><span style={{ color: '#d97706' }}>Singh</span>
        </motion.h1>
        
        <motion.p variants={item} style={{ fontSize: '18px', color: '#71717a', marginBottom: '10px', fontFamily: "'Courier New', monospace" }}>
          MERN-Stack Developer
        </motion.p>
        
        <motion.p variants={item} style={{ fontSize: '15px', color: '#a1a1aa', lineHeight: 1.75, maxWidth: '500px', marginBottom: '36px' }}>
          6th-semester Computer Science student at JMIT building scalable full-stack web applications. With a solid foundation in C++ and over 100 DSA problems solved, I bridge the gap between optimized logic and clean user interfaces. Currently seeking remote internships where I can ship real, production-ready features.
        </motion.p>
        
        <motion.div variants={item} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '44px' }}>
          <motion.a 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }} 
            href="#projects" 
            className="btn-primary"
          >
            View Projects
          </motion.a>
          
          <motion.a 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }} 
            href="https://github.com/rupender2005" 
            className="btn-outline" 
            target="_blank" 
            rel="noreferrer"
          >
            GitHub ↗
          </motion.a>
          
          <motion.a 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }} 
            href="https://www.linkedin.com/in/rupender-singh-a59674294/" 
            className="btn-outline" 
            target="_blank" 
            rel="noreferrer"
          >
            LinkedIn ↗
          </motion.a>
        </motion.div>
        
        <motion.div variants={item} style={{ display: 'flex', gap: '36px' }}>
          <div>
            <div style={{ fontSize: '30px', fontWeight: 700, color: '#d97706', fontFamily: "'Courier New', monospace" }}>100+</div>
            <div style={{ fontSize: '11px', color: '#52525b', marginTop: '2px' }}>LeetCode Solved</div>
          </div>
          <div>
            <div style={{ fontSize: '30px', fontWeight: 700, color: '#d97706', fontFamily: "'Courier New', monospace" }}>8.0</div>
            <div style={{ fontSize: '11px', color: '#52525b', marginTop: '2px' }}>GPA / 10.0</div>
          </div>
          <div>
            <div style={{ fontSize: '30px', fontWeight: 700, color: '#d97706', fontFamily: "'Courier New', monospace" }}>3+</div>
            <div style={{ fontSize: '11px', color: '#52525b', marginTop: '2px' }}>Projects Built</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}