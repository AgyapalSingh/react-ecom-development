import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import Header from "./Layout/Header/Header";
import ReviewsPage from "./Pages/ReviewsPage";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/top-reviews" element={<ReviewsPage />} />
      </Routes>
    </>
  );
}

export default App;
