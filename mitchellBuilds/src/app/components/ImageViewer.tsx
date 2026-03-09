"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./imageViewer.module.css";

interface ImageViewerProps {
  images: { src: string; alt?: string }[];
  initialIndex?: number;
}

const ImageViewer: React.FC<ImageViewerProps> = ({
  images,
  initialIndex = 0,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Swipe refs
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const SWIPE_THRESHOLD = 50;

  const nextImage = () => {
    setCurrentIndex((i) => (i + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  };

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  // Keyboard navigation
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeLightbox();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isLightboxOpen]);

  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = isLightboxOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLightboxOpen]);

  // Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    touchStartX.current = touch.clientX;
    touchStartY.current = touch.clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;

    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - touchStartX.current;
    const deltaY = touch.clientY - touchStartY.current;

    // Ignore vertical swipes
    if (Math.abs(deltaY) > Math.abs(deltaX)) {
      touchStartX.current = null;
      touchStartY.current = null;
      return;
    }

    if (Math.abs(deltaX) > SWIPE_THRESHOLD) {
      if (deltaX < 0) nextImage();
      else prevImage();
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <div className={styles.viewerContainer}>
      {/* Main image */}
      <div className={styles.mainImageWrapper}>
        <button
          className={styles.navButton}
          onClick={prevImage}
          aria-label="Previous Image"
        >
          ‹
        </button>

        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt ?? `Image ${currentIndex + 1}`}
          className={styles.mainImage}
          onClick={() => openLightbox(currentIndex)}
        />

        <button
          className={styles.navButton}
          onClick={nextImage}
          aria-label="Next Image"
        >
          ›
        </button>
      </div>

      {/* Thumbnails */}
      <div className={styles.thumbnailStrip}>
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={img.alt ?? `Thumbnail ${idx + 1}`}
            className={
              idx === currentIndex
                ? `${styles.thumbnail} ${styles.activeThumbnail}`
                : styles.thumbnail
            }
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div
  className={styles.lightboxOverlay}
  onClick={closeLightbox}
>
  <button
    className={`${styles.lightboxNav} ${styles.leftNav}`}
    onClick={(e) => {
      e.stopPropagation();
      prevImage();
    }}
  >
    ‹
  </button>

  <div
    className={styles.lightboxContent}
    onClick={(e) => e.stopPropagation()}
  >
    <img
      src={images[currentIndex].src}
      className={styles.lightboxImage}
    />

    <button
      className={styles.lightboxClose}
      onClick={(e) => {
        e.stopPropagation();
        closeLightbox();
      }}
    >
      ×
    </button>
  </div>

  <button
    className={`${styles.lightboxNav} ${styles.rightNav}`}
    onClick={(e) => {
      e.stopPropagation();
      nextImage();
    }}
  >
    ›
  </button>
</div>

      )}
    </div>
  );
};

export default ImageViewer;
