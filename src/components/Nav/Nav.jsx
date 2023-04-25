import { NavLink } from "react-router-dom";
import SearchBar from   '../SearchBar/SearchBar.jsx'
import '../Nav/nav.css'


function Nav({ onSearch }) {
    return (
        <div className="nav-bar">
            <NavLink to='/about'>
                <button>About</button>
            </NavLink>
            <NavLink to='/home'>
                <button>Home</button>
            </NavLink>
            <SearchBar onSearch={onSearch} />
        </div>
    );
}

export default Nav;