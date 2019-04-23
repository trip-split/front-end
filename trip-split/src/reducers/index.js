import {REGISTER_START, REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL, GET_TRIPS_START, GET_TRIPS_SUCCESS, GET_TRIPS_FAIL} from '../actions/index'

const initialState = {
    isFetching: false,
    isRegistering: false,
    isLoggingIn: false,
    isFetchingTrips: false,
    userTrips: [],
    fetchTripsError: ''
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
            localStorage.setItem("id", action.payload.id)
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
        case GET_TRIPS_START:
            return {
                ...state,
                isFetchingTrips: true
            }
        case GET_TRIPS_SUCCESS:
            console.log(action.payload);
            return{
                ...state,
                isFetching: false,
                userTrips: action.payload
            }
        case GET_TRIPS_FAIL:
            console.log(action.payload)
            return {
                ...state, 
                isFetchingTrips: false,
                fetchTripsError: action.payload
            }
         default:
        return state;
    }
}

export default rootReducer