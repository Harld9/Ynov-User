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
            navigate("/profil", {
                state: {
                    id: user.id,
                    username: user.username,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    phone: user.phone,
                    age: user.age,
                    gender: user.gender,
                    birthDate: user.birthDate,
                    image: user.image,
                    role: user.role,
                    address: user.address,
                    company: user.company
                }
            })
        }
        else { setMessage("Identifiants incorrects") }
    }


    return (
        <><h1>Connexion</h1><form>
            <label htmlFor="username">Pseudo</label>
            <input id="username" placeholder="Entrez votre pseudo" value={username} onChange={(event) => setUsername(event.target.value)} />
            <label htmlFor="password">Mot de passe</label>
            <input id="password" type="password" placeholder="Entrez votre mot de passe" value={password} onChange={(event) => setPassword(event.target.value)} />
            <button onClick={() => verifConnexion()} type="button">Se connecter</button>
            <p>{message}</p>
        </form></>
    )

}

export default Connexion;
