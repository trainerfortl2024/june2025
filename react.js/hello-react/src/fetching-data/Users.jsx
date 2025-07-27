import React, { useEffect, useState } from 'react'

export default function Users() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                if (!response.ok) {
                    throw new Error('Failed to fetch users')
                }
                const data = await response.json();
                setUsers(data);
            }
            catch (error) {
                setError(error.message)
            }
            finally {
                setLoading(false)
            }
        }
        fetchUsers();

    }, [])

    if (loading) return <p>Loading.....</p>
    if (error) return <p>Error : {error}</p>

    return (
        <div>
            <h2>Users</h2>
            {
                users.map(user => (
                    <p>{user.id} - {user.name} - {user.email}</p>
                ))
            }

        </div>
    )
}
