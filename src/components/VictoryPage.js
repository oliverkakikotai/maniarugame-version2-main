
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './VictoryPage.module.css';


// function VictoryPage() {
//   return <div className={styles.victoryContainer}>...</div>;
// }
// const VictoryPage = ({ newCharacter }) => {
//   const navigate = useNavigate();

//   const handleMainPage = () => {
//     navigate('/select');
//   };

//   return (
//     <div className='victory-page'>
//       <h1 className='clear'>ゲームクリア！</h1>
//       <div className="new-character-container">
//         <h2 className='clearTime'>ゲームクリアじかん:</h2>
//         <img className="new-character-image" src={newCharacter.image} alt={newCharacter.name} />
//         {/* <p>{newCharacter.name}</p> */}
//       </div>
//       <button className='backButton' onClick={handleMainPage}>ホームにもどる</button>
//     </div>
//   );
// };

// export default VictoryPage;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './VictoryPage.module.css';

const VictoryPage = ({ newCharacter }) => {
  const navigate = useNavigate();

  const handleMainPage = () => {
    navigate('/select');
  };

  return (
    <div className={styles.victoryPage}>
      <h1 className={styles.clear}>ゲームクリア！</h1>
      <div className={styles.newCharacterContainer}>
        <h2 className={styles.clearTime}>ゲームクリアじかん:</h2>
        <img className={styles.newCharacterImage} src={newCharacter.image} alt={newCharacter.name} />
        {/* <p>{newCharacter.name}</p> */}
      </div>
      <button className={styles.backButton} onClick={handleMainPage}>ホームにもどる</button>
    </div>
  );
};

export default VictoryPage;