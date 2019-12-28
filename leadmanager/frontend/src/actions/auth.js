import axios from "axios";
import {returnErrors} from "./messages";
import {USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_FAIL, LOGIN_SUCCESS} from "./types";


export const LoadUser= () => (dispatch, getState) => {


    dispatch({type: USER_LOADING});

    const token = getState().auth.token;

    const config = {

        headers: {
            'Content-Type': 'application/json'
        }
    };
    if (token){
        config.headers['Authorization'] = `Token ${token}`;
    }
    axios.get('/api/auth/user', config)
        .then(res =>{
            dispatch({
                type: USER_LOADED,
                payload:res.data
            })
                .catch(err =>returnErrors(err.response.data, err.response.status)
                );
                dispatch({
                    type:AUTH_ERROR
                });
        });
};


export const login = (username, password) => dispatch => {

    const config = {

        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = JSON.stringify({username, password});

    axios.post('/api/auth/login',body, config)
        .then(res =>{
            dispatch({
                type: LOGIN_SUCCESS,
                payload:res.data
            })
                .catch(err =>returnErrors(err.response.data, err.response.status)
                );
                dispatch({
                    type:LOGIN_FAIL
                });
        });
};