const initialState = {
  list: [{item: 'test', done: false}],
  newToDo: ''
}

const INPUT_CHANGED = 'INPUT_CHANGED';
const INPUT_SUBMIT = 'INPUT_SUBMIT';
const LIST_CLICK = 'LIST_CLICK';

export const ACTIONS = {
  inputChange: function (param) {
    return {
      type: INPUT_CHANGED,
      payload: param
    }
  },
  inputSubmit: function (param) {
    return {
      type: INPUT_SUBMIT,
      payload: param
    }
  },
  listItemClick: function (param) {
    return {
      type: LIST_CLICK,
      payload: param
    }
  },

}

export default function reducer(state = initialState, action){
  switch (action.type){
    case INPUT_CHANGED: return Object.assign({}, state, action.payload)
    case INPUT_SUBMIT: return Object.assign({}, state, action.payload)
    case LIST_CLICK: return Object.assign({}, state, action.payload)
  default:
    return state;
  }
}
