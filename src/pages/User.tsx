import { useParams } from "react-router-dom"



function User() {
    let { username } = useParams();
    return (
        <h1>Hello {username} !</h1>
    )
}

export default User