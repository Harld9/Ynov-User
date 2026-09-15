import { Link } from 'react-router-dom'
import { useNavigate } from "react-router";

function Header() {
    let navigate = useNavigate()


    return (
        <nav className="navbar">
            <div className="logo">Site Cuisine</div>
            <ul className="menu">
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/UserList">Utilisateurs</Link></li>
            </ul>
        </nav>
    )
}


export default Header;