import { useState } from "react";
import { Link } from "react-router-dom";

export default function RandomPage() {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchRandomRecipe = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
      const data = await res.json();
      setRecipe(data.meals[0]);
    } catch (error) {
      console.error("Error fetching random recipe:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="p-6 max-w-3xl mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4">🎲 Get a Random Recipe</h1>

      <button
        onClick={fetchRandomRecipe}
        className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
      >
        Get Random Recipe
      </button>

      {loading && <p className="mt-4">Loading...</p>}

      {recipe && (
        <div className="mt-6 border rounded-lg shadow p-4">
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="w-full h-64 object-cover rounded-lg"
          />
          <h2 className="text-xl font-semibold mt-3">{recipe.strMeal}</h2>
          <p className="text-gray-600">{recipe.strArea} • {recipe.strCategory}</p>

          <Link
            to={`/recipe/${recipe.idMeal}`}
            className="text-blue-600 underline mt-3 inline-block"
          >
            View Full Details
          </Link>
        </div>
      )}
    </section>
  );
}
