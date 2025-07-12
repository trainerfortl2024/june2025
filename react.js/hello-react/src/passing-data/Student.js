import React from 'react'

export default function Student ({ studCount, studHandler }) {
    
    const studAddHandler = () => {
        studCount++; // 21
        studHandler(studCount);
    }
    return (
        <div>
            Stud count = {studCount}
            <button onClick={studAddHandler}>Add</button>
        </div>
    )
}
