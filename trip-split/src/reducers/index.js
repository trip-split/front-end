import {REGISTER_START, REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL} from '../actions/index'

const initialState = {
    user: '',
    error: '',
    isFetching: false,
    isRegistering: false,
    isLoggingIn: false
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
            case REGISTER_START:
            return {
                ...state, 
                isRegistering: true
            }
        case REGISTER_SUCCESS:
            console.log("Register Success Payload: ", action.payload);
            // localStorage.setItem("jwt", action.payload.token)
            return {
                ...state,
                isRegistering: false
            }
        case REGISTER_FAIL:
            console.log("Register Failure payload: ", action.payload)
            return {
                ...state,
                isRegistering: false
            }
        case LOGIN_START:
            return {
                ...state,
                isLoggingIn: true
            }
        case LOGIN_SUCCESS:
            console.log("Login Success payload:", action.payload)
            localStorage.setItem("jwt", action.payload.token)
            return {
                ...state,
                isLoggingIn: false
            }
        case LOGIN_FAIL:
            console.log("Login fail payload: ", action.payload)
            return {
                ...state,
                isLoggingIn: false
            }
         default:
        return state;
    }
}

export default rootReducer