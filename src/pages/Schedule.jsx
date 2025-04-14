import React from 'react';
import { speakers } from '../data/mockData';
import ScheduleItem from '../components/ScheduleItem';
import { motion } from 'framer-motion';
import '../CSS/Schedule.css'; // Import the CSS

export default function Schedule() {
  return (
    <motion.div
      className="schedule-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="schedule-title">Conference Schedule</h2>
      <div className="schedule-grid">
        {speakers.map((s, idx) => (
          <ScheduleItem
            key={idx}
            item={{ name: s.name, topic: s.topic, time: s.time }}
          />
        ))}
      </div>
    </motion.div>
  );
}
