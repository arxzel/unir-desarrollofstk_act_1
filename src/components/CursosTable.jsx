import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';


function CursosTable({cursos, eliminarCurso}) {

  const navigate = useNavigate();

  const [filtro, setfiltro] = useState('');

  const elementosFiltrados = cursos.filter(elemento =>
    elemento.codigo.toLowerCase().includes(filtro.toLowerCase())
  );

  const handleEditarCurso = (id) => {
    navigate(`/cursoForm/${id}`);
  }

  const handleAgregarCurso = () => {
    navigate(`/cursoForm`);
  }

  return (
    <div>
    <h1 className="unir-green">Cursos</h1>
    <p className="unir-dark">En este espacio puede Gestionar los cursos del semestre.</p>

    <div>
      <label htmlFor="filtro">Filtrar por nombre:</label>
      <input type="text" id="filtro" value={filtro} onChange={(e) => setfiltro(e.target.value)} />
    </div>

    <button onClick={handleAgregarCurso} className="btn btn-editar">Crear Curso</button>
    <table className="table">
      <thead>
        <tr>
          <th>id</th>
          <th>codigo</th>
          <th>noombre</th>
          <th>acciones</th>
        </tr>
      </thead>
      <tbody>
        {elementosFiltrados.map(curso => (
          <tr key={curso.id}>
            <td>{curso.id}</td>
            <td>{curso.codigo}</td>
            <td>{curso.nombre}</td>
            <td>
              <button onClick={() => handleEditarCurso(curso.id)} className="btn-editar">Editar</button>
              <button onClick={() => eliminarCurso(curso.id)} className="btn-eliminar">Eliminar</button>
            </td>
          </tr>
          ))}
      </tbody>
    </table>
    </div>
  );
}

export default CursosTable;


















/*


export default Curso;*/