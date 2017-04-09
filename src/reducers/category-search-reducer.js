import { CATEGORY_SEARCH } from '../actions/index';

export default function(state = [], action){
    if(action.type === 'CATEGORY_SEARCH'){
        return action.payload;
    }
    return state;
}
