import { useState } from "react";
import axios from "axios";  
import { Link } from "react-router-dom";

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
             const response = await axios.post('http://localhost:3001/api/register', { username, password, age });
             setUsername('');
             setPassword('');
             setAge('');
             alert('Signup Successful! Your ID: ' + response.data.userId);
        } catch (error) {
            const message = error.response?.data || error.message || 'Please try again.';
            alert('Signup Failed: ' + message);
        }
    };
  return (
    <div>
        <div className="ngilo-user">
            <div className="user-login">
                <h2>Sign Up</h2>
                <form onSubmit={handleSignup} autoComplete="off">
                    <label>Username</label>
                    <input type="text" autoComplete="off" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    <label>Password</label>
                    <input type="password" autoComplete="new-password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <button className='user-btn' type="submit">Sign Up</button>
                </form>
                <Link to={"/"}> 
                <button className="log"> Already have an account?<br></br> back to Log In</button>
                </Link>

            </div>
        </div>
    </div>
  );
};

export default Register;