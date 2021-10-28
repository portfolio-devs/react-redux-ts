export const addOne = () => {
  return {
    type: 'counter/increment',
    payload: 1
  }
}
export const minusOne = () => {
  return {
    type: 'counter/decrement',
    payload: 1
  }
}
