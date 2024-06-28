import React from 'react'
import './lastestproducts.css'
import painting2 from '../../assets/pexels-ian-15663490.jpg'

const Lastestproducts = () => {
  return (
    <>
    <div className="container3" id='Lastestproducts'>
      <div className="textlastestp">
        <h2>Lastest Products</h2>
      </div>
      <div className="box-container">
        <div className="boxes">
          <ul className="box-row1">
            <li><img className='lpimg'src={painting2} alt="" /></li>
            <li><img className='lpimg'src={painting2} alt="" /></li>
            <li><img className='lpimg'src={painting2} alt="" /></li>
          </ul>
          <u className="box-row2">
          <li><img className='lpimg'src={painting2} alt="" /></li>
            <li><img className='lpimg'src={painting2} alt="" /></li>
            <li><img className='lpimg'src={painting2} alt="" /></li>
          </u>
        </div>
      </div>
    </div>
    </>
  )
}

export default Lastestproducts