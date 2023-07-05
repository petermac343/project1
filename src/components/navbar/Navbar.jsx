// import { useState } from 'react'
import React, {useState} from 'react'

import './Navbar.css'
import {RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Menu =()=>(
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#what">What is GPT</a></p>
    <p><a href="#possibility">Open AI</a></p>
    <p><a href="#features">Case Studies</a></p>
    <p><a href="#blog">Library</a></p>
  </>
)
const Icons =()=>(
  <>
    <p>Sign In</p>
    <button type='button'>Sign Up</button>
  </>
)
// BEM- block element modifier
const Navbar = () => {
  const[toggleMenu, setToggleMenu] =useState(false)
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src="./logo.svg" alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu/>
        </div>

      </div>
      <div className="gpt3__navbar-sign">
        <Icons/>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu 
        ?<RiCloseLine color="#fff" size={27} onClick={()=>setToggleMenu(false)}/>: <RiMenu3Line color="#fff" size={27} onClick={()=>setToggleMenu(true)}/>
        }
        {toggleMenu &&(
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className="gpt3__navbar-menu_container-links">
            <Menu/>
            <div className="micons">
              <Icons/>
            </div>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default Navbar