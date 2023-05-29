import NavbarItem from "./NavbarItem";
import "./Navbar.css";

function Navbar() {
    return (
        <div className="nav">
            <h1 className="topName">hpn</h1>
            <ul className="navList">
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