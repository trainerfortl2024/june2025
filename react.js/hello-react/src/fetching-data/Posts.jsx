import React, { useEffect, useState } from 'react'

export default function Posts() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    //async await

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')//records
            .then(response => response.json())//json
            .then(jsonData => {
                setData(jsonData)
                setLoading(false)
            }
            )
            .catch(err => {setError(err);console.log(err.message)})
    }, [data])


    if (loading) return <p>Loading.....</p>
    if (error) return <p>Error : {error.message}</p>

    return (
        <div>
            {
                (data)  ? (
                data.map(post => (
                    <p>{post.id} - {post.title}</p>
                ))
            
                )
                :
                ({error})
            }
           
         
        </div>
    )
}
