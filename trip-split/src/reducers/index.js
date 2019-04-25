import {REGISTER_START, REGISTER_SUCCESS, REGISTER_FAIL, 
    LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL, 
    GET_TRIPS_START, GET_TRIPS_SUCCESS, GET_TRIPS_FAIL,
    ADD_TRIP_START, ADD_TRIP_SUCCESS, ADD_TRIP_FAIL,
    GET_CURRENT_TRIP,
    END_TRIP_START, END_TRIP_SUCCESS, END_TRIP_FAIL,
    ADD_NEW_PERSON_SUCCESS, ADD_NEW_PERSON_START, ADD_NEW_PERSON_FAIL
} from '../actions/index'

const initialState = {
    isFetching: false,
    isRegistering: false,
    isLoggingIn: false,
    isFetchingTrips: false,
    isAddingTrip: false,
    userTrips: [],
    currentTrip: [],
    pastTrips: [],
    peopleOnTrip: [],
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
            localStorage.setItem("userId", action.payload.id)
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
        console.log("Get trips started...")
            return {
                ...state,
                isFetchingTrips: true
            }
        case GET_TRIPS_SUCCESS:
            console.log("Get trips success payload: ",action.payload);
            const currentTrip = action.payload.filter(currentTrip => {
                return currentTrip.isCurrent === 1
            })
            const pastTrips = action.payload.filter(currentTrip => {
                return currentTrip.isCurrent != 1
            })
            console.log(currentTrip);
            return{
                ...state,
                isFetching: false,
                currentTrip: currentTrip,
                pastTrips: pastTrips
            }
        case GET_TRIPS_FAIL:
            console.log(action.payload)
            return {
                ...state, 
                isFetchingTrips: false,
                fetchTripsError: action.payload
            }
        case ADD_TRIP_START:
            return {
                ...state,
                isAddingTrip: true
            }
        case ADD_TRIP_SUCCESS:
            return{
                isAddingTrip: false
            }
        case ADD_TRIP_FAIL:
            console.log(action.payload)
            return {
                ...state,
                isAddingTrip: false
            }
        case END_TRIP_START:
            return{
                ...state
            }
            
        case END_TRIP_SUCCESS:
            console.log(action.payload);
            console.log(currentTrip);
            return{
                ...state,
                currentTrip: []
            }
        case ADD_NEW_PERSON_SUCCESS:
        console.log("Add new person in reducer fired")
        console.log(action.payload);
        case ADD_NEW_PERSON_FAIL:
            console.log(action.payload)
         default:
        return state;
    }
}

export default rootReducer