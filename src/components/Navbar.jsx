import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-green-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
        <Link
          to="/"
          className="text-2xl font-extrabold flex items-center space-x-2 hover:scale-105 transition-transform"
        >
          <span role="img" aria-label="plate and spoon" className="text-3xl">
            🍽️
          </span>
          <span>Ediga&apos;s RecipeFinder</span>
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6 text-lg">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/search" className="hover:underline">
            Search
          </Link>
          <Link to="/random" className="hover:underline">
            Random
          </Link>
          <Link to="/favorites" className="hover:underline">
            Favorites
          </Link>
        </div>
      </div>
    </nav>
  );
}
