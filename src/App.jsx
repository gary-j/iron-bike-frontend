import "./App.css";
import LandingPage from "./pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ShoppingCart from "./pages/ShoppingCart";
import ProductList from "./pages/ProductsList";
import Product from "./pages/Product";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
};

export default App;
