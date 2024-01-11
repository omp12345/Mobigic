import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Login.css"


import {  useNavigate } from "react-router-dom";
import { login } from "../redux/authReducer/action";


export const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  
const dispatch = useDispatch()

const navigate = useNavigate()

const handleclick = () => {
    navigate("/register");
  };

const handleSubmit = (e) => {
    e.preventDefault()
  let user = {
    username,password
  }
  dispatch(login(user)).then((res)=>{
    navigate("/file")
  })
 
  
  setUsername("")
  setPassword("")
}

  return (
    <div className="login-container">
        <form action="" onSubmit={handleSubmit}>
      <h2>Login Form</h2> 
     
      <div>
          <label htmlFor="username">Username:</label>
          <br />
          <input
        placeholder="username"
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e)=>{
                setUsername(e.target.value)
            }}
            
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <br />
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            placeholder="password"
          />
         
        </div>
        <div className="om">
          <button type="submit">Login</button>
          <button
            onClick={handleclick}
            style={{ color: "teal" }}
            type="submit"
            className="login-button"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

