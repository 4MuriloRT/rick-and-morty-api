import "./header.css";
import { Link } from "react-router-dom";

import logoBlack from "../../img/logo-black.png";
const Header = () => {
    return(
        <header>
            <img className="logoBlack" src={logoBlack} alt="Logo Black" />
            <div className="containerButtons">
                <Link className="button" to="/" >Characters</Link>
                <Link className="button" to="/locations">Locations</Link>
                <Link className="button">Episodes</Link>
            </div>
        </header>
    );
}

export default Header;
