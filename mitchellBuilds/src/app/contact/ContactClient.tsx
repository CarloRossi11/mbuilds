"use client";

import styles from "./contact.module.css";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import Reveal from "../components/Reveal";
import Navbar from "../components/Navbar";

export default function Page() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.navBar}>
        <Navbar />
      </div>
      <div className={styles.heroArea}>
        <Reveal direction="right">
          <h1>CONTACT</h1>
          <p>
              Complete the form below to discuss the next steps of your
              project.{" "}
            </p>
        </Reveal>
      </div>
      <div className={styles.main}>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}
