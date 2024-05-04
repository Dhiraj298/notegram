import React, { useState } from 'react'
import './signup.css'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

function SignUp() {
    const navigate = useNavigate()
    const [username_input , setusername_input] = useState('')
    const [password_input , setpassword_input] = useState('')
    const [profession_input , setprofession_input] = useState('')

    function handlechange1 (event){
        setusername_input(event.target.value)
    }
    function handlechange2 (event){
        setpassword_input(event.target.value)
    }
    function handlechange3 (event){
        setprofession_input(event.target.value)
    }
    


    const sign_Up = async (e)=> {
        e.preventDefault();
        const userData = {
          username: username_input,
          password: password_input,
          profession : profession_input

        };
        
        // alert("signup called ")
        const response = await fetch('http://localhost:5341/users/signUp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        })
        const json = await response.json();

        if(!json.success){
          alert("user not created")
        }else{
          alert("user created log in please")
          navigate("/login")
        }
        
      }      
    return (
        <div>
            <Navbar></Navbar>
            <form className='form-signUp'>
                {/* <h2>Sign In</h2> */}
                <div className='inputField'>
                    <input type='text' name='username' placeholder='username' value={username_input} onChange={handlechange1} required></input>
                </div>
                <div className='inputField'>
                    <input type='text' name='Password' placeholder='password' value={password_input} onChange={handlechange2} required></input>
                </div>

                <div className='inputField'>
                    <input type='text' name='profession' placeholder='Profession' value={profession_input} onChange={handlechange3} required></input>
                </div>

                <button type="submit" onClick={sign_Up}>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp