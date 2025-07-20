import React from 'react'
import { useFormFields } from './useFormFields'

export default function LoginForm4() {

    const [formState, handleChange, resetFields] = useFormFields({ username: '', password: '' })

    const handleSubmit = (event) => {
        event.preventDefault();
        const { username, password } = formState;

        if (!username || !password) {
            alert('Please fill in all fields');
        } else {
            console.log('Username:', username);
            console.log('Password:', password);
            resetFields(); // Reset fields after submission
        }
    }

    return (
        <div>
            <h1>Login Form with Custom Hook</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={formState.username}
                        onChange={handleChange} // handleChange from custom hook
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formState.password}
                        onChange={handleChange} // handleChange from custom hook
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>

    )
}
