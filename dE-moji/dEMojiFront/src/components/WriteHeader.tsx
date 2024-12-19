import React from 'react';

import logo from '../assets/logo.svg';

const WriteHeader: React.FC = () => {
  return (
    <div>
        <div className='logo'>
            <img className = 'img' src={logo} alt="logo" />
        </div>
        <div className='message'>
            <span>
              당신의 오늘은 어떤 하루였나요?
            </span>
            
        </div>

    </div>
  );
};

export default WriteHeader;