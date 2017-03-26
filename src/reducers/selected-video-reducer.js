import { SELECT_VIDEO } from '../actions/index';

export default function(state= null, action){
    console.log("action");
    console.log(action.type);
    if(action.type === SELECT_VIDEO)
    {
        console.log("true");
        return action.payload;
    }
    console.log("false")
    return state;
}