import "./MusicRelease.css";

function ListenButton({ canListen }) {
    if (canListen) {
        return <button className="listenableButton">Listen</button>
    } else {
        return <button disabled className="unlistenableButton">Not available</button>
    }
}

export default ListenButton;