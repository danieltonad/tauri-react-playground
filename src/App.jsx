// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { ask } from '@tauri-apps/api/dialog';
import { readText, writeText } from '@tauri-apps/api/clipboard';

const { invoke } = window.__TAURI__.tauri


function App() {
  const [count, setCount] = useState(0);
  
  const increment = () => {
    setCount(count + 1);
  }
  
  const double_click = async () => {
    // const yes = await ask('Are you sure?', 'Tauri');
    const yes2 = await ask('This action cannot be reverted. Are you sure?', { title: 'Tauri', type: 'warning' });
    alert(yes2)
    setCount(count + 2);
  }

 async function clipboard(){
   await writeText(await invoke('greet', { name: 'World' }))
   let text = await readText()
    alert(text)
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
        <br />
        <button onClick={clipboard}> Clipboard </button>
      </header>
    </div>
  );
}

export default App;
