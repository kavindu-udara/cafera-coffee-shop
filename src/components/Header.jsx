import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

const Header = () => {

    const active = {
        fontWeight: 'bold',
        textDecoration: 'underline'
    }

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
                    <a><NavLink to='/' style={({ isActive }) => isActive ? active : null}>home</NavLink></a>
                    <a ><NavLink to='/about' style={({ isActive }) => isActive ? active : null}>about</NavLink></a>
                    <a><NavLink to='/store' style={({ isActive }) => isActive ? active : null}>store</NavLink></a>
                    <a><NavLink to='/review' style={({ isActive }) => isActive ? active : null}>review</NavLink></a>
                    <a><NavLink to='/contactus' style={({ isActive }) => isActive ? active : null}>contact us</NavLink></a>
                </nav>

                <a href="#" class="btn">
                    <i class="fa fa-user-circle" aria-hidden="true"></i>
                </a>
            </div>
        </>
    )
}

export default Header