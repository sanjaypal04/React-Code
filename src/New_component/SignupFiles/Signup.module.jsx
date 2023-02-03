import React, { useState } from "react";
import './SignupStyle.css'
function Signup()
{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [email, setEmail] = useState("");
    return(
        <>
            <div className="signup-main">
                <section className="card signup-card">
                    <form className="signup-form">
                        <div className="form-group signup-form-group">
                            <span className="signup-span ">Name:</span>
                            <input className="name-input form-control" type='text' value={username} onChange={event=> setUsername(event.target.value)} />
                        </div>
                        <div className="form-group signup-form-group">
                            <span className="signup-span">Email</span>
                            <input className="signup-email-input form-control" type='email' value={email} onChange={event => setEmail(event.target.value)}/>
                        </div>
                        <div className="form-group signup-form-group">
                            <span className="signup-span">Password:</span>
                            <input className="form-control " type='password' value={password} onChange={event => setPassword(event.target.value)}/>
                        </div>
                        <div className="form-group signup-form-group">
                            <span className="signup-span">Confirm Password:</span>
                            <input className="form-control" type='password' value={cpassword} onChange={event => setCpassword(event.target.value)}/>
                        </div>
                        <button type="submit" class="btn btn-primary signup-btn">Sign up</button>
                    </form>
                </section>
            </div>
            
        </>
    )
}
export default Signup