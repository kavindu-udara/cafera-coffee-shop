import React from 'react'
import menuImg1 from '../assets/menu-1.png'
import menuImg2 from '../assets/menu-2.png'
import menuImg3 from '../assets/menu-3.png'
import menuImg4 from '../assets/menu-4.png'
import menuImg5 from '../assets/menu-5.png'
import menuImg6 from '../assets/menu-6.png'
import CoffeBagImg from '../assets/home-bg-coffe.png'

const Store = () => {
  return (
    <section id='menu' className="menu">
        <h1 className="heading">buy now <span>popular items</span></h1>
        <div className="box-container">
            <a href="#" className="box">
                <img src={menuImg1} alt="" />
                <div className="content">
                    <h3>our special coffee</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus sit, iure errm</p>
                    <span style={{fontWeight: 'bold'}}>$9.99</span>
                    <span style={{marginLeft: '20px'}}>15<i className="fas fa-star"></i></span>
                    <br />
                    <button className='buy-btn'>buy now</button>
                    <button className='buy-btn'>add to cart</button>
                </div>
            </a>
            <a href="#" className="box">
                <img src={menuImg2} alt="" />
                <div className="content">
                    <h3>our special coffee</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus sit, iure errm</p>
                    <span style={{fontWeight: 'bold'}}>$7.99</span>
                    <span style={{marginLeft: '20px'}}>12<i className="fas fa-star"></i></span>
                    <br />
                    <button className='buy-btn'>buy now</button>
                    <button className='buy-btn'>add to cart</button>
                </div>
            </a>
            <a href="#" className="box">
                <img src={menuImg3} alt="" />
                <div className="content">
                    <h3>our special coffee</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus sit, iure errm</p>
                    <span style={{fontWeight: 'bold'}}>$6.99</span>
                    <span style={{marginLeft: '20px'}}>10<i className="fas fa-star"></i></span>
                    <br />
                    <button className='buy-btn'>buy now</button>
                    <button className='buy-btn'>add to cart</button>
                </div>
            </a>
            <a href="#" className="box">
                <img src={menuImg4} alt="" />
                <div className="content">
                    <h3>our special coffee</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus sit, iure errm</p>
                    <span style={{fontWeight: 'bold'}}>$4.99</span>
                    <span style={{marginLeft: '20px'}}>22<i className="fas fa-star"></i></span>
                    <br />
                    <button className='buy-btn'>buy now</button>
                    <button className='buy-btn'>add to cart</button>
                </div>
            </a>
            <a href="#" className="box">
                <img src={menuImg5} alt="" />
                <div className="content">
                    <h3>our special coffee</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus sit, iure errm</p>
                    <span style={{fontWeight: 'bold'}}>$2.99</span>
                    <span style={{marginLeft: '20px'}}>17<i className="fas fa-star"></i></span>
                    <br />
                    <button className='buy-btn'>buy now</button>
                    <button className='buy-btn'>add to cart</button>
                </div>
            </a>
            <a href="#" className="box">
                <img src={menuImg6} alt="" />
                <div className="content">
                    <h3>our special coffee</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus sit, iure errm</p>
                    <span style={{fontWeight: 'bold'}}>$5.99</span>
                    <span style={{marginLeft: '20px'}}>5<i className="fas fa-star"></i></span>
                    <br />
                    <button className='buy-btn'>buy now</button>
                    <button className='buy-btn'>add to cart</button>
                </div>
            </a>
            
            <a href="#" className="box">
                <img src={CoffeBagImg} style={{height: "15rem"}} alt="" />
                <div className="content">
                    <h3>our special coffee bag</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus sit, iure errm</p>
                    <span style={{fontWeight: 'bold'}}>$8.99</span>
                    <span style={{marginLeft: '20px'}}>10<i className="fas fa-star"></i></span>
                    <br />
                    <button className='buy-btn'>buy now</button>
                    <button className='buy-btn'>add to cart</button>
                </div>
            </a>
        </div>
    </section>
  )
}

export default Store