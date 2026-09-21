import "../styles/Header.css"
import { Link } from 'react-router-dom'

function Header(props: { userConnecteId: number }) {


    return (
        <nav className="navbar">
            <div className="logo">Harold FRANCOIS</div>
            <ul className="menu">
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/UserList">Utilisateurs</Link></li>
                {props.userConnecteId === 0 && (
                    <li><Link to="/connexion">Se connecter</Link></li>
                )}
            </ul>
        </nav>
    )
}


export default Header;
