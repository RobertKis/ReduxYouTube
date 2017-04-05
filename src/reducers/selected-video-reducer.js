import { SELECT_VIDEO } from '../actions/index';

export default function(state= null, action){
    if(action.type === SELECT_VIDEO)
    {
        return action.payload;
    }
    return state;
}