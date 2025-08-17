import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-green-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">RecipeFinder</h1>
      <ul className="flex gap-6">
        <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
        <li><Link to="/search" className="hover:text-yellow-300">Search</Link></li>
        <li><Link to="/random" className="hover:text-yellow-300">Random</Link></li>
        <li><Link to="/favorites" className="hover:text-yellow-300">Favorites</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;