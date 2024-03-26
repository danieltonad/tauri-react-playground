// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { ask } from '@tauri-apps/api/dialog';
const { invoke } = window.__TAURI__.tauri


function App() {
  const [count, setCount] = useState(0);
  
  const increment = () => {
    setCount(count + 1);
  }
  
  const double_click = async () => {
    const yes = await ask('Are you sure?', 'Tauri');
    const yes2 = await ask('This action cannot be reverted. Are you sure?', { title: 'Tauri', type: 'warning' });
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
        <button onClick={() => { alert(100) }}>  Show Dialog </button>
      </header>
    </div>
  );
}

export default App;
