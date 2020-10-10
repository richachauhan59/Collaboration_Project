import {USER_LOGIN_FAILURE, USER_LOGIN_SUCCESS, USER_LOGIN_REQUEST} from "./actionTypes";

const initState = {
    error:"",
    response:""
};

const reducer = (state=initState, {type, payload}) => {
    switch(type){
        case USER_LOGIN_REQUEST:
            return{
                ...state,
                error:false
            }
        case USER_LOGIN_SUCCESS:
            return{
                ...state,
                error:false,
                response:payload
            }
        case USER_LOGIN_FAILURE:
            return{
                ...state,
                error:true,
                response:payload
            }
        default:
            return state
    }
};

export default reducer;