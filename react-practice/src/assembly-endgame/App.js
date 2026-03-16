import { useState } from "react"
import "./endgame.css"
import { languages } from "./languages"




export default function App(){
    const alphabets = "abcdefghijklmnopqrstuvwxyz"
    const languageElements = languages.map(lang => {
        const styles={
            backgroundColor:lang.backgroundColor,
            color:lang.color
        }
        return (
            <span key={lang.name} className="chip" style={styles}>{lang.name}</span>
        )
    })

    const [currentWord,setCurrentWord]= useState("react")
    const [gussedLetters,setGussedLetters] = useState([])
    console.log(gussedLetters)
    const letterElements=currentWord.split("").map((letter,index) => (
        <span key={index}>
            {letter.toUpperCase()}
        </span>
    ))
    const keyboardElements = alphabets.split("").map(letter => (
        <button key={letter} onClick={()=> addGussedLetters(letter)}>{letter.toUpperCase()}</button>
    ))
    
    function addGussedLetters(letter){
        setGussedLetters(prevLetters => prevLetters.includes(letter)? prevLetters : [...prevLetters,letter])
    }
    


    return (
        <main>
            <header>
                <h1>Assembly: Endgame</h1>
                    <p>Guess the word within 8 attempts to keep the programming world safe from Assembly!</p>
            </header>
            <section className="game-status">
                 <h2>You win!</h2>
                <p>Well done! 🎉</p>
            </section>
            <section className="language-chips">
                {languageElements}
            </section>
            <section className="word">
                {letterElements}
            </section>
            <section className="keyboard">
                {keyboardElements}
            </section>
            <button className="new-game">New Game</button>
        </main>
    )
}
