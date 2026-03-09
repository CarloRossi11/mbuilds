"use client";

import styles from "./about.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HamburgerMenu from "../components/HamburgerMenu";
import useIsMobile from "../hooks/useIsMobile";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import Reveal from "../components/Reveal";

export default function Page() {
  const MotionLink = motion.create(Link);
  const isMobile = useIsMobile(850);
  return (
    <div className={styles.wrapper}>
      {isMobile ? <HamburgerMenu /> : <Header />}
      <div className={styles.heroArea}>
        <Reveal direction="right">
          <h1>ABOUT</h1>
          <p>Learn more about what Tech Wrench is and who is behind it.</p>
        </Reveal>
      </div>
      <div className={styles.main}>
        <div className={styles.company}>
          <div className={styles.companyImage}>
            <Image
              src="/twsVerticalWhite.svg"
              alt="Tech Wrench Web Solutions Logo"
              width={300}
              height={400}
              priority
            />
          </div>
          <div className={styles.founderText}>
            <h1>The Company</h1>
            <p>
              Tech Wrench Web Solutions is dedicated to providing small
              businesses with high quality, custom web development services. We
              understand the unique challenges that small businesses face when
              trying to establish an online presence, and we are committed to
              helping our clients overcome those challenges through effective
              website design, SEO, and branding strategies.
            </p>
          </div>
        </div>
        <div className={styles.founder}>
          <div className={styles.founderText}>
            <h1>The Founder</h1>
            <p>
              Carlo Berardelli established Tech Wrench Web Solutions in 2025. He
              graduated with a Business Degree in 2014 from California
              University of Pennsylvania, and later received his Software
              Engineering Immersive Certificate from General Assembly in 2020.
              Carlo has over 5 years of professional experience in web
              development, and an additional 5 years of account managment and
              customer support experience. With his diverse background and
              skillset, Carlo is uniquely qualified to help small businesses
              establish a strong online presence through custom websites,
              effective SEO strategies, and compelling branding.
            </p>
          </div>
          <div className={styles.founderImage}>
            <Image
              src="/founder.jpeg"
              alt="Photo of Carlo Berardelli, founder of Tech Wrench Web Solutions"
              width={300}
              height={400}
              priority
            />
          </div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <div className={styles.ctas}>
          <MotionLink
            className={styles.primary}
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            Contact
          </MotionLink>
        </div>
      </div>
      <Footer />
    </div>
  );
}
