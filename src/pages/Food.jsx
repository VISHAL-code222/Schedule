import React from 'react';
import { motion } from 'framer-motion';
import '../CSS/Food.css'; // Import the CSS file

export default function Food() {
  return (
    <motion.div
      className="food-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="food-title">Food & Dining</h2>
      <ul className="food-list">
        <li>🌯 Free breakfast & lunch provided daily</li>
        <li>☕ Coffee, tea, and snacks available throughout the day</li>
        <li>🍕 Vegan and gluten-free options available</li>
      </ul>
    </motion.div>
  );
}
