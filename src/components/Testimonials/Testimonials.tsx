import React, { useState } from "react";
import styles from "./Testimonials.module.css";

// Import profile images for testimonials
import mikeTaylorImage from "../../assets/mike-taylor.jpg";
import chrisThomasImage from "../../assets/chris-thomas.jpg";

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonialsData = [
    {
      id: 1,
      name: "Mike Taylor",
      title: "Lahore, Pakistan",
      quote:
        "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
      image: mikeTaylorImage,
    },
    {
      id: 2,
      name: "Chris Thomas",
      title: "CEO of Red Button",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: chrisThomasImage,
    },
    {
      id: 3,
      name: "Jane Smith",
      title: "Travel Designer",
      quote:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: chrisThomasImage,
    },
  ];

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  const currentTestimonial = testimonialsData[activeIndex];
  const nextTestimonial =
    testimonialsData[(activeIndex + 1) % testimonialsData.length];
  const thirdTestimonial =
    testimonialsData[(activeIndex + 2) % testimonialsData.length];

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <h3 className={styles.subtitle}>TESTIMONIALS</h3>
          <h2 className={styles.title}>
            What People Say <br /> About Us.
          </h2>
          <div className={styles.paginationDots}>
            {testimonialsData.map((_, index) => (
              <span
                key={index}
                className={`${styles.dot} ${
                  activeIndex === index ? styles.activeDot : ""
                }`}
                onClick={() => handleDotClick(index)}
              ></span>
            ))}
          </div>
        </div>

        <div className={styles.rightContent}>
          {/* Current Testimonial */}
          <div className={styles.testimonialCard}>
            <img
              src={currentTestimonial.image}
              alt={currentTestimonial.name}
              className={styles.profileImage}
            />
            <p className={styles.quote}>{currentTestimonial.quote}</p>
            <h4 className={styles.name}>{currentTestimonial.name}</h4>
            <p className={styles.designation}>{currentTestimonial.title}</p>
          </div>

          {/* Next Testimonial */}
          <div className={`${styles.testimonialCard} ${styles.nextCard}`}>
            <img
              src={nextTestimonial.image}
              alt={nextTestimonial.name}
              className={styles.profileImage}
            />
            <h4 className={styles.name}>{nextTestimonial.name}</h4>
            <p className={styles.designation}>{nextTestimonial.title}</p>
          </div>

          {/* Third Testimonial */}
          <div className={`${styles.testimonialCard} ${styles.thirdCard}`}>
            <img
              src={thirdTestimonial.image}
              alt={thirdTestimonial.name}
              className={styles.profileImage}
            />
            <h4 className={styles.name}>{thirdTestimonial.name}</h4>
            <p className={styles.designation}>{thirdTestimonial.title}</p>
          </div>

          {/* Navigation Arrows */}
          <div className={styles.arrows}>
            <span className={styles.arrow} onClick={handlePrev}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 15L12 9L6 15"
                  stroke="#3E2E5B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className={styles.arrow} onClick={handleNext}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="#3E2E5B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
