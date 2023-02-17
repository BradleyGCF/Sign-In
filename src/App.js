import React from "react";
import LoginForm from "./Component/Login/login";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home/home";
import { SignUp } from "./Component/Register/register";
import { AuthProvider } from "./Component/Context/authContext";
import { ProtectedRoute } from "./Component/ProtectedRoute/protectedRoute";

const App = () => {
  return (
    <div className=" p-5 bg-gradient-to-b from-green-400">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;