import { useParams, Link } from "react-router-dom";

export default function RecipeDetails() {
  const { id } = useParams();
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Recipe #{id}</h1>
        <button className="border px-4 py-2 rounded-lg">Random Recipe</button>
      </div>

      <div className="aspect-video bg-gray-200 rounded-xl" />

      <div className="space-y-3">
        <button className="w-full border rounded-lg p-3 text-left">❤️ Favourites</button>
        <button className="w-full border rounded-lg p-3 text-left">🧂 Ingredients</button>
      </div>

      <Link to="/" className="underline">← Back to Home</Link>
    </section>
  );
}