import React from "react";
import { Route, Routes } from "react-router-dom";
// import { Homepage } from "./Homepage";

import Homepage from "./Homepage";
import { Register } from "./Register";
import { Login } from "./Login";
import Upload from "./Upload";


export const MainRoutes = () => {
  return <Routes>
    <Route path="/" element={<Homepage />}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register />}/>
    <Route path="/file" element={<Upload />}/>
  </Routes>;
};