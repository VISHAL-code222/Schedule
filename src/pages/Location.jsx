import React from 'react';
import { motion } from 'framer-motion';
import '../CSS/Location.css'; // Import the CSS file

export default function Location() {
  return (
    <motion.div
      className="location-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="location-title">Location</h2>
      <p className="location-details">📍 San Francisco Conference Center</p>
      <p className="location-details">🚗 Parking available on-site</p>
      <p className="location-details">🏨 Nearby Hotels: Hotel React, JSX Inn, Code Suites</p>
    </motion.div>
  );
}
