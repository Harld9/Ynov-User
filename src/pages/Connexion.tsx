import { useState } from "react"
import userlist from "../data/users.json";
import { useNavigate } from "react-router-dom"

function Connexion() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    const navigate = useNavigate()

    function verifConnexion() {
        const user = userlist.users.find(user => user.username === username && user.password === password)
        if (user) {
            setMessage("Identifiants corrects")
            navigate("/profil", { state: { firstName: user.firstName, lastName: user.lastName } })
        }
        else { setMessage("Identifiants incorrects") }
    }


    return (
        <><h1>Connexion</h1><form>
            <input value={username} onChange={(event) => setUsername(event.target.value)} />
            <input value={password} onChange={(event) => setPassword(event.target.value)} />
            <button onClick={() => verifConnexion()} type="button">Se connecter</button>
            <p>{message}</p>
        </form></>
    )

}

export default Connexion;