import React from 'react'
import SearchBar from './SearchBar'
import logo from '../assets/logo-udemy.svg'
import cart_icon from '../assets/cart_icon.svg'
import language_icon from '../assets/language.svg'

import menu from '../assets/menu_icon.png'
// TODO (move styles)
import '../modules/styles.css';
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav>
      <img class="menu" src={menu} alt="menu"></img>
      <Link to="/"><img src={logo} className="logo pointer-on-hover" alt="logo" /></Link>

      <div className="nav-drop-down purple-on-hover pointer-on-hover">Categories</div>

      <SearchBar></SearchBar>

      <div className="nav-drop-down purple-on-hover pointer-on-hover">Udemy Business</div>
      <div className="nav-drop-down purple-on-hover pointer-on-hover">Teach on Udemy</div>

      <img src={cart_icon} className="cart purple-on-hover pointer-on-hover" alt="cart" />

      <div className="nav-buttons">
        <button class="log-in custom-button pointer-on-hover">Log in</button>
        <button class="sign-up custom-button pointer-on-hover">Sign up</button>
        <button class="lang custom-button pointer-on-hover"><img src={language_icon} alt="language" /></button>
      </div>

    </nav>
  )
}

export default NavBar