


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NameInputPage.css';
import image1 from '../assets/penguin.png';
import image2 from '../assets/Subtract.png';
import image3 from '../assets/Subtract.png';

export default function NameInputPage({ onNextButtonClick }) {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleNextButtonClick = () => {
    onNextButtonClick(name);
    navigate('/select');
  };

  return (
    <div className="name-input-container">
      <div className="penguin-container">
        <img src={image1} alt='Penguin' className='image1' />
        <div className="hands-container">
          <img src={image2} alt='Left hand' className='image2' />
          <img src={image3} alt='Right hand' className='image3' />
        </div>
      </div>
      <div className='name-input-blue'>
        <h2 className="name-input-title">おなまえ</h2>
        <input 
          type="text" 
          className="name-input" 
          value={name} 
          onChange={handleChange} 
          placeholder=""
        />
      </div>
      <button className="next-button" onClick={handleNextButtonClick}>
        けってい
      </button>
    </div>
  );
}