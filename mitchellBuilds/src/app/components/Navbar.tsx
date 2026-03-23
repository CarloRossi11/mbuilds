"use client";

import { useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const MotionLink = motion.create(Link);

  const menuVariants: Variants = {
    hidden: {
      y: -40,
      opacity: 0,
      transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: -15, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <nav className={styles.navbar}>
      {/* Desktop Left Links */}
      <div className={styles.desktopLinks}>
        <MotionLink
          className={styles.button}
          href="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h3>Home</h3>
        </MotionLink>

        <MotionLink
          className={styles.button}
          href="/about"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h3>About</h3>
        </MotionLink>
      </div>

      {/* Logo */}
      <MotionLink
        href="/"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Image
          className={styles.logo}
          src="/whiteOnBlack.jpg"
          alt="Tech Wrench logo"
          width={150}
          height={108}
        />
      </MotionLink>

      {/* Desktop Right Links */}
      <div className={styles.desktopLinks}>
        <MotionLink
          className={styles.button}
          href="/services"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h3>Services</h3>
        </MotionLink>

        <MotionLink
          className={styles.button}
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h3>Contact</h3>
        </MotionLink>
      </div>

      {/* Hamburger Button */}
      <button
        className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className={styles.mobileMenu}
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.li variants={itemVariants}>
              <Link href="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </motion.li>

            <motion.li variants={itemVariants}>
              <Link href="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </motion.li>

            <motion.li variants={itemVariants}>
              <Link href="/services" onClick={() => setIsOpen(false)}>
                Services
              </Link>
            </motion.li>

            <motion.li variants={itemVariants}>
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
