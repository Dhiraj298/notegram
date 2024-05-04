import React from 'react'
import './navbar.css'

import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {

    const token = localStorage.getItem('authToken');
    const username = localStorage.getItem('username');
    const signout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('username');
    }


    return (


        <div >
            <nav className="navbar">
                <div className="container">
                    {/* <a href="#" className="logo">Your Logo</a> */}
                    <Link to={'/'} className='logo'><span>Your Logo</span></Link>
                    <ul className="nav-links">
                        <li>
                            <NavLink to={'/'} className='link'><span>Home</span></NavLink>
                        </li>
                        {
                            token ?
                                <li>
                                    <NavLink to={'/login'} onClick={signout} className='link'><span>log out</span></NavLink>
                                </li>
                                :

                                <li li >
                                    <NavLink to={'/login'} className='link'><span>login</span></NavLink>
                                </li>
                        }

                        {
                            token ?
                                null :

                                <li>
                                    <NavLink to={'/signup'} className='link'><span>Signup</span></NavLink>
                                </li>

                        }

                        <li>
                            <NavLink to={'/notescreen'} className='link'><span>notescreen</span></NavLink>
                        </li>
                        {
                            username?

                            <li>
                                    <span>{username}</span>
                            </li> : null

                            
                        }
                    </ul>
                </div>
            </nav >
        </div >
    )
}

export default Navbar