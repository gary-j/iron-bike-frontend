import "./App.css";
import LandingPage from "./pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ShoppingCart from "./pages/ShoppingCart";
import ProductList from "./pages/ProductsList";
import Product from "./pages/Product";
import BrandPage from "./pages/BrandPage";
import BrandListPage from "./pages/BrandListPage";
import CompanyPage from "./pages/CompanyPage";
import ContactPage  from "./pages/ContactPage";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:slug" element={<Product />} />
        <Route path="/brands" element={<BrandListPage />} />
        <Route path="/brand/:slug" element={<BrandPage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
};

export default App;
