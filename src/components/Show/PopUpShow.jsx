// TO ADD:
// The free button returns text that says, just show up !
// Paid one will include a link to buy virtual tix (if applicable) or link to venue facebook account etc.

function PopUp(props) {
    return (props.trigger) ? (
        <div className="popUpBackground">
            <div className="popUp">
                <button onClick={() => props.setTrigger(false)} className="closeButton">X</button>
                { props.children }
            </div>
        </div>
    ) : "";
}

function WhereToBuy({ link }) {
    if (link == null) {
        return (
            <p>at the doors of the show</p>
        )
    } else {
        return (
            <a href={link}>here!</a>
        )
    }
}


function PopUpShow({ isPaid, link }) {
    if (!isPaid) {
        return (
            <PopUp>
                <p>don't fret! this show is free! see you there!</p>
            </PopUp>
        )
    } else {
        return (
            <PopUp>
                <p>you need a ticket for this show! tickets can be found at:</p>
                <WhereToBuy link={link} />
            </PopUp>
        )
    }
}

export default PopUpShow;