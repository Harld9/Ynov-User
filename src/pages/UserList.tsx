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
                            Pseudo: {user.username}<br></br>
                            <Link to={`/user/${user.id}`}> Voir l'utilisateur</Link>
                            <br></br><br></br>
                        </p>
                    </div >
                )
            }
        </>)
}

export default UserList;