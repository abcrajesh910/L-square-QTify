import React from "react";
import styles from "./Hero.module.css";
import HeroImage from "../../assets/hero-headphones.png";

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroTitle}>
        <h1>100 Million Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <img src={HeroImage} width={212} alt="headphones" />
    </div>
  );
}

export default Hero;