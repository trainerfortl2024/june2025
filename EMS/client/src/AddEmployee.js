import React, { useState } from 'react';

export default function AddEmployee() {
  const [name, setName] = useState('');
  const [salary, setSalary] = useState(0);
//   const [msg, setMsg] = useState('');

  const addEmployeeFn = () => {
    console.log('called');
    fetch('http://localhost:4000/employee', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        salary: parseInt(salary)
      })
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to add employee');
        }
        return response.text();
      })
      .then((data) => {
        console.log('Response:', data);
       
        // Reset form
        setName('');
        setSalary(0);
      })
      .catch((err) => {
        console.error(err.message);
        
      });
  };

  return (
    <div>
      <h3>Employee Management System</h3>
      <hr />

      <table border={0} width={'50%'} align="center">
        <tbody>
          <tr>
            <th>Name</th>
            <td>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <th>Salary</th>
            <td>
              <input
                type="number"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td colSpan={2} align="center">
              <button onClick={addEmployeeFn}>Submit</button>
            </td>
          </tr>
          <tr>
            <td colSpan={2} align="center">
              {/* <span>{msg}</span> */}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
