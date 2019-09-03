export const promiseMiddleware = store => next => action => {
    if(Promise.resolve(action.payload) === action.payload) {
        next({
            type: 'PENDING'
        });
        action.payload
            .then(data => {
                store.dispatch({
                    type: action.type,
                    payload: data
                });
            });
    } else {
        next(action);
    }
};
