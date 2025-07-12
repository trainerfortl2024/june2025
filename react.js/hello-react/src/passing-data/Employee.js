import React from 'react'

export default function ({empCount,empHandler}) {

    const empAddHandler = () => {
        empCount++; // 11
        empHandler(empCount);
    }
  return (
    <div>
        Emp count = {empCount}
        <button onClick={empAddHandler}>Add Employee</button>
    </div>
  )
}
