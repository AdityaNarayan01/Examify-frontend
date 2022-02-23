import { TEACHERTESTDETAILS } from '../../constants/index.js';

const initialstate = {
   teacherTestDetails: []
}

const teacherTestDetails = (state = initialstate,action) => {
    switch(action.type) {
        case TEACHERTESTDETAILS :
            console.log('TESTDETAILS',action.data);
            return {...state, teacherTestDetails: action?.data};
        default:
            return state;
    }
}

export default teacherTestDetails;