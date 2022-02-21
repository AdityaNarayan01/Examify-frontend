import * as api from '../../../apis/index';
import { STUDENTLOGIN, STUDENTPROFILE, ERROR } from '../../constants/index';



export const StudentRegister = (formData, router) => async (dispatch) => {
    try {
        const data = await api.studentRegister(formData);
        if(data.data.success == true){
            router.push('/studentLogin')
        }else{
            // dispatch({type: ERROR, message: data?.message});
            return {data, success: false};
        }
    } catch (error) {
        console.log(error);
        // dispatch({type: ERROR, message: error.message});
    }
}


export const StudentVerify = (formData, router) => async (dispatch) =>  {
    try {
        
        const data = await api.studentVerifyRegister(formData);
        console.log(data);
        if(data.data.success){
            router.push('/studentLogin')
        }else{
            // router.push('/studentLogin')
            // dispatch({type: ERROR, message: data?.message});
            // return {data, success: false};
        }
    } catch (error) {
        // dispatch({type: ERROR, message: error.message});
    }
}


export const StudentLogin = (formData, router) => async (dispatch) => {
    try {
        const data = await api.studentLogin(formData);
        
        if(data.data.success){
            dispatch({type: STUDENTLOGIN, data: data?.data?.token});
            dispatch({type: STUDENTPROFILE, data: data?.data?.student});
            router.push('/studentHome')
        }else{
            // dispatch({type: ERROR, message: data?.message});
            // return {data, success: false};
        }
        
    } catch (error) {
        // dispatch({type: ERROR, message: error.message});
    }
}