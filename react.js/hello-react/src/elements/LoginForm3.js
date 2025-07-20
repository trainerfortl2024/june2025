import React,{useReducer} from 'react';

function formReducer(state, action) {
  switch (action.type) {
    case 'SET_USERNAME':
      return { ...state, username: action.value };
    case 'SET_PASSWORD':
      return { ...state, password: action.value }; // {username:'ramesh',password:'admin'}
    case 'RESET':
      return { username: '', password: '' };
    default:
      return state;
  }
}

function LoginForm3() {
  // useReducer hook to manage the form's username and password state
  const [formState, dispatch] = useReducer(formReducer, { username: '', password: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = formState;
    if (!username || !password) {
      alert('Please fill in all fields');
    } else {
      console.log('Username:', username);
      console.log('Password:', password);
      dispatch({ type: 'RESET' }); // Reset form after submission
    }
  };

  return (
    <div>
      <h1>Login Form with useReducer</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={formState.username}
            onChange={(e) => dispatch({ type: 'SET_USERNAME', value: e.target.value })} // Dispatch action for username
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={formState.password}
            onChange={(e) => dispatch({ type: 'SET_PASSWORD', value: e.target.value })} // Dispatch action for password
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm3;