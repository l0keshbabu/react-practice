import meme1 from "../assets/images/Meme/meme1.png"
import "./Memes.css"
import React, { useState,useEffect } from "react"
export default function Main(){
    const [meme,setMeme]=useState({
        topText:"Shut Up",
        bottomText:"and take my money",
        imageURL:meme1
    })


    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => console.log(data.data.memes))

    },[])

        function handleChange(event){
        const {value,name}=event.currentTarget
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]:value
        }))
    } 

    return(
        <main>
            <div className="form">
                <label>Top Text
                    <input type="text"
                     placeholder="Shut Up" 
                    name="topText"
                     onChange={handleChange}
                     value={meme.topText}>
                     </input>
                </label>
                <label>Bottom Text
                    <input type="text" 
                    placeholder="and take my Money" 
                    name="bottomText"
                    onChange={handleChange}
                     value={meme.bottomText}>
                    </input>
                </label>
                <button>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageURL} alt="memeImage" />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    ) 
}