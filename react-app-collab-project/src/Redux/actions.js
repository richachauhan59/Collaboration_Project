import {USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAILURE} from "./actionTypes";
import { v4 as uuid } from "uuid";

export const registerRequest = (payload) => {
    return{
        type:USER_REGISTER_REQUEST,
        payload
    }  
};

export const registerSuccess = (payload) => {
    return{
        type:USER_REGISTER_SUCCESS,
        payload
    }
};

export const registerFailure = (payload) => {
    return{
        type:USER_REGISTER_FAILURE,
        payload
    }
};

export const registerUser = (payload) => (dispatch) => {
    dispatch(registerRequest(payload));
    return axios
        .post("http://localhost:3000/users", {

        })
}