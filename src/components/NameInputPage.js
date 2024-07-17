
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // 正确导入 useNavigate
// import './NameInputPage.css'; // 确保这里导入样式或者其他资源
// import image1 from '../assets/penguin.png';
// import image2 from '../assets/Subtract.png';
// import image3 from '../assets/Subtract.png';

// export default function NameInputPage({ onNextButtonClick }) {
//   const [name, setName] = useState('');
//   const navigate = useNavigate(); // 使用 useNavigate 来导航

//   const handleChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleNextButtonClick = () => {
//     onNextButtonClick(name);
//     navigate('/select'); // 使用 navigate 函数来跳转到'/select'路径
//   };

//   return (
//     <div className="name-input-container">
//       <img src={image1} alt='image1' className='image1'></img>
//       <img src={image2} alt='image2' className='image2'></img>
//       <img src={image3} alt='image3' className='image3'></img>
//       <div className='name-input-blue'>
//         <h2 className="name-input-title">おなまえ</h2> {/* 使用类名 */}
//         <input type="text" className="name-input" value={name} onChange={handleChange} /> {/* 使用类名 */}
//       </div>
//       <button className="next-button" onClick={handleNextButtonClick}>けってい</button> {/* 使用类名 */}
//     </div>
//   );
// }


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