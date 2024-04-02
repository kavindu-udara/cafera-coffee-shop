import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    const active = {
        fontWeight: 'bold',
        textDecoration: 'underline'
    }
  return (
    <section className="footer">
        <div className="box-container">
            <div className="box">
            <h3>our branches</h3>
                <a href="#"><i className="fas fa-arrow-right"></i> kandy</a>
                <a href="#"><i className="fas fa-arrow-right"></i> nuwara eliya</a>
                <a href="#"><i className="fas fa-arrow-right"></i> colombo</a>
                <a href="#"><i className="fas fa-arrow-right"></i> galle</a>
                <a href="#"><i className="fas fa-arrow-right"></i> kegalle</a>
            </div>
            <div className="box">
                <h3>quick links</h3>
                <a><NavLink to='/' style={({isActive}) =>  isActive ? active: null}><i className="fas fa-arrow-right"></i>home</NavLink></a>
                <a ><NavLink to='/about' style={({isActive}) =>  isActive ? active: null}><i className="fas fa-arrow-right"></i>about</NavLink></a>
                <a><NavLink to='/store' style={({isActive}) =>  isActive ? active: null}><i className="fas fa-arrow-right"></i>store</NavLink></a>
                <a><NavLink to='/review' style={({isActive}) =>  isActive ? active: null}><i className="fas fa-arrow-right"></i>review</NavLink></a>
                <a><NavLink to='/contactus' style={({isActive}) =>  isActive ? active: null}><i className="fas fa-arrow-right"></i>contact us</NavLink></a>

            </div>
            <div className="box">
                <h3>contact info</h3>
                <a href="#"><i className="fas fa-phone"></i> (081) 55 32 789</a>
                <a href="#"><i className="fas fa-phone"></i> +111-222-3333</a>
                <a href="#"><i className="fas fa-envelope"></i> cafera@cafera.com</a>
                <a href="#"><i className="fas fa-envelope"></i> 4th avenue, Hadineya, Kandy</a>
            </div>
            <div className="box">
                <h3>contact info</h3>
                <a href="#"><i className="fab fa-facebook-f"></i> facebook</a>
                <a href="#"><i className="fab fa-twitter"></i> twitter</a>
                <a href="#"><i className="fab fa-instagram"></i> instagram</a>
                <a href="#"><i className="fab fa-linkedin"></i> linkedin</a>
                <a href="#"><i className="fab fa-twitter"></i> twitter</a>
            </div>
            
        </div>
        <div className="credit">created by <span>evogen</span> | all rights reserved</div>
    </section>
  )
}

export default Footer