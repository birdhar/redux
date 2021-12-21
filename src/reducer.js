import {INC, DEC, REMOVE, CLEAR_CART, GET_TOTAL, GET_MOMENT} from './actions'

function reducer(state, action) {
  switch (action.type) {
    case INC:
      return {...state,count: state.count +3};
      break;
    case DEC:
      return {...state,count: state.count -4};
      break;
  }
  return state;
}

export default reducer