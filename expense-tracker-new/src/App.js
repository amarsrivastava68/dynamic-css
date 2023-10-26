import React from "react";
import {  Routes , Router , Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import AuthContext from "./store/auth-context";
import Home from "./pages/Home";
import { useContext } from "react";

function App() {
  const authCtx = useContext(AuthContext);
return (
  
    <Routes>
      <Route path="/"  element={<LoginPage />} />
      <Route path="/home" element={authCtx.isLoggedIn ? <Home /> : <LoginPage/>} />
      
    </Routes>


)
}
export default App;