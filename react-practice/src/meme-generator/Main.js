import meme1 from "../assets/images/Meme/meme1.png"
export default function Main(){
    return(
        <main>
            <div className="form">
                <label>Top Text
                    <input type="text" placeholder="One does not simply" name="topText"></input>
                </label>
                <label>Bottom Text
                    <input type="text" placeholder="Walk into Morder" name="BottomText"></input>
                </label>
                <button>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme1} alt="memeImage" />
                <span className="top">One does not simply</span>
                <span className="bottom">Walk into Mordor</span>
            </div>
        </main>
    ) 
}