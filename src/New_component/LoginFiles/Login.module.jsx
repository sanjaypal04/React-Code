import React, { useState } from "react";
import App from "../../App";
import './LoginStyle.css'
import { Outlet, Link } from "react-router-dom";
import DataPart from "../DataPart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState("false")
  
  
  const handleSubmit = (event) => {
    event.preventDefault();
    {(username === "s@k.p" && password ==="123") && setFlag("true")}
    // {username === 's@k.p' && <DataPart />}
     
  };

  return (
    <>
    <div className="Login-main">
        <section className="card login-card">
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="sign-form-group form-group">
              <label className="name-text" htmlFor="username">Username:</label>
              <input className="form-control input-field" type="email" id="username" value={username} onChange={event => setUsername(event.target.value)}/>
            </div>
            <div className="sign-form-group form-group">
              <label className="password-text" htmlFor="password">Password:</label>
              <input className="form-control" type="password" id="password" value={password} onChange={event => setPassword(event.target.value)}/>
            </div>
            <button type="submit" class="btn btn-primary login-btn" onClick={handleSubmit} >Login</button>
            {flag === "true" && <Link className="confirm" to="/datapart">Cofirm</Link> }
            <div className="signup-text">
                  <Link className="create-acc" to="/signup">"Don't have an account? Sign Up"</Link> 
                  {/* <Link to="/datapart">Data</Link>  */}
            </div>
          </form>
        </section>
        <Outlet />
      </div>
    </>
  );
};

export default Login;
