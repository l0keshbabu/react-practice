import "./tenxies.css"
import Die from "./Die"
import { useState } from "react"
import { nanoid } from "nanoid"
import Confetti from "react-confetti"


export default function App(){ 

    

    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => ({value:Math.ceil(Math.random() * 6),isHeld:false,id:nanoid()}))
    }
    function rollDice(){
        if(!gameWon){
            setDice(OldDice => 
                OldDice.map(die =>
                    die.isHeld ? die : {...die,value:Math.ceil(Math.random() * 6)}))
        }else{
            setDice(generateAllNewDice())
        }
        
    }
    function Hold(id){
        setDice(oldDice => {
            return oldDice.map(die => {
                return die.id === id ? {...die,isHeld:!die.isHeld} : die
            })
        })
    }
    const [dice,setDice] = useState(() => generateAllNewDice())
    const diceEle = dice.map(DieObj => <Die key={DieObj.id}
                                            value={DieObj.value}
                                            isHeld={DieObj.isHeld}
                                            hold={() => Hold(DieObj.id)}/>)

    const gameWon=dice.every(die => die.isHeld) && dice.every(die => die.value === dice[0].value)                                       
    return(
        <main>
            {gameWon && <Confetti/>}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceEle}
            </div>
            <button className="roll-dice" onClick={rollDice}>{gameWon ? "New Game" : "Roll"}</button>
        </main>
    )
}