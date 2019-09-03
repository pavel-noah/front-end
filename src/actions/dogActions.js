import { getDogs } from '../services/dogApi';

export const FETCH_DOGS = 'FETCH_DOGS';
export const fetchDogs = () => ({
    // pendingType: PENDING,
    type: FETCH_DOGS,
    payload: getDogs()
});

