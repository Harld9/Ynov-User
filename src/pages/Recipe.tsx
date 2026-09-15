import { useParams } from "react-router-dom"
import recipesList from "../data/recipes.json";


function Recipe() {
    let { id } = useParams();
    const recipe = recipesList.recipes.find(recipe => recipe.id === Number(id))

    if (recipe) {
        return (
            <h1>{recipe.name}</h1>
        )
    }

}

export default Recipe