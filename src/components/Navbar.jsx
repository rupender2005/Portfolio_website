import { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 769px)');
    const onChange = () => {
      if (mq.matches) setMenuOpen(false);
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const scrollToTop = useCallback((e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMenu();
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }, [closeMenu]);

  return (
    <motion.nav
      className="site-nav"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        background: 'rgba(9,9,11,.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #18181b',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      <div className="navbar-inner">
        <motion.a
          href="#"
          onClick={scrollToTop}
          whileHover={{ scale: 1.05 }}
          style={{
            fontFamily: "'Courier New', monospace",
            color: '#d97706',
            fontWeight: 700,
            fontSize: '15px',
            textDecoration: 'none',
            cursor: 'pointer',
          }}
        >
          RS_
        </motion.a>

        <div className={`navbar-links ${menuOpen ? 'is-open' : ''}`}>
          {NAV_ITEMS.map(({ id, label }) => (
            <a key={id} href={`#${id}`} className="nav-link" onClick={closeMenu}>
              {label}
            </a>
          ))}
        </div>

        <div className="navbar-end">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:rupendersingh755@gmail.com"
            className="btn-primary"
            style={{ padding: '8px 16px', fontSize: '12px' }}
          >
            Hire Me
          </motion.a>

          <button
            type="button"
            className="navbar-burger"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
