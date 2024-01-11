 
  
import axios from "axios";

import { Delete_Sucsee, File_FAILURE, File_REQUEST, GET_File_SUCCESS, Post_File_SUCCESS } from "./actionTypes";
import { url } from "../../url";



export const addfile = (file) => (dispatch) => {
    console.log(file)
    const token = localStorage.getItem("token");
    console.log(token)
      const headers = {
        Authorization: `Bearer ${token}`,
      };
dispatch({type:File_REQUEST})
 return axios.post(`${url}/uploadfiles/upload`,file,{
    headers:headers 
 })
.then((res)=>{
console.log(res.data)
  dispatch({type:Post_File_SUCCESS, payload:res.data})
  
  dispatch({type:GET_File_SUCCESS,payload:res.data})
})
.catch((err)=> {
  dispatch({type:File_FAILURE})
})
};
export const getFile = () => (dispatch) => {
    const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
dispatch({type:File_REQUEST})
 return axios.get(`${url}/uploadfiles/`,{
    headers:headers 
 })
.then((res)=>{
console.log(res.data)
  
  
  dispatch({type:GET_File_SUCCESS,payload:res.data})
})
.catch((err)=> {
  dispatch({type:File_FAILURE})
})
};

export const delete_file = (id) => (dispatch) => {
   
    const token = localStorage.getItem("token");
    console.log(token)
      const headers = {
        Authorization: `Bearer ${token}`,
      };
dispatch({type:File_REQUEST})
 return axios.delete(`${url}/uploadfiles/delete/${id}`,{
    headers:headers 
 })
.then((res)=>{
dispatch({type:Delete_Sucsee})
  getFile()
})
.catch((err)=> {
  dispatch({type:File_FAILURE})
})
};