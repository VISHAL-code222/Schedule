import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import "../CSS/Header.css"

export default function Header() {
  return (
    <motion.header
      className="header"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="nav-container">
        <h1 className="logo">CONFERENCE-ZONE</h1>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/location" className="nav-link">Location</Link>
          <Link to="/food" className="nav-link">Food</Link>
          <Link to="/code-of-conduct" className="nav-link">Conduct</Link>
          <Link to="/schedule" className="nav-link">Schedule</Link>
        </div>
      </nav>
    </motion.header>
  );
}
