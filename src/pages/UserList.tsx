import { Link } from 'react-router-dom'
import userlist from "../data/users.json";

function UserList() {

    return (
        <>
            <br></br>
            {

                userlist.users.map((user) =>
                    <div>
                        <p>
                            Prénom et Nom : {user.firstName} {user.lastName}<br></br>
                            <Link to={`/user/${user.firstName}`}> Voir l'utilisateur</Link>
                            <br></br><br></br>
                        </p>
                    </div >
                )
            }
        </>)
}

export default UserList;