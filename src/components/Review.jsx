import React, { useEffect } from 'react'
import ReviewPic1 from '../assets/pic-1.png'
import ReviewPic2 from '../assets/pic-2.png'
import ReviewPic3 from '../assets/pic-3.png'
import ReviewPic4 from '../assets/pic-4.png'

const Review = () => {

    useEffect(() => {
        document.querySelectorAll('.image-slider img').forEach(images => {
            images.onclick = () => {
                var src = images.getAttribute('src');
                document.querySelector('.main-home-image').src = src;
            };
        });

        var swiper = new Swiper(".review-slider", {
            spaceBetween: 20,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            loop: true,
            grabCursor: true,
            autoplay: {
                delay: 7500,
                disableOnInteraction: false,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1
                },
                768: {
                    slidesPerView: 2
                }
            },
        });
    })

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
                        <p>Good Service.</p>
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
                        <p>Quality products and amazing customer service.</p>
                        <h3>Mia Thompson</h3>
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
                        <p>Very tasty and fragrant coffee.</p>
                        <h3>Noah Carter</h3>
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
                        <p>Fast delivery time.</p>
                        <h3>Emily Nguyen</h3>
                        <span>satisfied client</span>
                    </div>
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </section>
    )
}

export default Review