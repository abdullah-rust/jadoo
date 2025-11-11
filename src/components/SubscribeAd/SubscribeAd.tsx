import React from "react";
import styles from "./SubscribeAd.module.css";
import { FiMail, FiSend } from "react-icons/fi";

const SubscribeAd: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for subscribing!");
  };

  return (
    <section className={styles.subscribeAdSection}>
      <div className={styles.container}>
        {/* Main Subscribe Box */}
        <div className={styles.subscribeBox}>
          {/* Floating Paper Plane Icon */}
          <div className={styles.planeIconContainer}>
            <FiSend className={styles.planeIcon} />
          </div>

          {/* Background Pattern */}
          <div className={styles.backgroundPattern}></div>

          <h2 className={styles.heading}>
            Subscribe to get information, latest news and other <br />
            interesting offers about Jadoo
          </h2>

          {/* Form */}
          <form className={styles.subscriptionForm} onSubmit={handleSubmit}>
            {/* Email Input Field */}
            <div className={styles.inputWrapper}>
              <FiMail className={styles.mailIcon} />
              <input
                type="email"
                placeholder="Your email"
                className={styles.emailInput}
                required
              />
            </div>

            {/* Subscribe Button */}
            <button type="submit" className={styles.subscribeButton}>
              Subscribe
            </button>
          </form>
        </div>

        {/* Bottom Right Dotted/Plus Pattern */}
        <div className={styles.dottedPlusPattern}></div>
      </div>
    </section>
  );
};

export default SubscribeAd;
