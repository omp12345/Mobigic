import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Register.css"



import { useLocation, useNavigate } from "react-router-dom";
import { register  } from "../redux/user/action";

export const Register = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const data=useSelector((state)=>{
    
    return state.userReducer.data
  })
  console.log(data)
  
const dispatch = useDispatch()
const navigate = useNavigate()

const handleclick = () => {
    navigate("/login");
  };
  
  
const handleSubmit = (e) => {
    e.preventDefault()
   
        let user = {
            username,password
          }
          dispatch(register(user))
    alert("user register succsesfully")
  
  
  setUsername("")
  setPassword("")
}

  return (
    <div className="registration-container">
        <form action="" onSubmit={handleSubmit}>
      <h2>Registration</h2>
     
      <div>
          <label htmlFor="username">Username:</label>
          <br />
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e)=>{
                setUsername(e.target.value)
            }}
            placeholder="username"
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
          <button type="submit">Register</button>
          <button
            onClick={handleclick}
            style={{ color: "teal" }}
            type="submit"
            className="login-button"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
