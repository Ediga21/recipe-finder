import { createContext, useContext, useState } from "react";

// Create the context
const RecipeContext = createContext();

// Provider component
export const RecipeProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // ✅ Add recipe to favorites
  const addToFavorites = (recipe) => {
    setFavorites((prev) => {
      // avoid duplicates
      if (prev.find((item) => item.idMeal === recipe.idMeal)) {
        return prev;
      }
      return [...prev, recipe];
    });
  };

  // ✅ Remove recipe from favorites
  const removeFromFavorites = (idMeal) => {
    setFavorites((prev) => prev.filter((item) => item.idMeal !== idMeal));
  };

  return (
    <RecipeContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

// Hook for using the context easily
export const useRecipes = () => useContext(RecipeContext);
