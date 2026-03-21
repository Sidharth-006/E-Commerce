import { useEffect, useRef } from "react";
import Card from "../components/Card/Card";
import styles from "./Catalog.module.css";

const Section = ({ title, data }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;

    const interval = setInterval(() => {
      if (!container) return;

      container.scrollLeft += 1;

      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth
      ) {
        container.scrollLeft = 0;
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.section}>
      <h2>{title}</h2>

      <div className={styles.horizontal} ref={scrollRef}>
        {data.concat(data).map((p, i) => (
          <div className={styles.item} key={i}>
            <Card product={p} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;