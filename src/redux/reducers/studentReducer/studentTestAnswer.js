import { STUDENTTESTANSWER } from '../../constants/index.js';

const initialstate = {
    studentTestAnswer: null
}

const studentTestAnswer = (state = initialstate,action) => {
    switch(action.type) {
        case STUDENTTESTANSWER :
            return {...state, studentTestAnswer: action?.data?.studentTestAnswer};

        default:
            return state;
    }
}

export default studentTestAnswer;