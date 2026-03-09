import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";
import { getMapsLink } from "../utils/maps";
import { motion } from "motion/react";
const address = "65 Glen Rd. PMB 252, Garner, NC 27529";

export default function Footer() {
  const mapsLink = getMapsLink(address);
  const MotionLink = motion.create(Link);
  return (
    <div className={styles.main}>
      <footer className={styles.footer}>
        <div className={styles.address}>
          <div className={styles.addressContainer}>
            <strong>Tech Wrench Web Solutions</strong>

            <a className={styles.wrench} href="mailto:carlo@techwrench.co">
              carlo@techwrench.co
            </a>
          </div>
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
            <Image
              className={styles.logo}
              src="/logoBlueT.svg"
              alt="Tech Wrench logo"
              width={75}
              height={75}
              priority
            />
          </MotionLink>
        </div>
        <div className={styles.copyright}>
          <div className={styles.socials}>
            <p className={styles.socialLabel}>Follow Us:</p>
            <div className={styles.socialLinks}>
              <a
                href="https://www.instagram.com/techwrenchco/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Tech Wrench on Instagram"
              >
                <Image
                  className={styles.icon}
                  aria-hidden
                  src="/IG.png"
                  alt="Instagram icon"
                  width={16}
                  height={16}
                />
              </a>
              <a
                href="https://www.facebook.com/people/Tech-Wrench/61582078050775/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Tech Wrench on Facebook"
              >
                <Image
                  className={styles.icon}
                  aria-hidden
                  src="/FB.png"
                  alt="Facebook icon"
                  width={16}
                  height={16}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/tech-wrench/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Tech Wrench on Linkedin"
              >
                <Image
                  className={styles.icon}
                  aria-hidden
                  src="/LI.png"
                  alt="Linkedin icon"
                  width={16}
                  height={16}
                />
              </a>
            </div>
          </div>
          <p>©2025 Tech Wrench All rights reserved.</p>
          {/* <p>
            Website developed by{" "}
            <a
              href="https://techwrench.co/"
              target="_blank"
              className={styles.wrench}
            >
              Tech Wrench
            </a>
          </p> */}
        </div>
      </footer>
    </div>
  );
}
