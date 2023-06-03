import { useState } from "react";
import PopUpShow from "./PopUpShow";

function Show( props ) {
    const [buttonPopUp, setButtonPopup] = useState(false);

    return (
        <div className="performanceInfo">
            <h3 className="dateShow">{props.date}</h3>
            <h3 className="venue">{props.venue}</h3>
            <h3 className="location">{props.location}</h3>
            <button onClick={() => setButtonPopup(true)} className="popUpButton">Tickets</button>
            <PopUpShow trigger={buttonPopUp} setTrigger={setButtonPopup} isPaid={props.isPaid} link={props.link} />
        </div>
    )
}

export default Show;