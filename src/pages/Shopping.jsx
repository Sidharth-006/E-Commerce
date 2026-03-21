// src/pages/Shopping.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Shopping.module.css";

const sliderImages = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuY3MpJydK0DTmtZvQ0xywPDtj8fHzytmHqA&s",
  "https://images.unsplash.com/photo-1503602642458-232111445657?w=1200",
  "https://image.slidesdocs.com/responsive-images/background/yellow-round-shopping-cart-e-commerce-banner-geometric-simple-powerpoint-background_020bbc567a__960_540.jpg",
];

const sections = [
  { title: "Men's Wear", key: "men", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfGyuDP4QTrpKarNJh5CoSSCbPPjAItNExvw&s" },
  { title: "Women's Wear", key: "women", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXiR5Y8X35nt9bwTJnFyM5iO0gnZPwHWZ-pw&s" },
  { title: "Kids' Wear", key: "kids", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTodsiX0Z-GL7SmSAiRANNBD1QA0XuqM77MKw&s" },
  { title: "All Products", key: "all", image: "https://www.mbaazar.in/wp-content/uploads/2023/02/8-Feb-blog-2.jpg" },
];

const Shopping = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex(prev => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      {/* Background slider */}
      <div className={styles.slider}>
        <img src={sliderImages[slideIndex]} alt="Slider" className={styles.slideImage} />
        <div className={styles.overlay}>
          <h1>🛒 Explore Our Exclusive Collections</h1>
          <p>Best deals for Men, Women, and Kids</p>
        </div>
      </div>

      {/* Sections */}
      <div className={styles.sections}>
        {sections.map(section => (
          <div key={section.key} className={styles.sectionCard}>
            <img src={section.image} alt={section.title} />
            <h2>{section.title}</h2>
            <button onClick={() => navigate(`/category/${section.key}`)}>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shopping;