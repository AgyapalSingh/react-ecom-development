import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import Header from "./Layout/Header/Header";
import ReviewsPage from "./Pages/HeaderPages/ReviewsPage";
import AboutUsPage from "./Pages/HeaderPages/AboutUsPage";
import FaqsPage from "./Pages/HeaderPages/FaqsPage";
import ProductsPage from "./Pages/HeaderPages/ProductsPage";
import Footer from "./Layout/Footer/Footer";
import ContactUsPage from "./Pages/FooterPages.jsx/ContactUsPage";
import AllBlogsPage from "./Pages/FooterPages.jsx/AllBlogsPage";
import DisclaimerPage from "./Pages/FooterPages.jsx/DisclaimerPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Header NavBar */}
        <Route path="/shop-all-products" element={<ProductsPage />} />
        <Route path="/top-reviews" element={<ReviewsPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/faqs" element={<FaqsPage />} />

        {/* Footer NavBar */}
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/blogs" element={<AllBlogsPage />} />
        <Route path="/disclaimer" element={<DisclaimerPage/>} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
