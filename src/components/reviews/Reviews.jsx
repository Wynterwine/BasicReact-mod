import React from 'react'
import './Reviews.css'
import person2 from '../../assets/foncnaivkaq0vvd-2-be159cbf274da6ef841a10d7605a8f4c-e79988f93ccb177f99bacd3dc0a1182f_600x400.jpg'
import person1 from '../../assets/channels4_profile.jpg'
import person3 from '../../assets/Kaela_Kovalskia_Ch._hololive-ID.webp'
import person4 from '../../assets/ab6761610000e5eb78fc1f07ff7cb4a5552d2bec.jpg'
import person5 from '../../assets/sSacAPi5tTVl_large.jpg'


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Reviews = () => {
  return (
    <>
    <div className='container4'>
        <div className="slide-content">
          <div><h2 className='reviewtxt'>Reviews</h2></div>
          <Swiper
        slidesPerView={3}
        spaceBetween={25}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper2"
      >
        <SwiperSlide className='swiperslide2'><div className='cardrev'>
          <div className="imgprof">
            <img className='img-rev' src={person1} alt="" /></div>
            <div className="textperson">
              <h5 className="name">Vestia Zeta</h5>
              <p>A A A Mission Start!</p>
            </div>
            </div></SwiperSlide>
        <SwiperSlide className='swiperslide2'><div className='cardrev'>
          <div className="imgprof">
            <img className='img-rev' src={person2} alt="" /></div>
            <div className="textperson">
              <h5 className="name">Kobo Kaneru</h5>
              <p>Bokobokobo- Kobo Kanaeru at your service! Let me be your sun to shine your day, ehe!</p>
            </div>
            </div></SwiperSlide>
        <SwiperSlide className='swiperslide2'><div className='cardrev'>
          <div className="imgprof">
            <img className='img-rev' src={person3} alt="" /></div>
            <div className="textperson">
              <h5 className="name">Kaela Kovalskia</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            </div>
            </div></SwiperSlide>
        <SwiperSlide className='swiperslide2'><div className='cardrev'>
          <div className="imgprof">
            <img className='img-rev' src={person4} alt="" /></div>
            <div className="textperson">
              <h5 className="name">dream</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            </div>
            </div></SwiperSlide>
        <SwiperSlide className='swiperslide2'><div className='cardrev'>
          <div className="imgprof">
            <img className='img-rev' src={person5} alt="" /></div>
            <div className="textperson">
              <h5 className="name">GeorgeNotFound</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            </div>
            </div></SwiperSlide>
      </Swiper>
        </div>
      </div>
      <div className="balls2">
        <div className='ball01'></div>
        <div className='ball02'></div>
        <div className='ball03'></div>
        <div className='ball04'></div>
      </div>
      <div className="pricinglist-container"><span className='pll'>Pricing List</span>
        <div className="pricinglist"> 
          <div className="price-main">
            <div className="pm">
            <div className='pricetag'>49k</div>
            <span className='line'></span>
            <div className="prices">
              <ul className='prices-list'>
                <li className='pl'>
                  <div className="bcheck"></div>
                  <div className="pricedesc">Lorem ipsum dolor sit amet</div>
                </li>
                <li className='pl'>
                  <div className="bcheck"></div>
                  <div className="pricedesc">Lorem ipsum dolor sit amet</div>
                </li>
                <li className='pl' >
                  <div className="bcheck"></div>
                  <div className="pricedesc">Lorem ipsum dolor sit amet</div>
                </li>
                <li className='pl'>
                  <div className="bcheck"></div>
                  <div className="pricedesc">Lorem ipsum dolor sit amet</div>
                </li>
                <li className='pl'>
                  <div className="bcheck"></div>
                  <div className="pricedesc">Lorem ipsum dolor sit amet</div>
                </li>
              </ul>
            </div>
            </div>
            
          <div className='price-main-overlay'><span className='txt-over-main'>Paket 1</span></div>
          <div className="price-list"></div>
          </div>
          <div className="price-sub">
          <div className="price-sub1">
          <div className="pm">
            <div className='pricetag'>49k</div>
            <span className='line'></span>
            <div className="prices">
              <ul className='prices-list'>
                <li className='pl'>
                  <div className="bcheck"></div>
                  <div className="pricedesc">Lorem ipsum dolor sit amet</div>
                </li>
                <li className='pl'>
                  <div className="bcheck"></div>
                  <div className="pricedesc">Lorem ipsum dolor sit amet</div>
                </li>
                <li className='pl' >
                  <div className="bcheck"></div>
                  <div className="pricedesc">Lorem ipsum dolor sit amet</div>
                </li>
                <li className='pl'>
                  <div className="bcheck"></div>
                  <div className="pricedesc">Lorem ipsum dolor sit amet</div>
                </li>
              </ul>
            </div>
            </div>
            <div className='price-sub1-overlay'><span className='txt-over'>Paket 1</span></div>
          </div>
          <div className="price-sub2">
          <div className="pm">
            <div className='pricetag'>49k</div>
            <span className='line'></span>
            <div className="prices">
              <ul className='prices-list'>
                <li className='pl'>
                  <div className="bcheck"></div>
                  <div className="pricedesc">Lorem ipsum dolor sit amet</div>
                </li>
                <li className='pl'>
                  <div className="bcheck"></div>
                  <div className="pricedesc">Lorem ipsum dolor sit amet</div>
                </li>
                <li className='pl' >
                  <div className="bcheck"></div>
                  <div className="pricedesc">Lorem ipsum dolor sit amet</div>
                </li>
                <li className='pl'>
                  <div className="bcheck"></div>
                  <div className="pricedesc">Lorem ipsum dolor sit amet</div>
                </li>
              </ul>
            </div>
            </div>  
          <div className='price-sub1-overlay'><span className='txt-over2'>Paket 1</span></div></div>
          </div>
          
        </div>

    </div>

    </>
  )
}

export default Reviews