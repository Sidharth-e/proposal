import React, { useState } from 'react';
import Button from '../src/component/Button';
import './App.scss';

function App() {
  const [answer, setAnswer] = useState('');
  const [gifSrc, setGifSrc] = useState('https://media.giphy.com/media/FTGah7Mx3ss04PcasF/giphy.gif');

  const handleYesClick = () => {
    setAnswer('Thank you wifey');
    setGifSrc('https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif');
  };

  return (
    <div className="wrapper">
      <h2 className="question">{answer || 'Will you be my partner in crime for my rest of life?'}</h2>
      <img className="gif" alt="gif" src={gifSrc} />
      <div className="btn-group">
        {answer === '' &&(<>
          <button className="yes-btn" onClick={handleYesClick}>
          Yes
        </button>
        <Button />
        </>)}
      </div>
    </div>
  );
}

export default App;
