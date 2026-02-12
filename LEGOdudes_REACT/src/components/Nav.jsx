import { Link} from "react-router-dom";

function Nav() {
    return (
    <nav className="nav-bar">
            <Link to="/">HJEM</Link>
            <Link to="/city">CITY</Link>
            <Link to="/ninjago">NINJAGO</Link>
            <Link to="/castle-and-knights">CASTLES AND KNIGHTS</Link>
            <Link to="/marine-and-pirates">MARINE AND PIRATES</Link>
            <Link to="/movie-characters">MOVIE CHARACTERS</Link>
        </nav>
    );
};

export default Nav;
