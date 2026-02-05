import globe from "../assets/images/travel-journal/Globe.png"
import "./travel.css"

// -------------------------travel journal components start------------------------

function Header(){
    return(
        <header>
            <img src={globe} alt="globe logo"></img>
            <h1>my travel journal.</h1>
        </header>
    )
}
// -------------------------travel journal components end--------------------------

export default function Traveljournal(){
    return(

    
    <Header/>
    )
}
