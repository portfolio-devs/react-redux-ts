import { useState } from "react"
import { addOne, minusOne } from "../app/actions/actionCreators"
import store from "../app/store"

const Counter = () => {
  console.log('COUNTER')
  const [counterstate, setCounterState] = useState(0)
  store.subscribe(() => {
    const stat = store.getState()
    setCounterState(stat.count)
  })
  return (
    <div>
      <span>STATE HERE: {counterstate}</span>
      <button onClick={() => store.dispatch(addOne())}>Add</button>
      <button onClick={() => store.dispatch(minusOne())}>Remove</button>
    </div>
  )
}

export default Counter
