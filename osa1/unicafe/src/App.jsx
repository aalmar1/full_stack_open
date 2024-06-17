import { useState } from 'react'

const Header = ({text}) => <h1>{text}</h1>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
const StatisticLine = ({grade, amount}) => (<p>{grade},{amount}</p>)

const Statistics = ({good, neutral, bad}) => {
  const all = good + bad + neutral
  const average = (good - bad) / all
  const positive = (good / all) * 100 + '%'

  if (all === 0 ) {
    return <p>No feedback given</p>
  }
  return (
    <div>
      <StatisticLine grade="good" amount={good}/>    
      <StatisticLine grade="neutral" amount={neutral}/>
      <StatisticLine grade="bad" amount={bad}/>
      <StatisticLine grade="all" amount={all}/>
      <StatisticLine grade="average" amount={average}/>
      <StatisticLine grade="positive" amount={positive}/>
    </div>
  )

  
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)

  const handleBad = () => setBad(bad + 1)

  const handleNeutral = () => setNeutral(neutral + 1)


  return (
    <div>
      <Header text="give feedback"/>
      <Button text="good" handleClick={handleGood}/>
      <Button text="bad" handleClick={handleBad}/>
      <Button text="neutral" handleClick={handleNeutral}/>
      <Header text="Stats"/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
