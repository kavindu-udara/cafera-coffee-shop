import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

const Header = () => {

    const handleMenu = () => {
        let menu = document.querySelector('#menu-btn');
        let navbar = document.querySelector('.navbar');
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    }

    return (
        <>
        <div className='header'>
            <div onClick={handleMenu} id="menu-btn" class="fas fa-bars"></div>
            <a href="#" class="logo">cafera <i class="fas fa-mug-hot"></i></a>

            <nav class="navbar">
                <a href="#home"><NavLink to='/'>home</NavLink></a>
                <a href="#about"><NavLink to='/about'>about</NavLink></a>
                <a href="#menu"><NavLink to='/store'>store</NavLink></a>
                <a href="#review"><NavLink to='/review'>review</NavLink></a>
                <a href="#book"><NavLink to='/contactus'>contact us</NavLink></a>
            </nav>

            <a href="#" class="btn">
            <i class="fa fa-user-circle" aria-hidden="true"></i>
            </a>
        </div>
        </>
    )
}

export default Header