import "./Cheff.css"
import chefimg from "../assets/images/cheff/chef1.png" 
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
    return(
        <main>
            <form>
                <input type="text" placeholder="e.g. Eggs"></input>
                <button>Add Ingredient</button>
            </form>
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