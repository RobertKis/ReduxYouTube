import { CATEGORY_VALUE } from '../actions/index';

export default function(state = [], action){
    console.log("CATEGORY_VALUE")
    console.log(action.payload);
    if(action.type === 'CATEGORY_VALUE'){
        return action.payload;
    }
    return state;
}
