import { Link } from 'react-router-dom'
import userlist from "../data/users.json";

function UserList() {

    return (
        <>
            <br></br>
            {

                userlist.users.map((user) =>
                    <div className="carteUtilisateur">
                        <p>
                            Pseudo: {user.username}<br></br>
                            <Link to={`/user/${user.id}`}> Voir l'utilisateur</Link>
                        </p>
                    </div >
                )
            }
        </>)
}

export default UserList;
