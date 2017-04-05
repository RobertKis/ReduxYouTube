import { SEARCH_METHOD } from '../actions/index';

export default function(state = [], action){
    switch(action.type)
    {
        case SEARCH_METHOD:
            return action.payload;
    }
    return state;
}
