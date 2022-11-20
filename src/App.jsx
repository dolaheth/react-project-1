import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  return (
    <main>
    
    <img src='./src/assets/dollah.jpeg' className="dollah"/>
    <div className="content">
      <div className="profile">
        <h1 className='name'>ABDULLAH ADNAN</h1>
        <h2 className='occupation'>Beginner Developer</h2>
        <h3 className='website'> <a href="mailto:abdullahadnn11@gmail.com">Dollah Website</a></h3>
      </div>

      <div className="clear"></div>
      <div className='button'>
        <button className='email-box'>
          <ion-icon name="mail-outline"></ion-icon>
          <a href="mailto:abdullahadnn11@gmail.com">Email</a>
          </button>
        <button className='linkedin-box'>
        <ion-icon name="logo-linkedin"></ion-icon>
          LinkedIn
          </button>
      </div>
      <div className="protfolio">
        <div className="protfolio1">
          <h1 className='protfolio-title'>About</h1>
          <p className='protfolio-elaboration'>Lorem, ipsum dolor sit amet consec
            Lorem ipsum dolor sit amet, consectetur 
            adipisicing elit. Cupiditate corrupti voluptates 
            aperiam eaque quam veniam natus, eius amet nam rep
            reprehenderit illum necessitatibus officia!
          </p>
        </div>
        <div className="protfolio2">
          <h1 className='protfolio-title'>Interest</h1>
          <p className='protfolio-elaboration'>Lorem, ipsum dolor sit amet consec
            Lorem ipsum dolor sit amet, consectetur 
            adipisicing elit. Cupiditate corrupti voluptates 
            aperiam eaque quam veniam natus, eius amet nam rep
            reprehenderit illum necessitatibus officia!
          </p>
        </div>
      </div>
      <div className="social">
        <div>
      <ion-icon name="logo-twitter"></ion-icon>
      </div>
      <div>
      <ion-icon name="logo-instagram"></ion-icon>
      </div>
      <div>
      <ion-icon name="logo-facebook"></ion-icon>
      </div>
      <div>
      <ion-icon name="logo-github"></ion-icon>
      </div>
      </div>
      
    </div>
    </main>
  )
}

export default App
