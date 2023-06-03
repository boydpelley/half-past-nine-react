import { useState } from "react";
import PopUp from "./PopUp";
import "./Show.css";

function WhereToBuy({ link }) {
    return (link != "") ? (
        <a href={link}>here!</a>
    ) : (
        <p>the doors of the show</p>
    );
}

function PopUpDesc({ isPaid, link }) {
    return (isPaid) ? (
        <>
            <p>you need a ticket for this show! tickets can be found at:</p>
            <WhereToBuy link={link} />
        </>
    ) : (
        <p>don't fret! this show is free! see you there!</p>
    );
}

function Show( props ) {
    const [buttonPopUp, setButtonPopup] = useState(false);

    return (
        <div className="performanceInfo">
            <h3 className="dateShow">{props.date}</h3>
            <h3 className="venue">{props.venue}</h3>
            <h3 className="location">{props.location}</h3>
            <button onClick={() => setButtonPopup(true)} className="popUpButton">Tickets</button>
            <PopUp trigger={buttonPopUp} setTrigger={setButtonPopup} >
                <PopUpDesc isPaid={props.isPaid} link={props.link} />
            </PopUp>
        </div>
    )
}

export default Show;