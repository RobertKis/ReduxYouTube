import * as actions from '../actions/index';
import { Record } from 'immutable';

export const InitialState = Record({
  receivedList: []
});
const initialState = new InitialState;

export default function videoListReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) return initialState.mergeDeep(state);
  if (action.type === actions.FETCH_VIDEOS) {
    const { receivedList } = action.payload;
    return state.set('receivedList', receivedList.data.items);
  }
  return state;
}
