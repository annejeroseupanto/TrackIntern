import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin =async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await fetch('http://localhost:3001/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();

            if (response.ok) {

                localStorage.setItem('user', JSON.stringify(data));
                setUsername('');
                setPassword('');
                navigate('/home');
            } else {
                setError(data || 'Invalid username or password');
            }
        } catch (err) {
            setError('Server error. Please try again later.');
        }
    };

    return (
        <div className='ngilo-user'>
            <div className='user-login'>
                <h2>Log In</h2>
                <form onSubmit={handleLogin} autoComplete="off">
                    <label>Username</label>
                    <input
                    placeholder='Username'
                    type="text"
                    autoComplete="off"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    />

                    <label>Password</label>
                    <input
                    placeholder='password'
                    type="password"
                    autoComplete="new-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />

                    <button className='user-btn' type="submit">Log In</button>
                </form>

                {error && <p style={{ color: 'red' }}>{error}</p>}

                <button className='back'
                    onClick={() => navigate("/SignUp")}>Dont have an account yet?<br></br> Sign up here!!!</button>
            </div>
        </div>
    );
};

export default Login;