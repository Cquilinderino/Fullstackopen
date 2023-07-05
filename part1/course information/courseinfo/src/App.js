function Header(props) {
  return (
    <h1>{props.course}</h1>
  )
}

function Part(props) {
  return (
    <div>
      <p>{props.part} {props.exercise}</p>
    </div>
  )
}
const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0].name} exercise={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercise={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exercise={props.parts[2].exercises} />
    </div>
  );
};

function Total(props) {
  let total = 0;
  props.total.forEach(part => {total += part.exercises});
  return (
    <p>Number of exercises {total}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
    { //part 1
      name: 'Fundamentals of React',
      exercises: 10
    },
    { //part 2
      name: 'Using props to pass data',
      exercises: 7
    },
    { //part 3
      name: 'State of a component',
      exercises: 14
    }
  ]
}

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={course.parts} />
    </div>
  )
}

export default App