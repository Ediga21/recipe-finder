import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-yellow-100 text-center py-20 px-6">
      <h2 className="text-4xl font-bold mb-4">Discover Delicious Recipes</h2>
      <p className="text-lg text-gray-700 mb-6">
        Search for your favorite meals, explore random recipes, and save your favorites.
        Powered by TheMealDB API.
      </p>
      <Link
        to="/search"
        className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700"
      >
        Start Searching
      </Link>
    </section>
  );
};

export default Hero;
