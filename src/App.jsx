import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import Header from "./Layout/Header/Header";
import ReviewsPage from "./Pages/HeaderPages/ReviewsPage";
import AboutUsPage from "./Pages/HeaderPages/AboutUsPage";
import FaqsPage from "./Pages/HeaderPages/FaqsPage";
import ProductsPage from "./Pages/HeaderPages/ProductsPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop-all-products" element={<ProductsPage />} />
        <Route path="/top-reviews" element={<ReviewsPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/faqs" element={<FaqsPage />} />
      </Routes>
    </>
  );
}

export default App;
