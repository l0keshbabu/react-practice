import { useState } from "react"
import "./endgame.css"
import { languages } from "./languages"
import { clsx } from 'clsx';
import { getFarewellText,getRandomWord } from './utils'





export default function App(){
    // state values
    const [currentWord,setCurrentWord]= useState(()=> getRandomWord())
    const [gussedLetters,setGussedLetters] = useState([])
    // derived values
    const wrongGuessCount = gussedLetters.filter(letter => !currentWord.includes(letter)).length
    console.log(wrongGuessCount)
    const isGameWon = currentWord.split("").every(letter => gussedLetters.includes(letter))
    const isGameLost = wrongGuessCount >= languages.length - 1
    const lastGuessedLetter = gussedLetters[gussedLetters.length -1]
    const isLastGuessIncorrect = lastGuessedLetter && !currentWord.includes(lastGuessedLetter)
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

const letterElements = currentWord.split("").map((letter, index) => {
    const isGuessed = gussedLetters.includes(letter)
    const shouldRevealLetter = isGameLost || isGuessed

    const style = {
        color: isGameLost
            ? isGuessed
                ? "white"   
                : "red"     
            : isGuessed
                ? "white"
                : "transparent"
    }

    return (
        <span key={index} style={style}>
            {shouldRevealLetter ? letter.toUpperCase() : ""}
        </span>
    )
})
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
            disabled={isGameOver}
            key={letter} 
            onClick={()=> addGussedLetters(letter)}>
            {letter.toUpperCase()}
        </button>)
    }  
    )
    
    function addGussedLetters(letter){
        setGussedLetters(prevLetters => prevLetters.includes(letter)? prevLetters : [...prevLetters,letter])
    }
    

    const gameStatusClass = clsx("game-status",{
        won:isGameWon,
        lost:isGameLost,
        farewell: !isGameOver && isLastGuessIncorrect
    })

    function renderGameStatus() {
        if (!isGameOver && isLastGuessIncorrect) {
            return (
                <p className="farewell-message">{getFarewellText(languages[wrongGuessCount - 1].name)}</p>
            )
        }

        if (isGameWon) {
            return (
                <>
                    <h2>You win!</h2>
                    <p>Well done! 🎉</p>
                </>
            )
        } if(isGameLost) {
            return (
                <>
                    <h2>Game over!</h2>
                    <p>You lose! Better start learning Assembly 😭</p>
                </>
            )
        }
        return null
    }

    function startNewGame(){
        setCurrentWord(getRandomWord())
        setGussedLetters([])
    }
    return (
        <main>
            <header>
                <h1>Assembly: Endgame</h1>
                    <p>Guess the word within 8 attempts to keep the programming world safe from Assembly!</p>
            </header>
            <section className={gameStatusClass}>
                {renderGameStatus()}
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
            {isGameOver && <button className="new-game" onClick={startNewGame}>New Game</button>}
        </main>
    )
}
