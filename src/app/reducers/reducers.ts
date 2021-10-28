import { Reducer } from 'redux';
const initialState = {
  count: 0
}

export const rootReducer: Reducer = (state = initialState, action) => {

  switch (action.type) {

    // This reducer handles any action with type
    case "counter/increment":
      console.log('state, payload', state, action, action.payload)
      return { ...state, count: state.count + action.payload }
    case "counter/decrement":
      return { ...state, count: state.count - 1 }

    default:
      return state;
  }
}