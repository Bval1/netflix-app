import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import { logout } from "../../context/authContext/AuthActions";
const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const {dispatch} = useContext(AuthContext);
    
    window.onscroll =  () => {
        setIsScrolled(window.scrollY === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
            <div className="left">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" 
                    alt=""
                />
                <Link to="/" className="link">
                    <span>Homepage</span>
                </Link>
                <Link to="/series" className="link">
                    <span className="navbarmainLinks">Series</span>
                </Link>
                <Link to="/movies" className="link">
                    <span className="navbarmainLinks">Movies</span>
                </Link>
                <span>New and Popular</span>
                <span>My List</span>
            </div>
            <div className="right">
                <SearchIcon className="icon"/>
                <span>KID</span>
                <NotificationsIcon className="icon"/>
                <img 
                    src="https://static.wikia.nocookie.net/villains/images/6/66/1990-goodfellas-billy-bates-frank-vincent.jpg" 
                    alt="" 
                />
                <div className="profile">
                    <ArrowDropDownIcon className="icon"/>
                    <div className="options">
                        <span>Settings</span>
                        <span onClick={() => dispatch(logout())}>Logout</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Navbar