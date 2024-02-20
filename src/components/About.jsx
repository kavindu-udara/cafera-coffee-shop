import React from 'react'
import AboutImage from '../assets/cafera_logo_pic.jpg';
import Icon1 from '../assets/about-icon-1.png';
import Icon2 from '../assets/about-icon-2.png';
import Icon3 from '../assets/about-icon-3.png';

const About = () => {
    return (
        <section className="about" id='about'>
            <h1 className="heading">about us <span>why choose us</span></h1>

            <div className="row">
                <div className="image">
                    <img src={AboutImage} alt="about" />
                </div>
                <div className="content">
                    <h3 className="title">what's make our coffee special!</h3>
                    <p>At the core of our operation lies a commitment to sourcing the highest-quality raw coffee beans from trusted suppliers, ensuring consistency and excellence in every batch. Through meticulous processing and packaging techniques, we maintain the integrity and premium quality of our coffee beans, encapsulating them in individual, tea bag-like sachets.</p>
                    <a href="#" className="btn">read more</a>

                    <div className="icons-container">
                        <div className="icons">
                            <img src={Icon1} alt="" />
                            <h3>Quality Coffee</h3>
                        </div>
                        <div className="icons">
                            <img src={Icon2} alt="" />
                            <h3>Our Branches</h3>
                        </div>
                        <div className="icons">
                            <img src={Icon3} alt="" />
                            <h3>Free Delivery</h3>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default About