import React from 'react';
import './Modal.css'; 
import FreeEstimate from '../FreeEstimate/FreeEstimate';

const Modal = ({ onClose }) => {
  return (
    <div className="modalMain" onClick={onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
 <FreeEstimate /> 
      </div>
    </div>
  );
};

export default Modal;