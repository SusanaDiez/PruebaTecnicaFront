import React from 'react';

const ReturnButton = ({ setScreen }) => {
  return <button onClick={() => setScreen('welcome')}>Volver</button>;
};

export default ReturnButton;
