import React from 'react'
import Homeimg1 from '../assets/home-bg-coffe.png'
import Homeimg2 from '../assets/home-img-2.png'
import Homeimg3 from '../assets/home-img-3.png'

import HappyCoffeCupImg from '../assets/happy-coffee-mug.jpg';
import DarkCoffeCup from '../assets/black-table-coffe.jpg';

import Icon1 from '../assets/menu-1.png';
import Icon2 from '../assets/menu-2.png';
import Icon3 from '../assets/menu-3.png';

import Icon4 from '../assets/menu-4.png';
import Icon5 from '../assets/menu-5.png';
import Icon6 from '../assets/menu-6.png';

const Home = () => {
    return (
        <div>
            <section className='home' id='home'>
                <div className="row">
                    <div className="content">
                        <h3>Fresh Coffee in everytime</h3>
                        <a href="#" className='btn'>buy now</a>
                    </div>
                    <div className="image">
                        <img src={Homeimg1} alt="home img 1" />
                    </div>
                    <div className="image-slider">
                        <img src={Homeimg1} alt="" />
                        <img src={Homeimg2} alt="" />
                        <img src={Homeimg3} alt="" />
                    </div>
                </div>
            </section>

            <section className="about" id='about'>
                <h1 className="heading">vision <span>our vision</span></h1>
                <div className="row">
                    <div className="image">
                        <img src={HappyCoffeCupImg} alt="about" />
                    </div>
                    <div className="content">
                        <h3 className="title"> Delicious Coffee In A Bag!</h3>
                        <p>Bringing joy to coffee lovers everywhere with easy, delicious coffee in a bag - because great coffee should be simple and shared.</p>
                        <a href="#" className="btn">read more</a>
                        <div className="icons-container">
                            <div className="icons">
                                <img src={Icon1} alt="" />
                                <h3>Quality Coffee</h3>
                            </div>
                            <div className="icons">
                                <img src={Icon2} alt="" />
                                <h3>Delicios Coffee</h3>
                            </div>
                            <div className="icons">
                                <img src={Icon3} alt="" />
                                <h3>Simple Bag</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
            <section className="about" id='about' style={{
                marginBottom: "20px"
            }}>
                <h1 className="heading">mission <span>our mission</span></h1>
                <div className="row">
                    <div className="content">
                        <h3 className="title">One cup at a time!</h3>
                        <p>Our mission is to share the love of coffee with the world, one cup at a time. We aim to source the finest beans, roast them to perfection, and deliver a rich, satisfying experience to every customer. With every sip we hope to bring warmth, comfort and a moment of pure enjoyment to people's lives in their daily activities.</p>
                        <a href="#" className="btn">read more</a>
                        <div className="icons-container">
                            <div className="icons">
                                <img src={Icon4} alt="" />
                                <h3>finest beans</h3>
                            </div>
                            <div className="icons">
                                <img src={Icon5} alt="" />
                                <h3>love of coffee</h3>
                            </div>
                            <div className="icons">
                                <img src={Icon6} alt="" />
                                <h3>rich experience</h3>
                            </div>
                        </div>
                    </div>
                    <div className="image">
                        <img src={DarkCoffeCup} alt="about" />
                    </div>
                </div>
            </section>

            <br />
            <br />
            <br />

        </div>
    )
}

export default Home