import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-lg text-sm ${
      isActive ? "font-semibold underline" : "text-gray-600 hover:text-black"
    }`;

  return (
    <header className="border-b bg-white/70 backdrop-blur">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-xl font-bold">Recipe Finder</Link>
        <nav className="hidden sm:flex items-center gap-2">
          <NavLink to="/" className={linkClass} end>Home</NavLink>
          <NavLink to="/recipe/1" className={linkClass}>Sample Recipe</NavLink>
        </nav>
      </div>
    </header>
  );
}