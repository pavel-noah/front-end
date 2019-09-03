import { FETCH_DOGS } from '../actions/dogActions';

const initialState = {
    dogs: []
};

export default function reducer(state = initialState, action) {
    switch(action.type){
        case FETCH_DOGS:
            return { ...state, dogs: action.payload };
        default: 
            return state;
    }
}
