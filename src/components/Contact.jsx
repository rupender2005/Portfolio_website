import { motion } from 'framer-motion';

export default function Contact() {
  // Parent container animation: Scales up slightly and staggers the children
  const container = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.5, staggerChildren: 0.15 } 
    }
  };

  // Child items animation: fade up
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section id="contact" style={{ padding: '80px 40px', borderTop: '1px solid #18181b', textAlign: 'center' }}>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.p variants={item} className="slabel" style={{ textAlign: 'center' }}>// contact</motion.p>
        
        <motion.h2 variants={item} style={{ fontSize: '32px', fontWeight: 700, marginBottom: '14px', fontFamily: "'Courier New', monospace" }}>
          Let's Work Together
        </motion.h2>
        
        <motion.p variants={item} style={{ color: '#71717a', marginBottom: '36px', fontSize: '15px' }}>
          Open to remote internships and freelance work. Let's build something great.
        </motion.p>
        
        <motion.div variants={item} style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {/* Added whileHover and whileTap to the buttons for interactivity */}
          <motion.a 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }} 
            href="mailto:rupendersingh755@gmail.com" 
            className="btn-primary"
          >
            Send Email ↗
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
        </motion.div>
      </motion.div>
    </section>
  );
}