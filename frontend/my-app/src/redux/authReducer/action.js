
import axios from "axios";

import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";
import { url } from "../../url";

// auth action 

export const login = (userData) => (dispatch) => {
dispatch({type:LOGIN_REQUEST})
 return axios.post(`https://perfect-pear-dibbler.cyclic.app/api/user/login`,userData)
.then((res)=>{
    console.log(res.data.token)
    localStorage.setItem("token",res.data.token)
  dispatch({type:LOGIN_SUCCESS, payload:res.data.token})
})
.catch((err)=> {
  dispatch({type:LOGIN_FAILURE})
})
};

