import globe from "../assets/images/travel-journal/Globe.png"
import shiridi from "../assets/images/travel-journal/shiridi.png"
import marker from "../assets/images/travel-journal/marker.png"
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

function Entry(){
    return (
        <div className="travel-entry">
            <div className="main-image-container">
            <img src={shiridi} alt="shiridi" className="main-image"></img>
            </div>
            <div className="info-container">
                <img src={marker} alt="location pin" className="marker"></img>
                <span className="country">India</span>
                <a href="https://www.google.com/maps/place/Shri+Sai+Baba+Samadhi+Mandir/@19.7
                65022,74.4665727,15.62z/data=!4m15!1m8!3m7!1s0x3bdc5ba7461768af:0xd802d2c2943c9
                9c!2sShirdi,+Maharashtra!3b1!8m2!3d19.7645364!4d74.4762124!16zL20vMDI5djcw!3m5!
                1s0x3bdc5b95bf70c2f7:0x23dbc9b2db45374!8m2!3d19.7661782!4d74.4769973!16s%2Fg%2F11
                g01_82b2?entry=ttu&g_ep=EgoyMDI2MDIwMy4wIKXMDSoASAFQAw%3D%3D">View on Google Maps

                </a>
                <h2 className="entry-title">Shirdi</h2>
                <p className="trip-dates">12 Jan, 2019 - 15 Jan, 2019</p>
                <p className="entry-text">Shirdi is a town and pilgrimage site in the Indian state of Maharashtra.
                     Shirdi is located in the Rahata taluka of Ahmednagar district. It is most 
                     well known for being the home of the 19th-century Indian saint Sai Baba.</p>
            </div>
        </div>
    )
}
// -------------------------travel journal components end--------------------------

export default function Traveljournal(){
    return(
        <>
        <Header/>
        <Entry/>
        </>

    )
}
