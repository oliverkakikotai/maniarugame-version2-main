import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './DifficultySelectPage.css';
import images1 from '../assets/Union.png';

export default function DifficultySelectPage({ onDifficultySelect }) {
  const navigate = useNavigate();

  const handleDifficultySelect = useCallback((difficulty) => {
    if (onDifficultySelect) {
      onDifficultySelect(difficulty);
    }
    navigate(`/game/${difficulty}`);
  }, [navigate, onDifficultySelect]);

  useEffect(() => {
    // 重置状态的逻辑，如果有需要
    // 例如：清除选中的关卡，重置难度选择等
  }, []);

  return (
    <div className="difficulty-select-container h-full">
      <div className="header">
        <button className="header-button-name">おなまえ</button>
        <button className="header-button-change">かえる</button>
      </div>
      <div className="difficulty-buttons">
        <div className="difficulty-button-hard" onClick={() => handleDifficultySelect('hard')}><p>むずかしい</p></div>
        <div className="difficulty-button-normal" onClick={() => handleDifficultySelect('medium')}><p>ふつう</p></div>
        <div className="difficulty-button-easy" onClick={() => handleDifficultySelect('easy')}><p>かんたん</p></div>
      </div>
      <img className='bg_img' src={images1} alt='images1'></img>
    </div>
  );
}
