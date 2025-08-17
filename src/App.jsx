import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Hero />} />
          {/* placeholders for now */}
          <Route path="/search" element={<h1 className="text-center mt-10 text-2xl">Search Page</h1>} />
          <Route path="/random" element={<h1 className="text-center mt-10 text-2xl">Random Recipe</h1>} />
          <Route path="/favorites" element={<h1 className="text-center mt-10 text-2xl">Favorites</h1>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;