import {  Delete_Sucsee, File_FAILURE, File_REQUEST, GET_File_SUCCESS, Post_File_SUCCESS, Registe_request, Register_faliure, Register_success } from "./actionTypes";

const initState = {
    isLoading: false,
  isError: false,
 result:[],
  data:[]
}
 

 export const reducer = (state = initState, {type,payload})=> {
switch(type){
    case File_REQUEST:
        return {...state, isLoading:true}
        case Post_File_SUCCESS:
            return {...state, isLoading:false,  data:payload}  
            case File_FAILURE:
                return {...state, isLoading:false, isError:true}
                case GET_File_SUCCESS:
                return {...state, isLoading:false,  result:payload}
                case Delete_Sucsee:
                    return {...state, isLoading:false,  }
    default:
        return state;
}
 }