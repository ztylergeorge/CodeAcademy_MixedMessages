import logo from './logo.svg';
import './App.css';
import Inspirational from './Inspirational';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Inspirational />
      </header>
    </div>
  );
}

export default App;
