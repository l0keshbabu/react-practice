import logo from "../assets/images/staticpage/r_logo.png";
import "./Static_page.css"
function Header(){
    return(
        <header>
        <nav>
        <a href="https://react.dev/"><img className="logo" src={logo} alt="react_logo"></img></a>
        <span>ReactFacts</span>
        </nav>
        </header>
        )
}        
function MainContent(){
    return (
        <main>
        <h1>Fun facts about React!</h1>
        <ul className="facts-list">
            <li>Was first release in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 200K stars on GitHub</li>
            <li>Is maintained by Meta</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
        </main>
    )
} 
    

function Static(){
    return(
        <>
    <Header/>
    <MainContent/>
    </>
    )
    
}
           
export default Static;