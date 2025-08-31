import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(stored);
  }, []);

  const removeFavorite = (id) => {
    const updated = favorites.filter((meal) => meal.idMeal !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <section className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">My Favorites</h1>

      {favorites.length === 0 ? (
        <p className="text-center text-gray-500">
          No favorites yet. Go add some recipes!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {favorites.map((meal) => (
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
                <div className="flex justify-between items-center mt-2">
                  <Link
                    to={`/recipe/${meal.idMeal}`}
                    className="text-blue-600 underline"
                  >
                    View Details
                  </Link>
                  <button
                    onClick={() => removeFavorite(meal.idMeal)}
                    className="text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
