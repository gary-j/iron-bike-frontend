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
import Success from "./pages/Success";
import Page404 from "./pages/Page404";

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
        <Route path="/success" element={<Success />} />
        <Route path="/*" element={<Page404 />} />
        <Route path="/success/*" element={<Page404 />} />
        <Route path="/contact/*" element={<Page404 />} />
        <Route path="/company/*" element={<Page404 />} />
        <Route path="/signup/*" element={<Page404 />} />
        <Route path="/login/*" element={<Page404 />} />
        <Route path="/company/*" element={<Page404 />} />
        <Route path="/shoppingcart/*" element={<Page404 />} />
        <Route path="/products/*" element={<Page404 />} />
        <Route path="/product/*" element={<Page404 />} />
        <Route path="/company/*" element={<Page404 />} />
        <Route path="/brands/*" element={<Page404 />} />
        <Route path="/brand/*" element={<Page404 />} />
      </Routes>
    </div>
  );
};

export default App;
