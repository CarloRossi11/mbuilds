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
            Please complete the form below and we will get back to you within
            1-2 business days to discuss the next steps for your project.{" "}
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
