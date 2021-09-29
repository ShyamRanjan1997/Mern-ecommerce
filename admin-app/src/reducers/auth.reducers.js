import { authConstants } from "../actions/constants"

const initState = {
    token: null,
    user: {
        firstName: '',
        lastName: '',
        email: '',
        picture: '',
    },
    authenticate: false,
    authenticating: false
};

export default (state = initState, actions) => {
    console.log(actions);

    switch (actions.type) {
        case authConstants.LOGIN_REQUEST:
            state = {
                ...state,
                authenticating : true
            }
            break
        case authConstants.LOGIN_SUCCESS:
            state = {
                ...state,
                user : actions.payload.user,
                token : actions.payload.token,
                authenticate : true,
                authenticating : false
            }
            break
    }

    return state;
}