import React from 'react';
import { motion } from 'framer-motion';
import '../CSS/ScheduleItem.css'; // Import the CSS file

export default function ScheduleItem({ item }) {
  return (
    <motion.div
      className="schedule-item"
      whileHover={{ scale: 1.02 }}
    >
      <h3 className="topic">{item.topic}</h3>
      <p className="speaker">Speaker: {item.name}</p>
      <p className="time">Time: {item.time}</p>
    </motion.div>
  );
}
