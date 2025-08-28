import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-green-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
        <Link to="/" className="text-xl font-bold">
          RecipeFinder
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6">
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
