import React from "react";
import styles from "./Footer.module.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStoreIos } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Main Footer Content */}
        <div className={styles.footerContent}>
          {/* Left Section - Logo and Description */}
          <div className={styles.leftSection}>
            <div className={styles.logo}>Jadoo.</div>
            <p className={styles.description}>
              Book your trip in minute, get full Control for much longer.
            </p>
          </div>

          {/* Middle Sections - Links */}
          <div className={styles.linksSections}>
            {/* Company Links */}
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Company</h4>
              <ul className={styles.linkList}>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#careers">Careers</a>
                </li>
                <li>
                  <a href="#mobile">Mobile</a>
                </li>
              </ul>
            </div>

            {/* Contact Links */}
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Contact</h4>
              <ul className={styles.linkList}>
                <li>
                  <a href="#help">Help/FAQ</a>
                </li>
                <li>
                  <a href="#press">Press</a>
                </li>
                <li>
                  <a href="#affiliates">Affiliates</a>
                </li>
              </ul>
            </div>

            {/* More Links */}
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>More</h4>
              <ul className={styles.linkList}>
                <li>
                  <a href="#airlinefees">Airlinefees</a>
                </li>
                <li>
                  <a href="#airline">Airline</a>
                </li>
                <li>
                  <a href="#lowfare">Low fare tips</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section - Social and App */}
          <div className={styles.rightSection}>
            {/* Social Media Icons */}
            <div className={styles.socialIcons}>
              <a href="#facebook" className={styles.socialIcon}>
                <FaFacebookF />
              </a>
              <a href="#instagram" className={styles.socialIcon}>
                <FaInstagram />
              </a>
              <a href="#twitter" className={styles.socialIcon}>
                <FaTwitter />
              </a>
            </div>

            {/* Discover our app */}
            <div className={styles.appSection}>
              <h4 className={styles.appTitle}>Discover our app</h4>
              <div className={styles.appButtons}>
                <button className={styles.appButton}>
                  <IoLogoGooglePlaystore className={styles.appIcon} />
                  <div className={styles.appText}>
                    <span className={styles.getOn}>GET IT ON</span>
                    <span className={styles.storeName}>Google Play</span>
                  </div>
                </button>
                <button className={styles.appButton}>
                  <FaAppStoreIos className={styles.appIcon} />
                  <div className={styles.appText}>
                    <span className={styles.getOn}>Download on the</span>
                    <span className={styles.storeName}>App Store</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className={styles.bottomSection}>
          <p className={styles.copyright}>All rights reserved@jadoo.co</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
