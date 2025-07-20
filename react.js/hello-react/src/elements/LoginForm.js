//Controlled Elements
import React, { useState } from 'react';

function LoginForm() {
  const [username, setUsername] = useState(''); // State to store username
  const [password, setPassword] = useState(''); // State to store password

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form from refreshing the page
    if (!username || !password) {
      alert('Please fill in all fields');
    } else {
      console.log('Username:', username);
      console.log('Password:', password);
    }
  };

  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Update username state
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update password state
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;