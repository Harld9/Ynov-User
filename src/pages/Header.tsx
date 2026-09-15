import { Link } from 'react-router-dom'
import { useNavigate } from "react-router";

function Header() {
    let navigate = useNavigate()


    return (
        <nav className="Header">
            <div className="menu">
                <input type="checkbox" id="check">
                    <div className="logo"><a href="#">CodeByGaurav</a></div>
                    <ul>
                        <i className="fa-solid fa-xmark"></i>
                    </label>
                    <li><Link to="/">Go to Index</Link></li>
                    <li><Link to="/UserList">Go to Users</Link></li>
                </ul>
            </div>
        </nav>
    )
}


export default Header;