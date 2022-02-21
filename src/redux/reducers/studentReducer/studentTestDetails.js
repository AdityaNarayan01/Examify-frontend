import { STUDENTTESTDETAILS } from '../../constants/index.js';

const initialstate = {
    studentTestDetails: null
}

const studentTestDetails = (state = initialstate,action) => {
    switch(action.type) {
        case STUDENTTESTDETAILS :
            return {...state, studentTestDetails: action?.data?.studentTestDetails};

        default:
            return state;
    }
}

export default studentTestDetails;