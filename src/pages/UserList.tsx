import { Link } from 'react-router-dom'

function UserList() {
    const users = [
        {
            "first_name": 'Harry',
            "last_name": "Potter"
        },
        {
            "first_name": 'Alain',
            "last_name": "Chabat"
        },
        {
            "first_name": 'Kylie',
            "last_name": "Jenner"
        },
        {
            "first_name": 'Tom',
            "last_name": "Holland"
        },
        {
            "first_name": 'Thierry',
            "last_name": "Henry"
        },
        {
            "first_name": 'Kobe',
            "last_name": "Bryant"
        }
    ]


    return (
        <>
            {
                users.map((user) =>
                    <div>

                        <p>
                            name: {user.first_name}
                            <Link to={`/user/${user.first_name}`}>Go to user</Link></p>

                        <p>
                            last name: {user.last_name}
                        </p>

                    </div >
                )
            }
        </>)
}

export default UserList;