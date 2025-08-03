import React, { useEffect, useState } from 'react'

export default function Employee() {

    const [employee, setEmployee] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:4000/employee')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch employee details')
                }
                return response.json();
            })
            .then(data => {
                setEmployee(data)
            })
            .catch((err) => {
                setError(err.message);
            })
    },[employee])


    const css = {color:'red'}

    return (
        <div>
            <h3>Employee Management System</h3>
            <hr />
            
                <table border={1} bgcolor='yellow' align='center' width='50%'>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Salary</th>
                    </tr>
                    {
                        employee.map(emp => (
                            <tr style={css}>
                                <td>{emp.id}</td>
                                <td>{emp.name}</td>
                                <td>{emp.salary}</td>
                            </tr>
                        ))
                    }
                </table>
            
        </div>
    )
}
