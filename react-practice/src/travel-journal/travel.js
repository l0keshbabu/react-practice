import globe from "../assets/images/travel-journal/Globe.png"
import marker from "../assets/images/travel-journal/marker.png"
import data from "./data"

import "./travel.css"

// -------------------------travel journal components start------------------------

function Header(){
    return(
        <header>
            <a href="https://www.google.com/maps"><img src={globe} alt="globe logo"></img></a>
            <h1>my travel journal.</h1>
        </header>
    )
}

function Entry(props){
    return (
        <div className="travel-entry">
            <div className="main-image-container">
            <img src={props.image.src} alt={props.image.alt} className="main-image"></img>
            </div>
            <div className="info-container">
                <img src={marker} alt="location pin" className="marker"></img>
                <span className="country">{props.country}</span>
                <a href={props.googlemapslink}>View on Google Maps

                </a>
                <h2 className="entry-title">{props.title}</h2>
                <p className="trip-dates">{props.dates}</p>
                <p className="entry-text">{props.text}</p>
            </div>
        </div>
    )
}
// -------------------------travel journal components end--------------------------

export default function Traveljournal(){
    const travelelements=data.map((entry) => {
        return (
            <Entry
                key={entry.id}
                image={entry.image}
                title={entry.title}
                country={entry.country}
                googlemapslink={entry.googlemapslink}
                dates={entry.dates}
                text={entry.text}
            />
        )
    })
    return(
        <>
        <Header/>
        {travelelements}
        </>

    )
}
