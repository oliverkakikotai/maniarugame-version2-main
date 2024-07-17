// FailurePage.jsx

import React from 'react';
import './FailurePage.css'
import { useNavigate } from 'react-router-dom';

const FailurePage = ({ onRetry }) => {
  const navigate = useNavigate();

  const handleRetry = () => {
    onRetry(); // 调用父组件传递的重试函数
    navigate('/'); // 返回到主页
  };

  return (
    <div>
      <h1 className='failure'>Oops, you failed!</h1>
      <p>Try again?</p>
      <button onClick={handleRetry}>Retry</button>
    </div>
  );
};

export default FailurePage;
