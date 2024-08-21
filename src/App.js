import React from 'react';
import Menu from './Menu';
import './index.css';

function App() {
  return (
    <div className="App">
      <header classname= "App-Header">
        <h1>Welcome to Tato's Paw-some Bistro: Where Every Meal is a Tail-Wagging Delight!</h1>
      </header>
      <main>
        <Menu />
      </main>
    </div>
  );
}

export default App;
