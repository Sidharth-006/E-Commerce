import styles from "./Card.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";
import { addToWishlist } from "../../features/WishlistSlice";

const Card = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.card}>
      <img src={product.image} className={styles.image} />

      <div className={styles.content}>
        <h4 className={styles.title}>{product.name}</h4>
        <p className={styles.price}>₹{product.price}</p>

        <div className={styles.buttons}>
          <button
            className={styles.btnPrimary}
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </button>

          <button
            className={styles.btnSecondary}
            onClick={() => dispatch(addToWishlist(product))}
          >
            ❤️
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;