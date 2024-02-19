import React from 'react'

const Footer = () => {
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
                <a href="#home"><i className="fas fa-arrow-right"></i> home</a>
                <a href="#about"><i className="fas fa-arrow-right"></i> about</a>
                <a href="#menu"><i className="fas fa-arrow-right"></i> menu</a>
                <a href="#review"><i className="fas fa-arrow-right"></i> review</a>
                <a href="#book"><i className="fas fa-arrow-right"></i> book</a>
            </div>
            <div className="box">
                <h3>contact info</h3>
                <a href="#"><i className="fas fa-phone"></i> +123-456-7890</a>
                <a href="#"><i className="fas fa-phone"></i> +111-222-3333</a>
                <a href="#"><i className="fas fa-envelope"></i> coffee@gmail.com</a>
                <a href="#"><i className="fas fa-envelope"></i> Perú, Lima</a>
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
        <div className="credit">created by <span>cafera</span> | all rights reserved</div>
    </section>
  )
}

export default Footer