import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PopularSection() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch a few meals by ID (simulating "popular")
    const popularIds = ["52772", "52874", "52844", "52802"];
    Promise.all(
      popularIds.map((id) =>
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
          .then((res) => res.json())
          .then((data) => data.meals[0])
      )
    ).then((meals) => setRecipes(meals));
  }, []);

  return (
    <section className="px-6 py-10">
      <h2 className="text-2xl font-bold mb-6">Popular This Week</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {recipes.map((meal) => (
          <Link
            key={meal.idMeal}
            to={`/recipe/${meal.idMeal}`}
            className="block bg-white rounded-2xl shadow hover:shadow-lg transition"
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-40 object-cover rounded-t-2xl"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{meal.strMeal}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
