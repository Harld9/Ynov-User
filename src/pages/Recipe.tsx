import Erreur from "./Erreur"
import "../styles/Recipe.css"
import { useParams } from 'react-router-dom'
import axios from "axios";
import { useEffect, useState } from "react";
import type { Recipe } from "../types/recipe";


function RecipePage() {
    let { id } = useParams();
    const url = `https://dummyjson.com/recipes/${id}`
    const [recipe, setRecipe] = useState<Recipe>()
    const [chargement, setChargement] = useState(true)
    const [introuvable, setIntrouvable] = useState(false)

    useEffect(() => {
        let actif = true;
        setChargement(true);
        setIntrouvable(false);
        setRecipe(undefined);

        if (!id || !Number.isInteger(Number(id)) || Number(id) <= 0) {
            setIntrouvable(true);
            setChargement(false);
            return;
        }

        (async () => {
            try {
                const response = await axios.get<Recipe>(url);
                if (actif) {
                    setRecipe(response.data);
                }
            } catch (e) {
                if (actif) {
                    if (axios.isAxiosError(e) && e.response?.status === 404) {
                        setIntrouvable(true);
                    } else {
                        console.error(e);
                    }
                }
            } finally {
                if (actif) {
                    setChargement(false);
                }
            }
        })();

        // Ignore une ancienne réponse si on change de page ou d'identifiant.
        return () => { actif = false; };
    }, [id, url])

    if (introuvable) { return <Erreur /> }
    if (chargement) { return <p>Chargement...</p> }
    if (!recipe) { return null }

    return (<>
        <div>
            <p>name : {recipe.name}</p>
        </div>
    </>)
}

export default RecipePage;
