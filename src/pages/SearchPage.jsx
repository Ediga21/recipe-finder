import { useState } from "react";
import { Link } from "react-router-dom";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const data = await res.json();
      setResults(data.meals || []);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="p-6 max-w-4xl mx-auto">
      {/* Search Form */}
      <form onSubmit={handleSearch} className="flex gap-2 mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a recipe..."
          className="flex-grow border rounded-lg px-4 py-2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {/* Loading state */}
      {loading && <p className="text-center">Loading...</p>}

      {/* Results */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {results.map((meal) => (
          <div
            key={meal.idMeal}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-48 object-cover"
            />
            <div className="p-3">
              <h2 className="font-semibold text-lg">{meal.strMeal}</h2>
              <Link
                to={`/recipe/${meal.idMeal}`}
                className="text-blue-600 underline mt-2 inline-block"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* No results */}
      {!loading && results.length === 0 && (
        <p className="text-center mt-10 text-gray-500">
          No recipes found. Try another search.
        </p>
      )}
    </section>
  );
}
