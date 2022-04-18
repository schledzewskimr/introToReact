/////////////////////////////////////////////
/////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
////////////////v1.12
/*
import ReactDOM from 'react-dom';
import React, { useState } from 'react'

const Button =(props)=>{
  return(
    <button onClick={props.selected}>which one?</button>
  )
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const Selected = () => {
      setSelected(Math.floor(Math.random()*anecdotes.length))
  }

  return (
    <div>
      {anecdotes[selected]}
      <Button selected={Selected}/>
    </div>
  )
}

export default App
ReactDOM.render(<App />, document.getElementById('root'))

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
//////////////v1.13

import ReactDOM from 'react-dom';
import React, { useState } from 'react'

const Button =(props)=>{
  return(
    <div>
      <button onClick={props.selected}>{props.text}</button>
    </div>
  )
}
const Voting =(props)=>{
  console.log(props.points)
  return(
    <div>
      <p>has {props.points[props.selected]} points</p>
    </div>
  )
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const Selected = () => {
      setSelected(Math.floor(Math.random()*anecdotes.length))
  }
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))
  
  const Votes = () =>{
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }
  console.log(points)
  console.log(selected)
  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <Voting points={points} selected={selected}/>
      <Button selected={Selected} text="choose an anecdote"/>
      <Button selected={Votes} text="vote"/>
    </div>
  )
}

export default App
ReactDOM.render(<App />, document.getElementById('root'))
*/
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
////////v1.14
import ReactDOM from 'react-dom';
import React, { useState } from 'react'

const Button =(props)=>{
  return(
    <div>
      <button onClick={props.selected}>{props.text}</button>
    </div>
  )
}
const Voting =(props)=>{
  return(
    <div>
      <p>has {props.points[props.selected]} points</p>
    </div>
  )
}
const WinVote = (props) => {
  const highestPoints = Math.max(...props.points)
  const highestIndex = props.points.indexOf(highestPoints)
  const winner = props.anecdotes[highestIndex]
  if(highestPoints>0){
    return (
      <div>
        <p>{winner}</p>
        <p>is everybody's favorite with {highestPoints} votes</p>
      </div>
    )
  }
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const Selected = () => {
      setSelected(Math.floor(Math.random()*anecdotes.length))
  }

  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))
  
  const Votes = () =>{
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
    copy.indexOf(Math.max.apply(null,points))
  }


  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <Voting points={points} selected={selected}/>
      <Button selected={Selected} text="choose an anecdote"/>
      <Button selected={Votes} text="vote"/>
      <h1>Anecdote with the most votes</h1>
      <WinVote points={points} anecdotes={anecdotes}/>
    </div>
  )
}

export default App
ReactDOM.render(<App />, document.getElementById('root'))
