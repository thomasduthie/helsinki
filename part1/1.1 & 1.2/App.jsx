const Header = ({course}) => {

  return (
    <div>
      <h1>{course}</h1>
    </div>
  )
}

const Content = ({parts, exercises}) => {
  
  return (
    <div>
      <p>{parts} {exercises}</p>
    </div>
  )
}

const Total = ({total}) => {

  return (
    <div>
      <p>
        {total}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content parts={part1} exercises={exercises1} />
      <Content parts={part2} exercises={exercises2} />
      <Content parts={part3} exercises={exercises3} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App