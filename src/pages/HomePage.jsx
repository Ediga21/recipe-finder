import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [q, setQ] = useState("");
  const navigate = useNavigate();

  function onSubmit(e) {
    e.preventDefault();
    alert(`Search for: ${q}`); // placeholder
  }

  return (
    <section className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl md:text-5xl font-bold">Find Your Perfect Recipe</h1>
        <p className="text-gray-600">Search thousands of recipes with ease</p>
        <form onSubmit={onSubmit} className="max-w-md">
          <input
            className="w-full border rounded-lg p-3"
            placeholder="Search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </form>
      </header>

      <div>
        <h2 className="font-semibold mb-3">Popular this week</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {["Pasta", "Fried Rice", "Cake"].map((name, i) => (
            <button
              key={name}
              onClick={() => navigate(`/recipe/${i + 1}`)}
              className="border rounded-xl p-4 text-left hover:shadow"
            >
              <div className="aspect-video bg-gray-200 rounded-lg mb-2" />
              <div className="font-medium">{name}</div>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-semibold mb-3">Categories</h2>
        <div className="grid grid-cols-3 gap-4 max-w-lg">
          {["Breakfast", "Lunch", "Dinner"].map((name) => (
            <div key={name} className="border rounded-xl p-4 text-center">
              {name}
            </div>
          ))}
        </div>
      </div>

      <footer className="text-center text-sm text-gray-500 pt-8">Ready to Cook?</footer>
    </section>
  );
}