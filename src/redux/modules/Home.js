const initialState = {
  list: [{item: 'test', done: false}],
  newToDo: ''
}

const INPUT_CHANGED = 'INPUT_CHANGED';

export const ACTIONS = {
  inputChange: function (param) {
    return {
      type: INPUT_CHANGED,
      payload: param
    }
  }
}

export default function reducer(state = initialState, action){
  switch (action.type){
    case INPUT_CHANGED:
      return Object.assign({}, state, action.payload)
  default:
    return state;
  }
}
