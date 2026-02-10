import "./Cheff.css"
import chefimg from "../assets/images/cheff/chef1.png" 
//==========================Cheff components start==========================
function Header(){
    return(
        <header>
            <img src={chefimg} alt="chef logo" className="chef_logo"></img>
            <h1>Chef Claude</h1>
        </header>
    )
} 
//==========================Cheff components End============================ 
export default function ChefClaude(){
    return (
        <div>
            <Header/>
        </div>
    )
}