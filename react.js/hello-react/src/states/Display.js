import React, { useState } from 'react'

export default function Display() {

    const [text, setText] = useState('')
    // const handleChange = (event) => {
    //     setText(event.target.value)
    // }
    return (
        <div>
            Enter Value <input type="text"
                // onChange={handleChange}
                onChange={(event) => { setText(event.target.value)}}
            /> <br />
            {text}
        </div>
    )
}
