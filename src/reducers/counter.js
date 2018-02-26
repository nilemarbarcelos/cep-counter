const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counter = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT: return state + 1;
    case DECREMENT: return state - 1;
    default: return state;
  }
}

const increment = () => ({ type: INCREMENT })
const decrement = () => ({ type: DECREMENT })
