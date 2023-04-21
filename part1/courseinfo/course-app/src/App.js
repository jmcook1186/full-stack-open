import {useState} from 'react'

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] =useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left+1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right)
  }
  

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
	  debugger
    const updatedRight = right+1
	  debugger
    setRight(updatedRight)
    setTotal(updatedRight + left)
  }

  return (
    <div>
	{left}
	<button onClick={handleLeftClick}>left</button>
	<button onClick={handleRightClick}>right</button>
	{right}
	<p>{allClicks.join(' ')}</p>
        <p>{total}</p>
    </div>
  )


}



export default App;
