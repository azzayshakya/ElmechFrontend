import React from 'react';
import { motion } from 'framer-motion';
import './SiteUnderUpdate.css';
const UpdateComingSoonPage = () => {
  return (
    <div className="coming-soon-container">
      <motion.div
        className="coming-soon-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h1 className="coming-soon-title">We're Uploading Something Amazing!</h1>
        <p className="coming-soon-subtitle">Update 0.0.6 is happening... Please wait.</p>
        <motion.div
          className="loading-circle"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: 'linear',
          }}
        ></motion.div>
        <p className="coming-soon-message">Hang tight. We'll be back soon!</p>
      </motion.div>
    </div>
  );
};

export default UpdateComingSoonPage;
