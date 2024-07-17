// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './SelectPage.css';
// import pandaImage from '../assets/パンダ_イラスト 2.png';
// import clawImage1 from '../assets/claw.png';
// import clawImage2 from '../assets/claw2.png';

// const SelectPage = ({ onGameStart, onPokedex }) => {
//   const navigate = useNavigate();

//   const handleGameStart = () => {
//     onGameStart();
//     navigate('/difficultySelect');
//   };

//   const handlePokedex = () => {
//     if (onPokedex) {
//       onPokedex();
//     }
//     navigate('/pokedex');
//   };

//   const handleBack = () => {
//     navigate(-1);
//   };

//   return (
//     <div className="select-page-container">
//       <div className="header">
//         <div className="header-title">おなまえ</div>
//         <button className="back-button" onClick={handleBack}>かえる</button>
//       </div>
//       <div className="panda-container">
//         <img src={pandaImage} alt="Panda" className="panda-image" />
//       </div>
//       <div className="button-container">
//         <button 
//           className="select-button start-button" 
//           onClick={handleGameStart}
//         >
//           <span>スタート</span>
//         </button>
//         <button 
//           className="select-button pokedex-button" 
//           onClick={handlePokedex}
//         >
//           <span>ずかん</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SelectPage;


import React from 'react';
import './SelectPage.css';
import { useNavigate } from 'react-router-dom'; 
import Img_start from '../assets/claw.png';
import Img_zukan from '../assets/claw2.png';
import Img_panda from '../assets/パンダ_イラストのコピー.png';

const SelectPage = ({ onGameStart, onPokedex }) => {
  const navigate = useNavigate(); // Use useNavigate hook to handle navigation

  const handleGameStart = () => {
    onGameStart(); // Call the prop function to start the game logic
    navigate('/difficultySelect'); // Navigate to the difficulty select page
  };

  const handlePokedex = () => {
    if (onPokedex) {
      onPokedex(); // Call the prop function to handle entering the Pokédex logic
    }
    navigate('/pokedex'); // Navigate to the Pokédex page
  };

  return (
    <div className='nameInput'>
      <div className='name'>
        <h1 className='inPut'>おなまえ</h1>
      <h2 className='selectH2'>かえる</h2>
      </div>
      <img src={Img_panda} alt='panda' className='Img_panda'></img>
      <div className='btn'>
        <button className='start' onClick={handleGameStart}>スタート</button>
        <button className='zukan' onClick={handlePokedex}>ずかん</button>
      </div>
    </div>
  );
};

export default SelectPage;