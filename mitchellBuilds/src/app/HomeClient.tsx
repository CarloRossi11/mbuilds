"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import { motion } from "motion/react";
import ScrollLinkImage from "./components/ScrollLinkImage";
import Navbar from "./components/Navbar";

// ToDo: //
//////////

export default function HomeClient() {
  const MotionLink = motion.create(Link);

  return (
    <div className={styles.page}>
      <div className={styles.navBar}>
        <Navbar />
      </div>

      <section className={styles.intro}>
        <div className={styles.introRight}>
          <h1>High End Contracting Services</h1>
          {/* <Image
            id="hero"
            className={styles.logo}
            src="/Mitchell_Builds_Branding_Final_Files_LOGO WHITE ON BLACK.png"
            alt="Mitchell Builds Logo"
            width={300}
            height={195}
            priority
          /> */}
          <p className={styles.introText}>
            {" "}
            We specialize in expertly crafted contracting services for discerning clients. With a commitment to excellence and attention to detail, we bring your vision to life with precision and quality. From custom home builds to high-end renovations, our team of skilled professionals delivers unparalleled craftsmanship and personalized service. 
          </p>
          <div className={styles.ctas}>
            <MotionLink
              className={styles.primary}
              href={"./contact"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            >
              Get Started
            </MotionLink>
          </div>
        </div>
      </section>

      <main className={styles.main}>

          <section className={styles.imageLinks}>
          <ScrollLinkImage
            image="/casework.webp"
            alt="Service 1"
            linkText="Casework"
            href="/portfolio"
          />
          <ScrollLinkImage
            image="/fentry.webp"
            alt="Service 2"
            linkText="Front Entry"
            href="/portfolio"
          />
           <ScrollLinkImage
            image="/puts.webp"
            alt="Service 2"
            linkText="Under Stair Storage"
            href="/portfolio"
          />
           <ScrollLinkImage
            image="/vanity.webp"
            alt="Service 2"
            linkText="Vanity"
            href="/portfolio"
          />
           <ScrollLinkImage
            image="/walnut.webp"
            alt="Service 2"
            linkText="Walnut Passage"
            href="/portfolio"
          />
          </section>
        

        <section className={styles.services}>
          <h1>Our Products</h1>
          <div className={styles.servicesContent}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className={styles.establishText}>
                <h2>Starter Package</h2>
                <h3>
                  <i>Starting at $1,000 + $100/month</i>
                </h3>
                <p>
                  {" "}
                  Our flagship product described above, includes the responsive
                  design, SEO, plus hosting, maintenance, and updates.{" "}
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className={styles.growText}>
                <h2>Brand Refresh</h2>
                <h3>
                  <i>Contact for pricing</i>
                </h3>
                <p>
                  Work with our design expert to create a new brand book,
                  including primary and secondary logos, fonts, and a color
                  palette. We'll incorporate your custom elements and take your
                  website, social media, and other content to the next level.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className={styles.expandText}>
                <h2>Marketing Boost</h2>
                <h3>
                  <i>Contact for pricing</i>
                </h3>
                <p>
                  Reach even more of your target market with email and text
                  services, google ads, and social media assistance.
                </p>
              </div>
            </motion.div>
          </div>

          <div className={styles.buttonContainer}>
            <div className={styles.ctas}>
              <MotionLink
                className={styles.primary}
                href={"./services"}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                Services
              </MotionLink>
            </div>
          </div>
        </section>

        <section className={styles.contact}>
          <h2>Get Started Today</h2>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <ContactForm />
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
