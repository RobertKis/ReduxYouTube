import * as actions from '../actions/index';
import { Record } from 'immutable';

export const InitialState = Record({
  value: null,
  isChecked: false
});
const initialState = new InitialState;

export default function categoryReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) return initialState.mergeDeep(state);
  console.log("test3")
  console.log(action.type)
  switch (action.type) {
    case actions.CATEGORY_VALUE: {

      const { value } = action.payload;
      console.log("value")
      console.log(value)
      return state.set('value', value);
    }
    case actions.CATEGORY_SEARCH: {
      const { isChecked } = action.payload;
      return state.set('isChecked', isChecked);
    }
  }
  return state;
}
