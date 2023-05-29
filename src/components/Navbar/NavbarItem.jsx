import "./Navbar.css";

function NavbarItem({ section }) {
    return (
        <li className="navItem" >
            <a href={'#' + section}>{section}</a>
        </li>
    );
}

export default NavbarItem;