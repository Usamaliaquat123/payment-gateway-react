import React from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from './containers/auth/Signup/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css'
import Resetpass from './containers/auth/Reset/Resetpass';
import Login from './containers/auth/Login/Login';
import AppNav from './navigation/nav';
function App() {
  return (
    <AppNav />
  );
}

export default App;
