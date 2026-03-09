"use client";

import styles from "./portfolio.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HamburgerMenu from "../components/HamburgerMenu";
import useIsMobile from "../hooks/useIsMobile";
import ImageViewer from "../components/ImageViewer";
import HeroOverlay from "../components/HeroOverlay";

export default function Page() {
  const isMobile = useIsMobile(850);
  return (
    <div className={styles.wrapper}>
      {isMobile ? <HamburgerMenu /> : <Header />}
      <HeroOverlay
        backgroundSrc="/artsyLogo.png"
        height="500px"
        overlayDarkness={0.5}
        gradientOverlay
        fadeIn
      >
        <h1>PORTFOLIO</h1>
      </HeroOverlay>
      <div className={styles.main}>
        <ImageViewer
          images={[
            { src: "/solarSunset.jpeg", alt: "Sunset with clean solar" },
            { src: "/solarShiny.jpeg", alt: "Shiny Solar" },
            { src: "/seeThrough.JPG", alt: "Scenic see through" },
            { src: "/roofSolar.jpeg", alt: "Cloudy skies, clean panels" },
            { src: "/city.png", alt: "city views" },
            { src: "/solarCompare.jpeg", alt: "clean vs dirty solar" },
            { src: "/patio.png", alt: "patio" },
            { src: "/levelsBack.jpeg", alt: "cleaned building" },
          ]}
        />
        <div className={styles.buttonContainer}>
          <div className={styles.ctas}>
            <a className={styles.primary} href={"./contact"}>
              Contact
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
