import React from 'react';

const WelcomeScreen = ({ setScreen }) => {
  return (
    <div>
      <h2>Bienvenido a la Gestión de Fondos</h2>
      <button onClick={() => setScreen('subscribe')}>Suscribirse a un Fondo</button>
      <button onClick={() => setScreen('cancel')}>Cancelar Suscripción</button>
      <button onClick={() => setScreen('history')}>Ver Historial</button>
    </div>
  );
};

export default WelcomeScreen;
