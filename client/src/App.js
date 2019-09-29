import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import CaseList from './components/CaseList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
     <AppNavbar />
     <CaseList />

    </div>
  );
}

export default App;
