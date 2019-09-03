import { FETCH_DOGS } from '../actions/dogActions';

const initialState = {
    dogs: [
        { name: 'bingo', age: 2, weight: 150 }, 
        { name: 'bongo', age: 4, weight: 400 },
        { name: 'jingo', age: 1, weight: 2 },
        { name: 'jongo', age: 7, weight: 40 },

        
    ]
};

export default function reducer(state = initialState, action) {
    switch(action.type){
        case FETCH_DOGS:
            return { ...state, dogs: action.payload };
        default: 
            return state;
    }
}
