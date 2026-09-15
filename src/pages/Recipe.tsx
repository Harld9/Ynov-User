import { useParams } from "react-router-dom"
import recipesList from "../data/recipes.json";


function Recipe() {
    let { id } = useParams();
    const recipe = recipesList.recipes.find(recipe => recipe.id === Number(id))

    if (recipe) {
        return (
            <>
                <h1>{recipe.name}</h1>
                <img className="imgRecette" src={recipe.image} alt={recipe.name}></img>
                <h2>Ingrédients :</h2>
                {recipe.ingredients.map((ingredient) =>
                    <p>{ingredient}</p>
                )}
                <h2>Instructions :</h2>
                {recipe.instructions.map((instruction) =>
                    <p>{instruction}</p>
                )}
            </>)
    }

}

export default Recipe
