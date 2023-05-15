import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function CursoForm({ cursos, onSubmit }) {
  const navigate = useNavigate();
  const { id } = useParams();

  const [codigo, setCodigo] = useState('');
  const [nombre, setNombre] = useState('');

  useEffect(() => {
    const curso = cursos.find((c) => c.id === parseInt(id));
    if (curso) {
      setCodigo(curso.codigo);
      setNombre(curso.nombre);
    }
  }, [cursos, id]);

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const curso = { codigo, nombre };
    if (id) {
      onSubmit(parseInt(id), curso);
    } else {
      onSubmit(curso);
    }
    navigate('/cursos');
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
      <button type="submit">{id ? 'Editar curso' : 'Agregar curso'}</button>
    </form>
  );
}

export default CursoForm;
