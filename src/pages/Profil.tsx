import "../styles/Profil.css"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"

function Profil() {
    const location = useLocation()

    if (location.state) {
        return (
            <div className="profil">
                <div className="enteteProfil">
                    <img className="photoProfil" src={location.state.image} alt="Photo de profil" />
                    <h1>Bonjour {location.state.firstName} {location.state.lastName}</h1>
                    <p>{location.state.username}</p>
                </div>

                <div className="blocProfil">
                    <h2>Mon compte</h2>
                    <p><strong>Identifiant :</strong> {location.state.id}</p>
                    <p><strong>Prénom :</strong> {location.state.firstName}</p>
                    <p><strong>Nom :</strong> {location.state.lastName}</p>
                    <p><strong>Pseudo :</strong> {location.state.username}</p>
                    <p><strong>Email :</strong> {location.state.email}</p>
                    <p><strong>Téléphone :</strong> {location.state.phone}</p>
                    <p><strong>Âge :</strong> {location.state.age} ans</p>
                    <p><strong>Genre :</strong> {location.state.gender}</p>
                    <p><strong>Date de naissance :</strong> {location.state.birthDate}</p>
                    <p><strong>Rôle :</strong> {location.state.role}</p>
                </div>

                {location.state.address && (
                    <div className="blocProfil">
                        <h2>Mon adresse</h2>
                        <p><strong>Rue :</strong> {location.state.address.address}</p>
                        <p><strong>Code postal :</strong> {location.state.address.postalCode}</p>
                        <p><strong>Ville :</strong> {location.state.address.city}</p>
                        <p><strong>Pays :</strong> {location.state.address.country}</p>
                    </div>
                )}

                {location.state.company && (
                    <div className="blocProfil">
                        <h2>Mon entreprise</h2>
                        <p><strong>Nom :</strong> {location.state.company.name}</p>
                        <p><strong>Service :</strong> {location.state.company.department}</p>
                        <p><strong>Poste :</strong> {location.state.company.title}</p>
                    </div>
                )}
            </div>
        )
    }

    return (
        <div className="profil">
            <h1>Mon profil</h1>
            <p>Connectez-vous pour consulter votre profil.</p>
            <Link to="/connexion">Se connecter</Link>
        </div>
    )
}
export default Profil;
