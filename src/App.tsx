import './App.css'
import HelloWorld from './components/HelloWorld'
import Header from './components/Header'
import UserList from './pages/UserList'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import recipesList from "./data/recipes.json";

function App() {
  return (
    <>
      <h1>Bienvenue sur le site de cuisine</h1>

      {
        recipesList.recipes.map((recipe) =>
          <div>
            <p>
              Recette : {recipe.name} <br></br>
              Temps de préparation : {recipe.prepTimeMinutes} minutes<br></br>
              <img className="imgRecette" src={recipe.image} alt="Vignette Recette"></img><br></br>
              <Link to={`/recipe/${recipe.id}`}> Voir la recette</Link>
              <br></br><br></br>
              <hr></hr>
            </p>
          </div >


        )
      }
    </>)
}

export default App
