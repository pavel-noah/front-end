import { FETCH_DOGS, CREATE_DOG, UPDATE_AGE, UPDATE_NAME, UPDATE_WEIGHT, UPDATE_SEARCH_INPUT, SEARCH_DOGS } from '../actions/dogActions';

const initialState = {
    dogs: [],
    nameInput: '',
    ageInput: '', 
    weightInput: '',
    searchInput: '',
};

export default function reducer(state = initialState, action) {
    switch(action.type){
        case FETCH_DOGS:
            return { ...state, dogs: action.payload };
        case UPDATE_SEARCH_INPUT:
            return { ...state, searchInput: action.payload };
        case SEARCH_DOGS:
            return { ...state, dogs: action.payload };
        case UPDATE_NAME:
            return { ...state, nameInput: action.payload };
        case UPDATE_AGE:
            return { ...state, ageInput: action.payload };
        case UPDATE_WEIGHT:
            return { ...state, weightInput: action.payload };
        case CREATE_DOG:
            return { ...state, dogs: [...state.dogs, action.payload] };
        default: 
            return state;
    }
}
