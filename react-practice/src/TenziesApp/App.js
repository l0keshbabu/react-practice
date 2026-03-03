import "./tenxies.css"
import Die from "./Die"
import { useState } from "react"
import { nanoid } from "nanoid"



export default function App(){ 

    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => ({value:Math.ceil(Math.random() * 6),isHeld:false,id:nanoid()}))
    }
    function rollDice(){
        setDice(generateAllNewDice)
    }
    function Hold(id){
        setDice(oldDice => {
            return oldDice.map(die => {
                return die.id === id ? {...die,isHeld:!die.isHeld} : die
            })
        })
    }
    const [dice,setDice] = useState(generateAllNewDice())
    const diceEle = dice.map(DieObj => <Die key={DieObj.id}
                                            value={DieObj.value}
                                            isHeld={DieObj.isHeld}
                                            hold={() => Hold(DieObj.id)}/>)
    return(
        <main>
            <div className="dice-container">
                {diceEle}
            </div>
            <button className="roll-dice" onClick={rollDice}>Roll</button>
        </main>
    )
}