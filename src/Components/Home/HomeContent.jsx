import React, { useState } from 'react';
import "./HomeContent.css"
import Modal from '../Modal/Modal';

const HomeContent = () => {

const [showModal, setShowModal] = useState(false);

const handleModal = () => {
  setShowModal(!showModal);
}

  return (
    <>
    {showModal && <Modal onClose={handleModal} />}
    <div className='xlscreens'>
      <div className='homeMain'>
      
        <div className='hero'>
        

<div className="heroText">
  <div className="companyName">FourFront Landscaping</div>
  <div className="companySlogan">Bringing Your Landscaping Ideas To Life</div>
  <button className='formBtn'  onClick={handleModal}    style={{
    WebkitTextStrokeWidth: '0px',
    WebkitTextStrokeColor: 'black',
  }}>Get A Free Estimate</button>
</div>
</div>
        </div>
        
      
    </div>
    </>
  )
}

export default HomeContent
