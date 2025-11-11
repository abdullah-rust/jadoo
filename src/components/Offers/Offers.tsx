import React from "react";
import styles from "./Offers.module.css";

// Import your icons
import offer1 from "../../assets/offer1.png";
import offer2 from "../../assets/offer2.png";
import offer3 from "../../assets/offer3.png";
import offer4 from "../../assets/offer4.png";

const Offers: React.FC = () => {
  const services = [
    {
      icon: offer1,
      title: "Calculated Weather",
      description:
        "Built Wicket longer admire do barton vanity itself do in it.",
      isActive: false,
    },
    {
      icon: offer2,
      title: "Best Flights",
      description:
        "Engrossed listening. Park gate sell they west hard for the.",
      isActive: true,
    },
    {
      icon: offer3,
      title: "Local Events",
      description:
        "Barton vanity itself do in it. Preferd to men it engrossed listening.",
      isActive: false,
    },
    {
      icon: offer4,
      title: "Customization",
      description:
        "We deliver outsourced aviation services for military customers",
      isActive: false,
    },
  ];

  return (
    <section className={styles.offers}>
      {/* Dotted Pattern Background */}
      <div className={styles.dottedPattern}></div>

      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <h3 className={styles.subtitle}>CATEGORY</h3>
          <h2 className={styles.title}>We Offer Best Services</h2>
        </div>

        {/* Services Grid */}
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div
              key={index}
              className={`${styles.serviceCard} ${
                service.isActive ? styles.activeCard : ""
              }`}
            >
              {/* Icon with Background */}
              <div className={styles.iconBackground}>
                <img
                  src={service.icon}
                  alt={service.title}
                  className={styles.iconImage}
                />
              </div>
              <br />

              {/* Content */}
              <h4 className={styles.serviceTitle}>{service.title}</h4>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>

        {/* Top Selling Section */}
        <div className={styles.topSelling}>
          <h3 className={styles.topSellingTitle}>Top Selling</h3>
        </div>
      </div>
    </section>
  );
};

export default Offers;
