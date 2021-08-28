import './App.scss';
import React from 'react';
import logo from '../assets/logo.svg';

const App: React.FC = () => (
  <div className="app-component">
    <h1>ReactJS Template</h1>
    <img src={logo} alt="logo"/>
  </div>
);

export default App;
