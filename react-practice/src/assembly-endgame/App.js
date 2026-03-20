import { useState } from "react"
import "./endgame.css"
import { languages } from "./languages"
import { clsx } from 'clsx';




export default function App(){
    // state values
    const [currentWord,setCurrentWord]= useState("react")
    const [gussedLetters,setGussedLetters] = useState([])
    // derived values
    const wrongGuessCount = gussedLetters.filter(letter => !currentWord.includes(letter)).length
    console.log(wrongGuessCount)
    const isGameWon = currentWord.split("").every(letter => gussedLetters.includes(letter))
    const isGameLost = wrongGuessCount >= languages.length - 1
    const isGameOver = isGameWon || isGameLost
    // static values
    const alphabets = "abcdefghijklmnopqrstuvwxyz"
    const languageElements = languages.map((lang,index) => {
        const styles={
            backgroundColor:lang.backgroundColor,
            color:lang.color
        }

        const isLanguageLost = index < wrongGuessCount
        const className = clsx("chip", isLanguageLost && "lost")
        return (
            <span key={lang.name} className={className} style={styles}>{lang.name}</span>
        )
    })


    const letterElements=currentWord.split("").map((letter,index) => (
        <span key={index}>
            {gussedLetters.includes(letter) ? letter.toUpperCase() : ""}
        </span>
    ))
    const keyboardElements = alphabets.split("").map(letter => {
        const isGuessed = gussedLetters.includes(letter)
        const isCorrect = isGuessed && currentWord.includes(letter)
        const isWrong = isGuessed && !currentWord.includes(letter)
        const className=clsx({
            correct: isCorrect,
            wrong: isWrong
        })
        return(<button
            className={className} 
            key={letter} 
            onClick={()=> addGussedLetters(letter)}>
            {letter.toUpperCase()}
        </button>)
    }  
    )
    
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
            {isGameOver && <button className="new-game">New Game</button>}
        </main>
    )
}
