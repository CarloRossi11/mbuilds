"use client";

import styles from "./about.module.css";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import Reveal from "../components/Reveal";
import Navbar from "../components/Navbar";

export default function Page() {
  const MotionLink = motion.create(Link);

  return (
    <div className={styles.wrapper}>
      <div className={styles.navBar}>
        <Navbar />
      </div>
      <div className={styles.heroArea}>
        <Reveal direction="right">
          <h1>ABOUT</h1>
          <p>Learn more about what Mitchell Builds and who's behind it.</p>
        </Reveal>
      </div>
      <div className={styles.main}>
        <div className={styles.company}>
          <div className={styles.companyImage}>
            <Image
              src="/Mitchell_Builds_Branding_Final_Files_LOGO BLACK ON WHITE.png"
              alt="Mitchell Builds Logo"
              width={511}
              height={331}
              priority
            />
          </div>
          <div className={styles.founderText}>
            <h1>The Company</h1>
            <p>
              Mitchell Builds is a high-end contracting company dedicated to
              delivering exceptional craftsmanship and personalized service.
              With a focus on quality and attention to detail, we specialize in
              custom home builds, renovations, and remodeling projects. Our team
              of skilled professionals works closely with clients to bring their
              visions to life, ensuring that every project is completed with
              precision and care. At Mitchell Builds, we are committed to
              exceeding our clients' expectations and creating spaces that are
              both beautiful and functional.
            </p>
          </div>
        </div>
        <div className={styles.founder}>
          <div className={styles.founderText}>
            <h1>The Founder</h1>
            <p>
              Matthew Mitchell established Mitchell Builds in 2018 with the
              vision of creating a contracting company that prioritizes quality,
              craftsmanship, and customer satisfaction. With a background in
              carpentry and a passion for construction, Matt has built a
              reputation for delivering exceptional results on every project.
              His commitment to excellence and attention to detail have made
              Mitchell Builds a trusted name in the industry, known for
              transforming clients' visions into reality with precision and
              care.
            </p>
          </div>
          <div className={styles.founderImage}>
            <Image
              src="/founder.jpg"
              alt="Photo of Matt Mitchell, founder of Mitchell Builds"
              width={300}
              height={300}
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
