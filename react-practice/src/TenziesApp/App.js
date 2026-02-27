import "./tenxies.css"
import Die from "./Die"
import { useState } from "react"



export default function App(){

    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => Math.ceil(Math.random() * 6))
    }
    function rollDice(){
        setDice(generateAllNewDice)
    }
    const [dice,setDice] = useState(generateAllNewDice())
    const diceEle = dice.map(num => <Die value={num}/>)
    return(
        <main>
            <div className="dice-container">
                {diceEle}
            </div>
            <button className="roll-dice" onClick={rollDice}>Roll</button>
        </main>
    )
}