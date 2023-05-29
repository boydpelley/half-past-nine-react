import ListenButton from "./ListenButton";
import "./MusicRelease.css";

function MusicRelease({ title, img, isReleased }) {
    return (
        <div className="musicSection">
            <img src={img.src} alt={img.alt} className="albumCover"></img>
            <div className="titleAndButton">
                <h3 className="albumTitle">{title}</h3>
                <ListenButton canListen={isReleased}></ListenButton>
            </div>
        </div>
    );
}

export default MusicRelease;