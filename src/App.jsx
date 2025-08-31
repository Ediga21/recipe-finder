import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";   // ✅ now under pages
import RecipeDetails from "./pages/RecipeDetails";
import SearchPage from "./pages/SearchPage";
import RandomPage from "./pages/RandomPage";
import FavoritesPage from "./pages/FavoritesPage"; // ✅ import it

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/random" element={<RandomPage />} />
          <Route path="/favorites" element={<FavoritesPage />} /> {/* ✅ now real page */}
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
