// //Reach Router Navigation
// import {navigate} from '@reach/router'

// export default function Contact() {
//   return (
//     <div>
//         <h3>Contact Component</h3>
//         <button onClick={() => navigate('/')}>Go home</button>
//     </div>
//       )
// }



//React Router Navigation
import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Contact() {
      const navigate = useNavigate();
  return (
    <div>
        <h3>Contact Component</h3>
        <button data-testid="contactID" onClick={() => {navigate('/')}}>Go home</button>
    </div>  )
}
