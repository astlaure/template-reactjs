import './App.scss';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AuthContextProvider, Login } from './auth';
import Home from './home/Home';

const App: React.FC = () => (
  <AuthContextProvider>
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  </AuthContextProvider>
);

export default App;
