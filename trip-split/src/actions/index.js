import axios from 'axios'

export const REGISTER_START = "REGISTER_START"
export const REGISTER_SUCCESS = "REGISTER_SUCCESS"
export const REGISTER_FAIL = "REGISTER_FAIL"

export const LOGIN_START = "LOGIN_START"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAIL = "LOGIN_FAIL"

export const GET_TRIPS_START = "GET_TRIPS_START"
export const GET_TRIPS_SUCCESS = "GET_TRIPS_SUCCESS"
export const GET_TRIPS_FAIL = "GET_TRIPS_FAIL"

export const GET_CURRENT_TRIP ="GET_CURRENT_TRIP"

export const ADD_TRIP_START = "ADD_TRIP_START"
export const ADD_TRIP_SUCCESS = "ADD_TRIP_SUCCESS"
export const ADD_TRIP_FAIL = "ADD_TRIP_FAIL"

export const END_TRIP_START = "END_TRIP_START"
export const END_TRIP_SUCCESS = "END_TRIP_SUCCESS"
export const END_TRIP_FAIL = "END_TRIP_FAIL"

export const ADD_NEW_PERSON_START = "ADD_NEW_PERSON_START"
export const ADD_NEW_PERSON_SUCCESS = "ADD_NEW_PERSON_SUCCESS"
export const ADD_NEW_PERSON_FAIL = "ADD_NEW_PERSON_FAIL"

export const register = credentials => dispatch => {
    dispatch({type: REGISTER_START })

    return axios.post('http://localhost:5000/api/register', credentials)
    .then(res => dispatch({
        
        type: REGISTER_SUCCESS,
        payload: res.data
    }))
    .catch(err => dispatch({
        type: REGISTER_FAIL,
        payload: err
    }))
}

export const login = credentials => dispatch => {
    dispatch({type: LOGIN_START});

    return axios.post('http://localhost:5000/api/login', credentials)
    .then(res => dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
    }))
    .catch(err => dispatch({
        type: LOGIN_FAIL,
        payload: err
    }))
}

export const getTrips = userId => dispatch => {
    console.log("Get trips actions result", axios.get(`http://localhost:5000/api/usertrips/${userId}`, {
        headers: {
            Authorization: localStorage.getItem('jwt')
        }
    }))
    dispatch({type: GET_TRIPS_START});

    axios.get(`http://localhost:5000/api/usertrips/${userId}`, {
        headers: {
            Authorization: localStorage.getItem('jwt')
        }
    })
    .then(res => dispatch({
        type: GET_TRIPS_SUCCESS,
        payload: res.data.user.trip
    }))
    .catch(err => dispatch({
        type: GET_TRIPS_FAIL,
        payload: err
    }))
}



export const addTrip = (tripInfo, userId) => dispatch => {
    dispatch({type: ADD_TRIP_START});

   return axios.post(`http://localhost:5000/api/trips`, tripInfo, {
        headers: {
            Authorization: localStorage.getItem('jwt')
        }
    })
    .then(res => dispatch({
        type: ADD_TRIP_SUCCESS,
    }))
    .catch(err => dispatch({
        type: ADD_TRIP_FAIL,
        payload: err
    }))
}

export const endTrip =  (tripId) => dispatch => {
    dispatch({type: END_TRIP_START});

   return axios.put(`http://localhost:5000/api/trips/${tripId}`, {isCurrent: 0}, {
        headers: {
            Authorization: localStorage.getItem('jwt')
        }
    })
    .then(res => dispatch({
        type: END_TRIP_SUCCESS,
        payload: res.data
    }))
    .catch(err => dispatch({
        type: END_TRIP_FAIL,
        payload: err
    }))
}

export const addNewPerson = personInfo => dispatch => {
    console.log("Add new person in actions fired")
    dispatch({type: ADD_NEW_PERSON_START})

    axios.post(`http://localhost:5000/api/usertrips/add-participant`, personInfo, {
        headers: {
            Authorization: localStorage.getItem('jwt')
        }
    })
    .then(res => dispatch({
        type: ADD_NEW_PERSON_SUCCESS,
        payload: res.data
    }))
    .catch(err => dispatch({
        type: ADD_NEW_PERSON_FAIL,
        payload: err
    }))

}