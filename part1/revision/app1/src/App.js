import logo from './logo.svg';
import './App.css';

function Hello(props) {
  return (
    <>
      <p>Hello! {props.name}</p>
    </>
  );
}

function World(props) {
  return (
    <>
      <p>Hi there {props.name} you are {props.age} years old</p>
    </>
  )
}

function App() {
  const name = "Nga";
  const age = 26;

  const person = [
    {name: 'Cris', age: 26}
  ]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello name="Cristian"/>
        <World name={name} age={age} />
        <World name={person[0].name} age={person[0].age} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
