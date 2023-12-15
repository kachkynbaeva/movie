
const initialState = {
    movies:[],
    movie:{}
};

export const movieReducer = (state = initialState,action) =>{
    switch (action.type) {
        case 'GET_MOVIE':
            return {...state,movie: action.payload};
        case 'CLEAR_MOVIE':
            return {...state,movie:{}};

        default:
            return state;
    }
};