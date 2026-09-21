import './styles/App.css'
import { Link } from 'react-router-dom'
import recipesList from "./data/recipes.json";

function App() {
  return (
    <>
      <h1>Bienvenue sur le site de cuisine</h1>

      {
        recipesList.recipes.map((recipe) =>
          <div className="carteRecette">
            <p>
              Recette : {recipe.name} <br></br>
              Temps de préparation : {recipe.prepTimeMinutes} minutes<br></br>
              <img className="vignetteRecette" src={recipe.image} alt="Vignette Recette"></img><br></br>
              <Link to={`/recipe/${recipe.id}`}> Voir la recette</Link>
            </p>
          </div >


        )
      }
    </>)
}

export default App
