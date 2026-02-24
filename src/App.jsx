import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './index.css';

const screenshots = [
  "Screenshot 2026-02-24 213526.png",
  "Screenshot 2026-02-24 213616.png",
  "Screenshot 2026-02-24 213646.png",
  "Screenshot 2026-02-24 213708.png",
  "Screenshot 2026-02-24 213729.png",
  "Screenshot 2026-02-24 213807.png",
  "Screenshot 2026-02-24 213834.png",
  "Screenshot 2026-02-24 213928.png"
];

const SetupModal = ({ onClose }) => (
  <motion.div
    className="modal-overlay"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.div
      className="modal-content"
      initial={{ scale: 0.9, y: 20 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0.9, y: 20 }}
    >
      <div className="modal-header">
        <h2 className="modal-title">Setup <span>Instructions</span></h2>
        <p style={{ color: 'var(--text-secondary)' }}>Follow these steps to run the project on a new device.</p>
      </div>

      <div className="instruction-section">
        <h3>1. Secure Email Configuration</h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Since we don't upload App Passwords to GitHub, you need to create your own:</p>
        <ul className="instruction-list">
          <li>Go to your <b>Google Account</b> settings.</li>
          <li>Navigate to <b>Security</b> and enable <b>2-Step Verification</b>.</li>
          <li>Search for <b>"App Passwords"</b> in the search bar.</li>
          <li>Select app as 'Mail' and device as 'Other (Custom Name)'.</li>
          <li>Copy the 16-character code and paste it in your <code>.env</code> file.</li>
        </ul>
        <div className="code-block">
          MAIL_PASSWORD=your_16_char_app_password
        </div>
      </div>

      <div className="instruction-section">
        <h3>2. Terminal Commands (VS Code)</h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Run these commands in order to setup the project:</p>
        <div className="code-block">
          # 1. Install dependencies<br />
          npm install<br /><br />
          # 2. Start development server<br />
          npm run dev
        </div>
      </div>

      <div className="info-box">
        <b>Pro Tip:</b> Ensure you have <b>Node.js</b> installed on your system before running these commands.
      </div>

      <button className="btn-close-modal" onClick={onClose}>
        Got it, Let's Explore!
      </button>
    </motion.div>
  </motion.div>
);

function App() {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    document.title = "Donation Record System - Showcase";
  }, []);

  return (
    <div className="app-container">
      <div className="bg-blur" />

      <AnimatePresence>
        {showModal && <SetupModal onClose={() => setShowModal(false)} />}
      </AnimatePresence>

      <header className="header">
        <h1 className="header-title">
          Donation<span>Record</span>System
        </h1>
      </header>

      <main className="main-content">
        <motion.section
          className="hero-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="hero-title">
            Project <span>Overview</span> & Gallery
          </h2>
          <p className="hero-desc">
            Explore the specialized Donation Management & Record System through these high-fidelity interface captures.
          </p>
        </motion.section>

        <div className="screenshot-grid">
          {screenshots.map((img, idx) => (
            <motion.div
              key={idx}
              className="screenshot-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="mock-header">
                <div className="dot red" />
                <div className="dot yellow" />
                <div className="dot green" />
                <span className="mock-url">donation-system.local/preview/{idx + 1}</span>
              </div>
              <div className="mock-body">
                <img
                  src={`${import.meta.env.BASE_URL}screenshots/${img}`}
                  alt={`Donation System Preview ${idx + 1}`}
                />
              </div>
              <div className="card-footer">
                <span className="image-name">Module View 0{idx + 1}</span>
                <span className="badge">HQ Preview</span>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <footer style={{ textAlign: 'center', padding: '4rem 2rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        <p>&copy; 2026 Donation Record System Showcase. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
