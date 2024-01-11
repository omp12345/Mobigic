import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Navbar.css"
import axios from 'axios';
import { useSelector } from 'react-redux';
import { url } from '../url';


function Navbar() {
    const navigate=useNavigate()
    const token = localStorage.getItem("token");
      console.log(token);


 
  const handlelogout = async () => {
    
    try {
      
     
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.get(`${url}/api/user/logout`, {
        headers: headers,
      });

      if (response.status === 200) {
       localStorage.removeItem("token")
        navigate('/login'); 
        alert('User Logout');
      } else {
        console.error('Logout failed.');
      }
    } catch (error) {
      console.error('An error occurred:', error.message);
    }
  };


     
   

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
         {<Link to="/file">{token?"upload_file":null}</Link>
          
          } 
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
       
       
        {localStorage.getItem("token")? (
            <Link onClick={handlelogout} to="#">
              Logout
            </Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        
      </ul>
    </nav>
  );
}

export default Navbar;
