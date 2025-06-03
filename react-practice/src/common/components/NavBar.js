import { Link } from "react-router-dom";
import '../css/NavBar.css';

const NavBar = () => {
    return (
        <nav className="NavBar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/day01">Day 1 - Public Holidays</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;