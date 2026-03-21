import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { addToWishlist } from "../features/WishlistSlice";
import styles from "./ProductDetail.module.css";

// ✅ SAFE IMPORT
import * as data from "../api/products";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  // ✅ SAFE MERGE (NO UNDEFINED ERROR)
  const allProducts = [
    ...(data.trendingProducts || []),
    ...(data.bestSellers || []),
    ...(data.newArrivals || []),
  ];

  const product = allProducts.find(
    (p) => p.id === Number(id)
  );

  // ✅ SAFETY UI
  if (!product) {
    return (
      <h2 style={{ padding: "20px" }}>
        Product not found 😢
      </h2>
    );
  }

  return (
    <div className={styles.container}>
      <img
        src={product.image}
        alt={product.name}
        className={styles.image}
      />

      <div className={styles.info}>
        <h2>{product.name}</h2>
        <p className={styles.price}>${product.price}</p>

        <div className={styles.buttons}>
          <button onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </button>

          <button onClick={() => dispatch(addToWishlist(product))}>
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;