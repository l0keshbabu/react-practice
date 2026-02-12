import "./Cheff.css"
import chefimg from "../assets/images/cheff/chef1.png" 
import React from "react"
//==========================Cheff components start==========================
const Header = () => {
    return(
        <header>
            <img src={chefimg} alt="chef logo" className="chef_logo"></img>
            <h1>Chef Claude</h1>
        </header>
    )
} 
const MainForm = () => {

    const [ingredients,setingredients] = React.useState([])
    
    const IngredientListItems = ingredients.map(ingredient => (<li key={ingredient}>{ingredient}</li>))

    function SubmitHandler(formData){
        const newIngredient = formData.get("Ingredient")
        setingredients(prevIngredients => [...prevIngredients,newIngredient])

    }
    return(
        <main>
                <form action={SubmitHandler}>
                    <input type="text" placeholder="e.g. Eggs" name="Ingredient"></input>
                    <button>Add Ingredient</button>
                </form>
                <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{IngredientListItems}</ul>
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button>Get a recipe</button>
                </div>
            </section>
        </main>
    )
}
//==========================Cheff components End============================ 
export default function ChefClaude(){
    return (
        <div>
            <Header/>
            <MainForm/>
        </div>
    )
}
// so this chefClaude function is expoting to app.js in the src forder from there its going to index.js 
// and from there its imported to index.html.this is waht it compi;ed in the web 
