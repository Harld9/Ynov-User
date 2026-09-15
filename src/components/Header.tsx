import { Link } from 'react-router-dom'

function Header() {



    return (
        <nav className="navbar">
            <ul className="menu">
                <li>Harold FRANCOIS</li>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/UserList">Utilisateurs</Link></li>
            </ul>
        </nav>
    )
}


export default Header;