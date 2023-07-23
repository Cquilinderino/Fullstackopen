import logo from './logo.svg';
import './App.css';

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
}

const Content = (props) => {
  return (
    <>
      <p>{props.part} {props.exercise}</p>
    </>
  );
}

function Total(props) {
  return (
    <p>Number of exercises {props.total}</p>
  );
}

function App() {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div>
          <Header course={course} />
          <Content part={part1} exercise={exercises1} />
          <Content part={part2} exercise={exercises2} />
          <Content part={part3} exercise={exercises3} />
          <Total total={exercises1 + exercises2 + exercises3} />
        </div>

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