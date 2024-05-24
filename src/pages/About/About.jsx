import './About.css';
import React from 'react';

const About = () => {
  return (
    <div className="about">
      <h1>Quiénes Somos</h1>
      <p className="subtitle">Descubre nuestra historia y misión</p>
      <div className="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero ac nunc feugiat, a volutpat purus sodales. Mauris ultrices semper libero at consectetur.</p>
        <p>Donec tempus diam at quam lobortis eleifend. Nulla ac congue libero. Proin rhoncus tempor lobortis.</p>
        <p>Nullam at eros ac nisl condimentum consequat nec quis mi. Cras sed justo id augue dapibus facilisis. In vitae sagittis purus.</p>
      </div>
    </div>
  );
};

export default About;
