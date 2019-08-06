import React from 'react';
import './App.css';

import Navigation from './Navigation/Navigation.react';
import Header from './Header/Header.react';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navigation/>
    </div>
  );
}

export default App;
