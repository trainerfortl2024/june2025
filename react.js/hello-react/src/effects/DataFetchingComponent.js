import React, { useEffect, useState } from 'react'

export default function DataFetchingComponent() {
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        console.log("loading")
        fetch('https://jsonplaceholder.typicode.com/posts/') //output
            .then((response) => response.json()) // output ({json data})
            .then((jsonData) => {
                setData(jsonData.slice(0, 10));
                setLoading(false);
            })
            .catch((error) => console.log("something went wrong " + error))


        return () => {
            //closing the resources / db
            console.log("Component unloaed ")
        }
    }, [])

    return (
        <div>
            <button onClick={() => { setA(a + 1) }}>A</button>
            <button onClick={() => { setB(b + 1) }}>B</button> <br />
            {a} - {b} <br />

            {/* {JSON.stringify(data)} */}
            {
                loading ? (
                <p> Loading .... </p>
            ) : (
                   
                    <ul>
                       {data.map((datam) => (
                        <li>{datam.title}</li>
                       ))}
                    </ul>
                )   
            }

        </div>
    )
}
