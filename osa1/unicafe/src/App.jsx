import { useState } from 'react'

const Header = ({text}) => <h1>{text}</h1>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
const Stats = ({grade, amount}) => (<p>{grade},{amount}</p>)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + bad + neutral
  const average = (good - bad) / all
  const positive = (good / all) * 100 + '%'


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
      <Stats grade="good" amount={good}/>
      <Stats grade="neutral" amount={neutral}/>
      <Stats grade="bad" amount={bad}/>
      <Stats grade="all" amount={all}/>
      <Stats grade="average" amount={average}/>
      <Stats grade="positive" amount={positive}/>
    </div>
  )
}

export default App
