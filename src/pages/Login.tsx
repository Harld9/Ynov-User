import "../styles/Login.css"
import { useState } from "react"
import axios from "axios";

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    const [, setToken] = useState(localStorage.getItem("token"));

    async function verifConnexion() {
        const url = "https://dummyjson.com/auth/login";


        try {
            const response = await axios.post(url, {
                username: username,
                password: password

            })
            console.log(response.data)
            setToken(response.data.accessToken)
            localStorage.setItem("token", response.data.accessToken)
        } catch (e) {
            setMessage("Identifiants incorrects")
        }
    };

    return (
        <><h1>Connexion</h1><form className="formConnexion">
            <label htmlFor="username">Pseudo</label>
            <input id="username" placeholder="Entrez votre pseudo" value={username} onChange={(event) => setUsername(event.target.value)} />
            <label htmlFor="password">Mot de passe</label>
            <input id="password" type="password" placeholder="Entrez votre mot de passe" value={password} onChange={(event) => setPassword(event.target.value)} />
            <button onClick={() => verifConnexion()} type="button">Se connecter</button>
            <p>{message}</p>
        </form></>)
}
export default Login;
