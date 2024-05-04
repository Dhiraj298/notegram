import React from 'react'
import img4 from './Home Screen 3.png'
import './home.css'
import Notes from './Notes'
import Navbar from './Navbar'

const Home = () => {
  return (

    <div>

        <Navbar></Navbar>

    <div className='Home'>


          <div className='Text'>
               
             <h1>
                 All Your Notes , <br></br> Organized , <br></br> Combined .
              </h1>
            <h5>
              The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more
              </h5>

          </div>
          <img className='image' src={img4} alt='img4'></img>
    </div>

    <Notes></Notes>
    </div>
  )
}

export default Home