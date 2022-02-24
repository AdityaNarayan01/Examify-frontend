import { STUDENTTESTDETAILS, STUDENTTESTSUBMITTED } from '../../constants/index.js';

const initialstate = {
    ongoingTest: [],
    todayTest:[],
    upcomingTest: [],
    testSubmitted:[],
    missedTest:[]
}

const studentTestDetails = (state = initialstate,action) => {
    switch(action.type) {
        case STUDENTTESTDETAILS :
            return {...state, ongoingTest: action?.data?.ongoingTest, todayTest: action?.data?.todayTest, upcomingTest: action?.data?.upcomingTest, testSubmitted: action?.testSubmitted, missedTest: action?.missedTest};

        default:
            return state;
    }
}

export default studentTestDetails;