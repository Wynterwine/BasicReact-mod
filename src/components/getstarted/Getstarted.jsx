import React from 'react'
import './Getstarted.css'
import painting from '../../assets/pexels-anastasia-rumyantseva-11836512.jpg'


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";



const Getstarted = () => {
  return (
    <>
    <div className="container2">
      <div className="cols cols0">
        <div className="text">
          <h1 className='top-line'>SMK NEGERI 1 BANDAR LAMPUNG</h1>
          <h1 className='text2'>Produk <span className='multiText'>Multimedia</span></h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="getstarted">
          <a href='#Lastestproducts' className='btn-getstarted'>Get Sarted</a>
        </div>
      </div>
      <div className='balls'>
        <div className='ball1'></div>
        <div className='ball2'></div>
        <div className='ball3'></div>
        <div className='ball4'></div>
      </div>
      <div className="cols cols1">
        <div className='slider1'>

        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><div className="slider-box">
            <a href="home" className='paintingg'><img className='painting' src= {painting} alt="imgslider1" /></a>
          </div></SwiperSlide>
          <SwiperSlide><div className="slider-box">
            <a href="home" className='paintingg'><img className='painting' src= {painting} alt="imgslider1" /></a>
          </div></SwiperSlide>
          <SwiperSlide><div className="slider-box">
            <a href="home" className='paintingg'><img className='painting' src= {painting} alt="imgslider1" /></a>
          </div></SwiperSlide>
          <SwiperSlide><div className="slider-box">
            <a href="home" className='paintingg'><img className='painting' src= {painting} alt="imgslider1" /></a>
          </div></SwiperSlide>
          
          </Swiper>

        </div>
      </div>
    </div>
    </>
  )
}

export default Getstarted