import "./tenxies.css"
import Die from "./Die"
export default function App(){
    return(
        <main>
            <div className="dice-container">
                <Die num={1}/>
                <Die num={1}/>
                <Die num={1}/>
                <Die num={1}/>
                <Die num={1}/>
                <Die num={1}/>
                <Die num={1}/>
                <Die num={1}/>
                <Die num={1}/>
                <Die num={1}/>
            </div>
        </main>
    )
}