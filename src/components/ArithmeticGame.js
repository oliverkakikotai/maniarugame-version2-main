
// import React, { useState, useEffect, useCallback } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import './ArithmeticGame.module.css';

// const ArithmeticGame = ({ name, onVictory, onFailure, allCharacters }) => {
//   const { difficulty } = useParams();
//   const navigate = useNavigate();
//   const [targetNumber, setTargetNumber] = useState(null);
//   const [selectedNumbers, setSelectedNumbers] = useState([]);
//   const [numberCharacters, setNumberCharacters] = useState([]);
//   const [showFailureMessage, setShowFailureMessage] = useState(false);
//   const [showSuccessMessage, setShowSuccessMessage] = useState(false);
//   const [buttonPositions, setButtonPositions] = useState([]);

//   useEffect(() => {
//     resetGame();
//   }, [difficulty]);

//   useEffect(() => {
//     if (selectedNumbers.length === 0) {
//       resetGame();
//     }
//   }, [selectedNumbers]);

//   useEffect(() => {
//     if (numberCharacters.length > 0) {
//       const positions = generateGridPositions(numberCharacters.length);
//       setButtonPositions(positions);
//     }
//   }, [numberCharacters]);

//   const generateValidNumbers = (target, numberOfNumbers) => {
//     let num1 = Math.floor(Math.random() * target);
//     let num2 = target - num1;

//     let additionalNumbers = new Set();
//     while (additionalNumbers.size < numberOfNumbers - 2) {
//       let num = Math.floor(Math.random() * (target + 1));
//       if (num !== num1 && num !== num2) {
//         additionalNumbers.add(num);
//       }
//     }

//     return [num1, num2, ...Array.from(additionalNumbers)];
//   };

//   const assignCharactersToNumbers = (numbers) => {
//     const shuffledCharacters = [...allCharacters].sort(() => 0.5 - Math.random());
//     return numbers.map((number, index) => ({
//       number,
//       character: shuffledCharacters[index % shuffledCharacters.length]
//     }));
//   };

//   const handleNumberClick = useCallback((number) => {
//     setSelectedNumbers(prev => {
//       const newSelected = [...prev, number];
//       if (newSelected.length === 2) {
//         const sum = newSelected[0] + newSelected[1];
//         if (sum === targetNumber) {
//           setShowSuccessMessage(true);
//           onVictory();
//           setTimeout(() => {
//             navigate('/victory');
//           }, 2000);
//         } else {
//           setShowFailureMessage(true);
//           onFailure();
//         }
//       }
//       return newSelected.slice(0, 2);
//     });
//   }, [targetNumber, onVictory, onFailure, navigate]);

//   const resetGame = () => {
//     let target, numberOfNumbers;
//     if (difficulty === 'easy') {
//       target = Math.floor(Math.random() * 20) + 1;
//       numberOfNumbers = 4;
//     } else if (difficulty === 'medium') {
//       target = Math.floor(Math.random() * 50) + 1;
//       numberOfNumbers = 7;
//     } else if (difficulty === 'hard') {
//       target = Math.floor(Math.random() * 100) + 1;
//       numberOfNumbers = 10;
//     }

//     const generatedNumbers = generateValidNumbers(target, numberOfNumbers);
//     const numbersWithCharacters = assignCharactersToNumbers(generatedNumbers);
    
//     setTargetNumber(target);
//     setNumberCharacters(numbersWithCharacters);
//     setShowFailureMessage(false);
//     setShowSuccessMessage(false);
//   };

//   const generateGridPositions = (numberOfButtons) => {
//     const gridColumns = 3;
//     const gridRows = Math.ceil(numberOfButtons / gridColumns);
    
//     const containerWidth = 300;
//     const containerHeight = 500;
//     const buttonSize = 70;
//     const safeAreaHeight = 250;

//     const cellWidth = containerWidth / gridColumns;
//     const cellHeight = (containerHeight - safeAreaHeight) / gridRows;

//     const positions = [];

//     for (let i = 0; i < numberOfButtons; i++) {
//       const col = i % gridColumns;
//       const row = Math.floor(i / gridColumns);

//       const baseLeft = col * cellWidth + (cellWidth - buttonSize) / 2;
//       const baseTop = safeAreaHeight + row * cellHeight + (cellHeight - buttonSize) / 2;

//       const offsetX = (Math.random() - 0.5) * (cellWidth * 0.5);
//       const offsetY = (Math.random() - 0.5) * (cellHeight * 0.5);

