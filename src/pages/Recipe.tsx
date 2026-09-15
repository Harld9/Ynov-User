import { useParams } from "react-router-dom"
import recipesList from "../data/recipes.json";


function Recipe() {
    let { id } = useParams();
    const recipe = recipesList.recipes.find(recipe => recipe.id === Number(id))

    if (recipe) {
        return (
            <>
                <h1>{recipe.name}</h1>
                <img className="imgRecette" src={recipe.image} alt="Grande image de la recette"></img>
                <p>{recipe.ingredients}</p>









            </>)
    }

}

export default Recipe