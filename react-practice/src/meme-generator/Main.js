import meme1 from "../assets/images/Meme/meme1.png"
import "./Memes.css"
export default function Main(){
    return(
        <main>
            <div className="form">
                <label>Top Text
                    <input type="text" placeholder="Shut Up" name="topText"></input>
                </label>
                <label>Bottom Text
                    <input type="text" placeholder="and take my Money" name="BottomText"></input>
                </label>
                <button>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme1} alt="memeImage" />
                <span className="top">Shut Up</span>
                <span className="bottom">and take my money</span>
            </div>
        </main>
    ) 
}