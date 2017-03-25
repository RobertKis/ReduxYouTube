import { FETCH_VIDEOS } from '../actions/index';

export default function(state = [], action){
    console.log("payload: " + action.payload);
    switch(action.type)
    {
        case FETCH_VIDEOS:
            return action.payload.data.items;
    }

    console.log("payload: " + action.payload);
    return state;
}
