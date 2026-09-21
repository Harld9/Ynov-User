import Erreur from "./Erreur"
import { useParams } from 'react-router-dom'
import axios from "axios";
import { useEffect, useState } from "react";
import type { User } from "../types/user";

function UserPage() {
    let { id } = useParams();
    const url = `https://dummyjson.com/users/${id}`
    const [user, setUser] = useState<User>()
    const [chargement, setChargement] = useState(true)
    const [introuvable, setIntrouvable] = useState(false)

    useEffect(() => {
        let actif = true;
        setChargement(true);
        setIntrouvable(false);
        setUser(undefined);

        if (!id || !Number.isInteger(Number(id)) || Number(id) <= 0) {
            setIntrouvable(true);
            setChargement(false);
            return;
        }

        (async () => {
            try {
                const response = await axios.get<User>(url);
                if (actif) {
                    setUser(response.data);
                }
            } catch (e) {
                if (actif) {
                    if (axios.isAxiosError(e) && e.response?.status === 404) {
                        setIntrouvable(true);
                    } else {
                        console.error(e);
                    }
                }
            } finally {
                if (actif) {
                    setChargement(false);
                }
            }
        })();

        // Ignore une ancienne réponse si on change de page ou d'identifiant.
        return () => { actif = false; };
    }, [id, url])

    if (introuvable) { return <Erreur /> }
    if (chargement) { return <p>Chargement...</p> }
    if (!user) { return null }

    return (<>
        <div>
            <p>name : {user.firstName}</p>
            <p>last name : {user.lastName}</p>
        </div>
    </>)
}

export default UserPage;
