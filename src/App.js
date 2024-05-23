import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting/Greeting';
import Counter from './components/Counter/Counter';

function App() {
  return (
    <div className="App">
     <Greeting name={"Abhi"} />
     <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Counter />
    </div>
  );
}

export default App;
