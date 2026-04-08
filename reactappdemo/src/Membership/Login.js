import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    const [username, setUsername] = useState("saijagdale@gmail.com");
    const [password, setPassword] = useState("12345");

    const clicklogin = () => {
        if (username === "saijagdale@gmail.com"
            && 
            password === "12345")
            {
                console.log("valid user");
                navigate("/Flowers");
            } 
            else 
            {
            console.log("invalid user");
        }
    };

    return (
        <div className="text-center">
            <h2>Login</h2>

            <label>Username:</label>
            <input
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
            /><br /><br />

            <label>Password:</label>
            <input
                type={password}
                value={password}
                onChange={(event)=>setPassword(event.target.value)}
            /><br /><br />

            <button onClick={clicklogin}>Login</button>
        </div>
    );
}

export default Login;