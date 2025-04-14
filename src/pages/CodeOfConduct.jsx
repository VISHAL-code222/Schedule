import React from 'react';
import { motion } from 'framer-motion';
import "../CSS/CodeOfConduct.css"; // Import the CSS file

export default function ConductofConduct() {
  return (
    <motion.div
      className="conduct-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="conduct-title">Code of Conduct</h2>
      <p className="conduct-paragraph">Be kind, respectful, and inclusive.</p>
      <p className="conduct-paragraph">Harassment of any kind will not be tolerated.</p>
      <p className="conduct-paragraph">Reach out to event staff if you need assistance.</p>
    </motion.div>
  );
}
