import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReturnButton from './ReturnButton';

const History = ({ setScreen }) => {
  const [transacciones, setTransacciones] = useState([]);

  useEffect(() => {
    const fetchTransacciones = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/transacciones');
        setTransacciones(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTransacciones();
  }, []);

  return (
    <div>
      <h2>Historial de Transacciones</h2>
      <ul>
        {transacciones.map((transaccion) => (
          <li key={transaccion.id}>
            {transaccion.tipo} - {transaccion.fondo_id} - {new Date(transaccion.fecha).toLocaleString()} - ID: {transaccion.id}
          </li>
        ))}
      </ul>
      <ReturnButton setScreen={setScreen} />
    </div>
  );
};

export default History;
