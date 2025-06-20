import { Link } from "react-router-dom";
import '../css/NavBar.css';

const NavBar = () => {
    return (
        <nav className="NavBar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/day01">Day 1 - Public Holidays</Link></li>
                <li><Link to="/day02">Day 2 - Accordion</Link></li>
                <li><Link to="/day03">Day 3 - To Do</Link></li>
                <li><Link to="/day04">Day 4 - Pokemon</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;