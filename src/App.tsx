import './App.css';

import AdDesigner from './components/AdDesigner';
import Header from './components/Header';
import React from 'react';
import Votes from './components/Votes';

function App() {
  return (
    <div className="App">
      <Header />
      <AdDesigner />
      <Votes />
    </div>
  );
}

export default App;
