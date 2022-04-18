////////////////////////////////////////////////
////////////////////////////////////////////////
//////////////////// v1.7
/*

import ReactDOM from 'react-dom';
import React, {useState} from 'react';

const App = () => {
    //save clicks of each button to its own State
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const [all, setAll] = useState(0)
    const [avg, setAvg] = useState(0)

    const GoodHandleClick = () => {
      setGood(good+1)
      setAll(all+1)
      setAvg(avg+1)
    }
    const NeutralHandleClick = () => {
      setNeutral(neutral+1)
      setAll(all+1)
      setAvg(avg+0)
    }
    const BadHandleClick = () => {
      setBad(bad+1)
      setAll(all+1)
      setAvg(avg-1)
    }
    return(
        <div>
            <h1>give feedback</h1>
            <button onClick={GoodHandleClick}>good</button>
            <button onClick={NeutralHandleClick}>neutral</button>
            <button onClick={BadHandleClick}>bad</button>
            <h1>statistics</h1>
            <p>good: {good}</p>
            <p>neutral: {neutral}</p>
            <p>bad: {bad}</p>
            <p>all: {all}</p>
            <p>average: {avg/all}</p>
            <p>positive: {(good/all)*100}%</p>
        </div>
    )
}

export default App
ReactDOM.render(<App />, document.getElementById('root'))


////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
/// v1.8
import ReactDOM from 'react-dom';
import React, {useState} from 'react';



const Statistics = (props) => {
  return(
    <div>
      <p>good: {props.good}</p>
      <p>neutral: {props.neutral}</p>
      <p>bad: {props.bad}</p>
      <p>all: {props.all}</p>
      <p>average: {props.avg/props.all}</p>
      <p>positive: {(props.good/props.all)*100}%</p>
    </div>
  )
}

const App = () => {
  //save clicks of each button to its own State
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [all, setAll] = useState(0)
  const [avg, setAvg] = useState(0)

  const GoodHandleClick = () => {
    setGood(good+1)
    setAll(all+1)
    setAvg(avg+1)
  }
  const NeutralHandleClick = () => {
    setNeutral(neutral+1)
    setAll(all+1)
    setAvg(avg+0)
  }
  const BadHandleClick = () => {
    setBad(bad+1)
    setAll(all+1)
    setAvg(avg-1)
  }
  return(
      <div>
          <h1>give feedback</h1>
          <button onClick={GoodHandleClick}>good</button>
          <button onClick={NeutralHandleClick}>neutral</button>
          <button onClick={BadHandleClick}>bad</button>
          <Statistics good={good} neutral={neutral} bad={bad} avg={avg} all={all}/>
      </div>
  )
}

export default App
ReactDOM.render(<App />, document.getElementById('root'))


//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
///////////v1.9
import ReactDOM from 'react-dom';
import React, {useState} from 'react';

const Statistics = (props) => {
  if(props.all>0){
    return(
      <div>
        <p>good: {props.good}</p>
        <p>neutral: {props.neutral}</p>
        <p>bad: {props.bad}</p>
        <p>all: {props.all}</p>
        <p>average: {props.avg/props.all}</p>
        <p>positive: {(props.good/props.all)*100}%</p>
      </div>
    )
  }
  else{
    return (
    <div>
      <p>You haven't done anything yet</p>
    </div>
    )
  }
}

const App = () => {
  //save clicks of each button to its own State
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [all, setAll] = useState(0)
  const [avg, setAvg] = useState(0)

  const GoodHandleClick = () => {
    setGood(good+1)
    setAll(all+1)
    setAvg(avg+1)
  }
  const NeutralHandleClick = () => {
    setNeutral(neutral+1)
    setAll(all+1)
    setAvg(avg+0)
  }
  const BadHandleClick = () => {
    setBad(bad+1)
    setAll(all+1)
    setAvg(avg-1)
  }
  return(
      <div>
          <h1>give feedback</h1>
          <button onClick={GoodHandleClick}>good</button>
          <button onClick={NeutralHandleClick}>neutral</button>
          <button onClick={BadHandleClick}>bad</button>
          <Statistics good={good} neutral={neutral} bad={bad} avg={avg} all={all}/>
      </div>
  )
}

export default App
ReactDOM.render(<App />, document.getElementById('root'))


//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
//////////////v1.10

import ReactDOM from 'react-dom';
import React, {useState} from 'react';

const Statistics = (props) => {
  if(props.all>0){
    return(
      <div>
        <p>good: {props.good}</p>
        <p>neutral: {props.neutral}</p>
        <p>bad: {props.bad}</p>
        <p>all: {props.all}</p>
        <p>average: {props.avg/props.all}</p>
        <p>positive: {(props.good/props.all)*100}%</p>
      </div>
    )
  }
  else{
    return (
    <div>
      <p>You haven't done anything yet</p>
    </div>
    )
  }
}
const Button = (props) => {
  return(
    <button onClick={props.handleClick}>{props.text}</button>
  )
}
const App = () => {
  //save clicks of each button to its own State
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [all, setAll] = useState(0)
  const [avg, setAvg] = useState(0)

  const GoodHandleClick = () => {
    setGood(good+1)
    setAll(all+1)
    setAvg(avg+1)
  }
  const NeutralHandleClick = () => {
    setNeutral(neutral+1)
    setAll(all+1)
    setAvg(avg+0)
  }
  const BadHandleClick = () => {
    setBad(bad+1)
    setAll(all+1)
    setAvg(avg-1)
  }
  return(
      <div>
          <h1>give feedback</h1>
          <Button handleClick={GoodHandleClick} text="Good"/>
          <Button handleClick={NeutralHandleClick} text="Neutral"/>
          <Button handleClick={BadHandleClick} text="Bad"/>
          <Statistics good={good} neutral={neutral} bad={bad} avg={avg} all={all}/>
      </div>
  )
}

export default App
ReactDOM.render(<App />, document.getElementById('root'))

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
////////////////v1.11

import ReactDOM from 'react-dom';
import React, {useState} from 'react';

const Statistics = (props) => {
  if(props.all>0){
    return(
      <div>
        <StatisticLine text="good" value={props.good}/>
        <StatisticLine text="neutral" value={props.neutral}/>
        <StatisticLine text="bad" value={props.bad}/>
        <StatisticLine text="all" value={props.all}/>
        <StatisticLine text="average" value={props.avg/props.all}/>
        <StatisticLine text ="positive" value={(props.good/props.all)*100}/>
      </div>
    )
  }
  else{
    return (
    <div>
      <p>You haven't done anything yet</p>
    </div>
    )
  }
}
const Button = (props) => {
  return(
    <button onClick={props.handleClick}>{props.text}</button>
  )
}
const StatisticLine = (props) => {
  return(
    <div>
      <p>{props.text}: {props.value}</p>
    </div>
  )
}
const App = () => {
  //save clicks of each button to its own State
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [all, setAll] = useState(0)
  const [avg, setAvg] = useState(0)

  const GoodHandleClick = () => {
    setGood(good+1)
    setAll(all+1)
    setAvg(avg+1)
  }
  const NeutralHandleClick = () => {
    setNeutral(neutral+1)
    setAll(all+1)
    setAvg(avg+0)
  }
  const BadHandleClick = () => {
    setBad(bad+1)
    setAll(all+1)
    setAvg(avg-1)
  }
  return(
      <div>
          <h1>give feedback</h1>
          <Button handleClick={GoodHandleClick} text="Good"/>
          <Button handleClick={NeutralHandleClick} text="Neutral"/>
          <Button handleClick={BadHandleClick} text="Bad"/>
          <Statistics good={good} neutral={neutral} bad={bad} avg={avg} all={all}/>
      </div>
  )
}

export default App
ReactDOM.render(<App />, document.getElementById('root'))

*/
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////v1.11

