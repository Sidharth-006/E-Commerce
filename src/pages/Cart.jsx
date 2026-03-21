import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../features/cartSlice";
import { Link } from "react-router-dom";
import styles from "./Cart.module.css";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const total = cartItems.reduce(
    (sum, item) => sum + (Number(item.price) || 0) * (Number(item.quantity) || 0),
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className={styles.empty}>
        <h2>Your Cart is Empty 🛒</h2>
        <Link to="/" className={styles.shopBtn}>Go Shopping</Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h2>Shopping Cart</h2>

      <div className={styles.grid}>
        {/* LEFT SIDE */}
        <div className={styles.items}>
          {cartItems.map(item => (
            <div key={item.id} className={styles.card}>
              <img src={item.image} alt={item.name || "Product Image"} />

              <div className={styles.info}>
                <h3>{item.name || "Unnamed Item"}</h3>
                <p>${isNaN(item.price) ? "0.00" : Number(item.price).toFixed(2)}</p>

                <div className={styles.actions}>
                  <input
                    type="number"
                    min="1"
                    value={Number(item.quantity) || 1}
                    onChange={e =>
                      dispatch(updateQuantity({
                        id: item.id,
                        quantity: Number(e.target.value) || 1,
                      }))
                    }
                  />
                  <button onClick={() => dispatch(removeFromCart(item.id))}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.summary}>
          <h3>Order Summary</h3>
          <p>Total Items: {cartItems.length}</p>
          <h2>${isNaN(total) ? "0.00" : total.toFixed(2)}</h2>

          <Link to="/checkout" className={styles.checkoutBtn}>
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;