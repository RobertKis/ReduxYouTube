import * as actions from '../actions/index';
import { Record } from 'immutable';

export const InitialState = Record({
  videoLength: null
});
const initialState = new InitialState;

export default function settingsReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) return initialState.mergeDeep(state);
  console.log("test2")
  switch (action.type) {
    case actions.SEARCH_METHOD: {
      const { videoLength } = action.payload;

      return state.set('videoLength', videoLength);
    }
  }
  return state;
}
