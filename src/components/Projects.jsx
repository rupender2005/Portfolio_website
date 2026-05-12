import { motion } from 'framer-motion';

export default function Projects() {
  // Container controls the staggered entrance of the cards
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 } // 0.15s delay between each card
    }
  };

  // Individual card animation: slide up from below
  const cardItem = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="projects" style={{ padding: '70px 40px', borderTop: '1px solid #18181b' }}>
      
      {/* Title Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <p className="slabel">// projects</p>
        <h2 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '36px', fontFamily: "'Courier New', monospace" }}>What I've Built</h2>
      </motion.div>

      {/* Grid Container with Staggered Animation */}
      <motion.div 
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }} // Triggers as soon as top 10% is visible
      >

        {/* Project Card 1 */}
        <motion.div 
          className="pcard" 
          variants={cardItem} 
          whileHover={{ y: -8, transition: { duration: 0.2 } }} // Replaces CSS transform for smoother floating
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 600, fontFamily: "'Courier New', monospace" }}>SkillVault</h3>
            <span style={{ background: '#1c1917', color: '#f59e0b', border: '1px solid #292524', padding: '2px 8px', borderRadius: '4px', fontSize: '10px' }}>In Progress</span>
          </div>
          <p style={{ fontSize: '13px', color: '#71717a', lineHeight: 1.6, marginBottom: '14px' }}>
            Full-stack micro-credential aggregator with dual Learner/Employer roles, NSQF pathway visualizer, and blockchain hash verification.
          </p>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '16px' }}>
            <span className="ttag">React.js</span><span className="ttag">Node.js</span><span className="ttag">Express</span><span className="ttag">MongoDB</span>
          </div>
          <a href="https://github.com/rupender2005" target="_blank" rel="noreferrer" style={{ fontSize: '12px', color: '#a1a1aa', textDecoration: 'none' }}>GitHub ↗</a>
        </motion.div>

        {/* Project Card 2 */}
        <motion.div 
          className="pcard" 
          variants={cardItem} 
          whileHover={{ y: -8, transition: { duration: 0.2 } }}
        >
          <h3 style={{ fontSize: '16px', fontWeight: 600, fontFamily: "'Courier New', monospace", marginBottom: '10px' }}>Weather Dashboard</h3>
          <p style={{ fontSize: '13px', color: '#71717a', lineHeight: 1.6, marginBottom: '14px' }}>
            Real-time weather for 200K+ cities via OpenWeather API. Built with async/await, dynamic DOM updates, and live humidity/temp/icon display.
          </p>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '16px' }}>
            <span className="ttag">JavaScript</span><span className="ttag">OpenWeather API</span><span className="ttag">CSS3</span>
          </div>
          <div style={{ display: 'flex', gap: '14px' }}>
            <a href="https://github.com/rupender2005" target="_blank" rel="noreferrer" style={{ fontSize: '12px', color: '#a1a1aa', textDecoration: 'none' }}>GitHub ↗</a>
            <a href="https://weather-website-zeta-eosin.vercel.app/" target="_blank" rel="noreferrer" style={{ fontSize: '12px', color: '#d97706', textDecoration: 'none' }}>Live Demo ↗</a>
          </div>
        </motion.div>

        {/* Project Card 3 */}
        <motion.div 
          className="pcard" 
          variants={cardItem} 
          whileHover={{ y: -8, transition: { duration: 0.2 } }}
        >
          <h3 style={{ fontSize: '16px', fontWeight: 600, fontFamily: "'Courier New', monospace", marginBottom: '10px' }}>Personal Portfolio</h3>
          <p style={{ fontSize: '13px', color: '#71717a', lineHeight: 1.6, marginBottom: '14px' }}>
            Responsive portfolio with mailto and social links, semantic structure for accessibility, and layout tuned for mobile and desktop.
          </p>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '16px' }}>
            <span className="ttag">HTML5</span><span className="ttag">CSS3</span><span className="ttag">JavaScript</span>
          </div>
          <a href="https://github.com/rupender2005" target="_blank" rel="noreferrer" style={{ fontSize: '12px', color: '#a1a1aa', textDecoration: 'none' }}>GitHub ↗</a>
        </motion.div>

      </motion.div>
    </section>
  );
}