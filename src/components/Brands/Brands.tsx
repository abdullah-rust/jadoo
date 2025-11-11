import React, { useState } from "react";
import styles from "./Brands.module.css";

// Import  brand logos
import axonLogo from "../../assets/brands/axon.png";
import jetstarLogo from "../../assets/brands/jetstar.png";
import expediaLogo from "../../assets/brands/expedia.png";
import qantasLogo from "../../assets/brands/qantas.png";
import alitaliaLogo from "../../assets/brands/alitalia.png";

const Brands: React.FC = () => {
  const brands = [
    { name: "Axon", logo: axonLogo },
    { name: "Jetstar", logo: jetstarLogo },
    { name: "Expedia", logo: expediaLogo },
    { name: "Qantas", logo: qantasLogo },
    { name: "Alitalia", logo: alitaliaLogo },
  ];

  const [highlightedIndex, setHighlightedIndex] = useState(2);

  const handleItemClick = (index: number) => {
    setHighlightedIndex(index);
  };

  return (
    <section className={styles.brands}>
      <div className={styles.container}>
        <div className={styles.brandsGrid}>
          {brands.map((brand, index) => {
            const isHighlighted = index === highlightedIndex;

            return (
              <div
                key={index}
                className={`${styles.brandItem} ${
                  isHighlighted ? styles.highlightedItem : ""
                }`}
                onClick={() => handleItemClick(index)}
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className={`${styles.brandLogo} ${
                    !isHighlighted ? styles.grayscaleLogo : ""
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Brands;
