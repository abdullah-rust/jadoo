import React from "react";
import styles from "./Book.module.css";

// Import images
import greeceImage from "../../assets/greece.jpg";
import personImage from "../../assets/person-icon.jpg";

const Book: React.FC = () => {
  const steps = [
    {
      iconColorClass: styles.iconYellow,
      iconElement: "📍",
      title: "Choose Destination",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    },
    {
      // Image mein orange background, Icon: Credit Card
      iconColorClass: styles.iconOrange,
      iconElement: "💳",
      title: "Make Payment",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    },
    {
      iconColorClass: styles.iconBlue,
      iconElement: "✈️",
      title: "Reach Airport on Selected Date",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    },
  ];

  return (
    <section className={styles.book}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Left Side - Steps */}
          <div className={styles.stepsSection}>
            <h3 className={styles.subtitle}>Easy and Fast</h3>
            <h2 className={styles.title}>
              Book Your Next Trip In 3 Easy Steps
            </h2>

            <div className={styles.steps}>
              {steps.map((step, index) => (
                <div key={index} className={styles.step}>
                  <div className={`${styles.stepIcon} ${step.iconColorClass}`}>
                    {step.iconElement}
                  </div>
                  <div className={styles.stepContent}>
                    <h4 className={styles.stepTitle}>{step.title}</h4>
                    <p className={styles.stepDescription}>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.cardSection}>
            <div className={styles.tripCard}>
              {/* Trip Image */}
              <div className={styles.tripImage}>
                <img src={greeceImage} alt="Trip to Greece" />
              </div>

              {/* Trip Info */}
              <div className={styles.tripInfo}>
                <h3 className={styles.tripTitle}>Trip To Greece</h3>
                <p className={styles.tripDates}>14–29 June | by Robbin jk</p>

                <div className={styles.tripIcons}>
                  <span className={styles.icon}>
                    {/* Placeholder for location icon */}
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                      <path
                        stroke="#8A8F9B"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M12 20.25c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5S4.5 8.592 4.5 12.75s3.358 7.5 7.5 7.5zM15.75 12.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                      />
                    </svg>
                  </span>
                  <span className={styles.icon}>
                    {/* Placeholder for building/structure icon */}
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                      <path
                        stroke="#8A8F9B"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M15.75 8.25V5.25a.75.75 0 00-.75-.75h-6c-.414 0-.75.336-.75.75v3m6 0h-6m6 0h.75v3h.75m-6-3v3H8.25m3.75 3v6m-4.5-6h9a.75.75 0 01.75.75v6a.75.75 0 01-.75.75h-9a.75.75 0 01-.75-.75v-6a.75.75 0 01.75-.75z"
                      />
                    </svg>
                  </span>
                  <span className={styles.icon}>
                    {/* Placeholder for send/plane icon */}
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                      <path
                        stroke="#8A8F9B"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M12 4.75L18.75 12 12 19.25V4.75zM12 4.75L5.25 12 12 19.25V4.75z"
                      />
                    </svg>
                  </span>
                </div>

                {/* People Going */}
                <div className={styles.peopleGoing}>
                  <img
                    src={personImage}
                    alt="Person icon"
                    className={styles.peopleIcon}
                  />
                  <span className={styles.peopleText}>24 people going</span>
                  <span className={styles.heartIcon}>
                    {/* Heart icon on the far right */}
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.0003 21.35L10.5503 20.03C5.40029 15.36 2.00029 12.28 2.00029 8.5C2.00029 5.42 4.42029 3 7.50029 3C9.24029 3 10.9103 3.81 12.0003 5.09C13.0903 3.81 14.7603 3 16.5003 3C19.5803 3 22.0003 5.42 22.0003 8.5C22.0003 12.28 18.6003 15.36 13.4503 20.03L12.0003 21.35Z"
                        stroke="#8A8F9B"
                        strokeWidth="1.5"
                        fill="none"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            {/* 🌟 Ongoing Trip Card (Absolute Positioned) 🌟 */}
            <div className={styles.ongoingTripCard}>
              <img
                src={personImage}
                alt="Ongoing Trip Profile"
                className={styles.ongoingProfile}
              />
              <div className={styles.ongoingContent}>
                <span className={styles.ongoingText}>Ongoing</span>
                <h4 className={styles.ongoingTitle}>Trip to Rome</h4>
                <div className={styles.progressBar}>
                  <div
                    className={styles.progressFill}
                    style={{ width: "40%" }}
                  ></div>
                </div>
                <span className={styles.progressDetail}>40% completed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
