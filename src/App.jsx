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
import PrivacyPolicyPage from "./Pages/FooterPages.jsx/PrivacyPolicyPage";
import TermsAndConditions from "./Pages/FooterPages.jsx/TermsAndConditions";
import ShippingPolicy from "./Pages/FooterPages.jsx/ShippingPolicy";
import CancelRefundPolicy from "./Pages/FooterPages.jsx/CancelRefundPolicy";
import OffersPage from "./Pages/FooterPages.jsx/OffersPage";
import PressAndMedia from "./Pages/FooterPages.jsx/PressAndMedia";
import ChangePage from "./Pages/FooterPages.jsx/ChangePage";
import SmoothScrolling from "./Libs/Utils/SmoothScrolling";

function App() {
  return (
    <>
      <Header />
      <SmoothScrolling>
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
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-conditions" element={<TermsAndConditions />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route
            path="/cancellation-refund-policy"
            element={<CancelRefundPolicy />}
          />
          <Route path="/offers" element={<OffersPage />} />
          <Route path="/press" element={<PressAndMedia />} />
          <Route path="/bethechange" element={<ChangePage />} />
        </Routes>
      </SmoothScrolling>
      <Footer />
    </>
  );
}

export default App;
