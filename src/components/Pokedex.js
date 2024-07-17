



// import React from 'react';
// import './Pokedex.css';
// import { useNavigate } from 'react-router-dom';
// import './Pokedex.css'; // Ensure the CSS file path is correct

// const Pokedex = ({ unlockedCharacters, onAnimalClick }) => {
//   const navigate = useNavigate();

//   const handleBack = () => {
//     // Navigate back to the select page
//     navigate('/select');
//   };

//   const getRandomColor = () => {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   };

//   console.log('Unlocked Characters:', unlockedCharacters); // Debug log
//   return (
//     <div>
//       <h1>Pokedex</h1>
//       <button onClick={handleBack}>Back</button>
//       <div className="pokedex-grid">
//         {unlockedCharacters.map((character) => (
//           <div
//             key={character.id}
//             className="character-card"
//             style={{ backgroundColor: getRandomColor() }}
//             onClick={() => onAnimalClick(character)}
//           >
//             <div className="count-badge">{character.count}</div>
//             <img src={character.image} alt={character.name} />
//             <h2>{character.name}</h2>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default Pokedex;

import React from 'react';
import styles from './Pokedex.module.css';
import { useNavigate } from 'react-router-dom';
import clawImage from '../assets/claw.png';

const Pokedex = ({ unlockedCharacters, onAnimalClick }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/select');
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  console.log('Unlocked Characters:', unlockedCharacters); // Debug log

  return (
    <div className={styles.pokedexContainer}>
      <h1 className={styles.title}>ずかん</h1>
      <div className={styles.catButton}>
        <img src={clawImage} alt="catHand" className={styles.catHandImage} />
        <img src={clawImage} alt="catHand2" className={styles.catHandImage2} />
      </div>
      <button className={styles.backButton2} onClick={handleBack}>もどる</button>
      <div className={styles.pokedexGrid}>
        {unlockedCharacters.map((character) => (
          <div
            key={character.id}
            className={styles.characterCard}
            style={{ backgroundColor: getRandomColor() }}
            onClick={() => onAnimalClick(character)}
          >
            <div className={styles.countBadge}>{character.count}</div>
            <img src={character.image} alt={character.name} className={styles.characterImage} />
            <h2 className={styles.characterName}>{character.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pokedex;