// src/pages/CategoryShop.jsx

import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { menProducts, womenProducts, kidsProducts } from "../api/products1";
import { useParams, useLocation } from "react-router-dom";
import styles from "./CategroyShop.module.css";

const CategoryShop = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();

  // ✅ Get search query from URL
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("search")?.toLowerCase() || "";

  let products = [];

  // ✅ Category filtering
  if (category === "men") products = menProducts;
  else if (category === "women") products = womenProducts;
  else if (category === "kids") products = kidsProducts;
  else products = [...menProducts, ...womenProducts, ...kidsProducts];

  // ✅ Search filtering
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {category ? category.toUpperCase() : "ALL"} PRODUCTS
      </h1>

      <div className={styles.productsGrid}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
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
          ))
        ) : (
          <h2>No products found</h2>
        )}
      </div>
    </div>
  );
};

export default CategoryShop;