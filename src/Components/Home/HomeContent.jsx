import React, { useState } from 'react';
import "./HomeContent.css"
import Modal from '../Modal/Modal';
import { Helmet } from "react-helmet-async";

const HomeContent = () => {

const [showModal, setShowModal] = useState(false);

const handleModal = () => {
  setShowModal(!showModal);
}

  return (
    <>
          <Helmet>
        <title>Forefront Landscaping | Tucson, AZ</title>
        <meta name="description" content="Tucson's trusted landscaping company offering lawn care, hardscaping, irrigation, and yard cleanups. Call today for a free quote!" />
        <meta name="keywords" content="landscaping, Tucson landscaping, lawn care, hardscaping, irrigation, Forefront Landscaping, yard cleanup" />
        <meta name="author" content="Forefront Landscaping" />
        <meta property="og:title" content="Forefront Landscaping | Tucson, AZ" />
        <meta property="og:description" content="Professional landscaping services in Tucson. Licensed, insured and affordable." />
        <meta property="og:url" content="https://www.forefrontlandscaping.com/" />
        <meta property="og:type" content="website" />
      </Helmet>
    {showModal && <Modal onClose={handleModal} />}
    <div className='xlscreens'>
      <div className='homeMain'>
      
        <div className='hero'>
        

<div className="heroText">
  <div className="companyName">ForeFront Landscaping</div>
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
