import {USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE} from "./actionTypes";
import { v4 as uuid } from "uuid";

export const loginRequest = (payload) => {
    return{
        type:USER_LOGIN_REQUEST,
        payload
    }  
};

export const loginSuccess = (payload) => {
    return{
        type:USER_LOGIN_SUCCESS,
        payload
    }
};

export const loginFailure = (payload) => {
    return{
        type:USER_LOGIN_FAILURE,
        payload
    }
};

export const loginUser = (payload) => (dispatch) => {
    dispatch(loginRequest(payload));
    return axios
        .post("http://localhost:3000/users", {

        })
}