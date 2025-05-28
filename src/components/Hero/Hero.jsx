import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Sai Charan</h1>
        <p className={styles.description}>
          Hi, I'm Sai Charan, a passionate tech enthusiast with a keen interest in exploring and understanding emerging technologies. Currently, I’m focused on MERN stack development (MongoDB, Express.js, React.js, Node.js), where I enjoy building full-stack web applications that are both functional and user-friendly.
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
