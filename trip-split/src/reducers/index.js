import {REGISTER_START, REGISTER_SUCCESS, REGISTER_FAIL} from '../actions/index'

const initialState = {
    user: '',
    error: '',
    isFetching: false,
    isRegistering: false
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case REGISTER_START:
        return {
            ...state, 
            isRegistering: true
        }
        case REGISTER_SUCCESS:
        console.log("Login Success Payload: ", action.payload);
        return {
            ...state,
            isRegistering: false
        }
        case REGISTER_FAIL:
        console.log("Login Failure payload: ", action.payload)
        return {
            ...state,
            isRegistering: false
        }
         default:
        return state;
    }
}

export default rootReducer