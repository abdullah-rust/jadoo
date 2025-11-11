import React from "react";
import { FaPlay } from "react-icons/fa";
import styles from "./Hero.module.css";
import girlImage from "../../assets/girlImage.png";
import backgrodSvg from "../../assets/mesh.svg";

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <img
        src={backgrodSvg}
        alt="Mesh Background"
        className={styles.svgBackground}
        aria-hidden="true"
      />

      <div className={styles.container}>
        {/* Text Content */}
        <div className={styles.content}>
          <h3 className={styles.subtitle}>
            BEST DESTINATIONS AROUND THE WORLD
          </h3>
          <h1 className={styles.title}>
            Travel, <span className={styles.highlight}>enjoy</span>
            <br />
            and live a new
            <br />
            and full life
          </h1>
          <p className={styles.description}>
            Built Wicket longer admire do barton vanity itself do in it.
            <br />
            Preferred to sportsmen it engrossed listening. Park gate
            <br />
            sell they west hard for the.
          </p>
          <div className={styles.buttons}>
            <button className={styles.primaryBtn}>Find out more</button>
            <button className={styles.demoBtn}>
              <div className={styles.playCircle}>
                <FaPlay className={styles.playIcon} />
              </div>
              Play Demo
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className={styles.imageSection}>
          <div className={styles.imageContainer}>
            <img
              src={girlImage}
              alt="Travel Enjoy"
              className={styles.heroImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
