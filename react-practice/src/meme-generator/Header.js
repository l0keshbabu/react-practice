import trollface from "../assets/images/Meme/Troll Face.png"
import "./Memes.css"

export default function Header() {
    return (
        <header className="header">
            <img 
                src={trollface} alt="Troll"
            />
            <h1>Meme Generator</h1>
        </header>
    )
}