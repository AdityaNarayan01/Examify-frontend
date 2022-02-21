import { ERROR } from '../../constants/index.js';

const initialstate = {
    error: null
}

const errorDetails = (state = initialstate,action) => {
    switch(action.type) {
        case ERROR :
            return {...state, errorDetails: action?.data?.error};

        default:
            return state;
    }
}

export default errorDetails;