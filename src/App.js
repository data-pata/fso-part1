const Header = (props) => {
  return <h1> {props.course} </h1>;
};

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} numExercises={props.Exercises1} />
      <Part part={props.part2} numExercises={props.Exercises2} />
      <Part part={props.part3} numExercises={props.Exercises3} />
    </div>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.part} {props.numExercises}
    </p>
  );
};

const Total = (props) => {
  return <p>Number of exercises {props.total}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  const total = exercises1 + exercises2 + exercises3;

  return (
    <>
      <Header course={course} />
      <Content
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3}
      />
      <Total total={total} />
    </>
  );
};

export default App;
