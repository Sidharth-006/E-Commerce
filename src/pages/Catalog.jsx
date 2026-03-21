import Slider from "../components/Slider/Slider";
import Section from "./Section";
import styles from "./Catalog.module.css";

import {
  trendingProducts,
  bestSellers,
  newArrivals,
} from "../api/products";

import { useSelector } from "react-redux";

const Catalog = () => {
  const query = useSelector((state) => state.search.query.toLowerCase());

  const filterData = (data) =>
    data.filter((item) =>
      item.name.toLowerCase().includes(query)
    );

  return (
    <div className={styles.container}>
      
      <Slider />

      <Section title="🔥 Trending Products" data={filterData(trendingProducts)} />
      <Section title="⚡ Best Sellers" data={filterData(bestSellers)} />
      <Section title="🆕 New Arrivals" data={filterData(newArrivals)} />

    </div>
  );
};

export default Catalog;