import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../features/WishlistSlice";
import { addToCart } from "../features/cartSlice";
import styles from "./Wishlist.module.css";

const Wishlist = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.wishlist.items);

  if (items.length === 0) {
    return <h2 className={styles.empty}>No items in Wishlist ❤️</h2>;
  }

  return (
    <div className={styles.container}>
      <h2>Wishlist</h2>

      <div className={styles.grid}>
        {items.map((item) => (
          <div key={item.id} className={styles.card}>
            <img src={item.image} alt={item.name} />

            <h3>{item.name}</h3>
            <p>${item.price}</p>

            <div className={styles.buttons}>
              <button onClick={() => dispatch(addToCart(item))}>
                Add to Cart
              </button>
              <button onClick={() => dispatch(removeFromWishlist(item.id))}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;