import {useState} from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => (
  <>
    <p>{props.text}: {props.value} {props.symbol}</p>
  </>
)

const Statistics = (props) => {
  if (props.good + props.neutral + props.bad == 0) {
    return(
      <></>
    )
  }
  return(
    <>
    <h1>Statistics</h1>
    <table>
    <tbody>
      <tr>
	  <td>Good: </td>
	  <td> {props.good} </td>
      </tr>
      <tr>
	  <td>Bad: </td>
	  <td> {props.bad} </td>
      </tr>
      <tr>
	  <td>Neutral: </td>
	  <td> {props.neutral} </td>
      </tr>
      <tr>
	  <td>Total: </td>
	  <td> {props.good + props.neutral + props.bad} </td>
      </tr>
      <tr>
	  <td>Average: </td>
	  <td> {(props.good - props.bad)/(props.good+props.neutral+props.bad)} </td>
      </tr>
      <tr>
	  <td>Positive: </td>
	  <td> {Math.round(props.good/(props.good+props.neutral+props.bad)*100)} % </td>
      </tr>
    </tbody>
    </table>
    </>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setGood(good+1)} text = "Good" />
      <Button handleClick={() => setNeutral(neutral+1)} text = "Neutral" />
      <Button handleClick={() => setBad(bad+1)} text = "Bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App;
