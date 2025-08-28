import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import RecipeDetails from "./pages/RecipeDetails"; // keep this if you already created it

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/search"
            element={<h1 className="text-center mt-10 text-2xl">Search Page</h1>}
          />
          <Route
            path="/random"
            element={<h1 className="text-center mt-10 text-2xl">Random Recipe</h1>}
          />
          <Route
            path="/favorites"
            element={<h1 className="text-center mt-10 text-2xl">Favorites</h1>}
          />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
