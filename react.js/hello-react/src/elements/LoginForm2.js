import React from 'react';

function LoginForm2() {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form from refreshing the page

    const username = event.target.elements.username.value; // Accessing username directly
    const password = event.target.elements.password.value; // Accessing password directly

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
            name="username" // Name attribute to access the input field
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password" // Name attribute to access the input field
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
