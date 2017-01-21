// Actions
export const ADD = 'counter/ADD'
export const SUBTRACT = 'counter/SUBTRACT'

// Action Creators
export const add = () => {
  return {
    type: ADD
  }
}

export const subtract = () => {
  return {
    type: SUBTRACT
  }
}
