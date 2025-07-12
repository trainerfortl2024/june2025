import React, { useState } from 'react'
//hooks - useState,useEffect,..
export default function Counter({c}) {
    const [count,setCount] = useState(c) //model

    // //controller
    // const incrementCount = () => {
    //     setCount(count+1)
    // }
  return (
    <div>
        Counter - {count} <br />
        <button onClick={() => {setCount(count+1)}}>Increment</button>
    </div> //view
  )
}
