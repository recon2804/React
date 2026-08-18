import DecreaseButton from "./components/DecreaseButton"
import IncreaseButton from "./components/IncreaseButton"
import { useState } from "react"

const App = () => {
  const [value, setValue] = useState(0)

const decreaseOne = () => {
  const newValue = value - 1
  setValue(newValue)
}

  return <div>
    <h1> Počítadlo</h1>
    <h2>{value}</h2>
    <DecreaseButton decrease={decreaseOne}></DecreaseButton>
    <IncreaseButton/>
    </div>
}

export default App