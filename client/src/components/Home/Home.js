import React from 'react'
import './Home.css'
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <div className='container-fluid home'>
        <div className="container home-content">
          <h1>Hi I'am <span style={{color:'orange'}}>Tanvir Niloy</span></h1>
          <h3>
          <Typewriter
          options={{
            strings: ['Programmer', 'Self Learner','FullStack Dev'],
            autoStart: true,
            loop: true,
          }}
        />
          </h3>
          <div className="button-for-action">
            <div className="hireme-button">
              Hire me
            </div>
            <div className="resume-button">
              Download Resume
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home