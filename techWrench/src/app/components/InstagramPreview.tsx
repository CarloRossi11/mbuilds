"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    instgrm?: {
      Embeds?: {
        process: () => void;
      };
    };
  }
}

interface InstagramPreviewProps {
  username?: string;
}

export default function InstagramPreview({
  username = "_cali_cleanerz_",
}: InstagramPreviewProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  // 1️⃣ Observe when component enters viewport
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "200px", // preload slightly before visible
      }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  // 2️⃣ Load Instagram script ONLY when needed
  useEffect(() => {
    if (!shouldLoad) return;

    if (!document.getElementById("instagram-embed-script")) {
      const script = document.createElement("script");
      script.id = "instagram-embed-script";
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.onload = () => {
        window.instgrm?.Embeds?.process();
      };
      document.body.appendChild(script);
    } else {
      window.instgrm?.Embeds?.process();
    }
  }, [shouldLoad]);

  return (
    <div
      ref={containerRef}
      style={{ textAlign: "center", margin: "2rem auto", maxWidth: "600px" }}
    >
      {shouldLoad ? (
        <blockquote
          className="instagram-media"
          data-instgrm-permalink={`https://www.instagram.com/${username}/`}
          data-instgrm-version="14"
          style={{
            background: "#fff",
            border: "0",
            borderRadius: "12px",
            padding: 0,
            margin: "0 auto",
            overflow: "hidden",
            width: "100%",
            maxWidth: "540px",
          }}
        />
      ) : (
        <InstagramPlaceholder username={username} />
      )}
    </div>
  );
}

function InstagramPlaceholder({ username }: { username: string }) {
  return (
    <a
      href={`https://www.instagram.com/${username}/`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 400,
        background: "#fafafa",
        borderRadius: 12,
        color: "#555",
        textDecoration: "none",
        fontWeight: 500,
      }}
    >
      View our latest work on Instagram →
    </a>
  );
}