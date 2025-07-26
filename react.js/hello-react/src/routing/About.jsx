// //Reach Router Navigation
// import {navigate} from '@reach/router'

// export default function About() {
//   return (
//     <div>
//         <h3>About Component</h3>
//         <button onClick={() => navigate('/')}>Go home</button>
//     </div>
//       )
// }




//React Router Navigation
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function About() {
    const navigate = useNavigate();
  return (
    <div>
        <h3>About Component</h3>
        <button onClick={() => {navigate('/')}}>Go home</button>
    </div>
      )
}
