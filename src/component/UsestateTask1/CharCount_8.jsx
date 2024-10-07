import React, { useState } from 'react';

const CharCount_8 = () => {
  const [inputText, setInputText] = useState(''); 

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="container mt-5 w-50">
      <h2 className='text-center mb-5'>Character Counter</h2>
      
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Type something..."
        />
      </div>

      <p>Character Count: {inputText.length}</p>
    </div>
  );
};

export default CharCount_8;
