"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./scrollLinkImage.module.css";

type Props = {
  image: string;
  alt?: string;
  linkText: string;
  href: string;
  imageHeight?: number; // optional to control link travel
};

export default function ScrollLinkImage({
  image,
  alt = "",
  linkText,
  href,
  imageHeight = 250,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, imageHeight]);

  return (
    <section className={styles.sectionContainer}>
      <div ref={ref} className={styles.itemContainer}>
        <motion.div className={styles.linkContainer} style={{ y }}>
          <Link href={href}>{linkText}</Link>
        </motion.div>

        <Image
          src={image}
          alt={alt}
          width={350}
          height={imageHeight}
          className={styles.imageStyle}
        />
      </div>
    </section>
  );
}
