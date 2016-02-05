import { fromJS } from 'immutable';

const ADD_PERSON = '@@reactTraining/ADD_PERSON';
const UPDATE_CURRENT_NAME = '@@reactTraining/UPDATE_CURRENT_NAME';

const INITIAL_STATE = fromJS({
  names: [],
  current: '',
});

export default function guestbookReducer(state = INITIAL_STATE, action = {}) {
  const result = {
    [ADD_PERSON]: addPersonToList,
    [UPDATE_CURRENT_NAME]: changeCurrentInput,
  }[action.type];
  return result && result(state, action) || state;
}

export function addPerson (name) {
  return {
    type: ADD_PERSON,
    payload: name
  };
}

export function updateCurrentName (name) {
  return {
    type: UPDATE_CURRENT_NAME,
    payload: name
  }
}

function changeCurrentInput (state, action) {
  return state.updateIn(['current'], val => val = action.payload);
}

function addPersonToList (state, action) {
  return state
    .updateIn(['current'], val => val = '')
    .updateIn(['names'], arr => arr.push(action.payload));
}
