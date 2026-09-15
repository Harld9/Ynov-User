import { useLocation } from "react-router-dom"

function Profil() {
    const location = useLocation()

    if (location.state) {
        return (
            <h1>Bonjour {location.state.firstName} {location.state.lastName}</h1>
        )
    }

    return (
        <p>Connexion refusr</p>
    )
}
export default Profil;
