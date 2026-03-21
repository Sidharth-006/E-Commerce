// src/pages/CategoryShop.jsx

import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { menProducts, womenProducts, kidsProducts } from "../api/products1";
import { useParams } from "react-router-dom";
import styles from "./CategroyShop.module.css"; // ✅ FIX

const CategoryShop = () => {
  const { category } = useParams();
  const dispatch = useDispatch();

  let products = [];

  if (category === "men") products = menProducts;
  else if (category === "women") products = womenProducts;
  else if (category === "kids") products = kidsProducts;
  else products = [...menProducts, ...womenProducts, ...kidsProducts];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {category ? category.toUpperCase() : "ALL"} PRODUCTS
      </h1>

      <div className={styles.productsGrid}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>

            <button
              onClick={() =>
                dispatch(addToCart({ ...product, quantity: 1 }))
              }
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryShop;