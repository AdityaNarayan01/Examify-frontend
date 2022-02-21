import * as api from '../../api/index.js';
import { STUDENTLOGIN, ERROR } from '../../constants/index';


export const StudentRegister = (formData, router) => async(dispatch => {
    try {
        const data = await api.studentRegister(formData);

        if(data.success){
            router.push('/studentLogin')
        }else{
            dispatch({type: ERROR, message: data?.message});
            return {data, success: false};
        }
    }catch(error) {
        dispatch({type: ERROR, message: error.message});
    }
})


export const StudentVerify = (formData, router) => async (dispatch) =>  {
    try {
        const data = await api.studentVerifyRegister(formData);
        if(data.success){
            router.push('/studentLogin')
        }else{
            router.push('/studentLogin')
            dispatch({type: ERROR, message: data?.message});
            return {data, success: false};
        }
    } catch (error) {
        dispatch({type: ERROR, message: error.message});
    }
}


export const StudentLogin = (formData, router) => async (dispatch) => {
    try {
        const data = 
export const studentLogin = (requestbody) => API.post(`/studentlogin`, requestbody);
    } catch (error) {
        dispatch({type: ERROR, message: error.message});
    }
}