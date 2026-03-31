"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./scrollLinkImage.module.css";

type Props = {
  image: string;
  alt?: string;
  linkText: string;
  href: string;
};

export default function ScrollLinkImage({
  image,
  alt = "",
  linkText,
  href,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [imageHeight, setImageHeight] = useState(0);

  useEffect(() => {
    const el = imageRef.current;
    if (!el) return;

    const observer = new ResizeObserver(([entry]) => {
      setImageHeight(entry.contentRect.height);
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

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
          ref={imageRef}
          src={image}
          alt={alt}
          width={0}
          height={0}
          sizes="100vw"
          className={styles.imageStyle}
        />
      </div>
    </section>
  );
}