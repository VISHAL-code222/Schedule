import React from 'react';
import { motion } from 'framer-motion';
import '../CSS/SpeakerCard.css'; // Import the CSS file

export default function SpeakerCard({ speaker }) {
  return (
    <motion.div
      className="speaker-card"
      whileHover={{ scale: 1.03 }}
    >
      <img
        src={speaker.avatar}
        alt={speaker.name}
        className="avatar"
      />
      <h4 className="speaker-name">{speaker.name}</h4>
      <p className="speaker-topic">{speaker.topic}</p>
      <p className="speaker-time">🕒 {speaker.time}</p>
    </motion.div>
  );
}

