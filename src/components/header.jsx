import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <ul>
        <li><Link to="/" className="unir-green">Inicio</Link></li>
        <li><Link to="/personas" className="unir-green">Personas</Link></li>
        <li><Link to="/cursos" className="unir-green">Cursos</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
