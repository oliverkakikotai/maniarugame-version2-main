

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes ,useNavigate} from 'react-router-dom';
import './App.css'; // Ensure the CSS file path is correct
import MainPage from './components/MainPage';
import NameInputPage from './components/NameInputPage';
import DifficultySelectPage from './components/DifficultySelectPage';
import SelectPage from './components/SelectPage';
import ArithmeticGame from './components/ArithmeticGame';
import Pokedex from './components/Pokedex';
import VictoryPage from './components/VictoryPage';
import FailurePage from './components/FailurePage';
import AnimalDetailModal from './components/AnimalDetailModal';
import useAudio  from './hooks/useAudio.js';




const allCharacters = [
  { id: 1, name: 'penguin', image: require('./assets/penguin.png'), description: 'The penguin is a flightless bird.' },
  { id: 2, name: 'アライグマ', image: require('./assets/イラスト_アライグマ 1.png'), description: 'アライグマは北アメリカ原産の動物です。' },
  { id: 3, name: 'カピバラ', image: require('./assets/イラスト_カピバラ 1.png'), description: 'カピバラは世界最大のげっ歯類です。' },
  { id: 4, name: 'カンガルー', image: require('./assets/イラスト_カンガルー 1.png'), description: 'カピバラは世界最大のげっ歯類です。' },
  { id: 5, name: 'ゴリラ', image: require('./assets/イラスト_ゴリラ 1.png'), description: 'カピバラは世界最大のげっ歯類です。' },
  { id: 6, name: 'サメ', image: require('./assets/イラスト_サメ 1.png'), description: 'カピバラは世界最大のげっ歯類です。' },
  { id: 7, name: 'シロクマ', image: require('./assets/イラスト_シロクマ 1.png'), description: 'カピバラは世界最大のげっ歯類です。' },
  { id: 8, name: 'タイキ', image: require('./assets/イラスト_タイキ 1.png'), description: 'カピバラは世界最大のげっ歯類です。' },
  { id: 9, name: 'ナマケモノ', image: require('./assets/イラスト_ナマケモノ 1.png'), description: 'カピバラは世界最大のげっ歯類です。' },
  { id: 10, name: 'ヒョウ', image: require('./assets/イラスト_ヒョウ 1.png'), description: 'カピバラは世界最大のげっ歯類です。' },
  { id: 11, name: 'フクロウ', image: require('./assets/イラスト_フクロウ 1.png'), description: 'カピバラは世界最大のげっ歯類です。' },
  { id: 12, name: 'フラミンゴ', image: require('./assets/イラスト＿フラミンゴ 1.png'), description: 'カピバラは世界最大のげっ歯類です。' },
  { id: 13, name: 'ヤギ ', image: require('./assets/イラスト_ヤギ 1.png'), description: 'カピバラは世界最大のげっ歯類です。' },
  { id: 14, name: 'ラクダ', image: require('./assets/イラスト_ラクダ 1.png'), description: 'カピバラは世界最大のげっ歯類です。' },
  { id: 15, name: 'キツネ', image: require('./assets/イラスト_キツネ.png'), description: 'カピバラは世界最大のげっ歯類です。' },
  { id: 15, name: 'サル', image: require('./assets/イラスト_サル 1.png'), description: 'カピバラは世界最大のげっ歯類です。'},
  { id: 15, name: 'ラクダ', image: require('./assets/イラスト_ラクダ 1.png'), description: 'カピバラは世界最大のげっ歯類です。'},
  { id: 15, name: 'ライオン', image: require('./assets/イラスト_ライオン.png'), description: 'カピバラは世界最大のげっ歯類です。'},
  { id: 15, name: 'カバ', image: require('./assets/イラスト_カバ.png'), description: 'カピバラは世界最大のげっ歯類です。'},
  // Add more characters as needed
];



function App() {
  const [name, setName] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [unlockedCharacters, setUnlockedCharacters] = useState([]);
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [playing, toggle] = useAudio();

  const handleNameInput = (name) => {
    setName(name);
  };

  const handleDifficultySelect = (difficulty) => {
    setDifficulty(difficulty);
  };


  const handleVictory = () => {
    const newCharacter = allCharacters[Math.floor(Math.random() * allCharacters.length)];
    setUnlockedCharacters((prevUnlockedCharacters) => {
      const existingCharacter = prevUnlockedCharacters.find(character => character.id === newCharacter.id);
      if (existingCharacter) {
        return prevUnlockedCharacters.map(character => 
          character.id === newCharacter.id 
          ? { ...character, count: (character.count || 1) + 1 } 
          : character
        );
      } else {
        return [...prevUnlockedCharacters, { ...newCharacter, count: 1 }];
      }
    });
  };

  const handleAnimalClick = (animal) => {
    setSelectedAnimal(animal);
  };

  const handleCloseModal = () => {
    setSelectedAnimal(null);
  };

  const startGame = () => {
    console.log("Game starting...");
  };

  const openPokedex = () => {
    console.log("Opening Pokedex...");
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/nameInput" element={<NameInputPage onNextButtonClick={handleNameInput} />} />
          <Route path="/select" element={<SelectPage onGameStart={startGame} onPokedex={openPokedex} />} />
          <Route path="/difficultySelect" element={<DifficultySelectPage onDifficultySelect={handleDifficultySelect} />} />
          <Route path="/game/:difficulty" element={<ArithmeticGame name={name} onVictory={handleVictory} onFailure={() => {}} allCharacters={allCharacters}/>} />
          <Route path="/pokedex" element={<Pokedex unlockedCharacters={unlockedCharacters} onAnimalClick={handleAnimalClick} />} />
          <Route path="/victory" element={<VictoryPage newCharacter={unlockedCharacters[unlockedCharacters.length - 1]} />} />
          <Route path="/failure" element={<FailurePage />} />
        </Routes>
        {selectedAnimal && <AnimalDetailModal animal={selectedAnimal} onClose={handleCloseModal} />}
      </div>
    </Router>
  );
}

export default App;
