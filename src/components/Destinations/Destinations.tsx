import React from "react";
import styles from "./Destinations.module.css";
import { FaLocationArrow } from "react-icons/fa";

// Import destination images
import romeImage from "../../assets/rome.jpg";
import londonImage from "../../assets/london.jpg";
import europeImage from "../../assets/europe.jpg";

const Destinations: React.FC = () => {
  const destinations = [
    {
      image: romeImage,
      name: "Rome, Italy",
      price: "$5.42k",
      duration: "10 Days Trip",
    },
    {
      image: londonImage,
      name: "London, UK",
      price: "$4.2k",
      duration: "12 Days Trip",
    },
    {
      image: europeImage,
      name: "Full Europe",
      price: "$15k",
      duration: "28 Days Trip",
    },
  ];

  return (
    <section className={styles.destinations}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>Top Destinations</h2>
        </div>

        {/* Destinations Grid */}
        <div className={styles.destinationsGrid}>
          {destinations.map((destination, index) => (
            <div key={index} className={styles.destinationCard}>
              {/* Destination Image */}
              <div className={styles.imageContainer}>
                <img
                  src={destination.image}
                  alt={destination.name}
                  className={styles.destinationImage}
                />
              </div>

              {/* Destination Info */}
              <div className={styles.destinationInfo}>
                <div className={styles.destinationMain}>
                  <h3 className={styles.destinationName}>{destination.name}</h3>
                  <span className={styles.destinationPrice}>
                    {destination.price}
                  </span>
                </div>
                <div className={styles.destinationMeta}>
                  <span className={styles.duration}>
                    <FaLocationArrow className={styles.durationIcon} />
                    {destination.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
