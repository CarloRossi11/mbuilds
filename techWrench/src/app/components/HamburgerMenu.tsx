"use client";

import { useState } from "react";
import styles from "./hamburgerMenu.module.css";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "motion/react";

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Container animation
  const menuVariants: Variants = {
    hidden: {
      y: -40,
      opacity: 0,
      transition: {
        duration: 0.25,
        ease: [0.4, 0, 0.2, 1],
      },
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

  // Individual link animation
  const itemVariants: Variants = {
    hidden: { y: -15, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <nav className={styles.navbar}>
      {/* Logo */}

      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        <div className={styles.logo}>
          <Link href={"/"}>
            <Image
              className={styles.logo}
              src="/logoBlueT.svg"
              alt="Tech Wrench logo"
              width={75}
              height={75}
              priority
            />
          </Link>
        </div>
      </motion.a>
      {/* Hamburger */}
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        <button
          className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </motion.a>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className={styles.menu}
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
};

export default HamburgerMenu;
