import { fromJS } from 'immutable';

const INCREASE = '@@reactTraining/INCREASE';
const DECREASE = '@@reactTraining/DECREASE';

const INITIAL_STATE = fromJS({value: 0});

export default function counterReducer(state = INITIAL_STATE, action = {}) {
  const result = {
    [DECREASE]: decrement,
    [INCREASE]: increment,
  }[action.type];
  return result && result(state) || state;
}

export function increase() {
  return { type: INCREASE };
}

export function decrease() {
  return { type: DECREASE };
}

function increment (state) {
  return state.updateIn(['value'], i => i + 1);;
}

function decrement (state) {
  return state.updateIn(['value'], i => i - 1);;
}
