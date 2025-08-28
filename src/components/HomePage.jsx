import { useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  // Fetch recipes from TheMealDB API
  const fetchRecipes = async () => {
    if (!query.trim()) return;
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const data = await res.json();
      setResults(data.meals || []); // if no meals found, set empty array
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  // Allow search by pressing Enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      fetchRecipes();
    }
  };

  return (
    <div className="p-6">
      {/* Hero Section */}
      <section className="text-center my-8">
        <h1 className="text-3xl font-bold mb-2">Find Your Perfect Recipe</h1>
        <p className="text-gray-600 mb-4">
          Search thousands of recipes with ease
        </p>
        <div className="flex justify-center space-x-2">
          <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="border rounded-md px-4 py-2 w-80"
          />
          <button
            onClick={fetchRecipes}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Search
          </button>
        </div>
      </section>

      {/* Popular this week */}
      <section className="my-10">
        <h2 className="text-xl font-semibold mb-4">Popular this week</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="border rounded-md p-4 text-center">
            <div className="bg-gray-300 h-32 mb-2"></div>
            <p>Pasta Recipe</p>
          </div>
          <div className="border rounded-md p-4 text-center">
            <div className="bg-gray-300 h-32 mb-2"></div>
            <p>Fried Rice Recipe</p>
          </div>
          <div className="border rounded-md p-4 text-center">
            <div className="bg-gray-300 h-32 mb-2"></div>
            <p>Cake Recipe</p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="my-10">
        <h2 className="text-xl font-semibold mb-4">Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="border rounded-md p-4 text-center">
            🍔 <p>Breakfast</p>
          </div>
          <div className="border rounded-md p-4 text-center">
            🐟 <p>Lunch</p>
          </div>
          <div className="border rounded-md p-4 text-center">
            🍩 <p>Dinner</p>
          </div>
        </div>
      </section>

      {/* Search Results */}
      {results.length > 0 && (
        <section className="my-10">
          <h2 className="text-xl font-semibold mb-4">Search Results</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {results.map((meal) => (
              <Link
                key={meal.idMeal}
                to={`/recipe/${meal.idMeal}`} // 👈 go to details page
                className="border rounded-md p-4 text-center hover:shadow-lg transition"
              >
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="h-32 w-full object-cover rounded-md mb-2"
                />
                <p>{meal.strMeal}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <p className="text-center mt-8 font-medium">Ready to Cook?</p>
    </div>
  );
};

export default HomePage;
