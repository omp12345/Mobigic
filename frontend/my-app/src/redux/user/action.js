import axios from "axios";
import { Registe_request, Register_faliure, Register_success } from "./actionTypes";
import { url } from "../../url";


export const register = (userData) => (dispatch) => {
dispatch({type:Registe_request})
 return axios.post(`${url}/api/user/register`,userData)
.then((res)=>{
    console.log(res.data)
  dispatch({type:Register_success, payload:res.data})
})
.catch((err)=> {
  dispatch({type:Register_faliure})
})
};