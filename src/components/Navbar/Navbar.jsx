import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSearch } from "../../features/SearchSlice";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const dispatch = useDispatch();

  const cartCount = useSelector((s) =>
    s.cart.items.reduce((a, b) => a + b.quantity, 0)
  );
  const wishlistCount = useSelector((s) => s.wishlist.items.length);

  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>ShopX</div>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search for products..."
        className={styles.search}
        onChange={handleSearch}   // ✅ added
      />

      {/* LINKS */}
      <div className={styles.actions}>
        <Link to="/">Home</Link>
        <Link to="/wishlist">
          ❤️ <span>{wishlistCount}</span>
        </Link>
        <Link to="/cart">
          🛒 <span>{cartCount}</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;