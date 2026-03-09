"use client";

import styles from "./contact.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HamburgerMenu from "../components/HamburgerMenu";
import useIsMobile from "../hooks/useIsMobile";
import ContactForm from "../components/ContactForm";
import Reveal from "../components/Reveal";

export default function Page() {
  const isMobile = useIsMobile(850);
  return (
    <div className={styles.wrapper}>
      {isMobile ? <HamburgerMenu /> : <Header />}
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
