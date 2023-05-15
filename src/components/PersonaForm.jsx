
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function PersonaForm({ personas, onSubmit }) {
  const navigate = useNavigate();
  const { id } = useParams();

  const [codigo, setCodigo] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');

  useEffect(() => {
    const persona = personas.find((c) => c.id === parseInt(id));
    if (persona) {
      setCodigo(persona.codigo);
      setNombre(persona.nombre);
      setApellidos(persona.apellidos);
    }
  }, [personas, id]);

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const persona = { codigo, nombre, apellidos };
    if (id) {
      onSubmit(parseInt(id), persona);
    } else {
      onSubmit(persona);
    }
    navigate('/personas');
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div>
        <label htmlFor="codigo">Código:</label>
        <input type="text" id="codigo" value={codigo} onChange={(e) => setCodigo(e.target.value)} />
      </div>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </div>
      <div>
        <label htmlFor="apellidos">Apellidos:</label>
        <input type="text" id="apellidos" value={apellidos} onChange={(e) => setApellidos(e.target.value)} />
      </div>
      <button type="submit">{id ? 'Editar persona' : 'Agregar persona'}</button>
    </form>
  );
}

export default PersonaForm;
