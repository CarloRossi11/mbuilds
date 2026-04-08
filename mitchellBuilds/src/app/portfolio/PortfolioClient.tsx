"use client";

import styles from "./portfolio.module.css";
import Footer from "../components/Footer";
import ImageViewer from "../components/ImageViewer";
import Navbar from "../components/Navbar";
import Reveal from "../components/Reveal";

export default function Page() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.navBar}>
        <Navbar />
      </div>
      <div className={styles.heroArea}>
        <Reveal direction="right">
          <h1>Portfolio</h1>
          <p>Learn more about what Tech Wrench is and who is behind it.</p>
        </Reveal>
      </div>
      <div className={styles.main}>
        <ImageViewer
          images={[
            { src: "/casework.webp", alt: "Casework" },
            { src: "/fentry.webp", alt: "Front Entry" },
            { src: "/puts.webp", alt: "Under Stair Storage" },
            { src: "/vanity.webp", alt: "Vanity" },
            { src: "/walnut.webp", alt: "Walnut Passage" },
          ]}
        />
        <div className={styles.buttonContainer}>
          <div className={styles.ctas}>
            <a className={styles.primary} href={"./contact"}>
              Contact
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
