import './App.css';
import Words from './words';

function App() {
  let greet = Words('Hola');
  return (
    <div className="App">
      <header className="App-header">
        <div>{greet}</div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
