//////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////// v1.1

import React from 'react';

const App = () => {
  //declare consts
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Header = (props) => {
    return (
      <h1>{props.course}</h1>
    )
  }

  const Part = (props) => {
    return (
      <p>
        {props.part} {props.exercises}
      </p>
    )
  }

  const Content = (props) => {
    return (
      <>
        <Part part={props.part1} exercises={props.exercises1}/>
        <Part part={props.part2} exercises={props.exercises2}/>
        <Part part={props.part3} exercises={props.exercises3}/>
      </>
    )
  }

  const Total = () => {
    return (
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    )
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}/>
      <Total total={Total}/>
    </div>
  )
}

export default App


/*
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
//////// v1.2
import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  //define consts
  
  const Header = (props) => {
    return (
      <h1>{props.course}</h1>
    )
  }

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
  const Part = (props) => {
    return (
      <p>
        {props.part} {props.exercises}
      </p>
    )
  }
  
  const Content = (props) => {
    return (
      <div>
        <Part part={props.parts[0].name} exercises={props.parts[0].exercises}/>
        <Part part={props.parts[1].name} exercises={props.parts[1].exercises}/>
        <Part part={props.parts[2].name} exercises={props.parts[2].exercises}/>
      </div>
    )
  }
  
  const Total = (props) => {
    return (
      <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    )
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
export default App;
*/