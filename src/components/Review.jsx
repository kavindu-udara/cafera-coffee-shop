import React from 'react'
import ReviewPic1 from '../assets/pic-1.png'
import ReviewPic2 from '../assets/pic-2.png'
import ReviewPic3 from '../assets/pic-3.png'
import ReviewPic4 from '../assets/pic-4.png'

const Review = () => {
    return (
        <section className="review" id="review">
            <h1 className="heading">reviews <span>what people says</span></h1>

            <div className="swiper review-slider">
                <div className="swiper-wrapper">
                    <div className="swiper-slide box">
                        <i className="fas fa-quote-left"></i>
                        <i className="fas fa-quote-right"></i>
                        <img src={ReviewPic1} alt="" />
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, earum quis dolorem quaerat tenetur
                                illum.</p>
                            <h3>john deo</h3>
                            <span>satisfied client</span>
                    </div>

                    <div className="swiper-slide box">
                        <i className="fas fa-quote-left"></i>
                        <i className="fas fa-quote-right"></i>
                        <img src={ReviewPic2} alt="" />
                        <div className="stars" >
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum optio quasi ut, illo ipsam
                            assumenda.</p>
                        <h3>john deo</h3>
                        <span>satisfied client</span>
                    </div>

                    <div className="swiper-slide box">
                        <i className="fas fa-quote-left"></i>
                        <i className="fas fa-quote-right"></i>
                        <img src={ReviewPic3} alt="" />
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius asperiores aliquam hic quis!
                            Eligendi, aliquam.</p>
                        <h3>john deo</h3>
                        <span>satisfied client</span>
                    </div>

                    <div className="swiper-slide box">
                        <i className="fas fa-quote-left"></i>
                        <i className="fas fa-quote-right"></i>
                        <img src={ReviewPic4} alt="" />
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi modi perspiciatis distinctio
                            velit aliquid a.</p>
                        <h3>john deo</h3>
                        <span>satisfied client</span>
                    </div>
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </section>
    )
}

export default Review