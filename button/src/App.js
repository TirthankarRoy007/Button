import React from 'react';
import Button from './Button';

const App = () => {
  const handleButtonClick = (buttonName) => {
    alert(`I am ${buttonName} clicked`);
  };

  return (
    <div>
      <Button
        buttonText="Button 1"
        buttonStyle={{ color: 'white', background: 'red' }}
        onClick={() => handleButtonClick('Button 1')}
      />

      <Button
        buttonText="Button 2"
        buttonStyle={{ color: 'white', background: 'blue' }}
        onClick={() => handleButtonClick('Button 2')}
      />
    </div>
  );
};

export default App;
