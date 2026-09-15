import { useParams } from "react-router-dom"
import userlist from "../data/users.json"


function User() {
    let { id } = useParams();
    const user = userlist.users.find(user => user.id === Number(id))
    if (user) {
        return (
            <><h1>Hello {user.username} !</h1><img src={user.image} alt="Photo de profil de l'utilisateur"></img></>
        )
    }
}

export default User