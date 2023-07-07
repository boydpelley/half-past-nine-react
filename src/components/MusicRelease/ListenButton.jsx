import "./MusicRelease.css";

function ListenButton({ canListen }) {
    if (canListen) {
        return <a href="https://tr.ee/10b9d_MvBG" target="_self"><button className="listenableButton">Listen</button></a>
    } else {
        return <button disabled className="unlistenableButton">Not available</button>
    }
}

export default ListenButton;