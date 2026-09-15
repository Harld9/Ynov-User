import { Link } from 'react-router-dom'

function Header() {


    return (
        <nav className="navbar">
            <div className="logo">Harold FRANCOIS</div>
            <ul className="menu">
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/UserList">Utilisateurs</Link></li>
            </ul>
        </nav>
    )
}


export default Header;
