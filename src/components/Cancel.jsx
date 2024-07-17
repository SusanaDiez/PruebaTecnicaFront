import React, { useState } from 'react';
import axios from 'axios';
import ReturnButton from './ReturnButton';

const Cancel = ({ setScreen, setBalance }) => {
  const [fondoId, setFondoId] = useState();
  const [tipoF, setTipo] = useState('');
  const [destinatarioF, setDestinatario] = useState('');

  const handleCancel = async () => {
    try {
      const response = await axios.delete('http://127.0.0.1:8000/cancelar', {
        fondo_id: parseInt(fondoId),
        tipo: tipoF,
        destinatario: destinatarioF,
      });
      alert(response.data.mensaje);
      setBalance(response.data.saldo_restante);
      setScreen('welcome');
    } catch (error) {
      console.error(error);
      alert('Error al cancelar la suscripción.');
    }
  };

  return (
    <div>
      <h2>Cancelar Suscripción</h2>
      <select
        value={fondoId}
        onChange={(e) => setFondoId(e.target.value)}
      >
        <option value="">Seleccione un fondo</option>
        <option value="1">FPV_BTG_PACTUAL_RECAUDADORA</option>
        <option value="2">FPV_BTG_PACTUAL_ECOPETROL</option>
        <option value="3">DEUDAPRIVADA</option>
        <option value="4">FDO-ACCIONES</option>
        <option value="5">FPV_BTG_PACTUAL_DINAMICA</option>
      </select>
      <select
        value={tipoF}
        onChange={(e) => setTipo(e.target.value)}
      >
        <option value="email">Email</option>
        <option value="sms">SMS</option>
      </select>
      <input
        type="text"
        placeholder="Destinatario"
        value={destinatarioF}
        onChange={(e) => setDestinatario(e.target.value)}
      />
      <button onClick={handleCancel}>Cancelar</button>
      <ReturnButton setScreen={setScreen} />
    </div>
  );
};

export default Cancel;