//       positions.push({
//         left: Math.max(0, Math.min(containerWidth - buttonSize, baseLeft + offsetX)),
//         top: Math.max(safeAreaHeight, Math.min(containerHeight - buttonSize, baseTop + offsetY))
//       });
//     }

//     return positions;
//   };

//   return (
//     <div className="arithmetic-game-container">
//       <button className="exit-button" onClick={() => navigate('/')}>Exit</button>
//       <div className="target-number">{targetNumber}</div>
//       <div className="equation">
//         {selectedNumbers[0] || '_'} + {selectedNumbers[1] || '_'} = ?
//       </div>
//       {showFailureMessage && (
//         <div className="arithmetic-game-failure-message">
//           <p>Oops, you failed! Try again?</p>
//           <button onClick={resetGame}>Retry</button>
//         </div>
//       )}
//       {showSuccessMessage && (
//         <div className="arithmetic-game-success-message">
//           <p>Congratulations! You've won!</p>
//           <p>You've unlocked a new character!</p>
//         </div>
//       )}
//       {numberCharacters.map(({ number, character }, index) => {
//         const { left, top } = buttonPositions[index] || {};
//         return (
//           <button
//             key={index}
//             className={`arithmetic-game-random-number number-${number}`}
//             onClick={() => handleNumberClick(number)}
//             style={{
//               left: `${left}px`,
//               top: `${top}px`,
//               backgroundImage: `url(${character.image})`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center'
//             }}
//           >
//             {number}
//           </button>
//         );
//       })}
//     </div>
//   );
// };

// export default ArithmeticGame;


//version2//
// import React, { useState, useEffect, useCallback } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import './ArithmeticGame.module.css';

// const ArithmeticGame = ({ name, onVictory, onFailure, allCharacters }) => {
//   const { difficulty } = useParams();
//   const navigate = useNavigate();
//   const [targetNumber, setTargetNumber] = useState(null);
//   const [selectedNumbers, setSelectedNumbers] = useState([]);
//   const [numberCharacters, setNumberCharacters] = useState([]);
  
  

//   useEffect(() => {
//     resetGame();
//   }, [difficulty]);

//   const generateValidNumbers = (target, numberOfNumbers) => {
//     let num1 = Math.floor(Math.random() * target);
//     let num2 = target - num1;
//     let additionalNumbers = new Set([num1, num2]);
//     while (additionalNumbers.size < numberOfNumbers) {
//       additionalNumbers.add(Math.floor(Math.random() * (target + 1)));
//     }
//     return Array.from(additionalNumbers);
//   };

//   const assignCharactersToNumbers = (numbers) => {
//     const shuffledCharacters = [...allCharacters].sort(() => 0.5 - Math.random());
//     return numbers.map((number, index) => ({
//       number,
//       character: shuffledCharacters[index % shuffledCharacters.length]
//     }));
//   };

//   const handleNumberClick = useCallback((number) => {
//     setSelectedNumbers(prev => {
//       const newSelected = [...prev, number];
//       if (newSelected.length === 2) {
//         const sum = newSelected[0] + newSelected[1];
//         if (sum === targetNumber) {
//           onVictory();
//           setTimeout(() => navigate('/victory'), 1000);
//         } else {
//           onFailure();
//           resetGame();
//         }
//         return [];
//       }
//       return newSelected;
//     });
//   }, [targetNumber, onVictory, onFailure, navigate]);

//   const resetGame = () => {
//     let target, numberOfNumbers;
//     if (difficulty === 'easy') {
//       target = Math.floor(Math.random() * 20) + 1;
//       numberOfNumbers = 4;
//     } else if (difficulty === 'medium') {
//       target = Math.floor(Math.random() * 50) + 1;
//       numberOfNumbers = 5;
//     } else {
//       target = Math.floor(Math.random() * 100) + 1;
//       numberOfNumbers = 6;
//     }
//     const generatedNumbers = generateValidNumbers(target, numberOfNumbers);
//     const numbersWithCharacters = assignCharactersToNumbers(generatedNumbers);
//     setTargetNumber(target);
//     setNumberCharacters(numbersWithCharacters);
//     setSelectedNumbers([]);
//   };

