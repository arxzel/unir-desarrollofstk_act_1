import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import CursosTable from './components/CursosTable';
import CursoForm from './components/CursoForm';
import PersonasTable from './components/PersonasTable';
import PersonaForm from './components/PersonaForm';
import Index from './components/index';

function App() {  

  const [cursos, setCursos] = useState([
    { id: 1, codigo: 'PER 7660', nombre: 'Desarrollo full stack' },
    { id: 2, codigo: 'PER 8626', nombre: 'AWS Coud particioner ' },
    { id: 3, codigo: 'PER 8625', nombre: 'Azure AZ-900' },
    { id: 4, codigo: 'PER8624', nombre: 'Programación en Python' },
  ]);

  const agregarCurso = (curso) => {
    const idMaximo = cursos.reduce((maximo, objeto) => {
      return objeto.id > maximo ? objeto.id : maximo;
    }, 0);
    curso.id=parseInt(parseInt(idMaximo)+1);
    setCursos([...cursos, curso]);
  };

  const editarCurso = (id, curso) => {
    setCursos(cursos.map((c) => (c.id === id ? { ...c, ...curso } : c)));
  };

  const eliminarCurso = (id) => {
    setCursos(cursos.filter((c) => c.id !== id));
  };

  const [personas, setPersonas] = useState([
    { id: 1, codigo: '123', nombre: 'Nombres de 123', apellidos: 'Apellidos de 123' },
    { id: 2, codigo: '456', nombre: 'Nombres de 456', apellidos: 'Apellidos de 456' },
    { id: 3, codigo: '789', nombre: 'Nombres de 789', apellidos: 'Apellidos de 789' },
    { id: 4, codigo: '975', nombre: 'Nombres de 975', apellidos: 'Apellidos de 975' },
  ]);

  const agregarPersona = (persona) => {
    const idMaximo = personas.reduce((maximo, objeto) => {
      return objeto.id > maximo ? objeto.id : maximo;
    }, 0);
    persona.id=parseInt(parseInt(idMaximo)+1);
    setPersonas([...personas, persona]);
  };

  const editarPersona = (id, persona) => {
    setPersonas(personas.map((c) => (c.id === id ? { ...c, ...persona } : c)));
  };

  const eliminarPersona = (id) => {
    setPersonas(personas.filter((c) => c.id !== id));
  };

  return (
    <Router>
      <div>
        <Header />
        <main>
        <Routes>
          <Route exact path="/" element={<Index /> } />

          <Route path="/cursos" element={<CursosTable cursos={cursos} eliminarCurso={eliminarCurso}/>} />
          <Route path="/cursoForm" element={<CursoForm cursos={cursos} onSubmit={agregarCurso} /> }/>
          <Route path="/cursoForm/:id" element={<CursoForm cursos={cursos} onSubmit={editarCurso}/>} />

          <Route path="/personas" element={<PersonasTable personas={personas} eliminarPersona={eliminarPersona}/>} />
          <Route path="/personaForm" element={<PersonaForm personas={personas} onSubmit={agregarPersona} /> }/>
          <Route path="/personaForm/:id" element={<PersonaForm personas={personas} onSubmit={editarPersona}/>} />

          
        </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
