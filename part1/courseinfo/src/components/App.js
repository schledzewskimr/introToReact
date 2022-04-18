///////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////v1.1
/*
import ReactDOM from 'react-dom';
import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Content = () => {
    return (
      <div>
        <Part part={part1} exercises={exercises1}/>
        <Part part={part2} exercises={exercises2}/>
        <Part part={part3} exercises={exercises3}/>
      </div>
    )
  }
  const Part = (props)=>{
    return (
      <div>
        {props.part}{props.exercises}
      </div>
    )
  }
  const Total = () =>{

    return(
      <p>
        this many {exercises1+ exercises2+ exercises3}
      </p>
    )

  }
  const Header = () => {
    return (
      <h1>{course}</h1>
    )
  }

  return (
    <div>
      <Header thisCourse={course}/>
      <Content content = {Content}/>
      <Total total={Total}/>
    </div>
  )
}

export default App
ReactDOM.render(<App />, document.getElementById('root'))
*/
//////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////// v1.2
/*
import ReactDOM from 'react-dom';
import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Content = () => {
    return (
      <div>
        <Part part={part1} exercises={exercises1}/>
        <Part part={part2} exercises={exercises2}/>
        <Part part={part3} exercises={exercises3}/>
      </div>
    )
  }
  const Part = (props)=>{
    return (
      <div>
        {props.part}{props.exercises}
      </div>
    )
  }
  const Total = () =>{

    return(
      <p>
        this many {exercises1+ exercises2+ exercises3}
      </p>
    )

  }
  const Header = () => {
    return (
      <h1>{course}</h1>
    )
  }

  return (
    <div>
      <Header thisCourse={course}/>
      <Content content = {Content}/>
      <Total total={Total}/>
    </div>
  )
}
export default App
ReactDOM.render(<App />, document.getElementById('root'))


///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
v1.3


import ReactDOM from 'react-dom';
import React from 'react'

const App = () => {
  
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises : 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  const Content = () => {
    return (
      <div>
        <Part part={part1.name} exercises={part1.exercises}/>
        <Part part={part2.name} exercises={part2.exercises}/>
        <Part part={part3.name} exercises={part3.exercises}/>
      </div>
    )
  }
  const Part = (props)=>{
    return (
      <div>
        {props.part}{props.exercises}
      </div>
    )
  }
  const Total = () =>{
    return(
      <p>
          {part1.exercises+ part2.exercises+ part3.exercises}
      </p>
    )

  }
  const Header = () => {
    return (
      <h1>{course}</h1>
    )
  }

  return (
    <div>
      <Header thisCourse={course}/>
      <Content content = {Content}/>
      <Total total={Total}/>
    </div>
  )
}
export default App
ReactDOM.render(<App />, document.getElementById('root'))


/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
////////////////////v1.4

import ReactDOM from 'react-dom';
import React from 'react'

const App = () => {
  
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises : 10
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
  const Content = () => {
    return (
      <div>
        <Part part={parts[0].name}  exercise={parts[0].exercises}/>
        <Part part={parts[1].name}  exercise={parts[1].exercises}/>
        <Part part={parts[2].name}  exercise={parts[2].exercises}/>
      </div>
    )
  }
  const Part = (props)=>{
    return (
      <div>
        {props.part}{props.exercise}
      </div>
    )
  }
  
  const Header = () => {
    return (
      <h1>{course}</h1>
    )
  }
  const Total = () =>{
    return(
      <p>
         Number of exercises: {parts[0].exercises+parts[1].exercises+parts[2].exercises}
      </p>
    )
  }

  return (
    <div>
      <Header course={course}/>
      <Content parts = {Part}/>
      <Total parts={parts}/>
    </div>
  )
}
export default App
ReactDOM.render(<App />, document.getElementById('root'))
*/
///////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
/////////////// v1.5

import ReactDOM from 'react-dom';
import React from 'react'

const App = () => {
  
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
  const Content = () => {
    return (
      <div>
        <Part part={course.parts[0].name}  exercise={course.parts[0].exercises}/>
        <Part part={course.parts[1].name}  exercise={course.parts[1].exercises}/>
        <Part part={course.parts[2].name}  exercise={course.parts[2].exercises}/>
      </div>
    )
  }
  const Part = (props)=>{
    return (
      <ul>
        <li>Lesson: {props.part}   Exercises: {props.exercise}</li>
      </ul>
    )
  }
  
  const Header = () => {
    return (
      <h1>{course.name}</h1>
    )
  }
  const Total = () =>{
    return(
      <p>
        Number of exercises: {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}
      </p>
    )
  }

  return (
    <div>
      <Header course={course}/>
      <Content parts = {Part}/>
      <Total parts={course.parts}/>
    </div>
  )
}
export default App
ReactDOM.render(<App />, document.getElementById('root'))

////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////v1.6

