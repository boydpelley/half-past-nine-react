import "./Show.css";

function PopUp(props) {
    console.log(props.children);
    return (props.trigger) ? (
        <div className="popUpBackground">
            <div className="popUp">
                <button onClick={() => props.setTrigger(false)} className="closeButton">X</button>
                { props.children }
            </div>
        </div>
    ) : "";
}

export default PopUp;