import ReactDOM from 'react-dom';
import React, {useState} from 'react';

const Statistics = (props) => {
  if(props.all>0){
    return(
      <div>
        <table>
          <StatisticLine text="good" value={props.good}/>
          <StatisticLine text="neutral" value={props.neutral}/>
          <StatisticLine text="bad" value={props.bad}/>
          <StatisticLine text="all" value={props.all}/>
          <StatisticLine text="average" value={props.avg/props.all}/>
          <StatisticLine text ="positive" value={(props.good/props.all)*100}/>
        </table>
      </div>
    )
  }
  else{
    return (
    <div>
      <p>You haven't done anything yet</p>
    </div>
    )
  }
}
const Button = (props) => {
  return(
    <button onClick={props.handleClick}>{props.text}</button>
  )
}
const StatisticLine = (props) => {
  return(
    <div>
      <tr>
        <th>{props.text}: </th>
        <td>{props.value}</td>
      </tr>
    </div>
  )
}
const App = () => {
  //save clicks of each button to its own State
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [all, setAll] = useState(0)
  const [avg, setAvg] = useState(0)

  const GoodHandleClick = () => {
    setGood(good+1)
    setAll(all+1)
    setAvg(avg+1)
  }
  const NeutralHandleClick = () => {
    setNeutral(neutral+1)
    setAll(all+1)
    setAvg(avg+0)
  }
  const BadHandleClick = () => {
    setBad(bad+1)
    setAll(all+1)
    setAvg(avg-1)
  }
  return(
      <div>
          <h1>give feedback</h1>
          <Button handleClick={GoodHandleClick} text="Good"/>
          <Button handleClick={NeutralHandleClick} text="Neutral"/>
          <Button handleClick={BadHandleClick} text="Bad"/>
          <h1>statistics</h1>
          <Statistics good={good} neutral={neutral} bad={bad} avg={avg} all={all}/>
      </div>
  )
}

export default App
ReactDOM.render(<App />, document.getElementById('root'))
