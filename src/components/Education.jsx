import { motion } from 'framer-motion';

export default function Education() {
  // Parent container handles the stagger timing for the cards
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 } // 0.2s delay between each card appearing
    }
  };

  // Individual card animation: slide in from the left
  const cardItem = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="education" style={{ padding: '70px 40px', borderTop: '1px solid #18181b' }}>
      {/* Title animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <p className="slabel">// education</p>
        <h2 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '32px', fontFamily: "'Courier New', monospace" }}>Background</h2>
      </motion.div>

      {/* Cards container with staggered animation */}
      <motion.div 
        style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div 
          variants={cardItem} 
          whileHover={{ x: 5, backgroundColor: '#18181b', transition: { duration: 0.2 } }}
          style={{ background: '#111113', border: '1px solid #27272a', borderRadius: '10px', padding: '22px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}
        >
          <div>
            <div style={{ fontSize: '15px', fontWeight: 600, marginBottom: '4px' }}>B.Tech — Computer Science & Engineering</div>
            <div style={{ fontSize: '13px', color: '#71717a' }}>JMIT, Radaur (Kurukshetra University)</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '14px', color: '#d97706', fontFamily: "'Courier New', monospace" }}>8.0 / 10.0</div>
            <div style={{ fontSize: '12px', color: '#52525b' }}>2023 – 2027</div>
          </div>
        </motion.div>

        <motion.div 
          variants={cardItem} 
          whileHover={{ x: 5, backgroundColor: '#18181b', transition: { duration: 0.2 } }}
          style={{ background: '#111113', border: '1px solid #27272a', borderRadius: '10px', padding: '22px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}
        >
          <div>
            <div style={{ fontSize: '15px', fontWeight: 600, marginBottom: '4px' }}>Senior Secondary — Science (CBSE)</div>
            <div style={{ fontSize: '13px', color: '#71717a' }}>Kendriya Vidyalaya No.2, Jaipur</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '14px', color: '#d97706', fontFamily: "'Courier New', monospace" }}>CBSE</div>
            <div style={{ fontSize: '12px', color: '#52525b' }}>March 2023</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}