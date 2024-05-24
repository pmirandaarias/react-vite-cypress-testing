// src/pages/Contacto.jsx

import React, { useState } from 'react';
import './Contacto.css';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    comentarios: ''
  });

  const [modalOpen, setModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías agregar lógica para enviar los datos del formulario
    // Por ahora, simplemente abriremos el modal de confirmación
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    // Aquí podrías agregar lógica adicional al cerrar el modal
  };

  return (
    <div className="contacto">
      <h1>Contacto</h1>
      <p>Complete el siguiente formulario para contactarnos:</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Teléfono:</label>
          <input type="tel" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="comentarios">Comentarios:</label>
          <textarea id="comentarios" name="comentarios" value={formData.comentarios} onChange={handleChange} rows="4"></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>

      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Confirmación de Envío</h2>
            <p>¿Estás seguro de que deseas enviar este formulario?</p>
            <div className="modal-buttons">
              <button onClick={closeModal}>Cancelar</button>
              <button onClick={closeModal}>Enviar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contacto;
