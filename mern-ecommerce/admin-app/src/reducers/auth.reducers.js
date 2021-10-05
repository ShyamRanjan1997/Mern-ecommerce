import { authConstants } from "../actions/constants";

const initState = {
  token: null,
  user: {
    firstName: "",
    lastName: "",
    email: "",
    picture: "",
  },
  authenticate: false,
  authenticating: false,
  loading : false,
  error : null,
  message : ''
};

export default (state = initState, actions) => {
  switch (actions.type) {
    case authConstants.LOGIN_REQUEST:
      state = {
        ...state,
        authenticating: true,
      };
      break;
    case authConstants.LOGIN_SUCCESS:
      state = {
        ...state,
        user: actions.payload.user,
        token: actions.payload.token,
        authenticate: true,
        authenticating: false,
      };
      break;
    case authConstants.LOGOUT_REQUEST:
      state = {
        ...state,
        loading : true
      };
      break;
      case authConstants.LOGOUT_SUCCESS:
      state = {
        ...initState,
      };
      break;
      case authConstants.LOGOUT_FIALURE:
      state = {
        ...state,
        error : actions.payload.error,
        loading : false
      };
      break;
  }

  return state;
};
