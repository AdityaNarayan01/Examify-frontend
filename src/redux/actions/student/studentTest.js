import * as api from '../../../apis/index';
import { STUDENTTESTDETAILS,ERROR, STUDENTTESTANSWER} from '../../constants/index';



export const StudentTestDetails = () => async (dispatch) => {
   try {
      const token = await localStorage.getItem('authToken');
      const data = await api.studentTestDetails(token);

      const testData = data?.data;
      var testSubmitted = [];
      var missedTest = [];

      testData?.historyTest.forEach((i) => {
         testData?.testGiven.forEach((j) => {
            if(i._id == j.testId){
               const testPush = {...i, marks: j.marks, testSubmitId: j._id};
               testSubmitted.push(testPush);
            }else{
               missedTest.push(j);
            }
         })
      })

      if(testData?.success == true){
         dispatch({ type: STUDENTTESTDETAILS, data: testData, testSubmitted, missedTest})
      }else{
         dispatch({ type: ERROR, data: { message: data?.data?.message, isopen: true, type: '' } });
         return { data, success: false };
      }

   } catch (error) {
      dispatch({ type: ERROR, data: { message: error.message, isopen: true, type: '' } });
   }
}


export const StudentResult = (formData) => async (dispatch) => {
   try {
      const token = await localStorage.getItem('authToken');
      const data = await api.studentResult(formData, token);
      if (data.data.success == true) {
         return {success: true, data: data?.data}
      } else {
         dispatch({ type: ERROR, data: { message: data?.data?.message, isopen: true, type: '' } });
         return { data, success: false };
      }
   } catch (error) {
      dispatch({ type: ERROR, data: { message: error.message, isopen: true, type: '' } });
   }
}


export const studentTest = (formData) => async(dispatch) => {
   try {
      const token = await localStorage.getItem('authToken');
      const data = await api.studentTest(formData, token);
      if (data.data.success == true) {
         return {success: true, data: data?.data}
      } else {
         dispatch({ type: ERROR, data: { message: data?.data?.message, isopen: true, type: '' } });
         return { data, success: false };
      }
   } catch (error) {
      dispatch({ type: ERROR, data: { message: error.message, isopen: true, type: '' } });
   }
}


export const StudentAnswer = (formData) => async(dispatch) => {
   console.log('triggereere')
   const questions = formData.questions;
   const answer = [];
   for(var i=0;i<questions.length;i++) {
      answer.push([]);
   }
   dispatch({ type: STUDENTTESTANSWER, data: answer });
}


export const StudentMultipleSingle = (formData) => async(dispatch) => {
   dispatch({ type: STUDENTTESTANSWER, data: formData });
}


export const submitTestAction = (formData , router) => async(dispatch) => {
   try {
      const token = await localStorage.getItem('authToken');
      const data = await api.studentTestSubmit(formData, token);

      if (data.data.success == true) {
         dispatch({ type: ERROR, data: { message: 'Test Successfully Submitted', isopen: true, type: '' } });
         router.push('/studentHome');
      } else {
         dispatch({ type: ERROR, data: { message: data?.data?.message, isopen: true, type: '' } });
         return { data, success: false };
      }

   } catch (error) {
      console.log(error);
      dispatch({ type: ERROR, data: { message: error.message, isopen: true, type: '' } });
   }
}