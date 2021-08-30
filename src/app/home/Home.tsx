import React from 'react';
import logo from '../../assets/logo.svg';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <h1>ReactJS Template</h1>
      <img src={logo} alt="logo"/>
    </div>
  );
};

export default Home;
