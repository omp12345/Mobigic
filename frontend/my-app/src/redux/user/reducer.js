import {  Registe_request, Register_faliure, Register_success } from "./actionTypes";

const initState = {
    isLoading: false,
  isError: false,
 
  data:[]
}
 

 export const reducer = (state = initState, {type,payload})=> {
switch(type){
    case Registe_request:
        return {...state, isLoading:true}
        case Register_success:
            return {...state, isLoading:false,  data:payload}  
            case Register_faliure:
                return {...state, isLoading:false, isError:true}
    default:
        return state;
}
 }