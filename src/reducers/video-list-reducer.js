import { FETCH_VIDEOS } from '../actions/index';
import { FETCH_PLAYLIST } from '../actions/index';

export default function(state = [], action){
    switch(action.type)
    {
        case FETCH_VIDEOS:
            return action.payload.data.items;
        case FETCH_PLAYLIST:
            return action.payload.data.items;
    }
    return state;
}
