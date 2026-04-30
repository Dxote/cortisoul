import React from 'react';
import { Camera, Hash, Tv, Globe, MessageSquare, Gamepad2, Layers } from 'lucide-react';
import styles from './Footer.module.css';
import social from '../../data/social.json';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.brandSection}>
          <div className={styles.logo}>
            <Layers className={styles.logoIcon} size={32} />
            <div className={styles.logoText}>
              CORTI<span>SOUL</span>
            </div>
          </div>
          <p className={styles.tagline}>
            Cortisouls community.
          </p>
        </div>

        <div className={styles.linksSection}>
          <div className={styles.linkGroup}>
            <h4>Follow Us</h4>
            <div className={styles.socialLinks}>
              <a href={social.instagram} target="_blank" rel="noopener noreferrer" className={styles.socialLink} title="Instagram">
                <Camera size={20} /> Instagram
              </a>
              <a href={social.twitter} target="_blank" rel="noopener noreferrer" className={styles.socialLink} title="X (Twitter)">
                <Hash size={20} /> X (Twitter)
              </a>
              <a href={social.threads} target="_blank" rel="noopener noreferrer" className={styles.socialLink} title="Threads">
                <MessageSquare size={20} /> Threads
              </a>
              <a href={social.youtube} target="_blank" rel="noopener noreferrer" className={styles.socialLink} title="YouTube">
                <Tv size={20} /> YouTube
              </a>
              <a href={social.facebook} target="_blank" rel="noopener noreferrer" className={styles.socialLink} title="Facebook">
                <Globe size={20} /> Facebook
              </a>
              <a href={social.discord} target="_blank" rel="noopener noreferrer" className={styles.socialLink} title="Discord">
                <Gamepad2 size={20} /> Discord
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomContainer}`}>
          <p>&copy; {new Date().getFullYear()} Cortisoul. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <a href="#">Privacy Policy</a>
            <span className={styles.dot}></span>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
