import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {

    const navigate=useNavigate();

    const [firstname, setFirstname] = useState("Sai");
    const [lastname, setLastname] = useState("Jagdale");
    const [email, setEmail] = useState("saijagdale@gmail.com");
    const [password, setPassword] = useState("12345");
    const [contactnumber, setContactnumber] = useState("7843053149");

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate("/Login");

        const user = {
            firstname,
            lastname,
            email,
            password,
            contactnumber
        };

        console.log(user);
    };

    return (
        <div>
            <h3>New Customer Registration</h3>

            <form onSubmit={handleSubmit}>

                <label>First Name:</label>
                <input
                    type="text"
                    value={firstname}
                    onChange={(event) => setFirstname(event.target.value)}
                />
                <br /><br />

                <label>Last Name:</label>
                <input
                    type="text"
                    value={lastname}
                    onChange={(event) => setLastname(event.target.value)}
                />
                <br /><br />

                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <br /><br />


                <label>Contact Number:</label>
                <input
                    type="text"
                    value={contactnumber}
                    onChange={(event) => setContactnumber(event.target.value)}
                />
                <br /><br />


                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <br /><br />



                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}

export default Register;