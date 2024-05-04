import React, { useState } from 'react'
import { useNavigate , Link } from 'react-router-dom'
import './signIn.css'
import Navbar from './Navbar'

export default function SignIn() {
    const navigate = useNavigate()
    const [username_input, setusername_input] = useState('')
    const [password_input, setpassword_input] = useState('')


    const signIn = async (e) => {
        e.preventDefault();
        const userData = {
            username: username_input,
            password: password_input,
        };

        const response = await fetch('http://localhost:5341/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
        const json = await response.json();

        if (!json.success) {
            alert(json.msg)
        } else {
            // alert("user created log in please")
            localStorage.setItem("authToken", json.token);
            localStorage.setItem("username", json.username);
            console.log(localStorage.getItem("authToken"))
            navigate("/notescreen")
        }
    }

    function handlechange1(event) {
        setusername_input(event.target.value)
    }
    function handlechange2(event) {
        setpassword_input(event.target.value)
    }

    return (
        <div>

            <Navbar></Navbar>

            <div className='container-signIn'>
                <form className='form-signIn'>
                    {/* <h2>Sign In</h2> */}
                    <div className='inputField'>
                        {/* <label>Username : </label> */}
                        <input type='text' name='username' placeholder='username' value={username_input} onChange={handlechange1} required></input>
                    </div>
                    <div className='inputField'>
                        {/* <label>Password : </label> */}
                        <input type='text' name='Password' placeholder='password' value={password_input} onChange={handlechange2} required></input>
                    </div>
                    <div className='forgotPass'>
                        <h6>Forgot Password</h6>
                    </div>
                    <button type="submit" onClick={signIn}>Sign In</button>
                    <div className='lastMsg'>
                        <p>Dont have an account ? <Link to = {"/signUp"}>Sign Up</Link></p>
                    </div>
                </form>


            </div>
        </div>
    )
}
