import { useSelector } from "react-redux";
import styles from "./Checkout.module.css";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return <h2 className={styles.empty}>Cart is empty 🛒</h2>;
  }

  return (
    <div className={styles.container}>
      <h2>Checkout</h2>

      <div className={styles.grid}>
        {/* LEFT */}
        <div className={styles.items}>
          {cartItems.map((item) => (
            <div key={item.id} className={styles.row}>
              <span>{item.name}</span>
              <span>x{item.quantity}</span>
              <span>${item.price * item.quantity}</span>
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div className={styles.summary}>
          <h3>Total</h3>
          <h2>${total.toFixed(2)}</h2>

          <button className={styles.payBtn}>
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;