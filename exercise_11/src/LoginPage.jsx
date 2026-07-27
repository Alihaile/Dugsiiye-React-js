import { useState } from "react";

const LoginPage = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const handleLogin = () => {
        if (userName === '' || password === '')
            return;
        setIsLogin(true)
    }

    const handleLogout = () => {
        setUserName('')
        setPassword('')
        setIsLogin(false)
    }

    return (
        <>
            {isLogin ? (<div>
                <h2>Welcome, {userName}!</h2>
                <br />
                <button onClick={handleLogout}>Logout</button>
            </div>) : (
                <div>

                    <h1>Login</h1>
                    <br />
                    Username: <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} required />
                    <br />
                    Password: <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <br />
                    <button onClick={handleLogin}>Login</button>
                </div>
            )}
        </>
    )
}

export default LoginPage;