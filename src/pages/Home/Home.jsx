// src/pages/Home.jsx

import React from 'react';
import reactImage from '../../assets/react.svg';
import viteImage from '../../assets/vite.svg';
import vitestImage from '../../assets/vitest.svg';
import cypressImage from '../../assets/cypress.svg';
import pnpmImage from '../../assets/pnpm.svg';

const Home = () => {
  return (
    <div className="home">
      <h1>Bienvenidos a nuestra aplicación</h1>
      <p className="subtitle">Explora nuestras funcionalidades increíbles</p>
      <div className="image-container">
        <img src={reactImage} alt="Proyecto" className="project-image"/>
        <img src={viteImage} alt="Segundo Proyecto" className="project-image"/>
        <img src={vitestImage} alt="Segundo Proyecto" className="project-image"/>
        <img src={cypressImage} alt="Segundo Proyecto" className="project-image"/>
        <img src={pnpmImage} alt="Segundo Proyecto" className="project-image"/>
      </div>
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
