import { userConstants } from "../actions/constants"

const initState = {
    error : "null",
    message : "",
    loading : ""
}

export default (state = initState, actions) => {
    switch(actions.type){
        case userConstants.SIGNUP_REQUEST:
            state = {
                ...state,
                loading : true
            }
            break;
            case userConstants.SIGNUP_SUCCESS:
            state = {
                ...state,
                message : actions.payload.message,
                loading : false
            }
            break;
            case userConstants.SIGNUP_FAILURE:
            state = {
                ...state,
                error : actions.payload.error,
                loading : true
            }
            break;
    }
    return state;
}