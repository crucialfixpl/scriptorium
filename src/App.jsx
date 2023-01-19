import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count) {
      console.log(`count`, count);
    }
  });

  return (
    <div className="App">
      <div>
        <a
          href="https://github.com/crucialfixpl/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/logo.svg" className="logo" alt="Scriptorium logo" />
        </a>
      </div>
      <h1>Work in progress</h1>
    </div>
  );
}

export default App;
