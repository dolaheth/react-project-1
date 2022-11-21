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
          <a href="https://www.linkedin.com/in/mohammed-abdullah-adnan-872a38226/">LinkedIn</a>
          </button>
      </div>
      <div className="protfolio">
        <div className="protfolio1">
          <h1 className='protfolio-title'>About</h1>
          <p className='protfolio-elaboration'>
            I'm 21 years old. I'm a self-learn to web 3 developer. I'm currently honing my Javascript skills and Solidity.
          </p>
        </div>
        <div className="protfolio2">
          <h1 className='protfolio-title'>Interest</h1>
          <p className='protfolio-elaboration'>
            Im interested in cryptocurrency  and have a bunch of asset in both hot wallet and cold wallet. I also have NFT project as its call Afric Guild. 
            I love to play sport like running ad going to the gym. I also love to go hiking during leisure time. 
          </p>
        </div>
      </div>
      <div className="social">
        <div>
          <a href="https://twitter.com/dolah___"><ion-icon name="logo-twitter"></ion-icon></a>
        </div>
        <div>
          <a href="https://www.instagram.com/dolah.eth/"> <ion-icon name="logo-instagram"></ion-icon></a>
        </div>
        <div>
          <a href="https://www.facebook.com/FIFAH11/"><ion-icon name="logo-facebook"></ion-icon></a> 
        </div>
        <div>
          <a href="https://github.com/dolaheth"> <ion-icon name="logo-github"></ion-icon></a>
        </div>
      </div>
      
    </div>
    </main>
  )
}

export default App
