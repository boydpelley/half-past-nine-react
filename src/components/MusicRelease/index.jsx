import ListenButton from "./ListenButton";
import "./MusicRelease.css";

function MusicRelease({ title, src, alt, isReleased }) {
    return (
        <div className="musicSection">
            <img src={src} alt={alt} className="albumCover"></img>
            <div className="titleAndButton">
                <h3 className="albumTitle">{title}</h3>
                <ListenButton canListen={isReleased}></ListenButton>
            </div>
        </div>
    );
}

export default MusicRelease;