//   return (
//     <div className="arithmetic-game-container">
//       <div className="target-number-container">
//         <div className="target-number">{targetNumber}</div>
//       </div>
//       <div className="equation">
//         {selectedNumbers[0] || '_'} + {selectedNumbers[1] || '_'}
//       </div>
//       <div className="animals-container">
//         {numberCharacters.map(({ number, character }, index) => (
//           <div
//             key={index}
//             className="animal-number-container"
//             onClick={() => handleNumberClick(number)}
//           >
//             <img src={character.image} alt={character.name} className="animal-image"
//             style={{width:'50px',height:'50px',objectFit:'contain'}} />
//             <div className="number">{number}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ArithmeticGame;

//version//
import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './ArithmeticGame.module.css';

const ArithmeticGame = ({ name, onVictory, onFailure, allCharacters }) => {
  const { difficulty } = useParams();
  const navigate = useNavigate();
  const [targetNumber, setTargetNumber] = useState(null);
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [numberCharacters, setNumberCharacters] = useState([]);
  const [animalPositions, setAnimalPositions] = useState([]);

  const generateRandomPosition = (containerWidth, containerHeight, elementWidth, elementHeight) => {
    const maxX = containerWidth - elementWidth;
    const maxY = containerHeight - elementHeight;
    return {
      left: Math.random() * maxX,
      top: Math.random() * maxY
    };
  };

  const generateValidNumbers = (target, numberOfNumbers) => {
    let num1 = Math.floor(Math.random() * target);
    let num2 = target - num1;
    let additionalNumbers = new Set([num1, num2]);
    while (additionalNumbers.size < numberOfNumbers) {
      additionalNumbers.add(Math.floor(Math.random() * (target + 1)));
    }
    return Array.from(additionalNumbers);
  };

  const assignCharactersToNumbers = (numbers) => {
    const shuffledCharacters = [...allCharacters].sort(() => 0.5 - Math.random());
    return numbers.map((number, index) => ({
      number,
      character: shuffledCharacters[index % shuffledCharacters.length]
    }));
  };

  const resetGame = useCallback(() => {
    let target, numberOfNumbers;
    if (difficulty === 'easy') {
      target = Math.floor(Math.random() * 20) + 1;
      numberOfNumbers = 4;
    } else if (difficulty === 'medium') {
      target = Math.floor(Math.random() * 50) + 1;
      numberOfNumbers = 6;
    } else {
      target = Math.floor(Math.random() * 100) + 1;
      numberOfNumbers = 8;
    }
    const generatedNumbers = generateValidNumbers(target, numberOfNumbers);
    const numbersWithCharacters = assignCharactersToNumbers(generatedNumbers);
    setTargetNumber(target);
    setNumberCharacters(numbersWithCharacters);
    setSelectedNumbers([]);
  }, [difficulty, allCharacters]);

  const handleNumberClick = useCallback((number) => {
    setSelectedNumbers(prev => {
      const newSelected = [...prev, number];
      if (newSelected.length === 2) {
        const sum = newSelected[0] + newSelected[1];
        if (sum === targetNumber) {
          onVictory();
          setTimeout(() => navigate('/victory'), 1000);
        } else {
          onFailure();
          resetGame();
        }
        return [];
      }
      return newSelected;
    });
  }, [targetNumber, onVictory, onFailure, navigate, resetGame]);

  useEffect(() => {
    resetGame();
  }, [resetGame]);

  useEffect(() => {
    const containerWidth = 300; // Adjust based on your container size
    const containerHeight = 400; // Adjust based on your container size
    const elementWidth = 60;
    const elementHeight = 60;

    const newPositions = numberCharacters.map(() => 
      generateRandomPosition(containerWidth, containerHeight, elementWidth, elementHeight)
    );
    setAnimalPositions(newPositions);
  }, [numberCharacters]);

  return (
    <div className={styles.arithmeticGameContainer}>
      <div className={styles.targetNumberContainer}>
        <div className={styles.targetNumber}>{targetNumber}</div>
      </div>
      <div className={styles.equation}>
        {selectedNumbers[0] || '_'} + {selectedNumbers[1] || '_'}
      </div>
      <div className={styles.animalsContainer}>
        {numberCharacters.map(({ number, character }, index) => (
          <div
            key={index}
            className={styles.animalNumberContainer}
            onClick={() => handleNumberClick(number)}
            style={{
              position: 'absolute',
              left: `${animalPositions[index]?.left}px`,
              top: `${animalPositions[index]?.top}px`
            }}
          >
            <img 
              src={character.image} 
              alt={character.name} 
              className={styles.animalImage} 
              style={{ width: '50px', height: '50px', objectFit: 'contain' }}
            />
            <div className={styles.number}>{number}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArithmeticGame;