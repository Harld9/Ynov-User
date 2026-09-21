import './styles/App.css'
import type { Recipe } from "./types/recipe";
import { useEffect, useState } from "react";
import axios from "axios";

interface RecipesResponse {
  recipes: Recipe[];
}

function App() {
  const url = "https://dummyjson.com/recipes"
  const [recipes, setRecipes] = useState<Recipe[]>([])


  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get<RecipesResponse>(url);
        setRecipes(response.data.recipes);

      } catch (e) {
        console.error(e);
      }
    })();
  }, [])
  return (<>
    {recipes.map((recipe) =>
      <div>
        <p>name : {recipe.name}</p>
      </div>
    )}
  </>)
}

export default App




