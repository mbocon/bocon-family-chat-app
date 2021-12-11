import { useState } from 'react';
import axios from 'axios';

const projectID= '1468a7c9-0beb-43bf-a8a1-f762a8af3e3f'

function LoginForm() {
    const [userName, setUserName] = useState('');
    const [userSecret, setuserSecret] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID': projectID, 'User-Name': userName, 'User-Secret': userSecret };
        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });
            localStorage.setItem('userName', userName);
            localStorage.setItem('userSecret', userSecret);

            window.location.reload();
            setError('');
        } catch (error) {
            setError('Invalid credentials');
        }
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Bocon Family Chat</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} className='input' placeholder='Username' required />
                    <input type="password" value={userSecret} onChange={(e) => setuserSecret(e.target.value)} className='input' placeholder='Password' required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className='error'>{error}</h2>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;