// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const { invoke } = window.__TAURI__.tauri


function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const double_click = () => {
    setCount(count + 2);
  }
  
  // invoke('greet', { name: 'World' })
  // `invoke` returns a Promise
  // .then((response) => console.log(response))
  return (

    <div className="App">
      <header className="App-header">
        <div className="counter">
          {count}
        </div>
        <p>
          Pussy Nigga
        </p>
        <button onDoubleClick={double_click} onClick={increment}> click </button>
      </header>
    </div>
  );
}

export default App;
