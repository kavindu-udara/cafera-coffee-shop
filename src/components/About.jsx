import React from 'react'
import AboutImage from '../assets/cafera_logo_pic.jpg';
import Icon1 from '../assets/about-icon-1.png';
import Icon2 from '../assets/about-icon-2.png';
import Icon3 from '../assets/about-icon-3.png';
import members from '../assets/group-members.png';

import coffeCultivation1 from '../assets/coffe-cultivation1.jpg';
import coffeCultivation2 from '../assets/coffe-cultivation2.jpg';
import coffeCultivation3 from '../assets/coffe-cultivation3.jpg';

const About = () => {
    return (
        <>
            <section className="about" id='about'>
                <h1 className="heading">about us <span>why choose us</span></h1>
                <div className="row">
                    <div className="image">
                        <img src={AboutImage} alt="about" style={{ marginLeft: 'auto', marginRight: 'auto' }} />
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
            <section className="about" id='about'>
                <h1 className="heading">our team<span>our team</span></h1>
                <div className="" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={members} alt="about" style={{ maxWidth: "100%" }} />
                </div>
                <div className="row">
                </div>
            </section>
            <section className="about" id='about' style={{marginTop: '-100px'}}>
                <h1 className="heading">programs<span>our projects</span></h1>
                <div className="row">
                    <div className="coffeCultImage">
                        <img src={coffeCultivation2} alt="about" style={{ marginLeft: 'auto', marginRight: 'auto' }} />
                    </div>
                    <div className="coffeCultImage">
                        <img src={coffeCultivation1} alt="about" style={{ marginLeft: 'auto', marginRight: 'auto' }} />
                    </div>
                    <div className="coffeCultImage">
                        <img src={coffeCultivation3} alt="about" style={{ marginLeft: 'auto', marginRight: 'auto' }} />
                    </div>
                    <div className="content">
                        <h3 className="title">comprehensive training programs!</h3>
                        <p>Through our initiatives, we have implemented comprehensive training programs aimed at equipping farmers with the knowledge and resources needed to adopt environmentally-friendly cultivation methods. From soil conservation techniques to water management practices, we have empowered farmers to enhance the health of their land while maximizing yields in a sustainable manner.</p>
                        <p>In addition to promoting sustainable farming practices, we have also championed fair trade principles, ensuring that farmers receive fair compensation for their hard work and dedication. By fostering transparent and equitable relationships within the coffee supply chain, we have helped improve the livelihoods of countless farmers and their families.</p>
                        <p>Beyond the farm, our initiatives have extended into the broader community, where we have invested in infrastructure projects to enhance the quality of life for coffee-growing communities. From building schools and healthcare facilities to supporting clean water initiatives, we are dedicated to making a positive impact on the lives of those who rely on coffee cultivation for their livelihoods.</p>
                        <p>Thanks to the dedication of our team and the support of our customers, our Coffee Farm Sustainability Initiatives have not only been successful but have also served as a model for sustainable development in the coffee industry. Together, we are making a difference – one cup of coffee at a time.</p>
                        <a href="#" className="btn">read more</a>
                    </div>
                </div>
            </section>
            <br />
            <br />
        </>
    )
}

export default About