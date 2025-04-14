import React from 'react';
import { motion } from 'framer-motion';
import "../CSS/Footer.css"

export default function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="footer-container">
        <p className="footer-text">
          © {new Date().getFullYear()} CONFERENCE-ZONE. All rights reserved.
        </p>
        <div className="footer-links">
          <a href="#" className="footer-link">Twitter</a>
          <a href="#" className="footer-link">GitHub</a>
          <a href="#" className="footer-link">Contact</a>
        </div>
      </div>
    </motion.footer>
  );
}
