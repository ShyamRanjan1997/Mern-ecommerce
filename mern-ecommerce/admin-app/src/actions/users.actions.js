import axios from "../helpers/axios";
import { authConstants, userConstants } from "./constants"

export const signup = (user) => {
    return async dispatch => {
        dispatch({
            type : userConstants.SIGNUP_REQUEST
        });

        const res = await axios.post(`/admin/signup`, {
            ...user
        });

        
        if(res.status === 200){
            const { message } = res.data;
            dispatch({
                type : userConstants.SIGNUP_SUCCESS,
                payload : {
                    message
                }
            });
        }
        else{
            if(res.status === 400){
                dispatch({
                    type : userConstants.SIGNUP_FAILURE,
                    payload : {
                        error : res.data.error
                    }
                });
            }
        }
    }
}