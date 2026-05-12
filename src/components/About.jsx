import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" style={{ padding: '70px 40px', borderTop: '1px solid #18181b' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="slabel">// about</p>
        <h2 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '20px', fontFamily: "'Courier New', monospace" }}>Who I Am</h2>
        <p style={{ fontSize: '15px', color: '#a1a1aa', lineHeight: 1.8, maxWidth: '600px' }}>
          6th semester CSE student at JMIT, Kurukshetra University. I build full-stack web apps, grind DSA in C++, and am actively preparing for campus placements in September 2026. I'm open to remote internships where I can ship real features.
        </p>
      </motion.div>
    </section>
  );
}