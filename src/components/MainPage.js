


import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPage.css'; 
import logo from '../assets/anilogo.png'; 
import images1 from '../assets/penguin.png';
import images2 from '../assets/イラスト_アライグマ 1.png';
import images3 from '../assets/イラスト_ゴリラ 1.png';
import images4 from '../assets/イラスト_サル 1.png';
import images5 from '../assets/イラスト_ヒョウ 1.png';
import images6 from '../assets/ヒツジ 1.png';
import images7 from '../assets/イラスト_ナマケモノ 1.png';
import images8 from '../assets/イラスト_フクロウ 1.png';


export default function MainPage() {
  const navigate = useNavigate();

  const handleStartButtonClick = () => {
    navigate('/nameInput');
  };

  return (
    <div className="main-page-container">
    <div className='text-summary'>
      <h1 className='h1text'>あそんでまなぶ</h1>
      <h2 className='h2text'>わかるかな？</h2>
    </div>
      <img src={logo} alt="Arithmetic Game Logo" className="logo" /> 
      <div className='images-container'>
        <img src={images1} alt="Images1" className='image'/>
        <img src={images2} alt="Images2" className='image'/>
        <img src={images3} alt="Images1" className='image'/>
        <img src={images4} alt="Images1" className='image'/>
        <img src={images5} alt="Images1" className='image'/>
        <img src={images6} alt="Images1" className='image'/>
        <img src={images7} alt="Images1" className='image'/>
        <img src={images8} alt="Images1" className='image'/>
      </div>
      <button className="start-button" onClick={handleStartButtonClick}>スタート</button>
    </div>
  );
}