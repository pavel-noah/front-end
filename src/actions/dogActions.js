import { getDogs, searchDog, createDogApi } from '../services/dogApi';

export const FETCH_DOGS = 'FETCH_DOGS';
export const fetchDogs = () => ({
    type: FETCH_DOGS,
    payload: getDogs()
});

export const CREATE_DOG = 'CREATE_DOG';
export const createDog = (name, age, weight) => ({
    type: CREATE_DOG,
    payload: createDogApi(name, age, weight)
});

export const UPDATE_NAME = 'UPDATE_NAME';
export const updateName = (name) => ({
    type: UPDATE_NAME,
    payload: name
});

export const UPDATE_AGE = 'UPDATE_AGE';
export const updateAge = (age) => ({
    type: UPDATE_AGE,
    payload: age
});

export const UPDATE_WEIGHT = 'UPDATE_WEIGHT';
export const updateWeight = (weight) => ({
    type: UPDATE_WEIGHT,
    payload: weight
});

export const UPDATE_SEARCH_INPUT = 'UPDATE_SEARCH_INPUT';
export const updateSearchInput = (searchInput) => ({
    type: UPDATE_SEARCH_INPUT,
    payload: searchInput
});

export const SEARCH_DOGS = 'SEARCH_DOGS';
export const searchDogs = (searchInput) => ({
    type: SEARCH_DOGS,
    payload: searchDog(searchInput)
});
