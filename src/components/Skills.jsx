import { motion } from 'framer-motion';

export default function Skills() {
  // Container controls the staggered entrance of the skill rows
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 } // 0.15s delay between each row appearing
    }
  };

  // Individual row animation: slide in from the left
  const rowItem = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  // Simple hover animation for the individual skill chips
  const chipHover = { scale: 1.05, y: -2, transition: { duration: 0.2 } };

  return (
    <section id="skills" style={{ padding: '70px 40px', borderTop: '1px solid #18181b' }}>
      
      {/* Title Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <p className="slabel">// skills</p>
        <h2 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '36px', fontFamily: "'Courier New', monospace" }}>Tech Stack</h2>
      </motion.div>

      {/* Skills Container */}
      <motion.div 
        style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        
        {/* Frontend Row */}
        <motion.div variants={rowItem} style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', flexWrap: 'wrap' }}>
          <span style={{ minWidth: '90px', color: '#52525b', fontSize: '12px', fontFamily: "'Courier New', monospace", paddingTop: '5px' }}>Frontend</span>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <motion.span whileHover={chipHover} className="chip">React.js</motion.span>
            <motion.span whileHover={chipHover} className="chip">TypeScript</motion.span>
            <motion.span whileHover={chipHover} className="chip">JavaScript ES6+</motion.span>
            <motion.span whileHover={chipHover} className="chip">Tailwind CSS</motion.span>
            <motion.span whileHover={chipHover} className="chip">HTML5</motion.span>
            <motion.span whileHover={chipHover} className="chip">CSS3</motion.span>
          </div>
        </motion.div>
        
        {/* Backend Row */}
        <motion.div variants={rowItem} style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', flexWrap: 'wrap' }}>
          <span style={{ minWidth: '90px', color: '#52525b', fontSize: '12px', fontFamily: "'Courier New', monospace", paddingTop: '5px' }}>Backend</span>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <motion.span whileHover={chipHover} className="chip">Node.js</motion.span>
            <motion.span whileHover={chipHover} className="chip">Express.js</motion.span>
            <motion.span whileHover={chipHover} className="chip">REST APIs</motion.span>
          </div>
        </motion.div>

        {/* Database Row */}
        <motion.div variants={rowItem} style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', flexWrap: 'wrap' }}>
          <span style={{ minWidth: '90px', color: '#52525b', fontSize: '12px', fontFamily: "'Courier New', monospace", paddingTop: '5px' }}>Database</span>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <motion.span whileHover={chipHover} className="chip">MongoDB</motion.span>
            <motion.span whileHover={chipHover} className="chip">SQLite</motion.span>
          </div>
        </motion.div>

        {/* Tools Row */}
        <motion.div variants={rowItem} style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', flexWrap: 'wrap' }}>
          <span style={{ minWidth: '90px', color: '#52525b', fontSize: '12px', fontFamily: "'Courier New', monospace", paddingTop: '5px' }}>Tools</span>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <motion.span whileHover={chipHover} className="chip">Git</motion.span>
            <motion.span whileHover={chipHover} className="chip">GitHub</motion.span>
            <motion.span whileHover={chipHover} className="chip">Postman</motion.span>
            <motion.span whileHover={chipHover} className="chip">VS Code</motion.span>
            <motion.span whileHover={chipHover} className="chip">Vite</motion.span>
          </div>
        </motion.div>

        {/* CS Core Row */}
        <motion.div variants={rowItem} style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', flexWrap: 'wrap' }}>
          <span style={{ minWidth: '90px', color: '#52525b', fontSize: '12px', fontFamily: "'Courier New', monospace", paddingTop: '5px' }}>CS Core</span>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <motion.span whileHover={chipHover} className="chip">DSA</motion.span>
            <motion.span whileHover={chipHover} className="chip">C/C++</motion.span>
            <motion.span whileHover={chipHover} className="chip">OOP</motion.span>
            <motion.span whileHover={chipHover} className="chip">Python</motion.span>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}