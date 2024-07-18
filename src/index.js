import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import WelcomeScreen from './components/WelcomeScreen';
import Subscribe from './components/Subscribe';
import Cancel from './components/Cancel';
import History from './components/History';
import './index.css';

const App = () => {
  const [screen, setScreen] = useState('welcome');
  const [balance, setBalance] = useState('');

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        await axios.get('http://127.0.0.1:8000/saldo') 
        .then((response)=>setBalance(response.data));
      } catch (error) {
        console.error(error);
      }
    };

    fetchBalance();
  }, );

  return (
    <div className="app">
      <h1>Gestión de Fondos</h1>
      <h2>Saldo Actual: {balance}</h2>
      {screen === 'welcome' && <WelcomeScreen setScreen={setScreen} />}
      {screen === 'subscribe' && <Subscribe setScreen={setScreen} setBalance={setBalance} />}
      {screen === 'cancel' && <Cancel setScreen={setScreen} setBalance={setBalance} />}
      {screen === 'history' && <History setScreen={setScreen} />}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
