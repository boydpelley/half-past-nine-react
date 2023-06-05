import { useState, useEffect } from "react";
import NavbarItem from "./NavbarItem";
import "./Navbar.css";

function Navbar() {
    const [clicked, setClicked] = useState(false);


    return (
        <div className="nav">
            <h1 className="topName">hpn</h1>
            <div className="menuIcon" onClick={() => setClicked(!clicked)}>
                <i className={clicked ? "xClose" : "hamburger"}></i>
            </div>
            <ul className={clicked ? "navList clicked" : "navList"}>
                <NavbarItem section={"music"} />
                <NavbarItem section={"media"} />
                <NavbarItem section={"merch"} />
                <NavbarItem section={"live"} />
                <NavbarItem section={"contact"} />
            </ul>
        </div>
    );
}

export default Navbar;