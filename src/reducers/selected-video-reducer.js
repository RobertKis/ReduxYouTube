import { SELECT_VIDEO } from '../actions/index';
import { Record } from 'immutable';

export const InitialState = Record({
    current: null
});
const initialState = new InitialState;

export default function(state= initialState, action){
    if(!(state instanceof InitialState)) return initualState.mergeDeep(state);

    if(action.type === SELECT_VIDEO)
    {
        const { current } = action.payload;
        return state.set('current', current);
    }

    return state;
}