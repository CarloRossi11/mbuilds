"use client"

import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"

type Props = {
  image: string
  alt?: string
  linkText: string
  href: string
}

export default function ScrollLinkImage({
  image,
  alt = "",
  linkText,
  href,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // y moves from 0 → image height
  const y = useTransform(scrollYProgress, [0, 1], [0, 250]) // 250 = image height
  

  return (
    <section style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div ref={ref} style={{ position: "relative", display: "flex", alignItems: "flex-start" }}>
        <motion.div style={{ position: "absolute", left: -120, y }}>
          <Link href={href}>{linkText}</Link>
        </motion.div>

        <Image
          src={image}
          alt={alt}
          width={350}
          height={250}
          style={{ borderRadius: 12, objectFit: "cover" }}
        />
      </div>
    </section>
  )
}