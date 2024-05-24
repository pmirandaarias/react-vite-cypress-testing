// src/pages/Home.jsx

import React from 'react';
import projectImage from '../../assets/react.svg';

const Home = () => {
  return (
    <div className="home">
      <h1>Bienvenidos a nuestra aplicación</h1>
      <p className="subtitle">Explora nuestras funcionalidades increíbles</p>
      <img src={projectImage} alt="Proyecto" className="project-image" />
      <div className="content">
        <p>Este proyecto utiliza las siguientes tecnologías:</p>
        <ul>
          <li><a href="https://www.cypress.io/">Cypress.io</a></li>
          <li><a href="https://vitejs.dev/">Vite</a></li>
          <li><a href="https://vitest.dev/">Vitest</a></li>
          <li><a href="https://reactrouter.com/">React Router</a></li>
          <li><a href="https://pnpm.io/">pnpm</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
