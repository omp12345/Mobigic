 
  
import axios from "axios";

import { Delete_Sucsee, Download, File_FAILURE, File_REQUEST, GET_File_SUCCESS, Post_File_SUCCESS } from "./actionTypes";
import { url } from "../../url";
import { useParams } from "react-router-dom";



// ADD file action

export const addfile = (file) => (dispatch) => {
    console.log(file)
    const token = localStorage.getItem("token");
    console.log(token)
      const headers = {
        Authorization: `Bearer ${token}`,
      };
dispatch({type:File_REQUEST})
 return axios.post(`https://perfect-pear-dibbler.cyclic.app/uploadfiles/upload`,file,{
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

// getall file from user
export const getFile = () => (dispatch) => {
    const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
dispatch({type:File_REQUEST})
 return axios.get(`https://perfect-pear-dibbler.cyclic.app/uploadfiles/`,{
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


// delete file
export const download_file = (private_code,id) => (dispatch) => {
    console.log(private_code,id)
    const token = localStorage.getItem("token");
    console.log(token)
      const headers = {
        Authorization: `Bearer ${token}`,
      };
dispatch({type:File_REQUEST})
 return axios.get(`$https://perfect-pear-dibbler.cyclic.app/uploadfiles/delete/${id}/${private_code}`,{
    headers:headers 
 })
.then((res)=>{
dispatch({type:Download})
  
})
.catch((err)=> {
  dispatch({type:File_FAILURE})
})
};
// dowounload file
export const delete_file = (id) => (dispatch) => {
    
    const token = localStorage.getItem("token");
    console.log(token)
      const headers = {
        Authorization: `Bearer ${token}`,
      };
dispatch({type:File_REQUEST})
 return axios.delete(`https://perfect-pear-dibbler.cyclic.app/uploadfiles/delete/${id}`,{
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