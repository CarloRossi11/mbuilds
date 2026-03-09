import Link from "next/link";
import styles from "./header.module.css";
import ScrollLogo from "./ScrollLogo";
import { motion } from "motion/react";

export default function Header() {
  
  const MotionLink = motion.create(Link);

  return (
    <div className={styles.main}>
      <div className={styles.links}>
        <div className={styles.linkGroup}>
          <MotionLink className={styles.button}
            href="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          ><h3>Home</h3></MotionLink>
          {/* <Link className={styles.button} href={"/"}>
            <h3>Home</h3>
          </Link> */}
          <MotionLink className={styles.button}
            href="/about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          ><h3>About</h3></MotionLink>
        </div>
        <div className={styles.logoContainer}>
          <MotionLink
            href="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <ScrollLogo
              primarySrc="/logo-light.png"
              secondarySrc="/logo-dark.png"
              width={160}
              height={40}
              triggerId="hero"
            />
          </MotionLink>
        </div>
        <div className={styles.linkGroup}>
          <MotionLink className={styles.button}
            href="/services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          ><h3>Services</h3></MotionLink>
          <MotionLink className={styles.button}
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          ><h3>Contact</h3></MotionLink>
        </div>
      </div>
    </div>
  );
}
