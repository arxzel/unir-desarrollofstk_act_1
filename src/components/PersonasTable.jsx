import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';


function PersonasTable({personas, eliminarPersona}) {

  const navigate = useNavigate();

  const [filtro, setfiltro] = useState('');

  const elementosFiltrados = personas.filter(elemento =>
    elemento.nombre.toLowerCase().includes(filtro.toLowerCase())
  );

  const handleEditarPersona = (id) => {
    navigate(`/personaForm/${id}`);
  }

  const handleAgregarPersona = () => {
    navigate(`/personaForm`);
  }


  return (
    <div>
    <h1 className="unir-green">Personas</h1>
    <p className="unir-dark">En este espacio puede Gestionar los Persona del semestre.</p>

    <div>
      <label htmlFor="filtro">Filtrar por nombre:</label>
      <input type="text" id="filtro" value={filtro} onChange={(e) => setfiltro(e.target.value)} />
    </div>

    <button onClick={handleAgregarPersona} className="btn btn-editar">Crear Persona</button>
    <table className="table">
      <thead>
        <tr>
          <th>id</th>
          <th>codigo</th>
          <th>nombre</th>
          <th>apellidos</th>
          <th>acciones</th>
        </tr>
      </thead>
      <tbody>
        {elementosFiltrados.map(persona => (
          <tr key={persona.id}>
            <td>{persona.id}</td>
            <td>{persona.codigo}</td>
            <td>{persona.nombre}</td>
            <td>{persona.apellidos}</td>
            <td>
              <button onClick={() => handleEditarPersona(persona.id)} className="btn-editar">Editar</button>
              <button onClick={() => eliminarPersona(persona.id)} className="btn-eliminar">Eliminar</button>
            </td>
          </tr>
          ))}
      </tbody>
    </table>
    </div>
  );
}

export default PersonasTable;