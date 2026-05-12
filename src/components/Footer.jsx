import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{ padding: '20px 40px', borderTop: '1px solid #18181b', textAlign: 'center', color: '#3f3f46', fontSize: '12px', fontFamily: "'Courier New', monospace" }}
    >
      © 2026 Rupender Singh — Built with React + Vite
    </motion.footer>
  );
}