
import Getstarted from './components/getstarted/Getstarted'
import Lastestproducts from './components/lastestproducts/Lastestproducts'
import Reviews from './components/reviews/Reviews'
import Footer from './components/footer/Footer'
import './index.css'
import {useState} from 'react'
import React from 'react'
import { MdDarkMode } from "react-icons/md"
import { CiLight } from "react-icons/ci"
import {FaBars} from "react-icons/fa"
import me from './assets/pexels-monica-turlui-7137539.jpg'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)

  return (
        <>
        <div className={darkMode ? 'dark-mode' : 'light-mode'} id='dm'>

          <div className="container1">
      <nav>
      <div className="logo">logo</div>
      <ul className='navItems'>
        <li><a href="home" className='homebtn'>home</a></li>
        <li><a href="home" className='products'>products</a></li>
      </ul>
      <div className='user'>
          <img className='user-img' src={me} alt="me" />
          <a href="home" className='username'>Username</a>
      </div>
        <button className='login-btn'>login</button>


        <div className='switch-checkbox'>
            <label className='switch'>
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)}/>
           <span className='slider round'></span>
            </label>
          </div>
        
        <div className="nav-products">
        <a href="home">all products</a>
        <a href="home">videography</a>
        <a href="home">photography</a>
        <a href="home">graphic design</a>
        </div>
        <div className="nav-profile">
        <a href="home">my profile</a>
        <a href="home">dashboard</a>
        </div>

        <div className='toggle-btn'><FaBars color="white" size="7vh" /></div>
        <div className="dropdown-menu">
        <li><a href="home">home</a></li>
        <li><a href="home" className='products-toggle'>products</a></li>
        <li><a href="home" className='username-toggle'>username</a></li>
        <li><button className='login-btn2'>login</button></li>
        <li><a href="link" className='dark-theme2' id='icon1'><MdDarkMode /></a></li>
        <li><a href="link"className='light-theme2'><CiLight size="2em" color='black'/></a></li>
        </div>
      </nav>
       </div>
       {/*=========== NAV-END============= */}
        <Getstarted />
        <Lastestproducts />
        <Reviews />
        <Footer />
        </div>
        
        </>
     
  )
}

export default App
