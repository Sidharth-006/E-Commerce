import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Slider.module.css";

const images = [
  "https://image.slidesdocs.com/responsive-images/background/c4d-online-shopping-gradient-simple-e-commerce-promotion-powerpoint-background_5ee28ca190__960_540.jpg",
  "https://image.slidesdocs.com/responsive-images/background/shopping-cart-ribbon-red-envelope-red-minimalist-powerpoint-background_34700edda1__960_540.jpg",
  "https://img.freepik.com/free-photo/shopping-concept-close-up-portrait-young-beautiful-attractive-redhair-girl-smiling-looking-camera_1258-118763.jpg?semt=ais_hybrid&w=740&q=80"
];


const Slider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (i) => setIndex(i);
  const prevSlide = () => setIndex((index - 1 + images.length) % images.length);
  const nextSlide = () => setIndex((index + 1) % images.length);

  return (
    <div className={styles.slider}>
      <div className={styles.slideContainer}>
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Slide ${i + 1}`}
            className={`${styles.image} ${i === index ? styles.active : ""}`}
          />
        ))}
      </div>

      {/* Overlay */}
<div className={styles.overlay}>
  <h1>Exclusive Deals This Week</h1>
  <p>Up to 70% OFF on Top Categories</p>
  <Link to="/Shopping" className={styles.shopNowBtn}>Shop Now</Link>
</div>

      {/* Navigation */}
      <button className={`${styles.navBtn} ${styles.prev}`} onClick={prevSlide}>&#10094;</button>
      <button className={`${styles.navBtn} ${styles.next}`} onClick={nextSlide}>&#10095;</button>

      {/* Dots */}
      <div className={styles.dots}>
        {images.map((_, i) => (
          <span
            key={i}
            className={`${styles.dot} ${i === index ? styles.activeDot : ""}`}
            onClick={() => goToSlide(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;