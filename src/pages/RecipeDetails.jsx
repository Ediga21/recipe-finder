import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRecipes } from "../context/RecipeContext"; // ✅ import context

export default function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ get favorites + actions from context
  const { favorites, addToFavorites, removeFromFavorites } = useRecipes();

  useEffect(() => {
    async function fetchRecipe() {
      setLoading(true);
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await res.json();
        setRecipe(data.meals[0]);
      } catch (err) {
        console.error("Error fetching recipe:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchRecipe();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!recipe) return <p className="text-center mt-10">Recipe not found</p>;

  // ✅ check if recipe is already in favorites
  const isFavorite = favorites.some((fav) => fav.idMeal === recipe.idMeal);

  return (
    <section className="space-y-4 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">{recipe.strMeal}</h1>
        <button className="border px-4 py-2 rounded-lg">Random Recipe</button>
      </div>

      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full aspect-video object-cover rounded-xl"
      />

      <div className="space-y-3">
        {/* ✅ favorites button with toggle */}
        {isFavorite ? (
          <button
            onClick={() => removeFromFavorites(recipe.idMeal)}
            className="w-full border rounded-lg p-3 text-left bg-red-100 hover:bg-red-200"
          >
            ❌ Remove from Favourites
          </button>
        ) : (
          <button
            onClick={() => addToFavorites(recipe)}
            className="w-full border rounded-lg p-3 text-left bg-green-100 hover:bg-green-200"
          >
            ❤️ Add to Favourites
          </button>
        )}

        <div className="border rounded-lg p-3">
          <h2 className="font-bold mb-2">🧂 Ingredients</h2>
          <ul className="list-disc list-inside space-y-1">
            {Array.from({ length: 20 }, (_, i) => {
              const ingredient = recipe[`strIngredient${i + 1}`];
              const measure = recipe[`strMeasure${i + 1}`];
              return (
                ingredient && (
                  <li key={i}>
                    {ingredient} - {measure}
                  </li>
                )
              );
            })}
          </ul>
        </div>
      </div>

      <div className="border rounded-lg p-3">
        <h2 className="font-bold mb-2">📖 Instructions</h2>
        <p className="text-gray-700 whitespace-pre-line">
          {recipe.strInstructions}
        </p>
      </div>

      <Link to="/" className="underline block">
        ← Back to Home
      </Link>
    </section>
  );
}
