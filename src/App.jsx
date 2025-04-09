import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import Header from "./Layout/Header/Header";
import ReviewsPage from "./Pages/ReviewsPage";
import AboutUsPage from "./Pages/AboutUsPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/top-reviews" element={<ReviewsPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
      </Routes>
    </>
  );
}

export default App;
