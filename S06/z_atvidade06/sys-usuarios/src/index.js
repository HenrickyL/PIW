import React from 'react';
import ReactDOM from 'react-dom';
import ParticlesBg from "particles-bg";
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ParticlesBg type="lines" bg={true}/>
  </React.StrictMode>,
  document.getElementById('root')
);

