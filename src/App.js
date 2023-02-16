import React from "react";
import LoginForm from "./Component/Login/login";
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Component/Home/home"
import { SignUp } from "./Component/Register/register";
import { AuthProvider } from "./Component/Context/authContext";

const App = () => {
  return (
    <div className=" p-5 bg-gradient-to-b from-green-400">
       <AuthProvider>
       <Routes>
       <Route path="/" element={<LoginForm/>}/> 
       <Route path="/signUp" element={<SignUp/>}/>
       <Route path="/home" element={<Home/>}/> 
      </Routes>
      </AuthProvider>
    </div>
  );
};



export default App;
