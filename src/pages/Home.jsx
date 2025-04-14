import React from 'react';
import { motion } from 'framer-motion';
import { eventInfo, speakers } from '../data/mockData';
import '../CSS/Home.css'; // Import the CSS file

export default function Home() {
  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="home-title">Welcome to {eventInfo.name}</h2>
      <p className="home-description">{eventInfo.description}</p>
      <p className="home-location">📍 {eventInfo.location}</p>
      <p className="home-date">📅 {eventInfo.date}</p>

      <h3 className="speakers-title">Featured Speakers</h3>
      <div className="speakers-grid">
        {speakers.map((s, idx) => (
          <motion.div
            key={idx}
            className="speaker-card"
            whileHover={{ scale: 1.03 }}
          >
            <img src={s.avatar} alt={s.name} className="speaker-avatar" />
            <h4 className="speaker-name">{s.name}</h4>
            <p className="speaker-topic">{s.topic}</p>
            <p className="speaker-time">🕒 {s.time}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
