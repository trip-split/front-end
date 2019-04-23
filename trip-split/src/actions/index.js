import axios from 'axios'

export const REGISTER_START = "REGISTER_START"
export const REGISTER_SUCCESS = "REGISTER_SUCCESS"
export const REGISTER_FAIL = "REGISTER_FAIL"

export const register = credentials => dispatch => {
    dispatch({type: REGISTER_START })

    axios.post('http://localhost:5000/api/register', credentials)
    .then(res => dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
    }))
    .catch(err => dispatch({
        type: REGISTER_FAIL,
        payload: err
    }))
}