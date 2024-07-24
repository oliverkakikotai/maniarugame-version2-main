

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
  { id: 1, name: 'penguin', image: require('./assets/penguin.png'), description: 'ペンギンは南極や寒い海に住む飛べない鳥で、群れで生活し、魚やエビを食べ、水の中を泳ぐのが得意な動物です。The penguin is a flightless bird.' },
  { id: 2, name: 'アライグマ', image: require('./assets/イラスト_アライグマ 1.png'), description: 'アライグマは北アメリカに住む小型の夜行性雑食性哺乳類で、器用な前足を使ってさまざまな食べ物を探します。' },
  { id: 3, name: 'カピバラ', image: require('./assets/イラスト_カピバラ 1.png'), description: 'カピバラは南アメリカに住む世界最大の齧歯類で、草食性で群れで生活し、水に入るのが得意な穏やかな動物です。' },
  { id: 4, name: 'カンガルー', image: require('./assets/イラスト_カンガルー 1.png'), description: 'カンガルーはオーストラリアの草食動物で、大きな後ろ足と尾を持ち、群れで生活し、母カンガルーは育児袋で赤ちゃんを育てます。' },
  { id: 5, name: 'ゴリラ', image: require('./assets/イラスト_ゴリラ 1.png'), description: 'ゴリラはアフリカの森林に住む大きな草食性の霊長類で、主に葉や果物を食べ、群れで生活する、非常に知能が高い動物です。' },
  { id: 6, name: 'サメ', image: require('./assets/イラスト_サメ 1.png'), description: 'サメは大きな肉食性の魚で、世界中の海に住み、魚や海洋哺乳類を食べ、優れた嗅覚や視覚を持つ敏感な動物です。' },
  { id: 7, name: 'シロクマ', image: require('./assets/イラスト_シロクマ 1.png'), description: 'シロクマは北極に住む大きな肉食性のクマで、白い毛を持ち、主にアザラシを食べる、優れた泳ぎ手です。' },
  { id: 8, name: 'タイキ', image: require('./assets/イラスト_タイキ 1.png'), description: 'タヌキは中型の雑食性哺乳類で、日本やアジアの森林に住み、夜行性の活動が特徴です。' },
  { id: 9, name: 'ナマケモノ', image: require('./assets/イラスト_ナマケモノ 1.png'), description: 'ナマケモノは南アメリカの熱帯雨林に住む遅い草食動物で、主に葉を食べ、木にぶら下がるのが得意です。' },
  { id: 10, name: 'ヒョウ', image: require('./assets/イラスト_ヒョウ 1.png'), description: 'ヒョウは斑点模様を持つ大きな肉食性の猫で、アフリカやアジアの森林や草原に住み、小型から中型の哺乳類を主に狩る夜行性の動物です。' },
  { id: 11, name: 'フクロウ', image: require('./assets/イラスト_フクロウ 1.png'), description: 'フクロウは夜行性の鳥で、大きな目と静かな飛び方が特徴で、主に小さな動物を食べ、世界中の森林や公園に住んでいます。' },
  { id: 12, name: 'フラミンゴ', image: require('./assets/イラスト＿フラミンゴ 1.png'), description: 'フラミンゴはピンク色の羽を持つ大きな鳥で、主に湿地や湖に住み、プランクトンや小さな甲殻類を食べ、群れで生活する特徴があります。' },
  { id: 13, name: 'ヤギ ', image: require('./assets/イラスト_ヤギ 1.png'), description: 'ヤギは中型の草食動物で、主に草や葉を食べ、群れで生活し、器用でバランス感覚に優れた動物です。' },
  { id: 14, name: 'ラクダ', image: require('./assets/イラスト_ラクダ 1.png'), description: 'ラクダは砂漠に住む大きな草食動物で、脂肪を蓄えたこぶを持ち、乾燥した環境でも長時間水を飲まなくても生きられる特徴があります。' },
  { id: 15, name: 'キツネ', image: require('./assets/イラスト_キツネ.png'), description: 'キツネは世界中にいる小さな雑食性の哺乳類で、夜に活動し、小動物や果物を食べ、一般的に一夫一妻で子供を育てます。' },
  { id: 16, name: 'サル', image: require('./assets/イラスト_サル 1.png'), description: 'サルは中型から大型の霊長類で、さまざまな環境に住み、果物や葉を食べる雑食性で、社会的に群れで生活する知能の高い動物です。'},
  { id: 17, name: 'ヒツジ', image: require('./assets/ヒツジ 1.png'), description: 'ヒツジはふわふわの毛を持つ草食性の動物で、主に草を食べ、群れで生活し、世界中の農場や牧場で飼われている可愛らしい動物です。'},
  { id: 18, name: 'ライオン', image: require('./assets/イラスト_ライオン.png'), description: 'ライオンは「百獣の王」とも呼ばれる、サバンナに住む猫の仲間で、オスはたてがみを持ち、プライドと呼ばれるグループで狩りを行う、肉食動物です。'},
  { id: 19, name: 'カバ', image: require('./assets/イラスト_カバ.png'), description: 'カバはアフリカの河川や湖に住む大きくて丸っこい草食動物で、水の中で長い時間過ごす、特に強い家族の絆を持っている動物です。'},
  { id: 20, name: 'レッサーパンダ', image: require('./assets/イラスト_レッサーパンダ.png'), description: 'レッサーパンダは赤茶色の毛と白い顔の模様を持つ動物で、主に竹を食べ、中国の山岳地帯に住み、夜行性で木の上で生活することが特徴です。'},
  { id: 21, name: 'クマ', image: require('./assets/イラスト_クマ.png'), description: 'クマは世界中の森や山に住む大きな雑食動物で、果物や魚、小さな動物を食べ、冬には冬眠し、母親が子供を優しく守ることが特徴です。'},
  { id: 22, name: 'ウシ', image: require('./assets/イラスト_ウシ.png'), description: 'ウシは世界中で飼われていて、ホルスタインという種類のウシは白と黒のまだら模様が特徴です。'},
  { id: 23, name: 'ゾウ', image: require('./assets/ゾウ.png'), description: 'ゾウはアフリカやアジアに住む地球で一番大きな陸上動物で、大きな耳と長い鼻を持ち、草食性で群れで生活し、家族を大切に育てる社交的な動物です。'},
  { id: 24, name: 'ウマ', image: require('./assets/イラスト_ウマ.png'), description: 'ウマは世界中の草原や牧場に住む大きな草食動物で、群れで生活し、主に草や干し草を食べ、非常に速く走る能力を持つ社交的で賢い動物です。'},
  { id: 25, name: 'オラウータン', image: require('./assets/イラスト_オランウータン.png'), description: 'オランウータンは赤い毛を持つ大きなサルで、熱帯雨林に住み、主に果物を食べ、一匹で生活し、母親が赤ちゃんを大切に育てる非常に賢い動物です。'},
  { id: 26, name: 'キリン', image: require('./assets/イラスト_キリン.png'), description: 'キリンはアフリカのサバンナに住む背の高い草食動物で、長い首を使って高い木の葉を食べ、群れで生活する、特に母親と子供の関係が深い動物です。'},
  { id: 27, name: 'コアラ', image: require('./assets/イラスト_コアラ.png'), description: 'コアラはオーストラリアに住む可愛らしい夜行性の動物で、主にユーカリの葉を食べ、木の上で生活しながら一日に18〜20時間寝ることが特徴です。'},
  { id: 28, name: 'トラ', image: require('./assets/イラスト_トラ.png'), description: 'トラはアジアの森林や草原に住む大きな肉食性の猫で、美しいオレンジ色の毛に黒い縞模様があり、一匹で生活しながら主に夜に獲物を狩る強い動物です。'},
  { id: 29, name: 'リス', image: require('./assets/イラスト_リス 1.png'), description: 'リスはふわふわの尻尾を持つ小さな哺乳類で、森林に住み、木の実や果物を食べながら素早く木を登るのが得意な動物です。'},
  { id: 30, name: 'パンダ', image: require('./assets/パンダ_イラストのコピー.png'), description: 'パンダは中国の竹林に住む白黒のクマで、主に竹を食べ、一匹で生活し、特別な「親指」を使って竹をつかむことができるおとなしい動物です。'},
  { id: 30, name: 'あくびパンダ', image: require('./assets/イラスト_パンダ_あくび.png'),},
  { id: 30, name: 'ナキウサギ', image: require('./assets/イラスト_悲しい顔.png'),},
  { id: 30, name: '笑顔パンダ', image: require('./assets/イラスト_パンダ_笑顔.png'),},
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
