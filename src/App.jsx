import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Catalog from "./pages/Catalog";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import Shopping from "./pages/Shopping";
import CategoryShop from "./pages/CategoryShop";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/category/:category" element={<CategoryShop />} />
        
      </Routes>
    </Router>
  );
}

export default App;